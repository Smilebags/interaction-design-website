import Header from './Header.js';
import Footer from './Footer.js';
import Product from './Product.js';
import FilterComponent from './Filter.js';

export default {
  el: '#app',
  components: {
    Footer,
    Header,
    Product,
    FilterComponent,
  },
  data: {
    bag: [],
    wishlist: [],
    product: {
      url: 'images/1000/black-dress.jpg',
      name: 'Black Dress',
      price: 199.95,
      description: 'A Black Dress great for interviews, fancy dinners and parties.',
    },
    sizes: [
      'XS', 'S', 'M', 'L'
    ],
  },
  template: html`
    <div>
      <Header :bag="bag" :wishlist="wishlist" />
      <main>
        <div class="small-product-images">
          <img :src="product.url" />
          <img :src="product.url" />
          <img :src="product.url" />
          <img :src="product.url" />
          <img :src="product.url" />
          <img :src="product.url" />
        </div>
        <div class="large-product-image">
          <img :src="product.url" />
        </div>
        <div class="info">
          <div class="info-top">
            <h3 class="product-name">{{product.name}}</h3>
            <h4>\${{product.price}}</h4>
            <div>{{product.description}}</div>
            <div class="size-container">
              Size: 
              <select class="sizes">
                <option v-for="size in sizes" :value="size">
                  {{size}}
                </option>
              </select>
            </div>
          </div>
          <div class="info-bottom">
            <a href="checkout.html" class="button quick-buy" >Quick Buy</a>
          </div>
        </div>
        <div class="delivery">
          <div class="delivery-options">
            <h3>Delivery Options</h3>
            <div>
              <input class="delivery-option" type="radio" name="delivery" value="fast" checked>
                Next-day delivery: $7.99
              </input>
            </div>
            <div>
              <input class="delivery-option" type="radio" name="delivery" value="slow" >
                Standard delivery delivery: Free
              </input>
            </div>
            <a href="checkout.html" class="button" >Checkout</a>

          </div>
        </div>

        <div class="product">
        
        </div>
      </main>
      <link rel="stylesheet" href="footer.css">
      <Footer />
    </div>
    `,
};
