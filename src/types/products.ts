export type Product = {
  title: string;
  description: string;
  price: number;
  imageURL: string;
  id: string;
  category: "phone" | "laptop" | "headphones";
};
