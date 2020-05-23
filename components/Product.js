import BagIcon from "./BagIcon.js";
import HeartIcon from "./HeartIcon.js";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    onAddToBag: {
      type: Function,
      required: true,
    },
    onAddToWishlist: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      addMenuExpanded: false,
      bagIconText: BagIcon,
      heartIconText: HeartIcon,
    };
  },
  methods: {
    expandAddMenu() {
      this.addMenuExpanded = true;
      setTimeout(() => {
        this.addMenuExpanded = false;
      }, 3000);
    },
    addToBag() {
      this.addMenuExpanded = false;
      this.onAddToBag(this.product);
    },
    addToWishlist() {
      this.addMenuExpanded = false;
      this.onAddToWishlist(this.product);
    },
  },
  template: html`
  <div class="product">
    <div @click="expandAddMenu" class="add" :class="{ open: addMenuExpanded }">
      <div class="add-to">
        <span>Add To</span>
        <span @click.stop="addToBag"><span class="bag" v-html="bagIconText"></span> Bag</span>
        <span @click.stop="addToWishlist"><span class="wishlist" v-html="heartIconText"></span> Wishlist</span>
      </div>
    </div>
    <img :src="product.url">
  </div>`,
};