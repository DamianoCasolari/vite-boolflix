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
  mounted() {
    const anchorTags = document.querySelectorAll('a[href="#"]');
    anchorTags.forEach(a => {
      a.addEventListener('click', event => {
        event.preventDefault();
      });
    });

  }
}
</script>


<template>
  <SiteHeader />
  <SiteMain />
  <SiteFooter />
</template>

<style lang="scss" scoped></style>
