const BASE_URL = "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products";

const fetchData = async ({ url, errorMsg }) => {
    try {
        const response = await fetch(url);
        if (response.status === 500) {
            throw new Error("server error.");
        }
        if (response.status !== 200) {
            throw new Error(errorMsg);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        throw new Error("Error occured")
    }
}

export const api = {
    fetchProducts: async () => await fetchData({ url: BASE_URL, errorMsg: "error fetching products" }),
    fetchProductInfo: async (productId) => await fetchData({ url: `${BASE_URL}/${productId}`, errorMsg: "error fetching product info" })
}