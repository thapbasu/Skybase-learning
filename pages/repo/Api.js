class Api {
  static API_URL = process.env.API_URL;
  static GET_PRODUCTS = `${Api.API_URL}/products`;
}

export default Api;
