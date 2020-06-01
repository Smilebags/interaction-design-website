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
    products: [
      { url: 'images/1000/black-dress.jpg' },
      { url: 'images/1000/black-jumper.jpg' },
      { url: 'images/1000/blue-suit.jpg' },
      { url: 'images/1000/green-jumper.jpg' },
      { url: 'images/1000/grey-jacket.jpg' },
      { url: 'images/1000/grey-shirt.jpg' },
      { url: 'images/1000/black-dress.jpg' },
      { url: 'images/1000/black-jumper.jpg' },
    ],
  },
  template: html`
    <div>
      <Header :bag="bag" :wishlist="wishlist" />
      <main>
        <div class="search">
          <input type="text" class="search-box" placeholder="Search">
        </div>
        <FilterComponent />
        <div class="products">
          <Product 
            v-for="product in products"
            :product="product"
            Key="product.url"
            :onAddToBag="(product) => bag.push(product)"
            :onAddToWishlist="(product) => wishlist.push(product)"
          />
        </div>
      </main>
      <link rel="stylesheet" href="footer.css">
      <Footer />
    </div>
    `,
};
