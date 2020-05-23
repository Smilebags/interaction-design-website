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
      { url: '/images/unedited/http _static.theiconic.com.au_p_kelly-country-3758-9523601-4.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_adidas-originals-2116-954899-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_by-johnny-7120-703299-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_calvin-klein-performance-2664-5107101-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_kelly-country-3758-9523601-4.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_oxford-7091-3449601-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_puma-6932-113556-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_rebecca-vallance-3043-877129-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_superdry-0627-6537801-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_adidas-originals-2116-954899-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_by-johnny-7120-703299-1.jpg' },
      { url: '/images/unedited/http _static.theiconic.com.au_p_calvin-klein-performance-2664-5107101-1.jpg' },
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
      <link rel="stylesheet" href="/footer.css">
      <Footer />
    </div>
    `,
};
