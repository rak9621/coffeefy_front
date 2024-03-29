var baseUrl;

baseUrl = "https://coffefy-bakend.vercel.app/app/v1"

console.log(baseUrl);

const ApiConstants = {
  LOGIN: `${baseUrl}/login`,
  SIGNUP: `${baseUrl}/register`,
  RESET_PASSWORD: `${baseUrl}/reset-password`,
  FORGET_PASSWORD: `${baseUrl}/password/forgot`,
  ALL_PRODUCT:`${baseUrl}/products`,
  PRODUCT_BY_ID:`${baseUrl}/products`,
  ADD_TO_CART:`${baseUrl}/cart`,
  GET_ALL_CART_PROD:`${baseUrl}/cart`,
  REMOVE_TO_CART:`${baseUrl}/cart/`
};
export default ApiConstants;
