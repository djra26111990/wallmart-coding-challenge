import ApiService from '../services'
require('dotenv').config()

jest.setTimeout(30000);

describe('Test service request axios with real call to API REST', () => {

    it('Service must be defined', async () => {
        expect(ApiService).toBeDefined();
    });

    it("Call request with real endpoint with filter params", async () => {
        let productToFetch = process.env.VITE_URL_BACKEND + 'zlrwax'
        let responseData = await ApiService.getAllProducts(productToFetch)
        expect.objectContaining(responseData.data);
        expect(typeof responseData.status).toBe("number");
        expect(responseData.status).toBe(200);
    })

    it("Call request with real endpoint without filter params", async () => {
        let productToFetch = process.env.VITE_URL_BACKEND;
        let responseData = await ApiService.getAllProducts(productToFetch)
        expect.objectContaining(responseData.data);
        expect(typeof responseData.status).toBe("number");
        expect(responseData.status).toBe(200);
    })
});