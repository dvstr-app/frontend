import { Card } from "@/lib/types";
// import { fetchCards } from "./cards";
import FlashCard from "@/components/Cards/FlashCard";

const CardsIndex = async () => {
  // const cards = await fetchCards();
  const cards: Card[] = []

  return (
    <div className="w-full flex flex-col gap-8 mt-12">
      <p className="text-center text-3xl font-medium">
        Welcome to the flash cards app
      </p>
      <div className="flex flex-wrap gap-8">
        {cards.length ? (
          cards.map((card: Card) => <FlashCard key={card.id} card={card} />)
        ) : (
          <p className="w-full text-lg text-center">No cards to display :(</p>
        )}
      </div>
    </div>
  );
};

export default CardsIndex;
