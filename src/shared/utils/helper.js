export const getExtras = (extras) => {
  if (extras.length === 0) return { extrasTitle: "", extrasPrice: 0 };
  let extrasArr = [];
  let extrasPriceArr = [];

  for (let i = 0; i < extras.length; i++) {
    extrasArr.push(extras[i].title);
    extrasPriceArr.push(extras[i].price);
  }

  let extrasTitle = extrasArr.reduce((cur, sum) => {
    return cur + " + " + sum;
  });

  let extrasPrice = extrasPriceArr.reduce((cur, sum) => cur + sum, 0);

  return { extrasTitle, extrasPrice };
};

let priceArr = [];
export const calculateTotalPrice = (cart) => {
  if (cart.length === 0) {
    return 0;
  }

  for (let i = 0; i < cart.length; i++) {
    priceArr.push(cart[i].price);
    cart[i].extras.forEach((item) => priceArr.push(item.price));
  }

  const totalPrice = priceArr.reduce(
    (cur, sum) => (cur * 10 + sum * 10) / 10,
    0
  );
  priceArr = [];
  return totalPrice;
};

export const formatDate = (dt) => {
  const date = new Date(dt).toLocaleDateString("en-En", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });

  return date;
};
