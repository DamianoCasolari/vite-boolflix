
<script>
export default {
    name: "ShowcaseSlider",
    data() {


        return {
            trendingIndex: 0,

        }
    },
    props: {
        store: Object

    },
    methods: {
        changeTrendingMovies() {
            this.trendingIndex = (this.trendingIndex + 1) % this.store.listMovieTrending.length
            console.log(this.trendingIndex);
        },
        timeSliderFunction() {
            setInterval(this.changeTrendingMovies, 8000)

        }
    },
    mounted() {
        this.timeSliderFunction()
    }
}
</script>

<template>
    <div class="slider current_movie" v-for="movie, index in store.listMovieTrending"
        :class="{ opacity_1: trendingIndex == index }">

        <div class="img_container">
            <img class="poster" :class="{ slide_transition: trendingIndex == index }" :src="store.getTrandingImage(movie)"
                alt="backdrop_image">
        </div>
        <h2 v-if="movie.title" class="title_current_movie"> {{ movie.title }}</h2>
        <h2 v-else-if="movie.name" class="title_current_movie"> {{ movie.name }}</h2>
    </div>
</template>



<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;


main {
    overflow: hidden;

}

.slider {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100vh - 100px);
    width: 100%;
    position: absolute;
    opacity: 0;
    transition-duration: 2s;

    &.opacity_1 {
        opacity: 1;
    }

    .title_current_movie {
        font-family: 'Quicksand', sans-serif;
        position: fixed;
        bottom: 20px;
        right: 20px;
        left: 20px;
        color: $clr_light;
        text-shadow: 4px 4px 3px black;
        z-index: 2;

    }


    .img_container {
        // transform: scale(1.1);
        width: 100%;
        height: calc(100vh - 100px);
        overflow: hidden;


        .poster {
            object-fit: cover;
            object-position: top;
            height: 140%;
            width: 140%;



            &.slide_transition {
                animation: shift_left 8s linear forwards infinite;
            }
        }
    }
}

@keyframes shift_left {
    from {
        transform: translateX(-100px);
    }

    to {
        transform: translateX(0);

    }
}
</style>