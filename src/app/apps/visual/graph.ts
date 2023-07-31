const projectGraph = {
  name: "../shalfey/frontend/src/",
  children: [
    {
      name: "../shalfey/frontend/src/",
      children: [
        {
          name: "../shalfey/frontend/src//app",
          children: [
            {
              name: "../shalfey/frontend/src//app/(accounts)",
              children: [
                {
                  name: "../shalfey/frontend/src//app/(accounts)/account",
                  children: [
                    { name: "layout.tsx" },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/account/login",
                      children: [{ name: "page.tsx" }],
                    },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/account/profile",
                      children: [
                        {
                          name: "../shalfey/frontend/src//app/(accounts)/account/profile/address",
                          children: [
                            { name: "AddressCard.tsx" },
                            { name: "AddressCardDialog.tsx" },
                            { name: "page.tsx" },
                          ],
                        },
                        { name: "layout.tsx" },
                        { name: "loading.tsx" },
                        {
                          name: "../shalfey/frontend/src//app/(accounts)/account/profile/orders",
                          children: [{ name: "page.tsx" }],
                        },
                        { name: "page.tsx" },
                        {
                          name: "../shalfey/frontend/src//app/(accounts)/account/profile/settings",
                          children: [{ name: "page.tsx" }],
                        },
                      ],
                    },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/account/signup",
                      children: [{ name: "page.tsx" }],
                    },
                  ],
                },
                {
                  name: "../shalfey/frontend/src//app/(accounts)/vendor",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/vendor/advertise",
                      children: [{ name: "page.tsx" }],
                    },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/vendor/dashboard",
                      children: [
                        { name: "page.tsx" },
                        { name: "ProductSelector.tsx" },
                        { name: "RubricSelector.tsx" },
                        { name: "SalesChart.tsx" },
                        { name: "TimePeriodSelector.tsx" },
                        { name: "VisitorsChart.tsx" },
                      ],
                    },
                    { name: "layout.tsx" },
                    { name: "loading.tsx" },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/vendor/orders",
                      children: [{ name: "page.tsx" }],
                    },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/vendor/products",
                      children: [{ name: "page.tsx" }],
                    },
                    {
                      name: "../shalfey/frontend/src//app/(accounts)/vendor/settings",
                      children: [{ name: "page.tsx" }],
                    },
                    { name: "VendorHeader.tsx" },
                  ],
                },
              ],
            },
            {
              name: "../shalfey/frontend/src//app/(groups)",
              children: [
                {
                  name: "../shalfey/frontend/src//app/(groups)/categories",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(groups)/categories/[category_slug]",
                      children: [{ name: "page.tsx" }],
                    },
                  ],
                },
                {
                  name: "../shalfey/frontend/src//app/(groups)/diseases",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(groups)/diseases/[disease_slug]",
                      children: [{ name: "page.tsx" }],
                    },
                  ],
                },
                {
                  name: "../shalfey/frontend/src//app/(groups)/herbsets",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(groups)/herbsets/[herbset_slug]",
                      children: [{ name: "page.tsx" }],
                    },
                  ],
                },
              ],
            },
            {
              name: "../shalfey/frontend/src//app/(pages)",
              children: [
                {
                  name: "../shalfey/frontend/src//app/(pages)/checkout",
                  children: [
                    { name: "CheckoutForm.tsx" },
                    { name: "page.tsx" },
                  ],
                },
                {
                  name: "../shalfey/frontend/src//app/(pages)/home",
                  children: [{ name: "page.tsx" }],
                },
                {
                  name: "../shalfey/frontend/src//app/(pages)/liked",
                  children: [{ name: "page.tsx" }],
                },
              ],
            },
            {
              name: "../shalfey/frontend/src//app/(products)",
              children: [
                {
                  name: "../shalfey/frontend/src//app/(products)/products",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(products)/products/[product_slug]",
                      children: [{ name: "page.tsx" }],
                    },
                  ],
                },
                {
                  name: "../shalfey/frontend/src//app/(products)/vendors",
                  children: [
                    {
                      name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]",
                      children: [
                        {
                          name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]/(index)",
                          children: [
                            {
                              name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]/(index)/blog",
                              children: [{ name: "page.tsx" }],
                            },
                            { name: "layout.tsx" },
                            { name: "page.tsx" },
                            {
                              name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]/(index)/products",
                              children: [{ name: "page.tsx" }],
                            },
                          ],
                        },
                        {
                          name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]/products",
                          children: [
                            {
                              name: "../shalfey/frontend/src//app/(products)/vendors/[vendor_slug]/products/[product_slug]",
                              children: [{ name: "page.tsx" }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "../shalfey/frontend/src//app/api",
              children: [{ name: "route.ts" }],
            },
            { name: "build.css" },
            { name: "favicon.ico" },
            { name: "globals.css" },
            { name: "layout.tsx" },
            { name: "loading.tsx" },
            { name: "page.tsx" },
          ],
        },
        {
          name: "../shalfey/frontend/src//components",
          children: [
            {
              name: "../shalfey/frontend/src//components/Buttons",
              children: [
                { name: "AddToCartBtn.tsx" },
                { name: "AddToLikedBtn.tsx" },
                { name: "QtyButton.tsx" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/common",
              children: [
                { name: "Dropdown.tsx" },
                { name: "RatingStars.tsx" },
                { name: "Toaster.tsx" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/Footer",
              children: [
                { name: "Footer.module.css" },
                { name: "Footer.tsx" },
                { name: "index.ts" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/Loaders",
              children: [{ name: "Spinner.tsx" }],
            },
            {
              name: "../shalfey/frontend/src//components/Navbar",
              children: [
                { name: "AuthMenu.tsx" },
                { name: "BurgerButton.tsx" },
                {
                  name: "../shalfey/frontend/src//components/Navbar/buttons",
                  children: [{ name: "Cart.tsx" }, { name: "Liked.tsx" }],
                },
                {
                  name: "../shalfey/frontend/src//components/Navbar/icons",
                  children: [
                    { name: "bagIcon.svg" },
                    { name: "closeIocn.svg" },
                    { name: "menuIcon.svg" },
                    { name: "spyglassIcon.svg" },
                    { name: "userIcon.svg" },
                  ],
                },
                { name: "index.ts" },
                {
                  name: "../shalfey/frontend/src//components/Navbar/Menu",
                  children: [
                    { name: "UserMenu.tsx" },
                    { name: "VendorMenu.tsx" },
                  ],
                },
                { name: "Navbar.module.css" },
                { name: "Navbar.tsx" },
                { name: "NavIconButton.tsx" },
                { name: "NavMenu.tsx" },
                { name: "UserAccountNavMenu.tsx" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/Product",
              children: [
                { name: "ProductCard.tsx" },
                { name: "ProductDetail.tsx" },
                { name: "ProductList.tsx" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/Review",
              children: [
                { name: "RateReviewButton.tsx" },
                { name: "ReviewCard.tsx" },
              ],
            },
            {
              name: "../shalfey/frontend/src//components/ui",
              children: [{ name: "Toast.tsx" }],
            },
          ],
        },
        {
          name: "../shalfey/frontend/src//lib",
          children: [
            { name: "api.js" },
            {
              name: "../shalfey/frontend/src//lib/auth",
              children: [
                { name: "AuthProvider.tsx" },
                { name: "getUser.ts" },
                { name: "login.ts" },
                { name: "logout.ts" },
                { name: "signup.ts" },
                { name: "verify.ts" },
              ],
            },
            { name: "const.ts" },
            { name: "getMenu.ts" },
            { name: "getVariants.ts" },
            {
              name: "../shalfey/frontend/src//lib/hooks",
              children: [
                { name: "useClickOustide.js" },
                { name: "useToast.ts" },
              ],
            },
            { name: "paths.tsx" },
            {
              name: "../shalfey/frontend/src//lib/store",
              children: [
                {
                  name: "../shalfey/frontend/src//lib/store/features",
                  children: [
                    { name: "cartSlice.ts" },
                    { name: "likedSlice.ts" },
                    { name: "userSlice.ts" },
                  ],
                },
                { name: "loadFromLocalstorage.ts" },
                { name: "store.ts" },
                { name: "StoreProvider.tsx" },
              ],
            },
            { name: "types.tsx" },
            { name: "utils.ts" },
          ],
        },
        {
          name: "../shalfey/frontend/src//pages",
          children: [
            {
              name: "../shalfey/frontend/src//pages/api",
              children: [
                {
                  name: "../shalfey/frontend/src//pages/api/auth",
                  children: [],
                },
                { name: "[...path].ts" },
              ],
            },
          ],
        },
        { name: "../shalfey/frontend/src//styles", children: [] },
      ],
    },
  ],
};

export default projectGraph;
