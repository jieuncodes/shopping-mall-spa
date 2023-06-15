export default class ProductListPage{
    constructor({ $app, products, onClickCard }){
        this.products = products;
        this.onClickCard = onClickCard;
        this.$target = document.createElement("div");
        this.$target.className = "ProductListPage";
        $app.replaceChildren(this.$target);

        this.setState = (products) =>{
            this.products = products;
            this.render();
        }

        this.render = () => {
            const itemList = this.products.products.map((product) => {
                return`<li data-type="product-card" class="Product" id=${product.id}>
                <img src=${product.imageUrl}>
                <div class="Product__info">
                    <div>${product.name}</div>
                    <div>${product.price}~</div>
                </div>
            </li>`
            }).join("");

            this.$target.innerHTML = `<h1>상품목록</h1><ul>${itemList}</ul>`;
        }
        
        this.$target.addEventListener("click", (event) => {
            if (!event.target.dataset.type === "product-card"){
                return;
            }
            const card = event.target.closest(".Product");
            onClickCard(Number(card.id));
        })}

    
}