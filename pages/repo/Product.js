import axios from 'axios';
import Api from './Api';

class ProductRepo {
  async getProducts(payload, success, failure) {
    try {
      const response = await axios.get(Api.GET_PRODUCTS);
      if (response.status === 200) {
        success(response.data);
      } else {
        failure(error.message);
      }
    } catch (error) {
      failure(error.message);
    }
  }
}

export default ProductRepo;
