import LogoIcon from './LogoIcon.js';

export default {
  props: {
    bag: {
      type: Array,
      required: true,
    },
    wishlist: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    logoIconText: LogoIcon,
    bounceBag: false,
    bounceWishlist: false,
    hasShownSizeMessage: false,
    showSizeMessage: false,
  }),
  methods: {
    navigateTo(path) {
      window.location.href = path;
    },
    bounceBagIcon() {
      this.bounceBag = true;
      setTimeout(() => {
        this.bounceBag = false;
      }, 300);
    },
    bounceWishlistIcon() {
      this.bounceWishlist = true;
      setTimeout(() => {
        this.bounceWishlist = false;
      }, 300);
    },
    dismissSizeMessage() {
      this.showSizeMessage = false;
    },
  },
  watch: {
    'bag.length': function(newLength, oldLength) {
      if (newLength === oldLength) {
        return;
      }
      this.bounceBagIcon();
      if (!this.hasShownSizeMessage) {
        this.showSizeMessage = true;
        this.hasShownSizeMessage = true;
      }
    },
    'wishlist.length': function(newLength, oldLength) {
      if (newLength === oldLength) {
        return;
      }
      this.bounceWishlistIcon();
    },
  },
  template: html`
    <header>
      <span class="menu"><img src="images/icon/menu.svg" alt=""></span>
      <a class="logo" href="/interaction-design-website/index.html" v-html="logoIconText"></a>
      <span class="right">
        <span @click="navigateTo('/404.html')" class="profile"><img src="images/icon/profile.svg" alt=""></span>
        <span @click="navigateTo('/404.html')" class="bag">
          <div class="size-message" v-if="showSizeMessage">
            <p class="h4">We don't know your size yet!</p>
            <a class="button" href="/settings.html">Set Preferences</a>
            <a class="button secondary" @click.stop="dismissSizeMessage">Later</a>
          </div>
          <img src="images/icon/bag.svg" alt="">
          <span
            class="counter"
            :class="{ bounce: bounceBag }"
            v-if="bag.length"
          >{{bag.length}}</span>
        </span>
        <span @click="navigateTo('/404.html')" class="wishlist">
          <img src="images/icon/heart.svg" alt="">
          <span
            class="counter"
            :class="{ bounce: bounceWishlist }"
            v-if="wishlist.length"
          >{{wishlist.length}}</span>
        </span>
      </span>
    </header>`,
};