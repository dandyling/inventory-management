export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  categoryId: string;
  categoryName: string;
  imageUrl?: string;
}

const products: Product[] = [
  {
    id: "RHEN1",
    name: "Ruhi - Book 1",
    price: 5,
    quantity: 65,
    categoryId: "RHEN",
    categoryName: "Ruhi Book (EN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/BK%201.png?alt=media&token=1b5fa6f0-ec62-4176-abdc-bbb4b16f00f2",
  },
  {
    id: "RHEN2",
    name: "Ruhi - Book 2",
    price: 5,
    quantity: 50,
    categoryId: "RHEN",
    categoryName: "Ruhi Book (EN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/BK%202.png?alt=media&token=d6b094f2-7911-405c-afa3-924ec4fc5f63",
  },
  {
    id: "RHEN3",
    name: "Ruhi - Book 3 G1",
    price: 14,
    quantity: 71,
    categoryId: "RHEN",
    categoryName: "Ruhi Book (EN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/RHEN-Ruhi%20-%20Bk%203%20Grade%201%20(New%20Edition)-4pwSQYfC7qb2GMz2Pvv8-img?alt=media&token=0fd1a581-b3fe-4502-a0a6-9bbb3c8d6ce0",
  },
  {
    id: "RHMY1",
    name: "Ruhi - Book 1",
    price: 5,
    quantity: 16,
    categoryId: "RHMY",
    categoryName: "Ruhi Book (MY)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/BM%20BK%201.png?alt=media&token=d0d94f4c-ce0c-459c-9131-975587941662",
  },
  {
    id: "RHMY2",
    name: "Ruhi - Book 2",
    price: 5,
    quantity: 17,
    categoryId: "RHMY",
    categoryName: "Ruhi Book (MY)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/BM%20BK%202.png?alt=media&token=67952245-3413-4767-87c3-befaa3e978f6",
  },
  {
    id: "RHMY3",
    name: "Ruhi - Book 3 G1",
    price: 15,
    quantity: 25,
    categoryId: "RHMY",
    categoryName: "Ruhi Book (MY)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/BM%20BK%203.png?alt=media&token=4706950a-58ac-46e9-b447-d3ee89feeb2f",
  },
  {
    id: "RHCN1",
    name: "Ruhi - Book 1",
    price: 6,
    quantity: 20,
    categoryId: "RHCN",
    categoryName: "Ruhi Book (CN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/Ruhi%20-%20Book%201-img?alt=media&token=1140db06-e74f-4740-a2fe-2fa9bbe1798e",
  },
  {
    id: "RHCN2",
    name: "Ruhi - Book 2",
    price: 6,
    quantity: 20,
    categoryId: "RHCN",
    categoryName: "Ruhi Book (CN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/RHCN-Ruhi%20-%20Book%202%20(New%20Edition)-xmOXnJmczfrJz8WJSiB0-img?alt=media&token=42122ad6-1708-4855-bc4e-d026e915c848",
  },
  {
    id: "RHCN3",
    name: "Ruhi - Book 3 G1",
    price: 8,
    quantity: 32,
    categoryId: "RHCN",
    categoryName: "Ruhi Book (CN)",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/training-institute-01.appspot.com/o/Ruhi%20-%20Book%203%20G1-img?alt=media&token=28a3f982-9e11-426e-b274-cf26e69628c9",
  },
];

export const useProducts = () => {
  return products;
};
