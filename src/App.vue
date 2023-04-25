<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { store } from "./store.js";

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  },
  data() {


    return {
      store
    }
  },

  // Pagliativo perchè le immagini dello slider non caricano all'inizio 

  methods: {
    fakeClick() {
      const search = document.querySelector(".search_b")
      search.click()
    }
  },
  mounted() {

    // get updated genre id list (both tv and film)

    store.getIdList()
    store.getTvIdList()

    // get updated trending movie list 

    store.getTrendigMovies(store.API_URL)

    // blocks all anchor tags from the default behavior

    const anchorTags = document.querySelectorAll('a[href="#"]');
    anchorTags.forEach(a => {
      a.addEventListener('click', event => {
        event.preventDefault();
      });
    });

    this.fakeClick()

  }
}
</script>


<template>
  <SiteHeader />
  <SiteMain />
  <SiteFooter />
</template>

<style lang="scss" scoped></style>
