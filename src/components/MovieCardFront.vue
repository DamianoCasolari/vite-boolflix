<script>
export default {
    name: "MovieCardFront",
    date() {


        return {}
    },
    props: {
        store: Object,
        movie: Object
    }
}
</script>




<template>
    <div class="card_front Cover_container d-flex justify-content-center">
        <img v-if="this.movie.poster_path" class="cover_movie" :src="this.store.image_url + movie.poster_path"
            alt="Cover movie">
        <img v-else class="cover_movie not_available" src="../assets/img/not_available.png" alt="Cover movie">
    </div>
</template>


<style lang="scss" scoped></style>