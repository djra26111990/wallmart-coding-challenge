import Axios from "axios";

export default {
  getAllProducts: async (fetchUrl) => await Axios(`${fetchUrl}`)
};
