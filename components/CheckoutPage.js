import Header from './Header.js';
import Footer from './Footer.js';

export default {
  el: '#app',
  components: {
    Footer,
    Header,
  },
  data: {
    bag: [
      { url: '/images/1000/black-dress.jpg', name: 'Black Dress', qty: 1, size: 'S', price: 219.95 },
      { url: '/images/1000/black-jumper.jpg', name: 'Winter Sport Outfit', qty: 2, size: 'M', price: 159.95 },
    ],
    wishlist: [
      { url: '/images/1000/black-dress.jpg', name: 'Black Dress', qty: 1, size: 'S', price: 199.95 },
    ],
    sizes: ['S', 'M', 'L'],
    voucher: '',
  },
  computed: {
    discount() {
      return this.voucher.length ? 0.8 : 1;
    },
    total() {
      return this.bag
        .map(item => (item.price * item.qty))
        .reduce((total, price) => (total + price), 0);
    },
    withSpecial() {
      return this.total * this.discount;
    },
  },
  template: html`
    <div>
      <Header :bag="bag" :wishlist="wishlist" />
      <main>
        <div class="products">
          <h2>Products</h2>
          <div class="product-list">
            <div class="product" v-for="product in bag">
              <img :src="product.url" />
              <div class="info">
                <h3 class="name">{{product.name}}</h3>
                <div class="price h4">\${{product.price}}</div>
                <div class="qty">
                  Qty: <input type="number" class="styled" v-model="product.qty"/>
                </div>
                <div class="size">
                  Size:
                  <select class="styled" v-model="product.size">
                    <option v-for="size in sizes">{{size}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery">
          <h2>Deliver To</h2>
          <select class="styled">
            <option>Home</option>
            <option>Work</option>
          </select>
          <p>Unit 3, 63 Marigold Ave</p>
          <p>Sydney, 2000, Australia</p>
          <div class="delivery-estimate">
            <h4>Delivery Estimate</h4>
            <div>
              <input type="radio" name="delivery" value="fast" checked>
              <span class="delivery-option" >Next-day delivery: $7.99</span>
              <p>Delivered by 5PM Tomorrow</p>
            </div>
            <hr />
            <div>
              <input type="radio" name="delivery" value="slow" >
              <span class="delivery-option" >Standard delivery delivery: Free</span>
              <p>Delivered by 5PM Next Tuesday</p>
            </div>
          </div>
          <div class="saved-payment">
            <input type="checkbox" checked /><span>Use saved payment method</span>
          </div>
          <div class="voucher">
            <h4>Voucher</h4>
            <input class="styled" v-model="voucher">
          </div>
          <div class="total h3">
            Total:
            <span v-if="voucher.length" class="price-before h4">
              \${{total.toFixed(2)}}
            </span>
            <span v-if="voucher.length" class="h4">
              20% OFF -
            </span>
            <span class="h4">
              \${{withSpecial.toFixed(2)}}
            </span>
          </div>
          <a href="/404.html" class="button">Buy</a>
        </div>
      </main>
      <link rel="stylesheet" href="footer.css">
      <Footer />
    </div>
    `,
};
