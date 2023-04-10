import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async () => {
  const lodedProducts = await fetch("products.json");
  const products = await lodedProducts.json();

  const storedCart = getShoppingCart();
  // console.log(storedCart);

  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductLoaders;
