
<script>
export default {
    name: "ShowcaseSlider",
    data() {


        return {}
    }
}
</script>



<template>
    <div class="slider">

        <div class="img_container">
            <img class="poster" src="https://image.tmdb.org/t/p/original/sw7mordbZxgITU877yTpZCud90M.jpg" alt="">
        </div>
        <h2 class="title_current_movie"> Quei Bravi Ragazzi</h2>
    </div>
</template>



<style lang="scss" scoped>
main {
    overflow: hidden;
}

.slider {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: calc(100vh - 100px);
    width: 100%;
    position: relative;

    .title_current_movie {
        font-family: 'Quicksand', sans-serif;
        position: fixed;
        bottom: 20px;
        right: 20px;

        z-index: 2;

    }


    .img_container {
        // transform: scale(1.1);
        width: 100%;
        height: calc(100vh - 100px);
        overflow: hidden;
        transform: scale(1.3);

        .poster {
            object-fit: cover;
            object-position: top;
            height: 100%;
            width: 100%;
            animation: shift_left 4s linear forwards;
        }
    }
}

@keyframes shift_left {
    from {
        transform: translateX(-30px);
    }

    to {
        transform: translateX(30px);
    }
}
</style>