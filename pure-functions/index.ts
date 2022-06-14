// type TProduct = {
//   name: string;
//   price: number;
// };

// type TBasket = {
//   products: TProduct[];
//   totalPrice: number;
//   discount: number;
// };

// const addProduct = (basket: TBasket, newProduct: TProduct) => {
//   basket.products.push(newProduct);
//   basket.totalPrice += newProduct.price;

//   return basket;
// };

const addProduct = (
  { products, totalPrice }: TBasket,
  newProduct: TProduct
): TBasket => {
  return {
    ...basket,
    totalPrice: basket.totalPrice + newProduct.price,
    products: products.concat(newProduct),
  };
};

const basket: TBasket = {
  products: [
    {
      name: "Apple",
      price: 100,
    },
  ],
  totalPrice: 100,
  discount: 0,
};

const product: TProduct = {
  name: "Orange",
  price: 50,
};

console.log(basket);
const updatedBasket = addProduct(basket, product);

console.log(basket);
console.log(updatedBasket);
