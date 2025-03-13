export type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  releaseDate: string;
};

export type Order = {
  id: number;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: string;
};

export const employeeData: Employee[] = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "Engineering", hireDate: "2020-05-15", salary: 80000 },
  { id: 2, name: "Jane Smith", position: "Product Manager", department: "Product", hireDate: "2018-03-22", salary: 95000 },
  { id: 3, name: "Mark Johnson", position: "UX Designer", department: "Design", hireDate: "2019-11-10", salary: 75000 },
  { id: 4, name: "Sara Williams", position: "Data Scientist", department: "Engineering", hireDate: "2021-02-08", salary: 105000 },
  { id: 5, name: "Chris Davis", position: "Marketing Specialist", department: "Marketing", hireDate: "2017-09-17", salary: 65000 }
];

export const productData: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 45, releaseDate: "2023-01-10" },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, stock: 120, releaseDate: "2022-08-25" },
  { id: 3, name: "Shoes", category: "Footwear", price: 100, stock: 200, releaseDate: "2021-12-05" },
  { id: 4, name: "Watch", category: "Accessories", price: 300, stock: 60, releaseDate: "2022-05-18" },
  { id: 5, name: "T-shirt", category: "Clothing", price: 20, stock: 500, releaseDate: "2023-03-02" }
];

export const orderData: Order[] = [
  { id: 101, customerName: "Alice Brown", orderDate: "2025-03-01", totalAmount: 150.5, status: "Shipped" },
  { id: 102, customerName: "Bob Green", orderDate: "2025-02-25", totalAmount: 300, status: "Pending" },
  { id: 103, customerName: "Charlie White", orderDate: "2025-03-03", totalAmount: 79.99, status: "Delivered" },
  { id: 104, customerName: "Diana Black", orderDate: "2025-03-04", totalAmount: 220, status: "Shipped" },
  { id: 105, customerName: "Eve Gray", orderDate: "2025-03-02", totalAmount: 410, status: "Pending" }
];

