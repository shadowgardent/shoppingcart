"use client";
type Product = {
  id: number;
  name: string;
  price: number;
};

export default function CartItem({
  product,
  quantity,
  onAdd,
  onRemove,
}: {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="cart-item">
      <div>
        <h2>{product.name}</h2>
        <p>{product.price.toLocaleString()} บาท</p>
      </div>

      <div className="controls">
        <button onClick={onRemove}>–</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
}
