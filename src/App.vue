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
  }
}
</script>


<template>
  <SiteHeader />
  <SiteMain />
  <SiteFooter />
</template>

<style lang="scss" scoped></style>
