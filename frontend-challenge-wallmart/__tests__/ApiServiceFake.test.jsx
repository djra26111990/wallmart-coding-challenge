import ApiService from "../services";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
require("dotenv").config();

const fetchUrl = process.env.VITE_URL_BACKEND;

describe("Test service request axios with fake call", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("Api Service must be defined", () => {
    expect(ApiService).toBeDefined();
  });

  it("Call request with fake 200 response", async () => {
    const products = [
      {
        id: 18,
        brand: "asdfdsa",
        description: "zdczs omedat",
        image: "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        price: 849666,
        discountPrice: 424833,
        procentageDiscount: "50",
        isPalindrome: true,
      },
      {
        id: 586,
        brand: "asdfdsa",
        description: "zdczs omedat",
        image: "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        price: 849666,
        discountPrice: 424833,
        procentageDiscount: "50",
        isPalindrome: false,
      },
      {
        id: 58623,
        brand: "adasdsdfdsa",
        description: "zdczs omedat",
        image: "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        price: 849666,
        discountPrice: 424833,
        procentageDiscount: "50",
        isPalindrome: false,
      },
    ];

    mock.onGet(fetchUrl).reply(200, products);

    const resultData = await ApiService.getAllProducts(fetchUrl);
    expect(resultData.data).toEqual(products);
  });

  it("Call request service with Network Error", async () => {
    const errorMessage = new Error("Network Error");
    mock.onGet(fetchUrl).networkError();
    const resultData = await ApiService.getAllProducts(fetchUrl)
      .then((res) => res.data)
      .catch((e) => e);
    expect(resultData).toEqual(errorMessage);
  });
});
