<script>
export default {
    name: "MovieCardBack",
    date() {


        return {}
    },
    props: {
        movie: Object,
        store: Object,
        countryFlags: Object,
        isoLangs: Object,
        starVote: Function,
        starEmpty: Function,
        first20Words: Function
    },
}
</script>


<template>
    <div class="card_back d-flex justify-content-center">
        <div class="Cover_container position-relative d-flex justify-content-center">
            <img v-if="movie.poster_path" class="cover_movie darkcover" :src="store.image_url + movie.poster_path"
                alt="Cover movie">
            <img v-else class="cover_movie not_available darkcover" src="../assets/img/not_available.png" alt="Cover movie">

            <div class="info_container position-absolute top-0 start-0 ">

                <!-- title/date  -->

                <h3 v-if="movie.title" class="title">{{ movie.title }}</h3>
                <h3 v-if="movie.name" class="title">{{ movie.name }}</h3>
                <h5 v-if="movie.original_title" class="original_title">{{ movie.original_title }}</h5>
                <h5 v-if="movie.original_name" class="original_title">{{ movie.original_name }}</h5>

                <!-- leanguage -->

                <div class="language_container">
                    <span class="flag" v-if="countryFlags[movie.original_language]">
                        <img class="flags" :src="countryFlags[movie.original_language]" alt="flag_country">
                    </span>
                    <span v-if="isoLangs[movie.original_language]" class="lenguage">{{
                        isoLangs[movie.original_language].name }}</span>
                    <span v-else class="lenguage">{{ movie.original_language }}</span>
                </div>

                <!-- ratings  -->

                <div class="vote">{{ "Rating " + (movie.vote_average / 2).toFixed(2) }}</div>
                <div id="index" class="star_vote">
                    <font-awesome-icon class="text-warning" icon="star" v-for="icon in starVote(movie)" />
                    <font-awesome-icon icon="star" v-for="icon in starEmpty(movie)" />
                </div>

                <!-- description  -->

                <div v-if="movie.overview" class="overview">{{ first20Words(movie.overview) + "..." }}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>