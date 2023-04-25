<script>
export default {
    name: "GenresMenu",
    data() {


        return {
            moviesMenu: ["Home", "Tv Series", "Movies", "Original", "Recently added ", "My list"],
            menuIndex: -1
        }
    },
    methods: {
        emitClickEvent(index) {
            this.menuIndex = index
            switch (index) {
                case 0:
                    this.$emit("returnHome");
                    break;
                case 1:
                    this.$emit("checkTvShow");
                    break;
                case 2:
                    this.$emit("checkMovieShow");
                    break;
                // Aggiungi altri casi qui in base alle tue esigenze
                default:
                    // Nessuna azione per indice non gestito
                    break;
            }
        }
    }
}
</script>




<template>
    <div class="classes d-none d-lg-block">
        <a v-for="(option, index) in moviesMenu" :key="index" href="#" @click="emitClickEvent(index)"
            :class="{ 'click': menuIndex == index }">
            <span>{{ option }}</span>
        </a>
    </div>
</template>


<style lang="scss" scoped></style>