<template>
    <div class="loading_container">
        <div v-for="(icon, index) in icons" :key="index" :class="['icon', { show: iconIndex === index }]">
            <font-awesome-icon :icon="icon" />
        </div>
    </div>
</template>
  
<script>
import { faHourglassStart, faHourglassHalf, faHourglassEnd } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "LoadingIcons",
    data() {
        return {
            icons: [faHourglassStart, faHourglassHalf, faHourglassEnd],
            iconIndex: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.iconIndex = (this.iconIndex + 1) % this.icons.length;
        }, 1000);
    },
};
</script>
  
<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.loading_container {
    position: relative;
}

.icon {
    opacity: 0;
    transition: opacity 1s;
    position: absolute;
    font-size: 30px;
    color: $clr_pale_light;
}

.icon.show {
    opacity: 1;
}
</style>
  