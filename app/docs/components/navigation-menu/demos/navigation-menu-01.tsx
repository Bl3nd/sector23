import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/registry/sector23/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/registry/sector23/ui/navigation-menu";

interface Department {
  label: string;
  columns: { title: string; links: string[] }[];
  featured: { eyebrow: string; title: string; description: string };
}

const departments: Department[] = [
  {
    label: "Women",
    columns: [
      {
        title: "Clothing",
        links: [
          "New Arrivals",
          "Dresses",
          "Tops & Blouses",
          "Knitwear",
          "Jeans",
          "Outerwear",
        ],
      },
      {
        title: "Shoes",
        links: ["Sneakers", "Boots", "Sandals", "Flats", "Heels"],
      },
      {
        title: "Accessories",
        links: ["Bags", "Jewelry", "Hats", "Scarves", "Sunglasses"],
      },
    ],
    featured: {
      eyebrow: "New Season",
      title: "The Autumn Edit",
      description: "Layer-ready knits, tailored coats, and warm neutrals.",
    },
  },
  {
    label: "Men",
    columns: [
      {
        title: "Clothing",
        links: [
          "New Arrivals",
          "T-Shirts",
          "Shirts",
          "Hoodies",
          "Chinos",
          "Jackets",
        ],
      },
      { title: "Shoes", links: ["Sneakers", "Boots", "Loafers", "Running"] },
      {
        title: "Accessories",
        links: ["Watches", "Wallets", "Belts", "Backpacks"],
      },
    ],
    featured: {
      eyebrow: "Best Sellers",
      title: "Everyday Essentials",
      description: "Premium basics built to be worn on repeat.",
    },
  },
  {
    label: "Home",
    columns: [
      {
        title: "Living",
        links: [
          "Throws & Blankets",
          "Cushions",
          "Candles",
          "Vases",
          "Wall Art",
        ],
      },
      {
        title: "Kitchen",
        links: ["Cookware", "Dinnerware", "Glassware", "Linens"],
      },
      { title: "Bedroom", links: ["Bedding", "Pillows", "Robes", "Storage"] },
    ],
    featured: {
      eyebrow: "Limited Collection",
      title: "Slow Living",
      description: "Handcrafted ceramics and linens from small makers.",
    },
  },
];

const collections = [
  {
    title: "Sustainable",
    description: "Made with recycled and organic materials.",
  },
  {
    title: "Workwear",
    description: "Polished pieces for the office and beyond.",
  },
  { title: "Activewear", description: "Performance gear that moves with you." },
  {
    title: "Gift Guide",
    description: "Thoughtful picks for everyone on your list.",
  },
];

export default function NavigationMenu01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <NavigationMenu>
        <NavigationMenuList>
          {departments.map((department) => (
            <NavigationMenuItem key={department.label}>
              <NavigationMenuTrigger render={<Button variant="ghost" />}>
                {department.label}
                <NavigationMenuIcon />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-6 sm:grid-cols-[repeat(3,9rem)_14rem]">
                  {department.columns.map((column) => (
                    <div key={column.title} className="flex flex-col gap-2">
                      <h3 className="px-2 text-xs leading-relaxed font-semibold tracking-wide text-muted-foreground uppercase">
                        {column.title}
                      </h3>
                      <ul className="flex flex-col">
                        {column.links.map((link) => (
                          <li key={link}>
                            <NavigationMenuLink
                              href="#"
                              className="px-2 py-1.5 text-sm"
                            >
                              {link}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <NavigationMenuLink
                    href="#"
                    className="flex flex-col justify-end gap-1 bg-linear-to-br from-secondary to-accent p-4 text-secondary-foreground hover:opacity-90"
                  >
                    <span className="text-xs font-semibold tracking-wide uppercase opacity-70">
                      {department.featured.eyebrow}
                    </span>
                    <span className="font-serif text-lg font-semibold">
                      {department.featured.title}
                    </span>
                    <span className="text-sm opacity-80">
                      {department.featured.description}
                    </span>
                    <span className="mt-2 flex items-center gap-1 text-sm font-medium">
                      Shop now <ArrowRightIcon className="size-4" />
                    </span>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuTrigger render={<Button variant="ghost" />}>
              Collections
              <NavigationMenuIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 sm:w-md sm:grid-cols-2">
                {collections.map((collection) => (
                  <li key={collection.title}>
                    <NavigationMenuLink
                      href="#"
                      className="flex flex-col gap-1 p-3"
                    >
                      <span className="text-sm font-medium">
                        {collection.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {collection.description}
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className="flex h-9 items-center px-2 text-sm font-medium text-accent-foreground"
            >
              Sale
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuPortal>
          <NavigationMenuPositioner
            collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
            collisionAvoidance={{ side: "none" }}
          >
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenu>
    </div>
  );
}
