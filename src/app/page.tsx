"use client";
import { useState } from "react";
import CartItem from "./cartitem";

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "iPhone 16 pro", price: 39900 },
  { id: 2, name: "iPhone 16", price: 29900 },
  { id: 3, name: "iPhone 16e", price: 26900 },
  { id: 4, name: "iPad", price: 12900 },
  { id: 5, name: "iPad Air", price: 21900 },
  { id: 6, name: "iPad Pro", price: 37900 },
];

export default function Page() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const handleChange = (id: number, value: number) => {
    setCart((prev) => {
      const newQty = Math.max((prev[id] || 0) + value, 0);
      return { ...prev, [id]: newQty };
    });
  };

  const handleReset = () => {
    setCart({});
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1>🛒 ตะกร้าสินค้า</h1>

      <div className="space-y-4">
        {products.map((p) => (
          <CartItem
            key={p.id}
            product={p}
            quantity={cart[p.id] || 0}
            onAdd={() => handleChange(p.id, 1)}
            onRemove={() => handleChange(p.id, -1)}
          />
        ))}
      </div>

      <div className="summary-box">
        <p>จำนวนสินค้ารวมทั้งหมด: <b>{totalItems}</b></p>
        <p>ราคารวมทั้งหมด: <b>{totalPrice.toLocaleString()} บาท</b></p>
        <p>Create by nawaprom phuphaphiw 663450040-2</p>
        <button className="reset-button" onClick={handleReset}>ล้างตะกร้า</button>
      </div>
    </main>
  );
}
