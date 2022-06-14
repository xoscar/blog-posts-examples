type TProduct = {
  name: string;
  price: number;
};

type TBasket = {
  products: TProduct[];
  totalPrice: number;
  discount: number;
};

type TProps = {
  basket: TBasket;
};

const Component = ({ basket: { totalPrice, products } }: TProps) => {
  return (
    <div>
      <h1>Total Price: {totalPrice}</h1>
      {products.map(({ name, price }) => (
        <span key={name}>
          {name} - {price}
        </span>
      ))}
    </div>
  );
};
