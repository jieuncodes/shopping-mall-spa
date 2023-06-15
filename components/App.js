import { api } from "../api.js";
import ProductDetail from "./ProductDetail.js";
import ProductList from "./ProductList.js"

export default class App {
    constructor($app) {
        this.state = {
            products: [],
            currRoute: "/",
            showingProduct : null,
        }

        

        const onClickCard = async (itemId) => {
            const productInfo = await api.fetchProductInfo(itemId);
            this.state.showingProductId = itemId;
            this.state.showingProduct = new ProductDetail({$app, itemId, productInfo, onClickOption})
        }

        const onClickOption = (optionIndex) => {
            console.log(optionIndex);
            this.state.showingProduct.setState(optionIndex);
        }

        this.productList = new ProductList({$app, products: this.state.products, onClickCard});

        


        this.setState = (nextState) => {
            this.state = { ...this.state, ...nextState }
            this.productList.setState({products: this.state.products});
        }

        this.getProducts = async () => {
            const products = await api.fetchProducts();
            this.setState({products});
        }

        this.getProducts();

    }
    

}