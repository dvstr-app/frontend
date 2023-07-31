"use client";

import { ChatRequest, FunctionCallHandler } from "ai";
import { useChat } from "ai/react";

const functionalCallHandler: FunctionCallHandler = async (
  chatMessages,
  functionCall
) => {
  if (functionCall.name === "get_current_weather") {
    if (functionCall.arguments) {
      const parsedFunctionCallArguments = JSON.parse(functionCall.arguments);
      // You now have access to the parsed arguments here (assuming the JSON was valid)
      // If JSON is invalid, return an appropriate message to the model so that it may retry?
      console.log(parsedFunctionCallArguments);
    }

    // Generate a fake temperature
    const temperature = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    // Generate random weather condition
    const weather = ["sunny", "cloudy", "rainy", "snowy"][
      Math.floor(Math.random() * 4)
    ];

    const functionResponse: ChatRequest = {
      messages: [
        ...chatMessages,
        {
          id: "123456",
          name: "get_current_weather",
          role: "function" as const,
          content: JSON.stringify({
            temperature,
            weather,
            info: "This data is randomly generated and came from a fake weather API!",
          }),
        },
      ],
    };
    return functionResponse;
  }
};

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    experimental_onFunctionCall: functionalCallHandler,
  });

  return (
    <div className="relative p-4 bg-blue-100/50 flex items-center w-full mt-12 mx-auto border">
      <div className="flex flex-col h-full gap-2 text-lg">
        {messages.length > 0
          ? messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))
          : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <textarea
          className="max-w-xl w-full h-24 p-2 border-2 border-gray-300 rounded "
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button
          className="absolute p-2 border border-blue-500 rounded right-1/3 top-1/2 hover:bg-blue-500 hover:text-white duration-150 text-lg font-semibold"
          type="submit"
        >
          {">"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
