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
