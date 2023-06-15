export default class ProductDetail {
    constructor({ $app, itemId, productInfo, onClickOption }) {
        this.onClickOption = onClickOption;
        this.$target = document.createElement("div");
        this.$target.className = "ProductDetailPage";

        $app.replaceChildren(this.$target);

        this.state = {
            options: productInfo.productOptions,
            selectedOptions: [],
            totalPrice: 0,
        }

        this.findOptionInfo = (index) => {

            const {
                createdAt, 
                id, 
                name, 
                price, 
                stock, 
                updatedAt } = this.state.options[index - 1];


        }


        this.setState = (nextIndex) => {
            if(this.state.selectedOptions.includes(nextIndex)){
                return
            }
            const newSelectedOptions = [...this.state.selectedOptions, nextIndex];
            console.log(this.findOptionInfo(nextIndex));
            

            this.state = { ...this.state,selectedOptions: newSelectedOptions, totalPrice};
        }

        this.render = () => {
            const options = productInfo.productOptions.map(
                (option) => {
                    let optionAddPrice = "";
                    if (option.price !== 0) {
                        optionAddPrice = `(+${option.price}원)`;
                    }
                    return `<option data-type="option" data-id=${option.id} data-add-price=${option.price} data-stock=${option.stock}>${option.name}${optionAddPrice}</option>`
                }).join("");


            const selectedOptions = `<ul>
              <li>
              커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
              </li>
              <li>
              커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
              </li>
          </ul>`;

            this.$target.innerHTML =
                `<h1>${productInfo.name} 상품 정보</h1>
                <div class="ProductDetail">
                    <img src=${productInfo.imageUrl}>
                    <div class="ProductDetail__info">
                        <h2>${productInfo.name}</h2>
                        <div class="ProductDetail__price">${productInfo.price}~</div>
                        <select>
                            <option>선택하세요.</option>
                            ${options}
                        </select>
                        <div class="ProductDetail__selectedOptions">
                            <h3>선택된 상품</h3>
                            ${selectedOptions}
                            <div class="ProductDetail__totalPrice">${this.state.totalPrice}원</div>
                            <button class="OrderButton">주문하기</button>
                        </div>
                    </div>
                </div>
            `;


        }
        this.render();

        this.$target.addEventListener("input", (event) => {
            const index = event.target.selectedIndex;
            this.onClickOption(index);
        })

    }
}

// {
//     "id": 1,
//     "name": "커피 컵",
//     "price": 10000,
//     "imageUrl": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
//     "productOptions": [
//       {
//         "id": 1,
//         "name": "100개 묶음",
//         "price": 0,
//         "stock": 5,
//         "created_at": "2021-08-23T22:52:17.634Z",
//         "updated_at": "2021-08-23T22:52:17.638Z"
//       },
//       {