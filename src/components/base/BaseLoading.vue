<template>
    <transition enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="isLoading"
            class="bg-white/80 fixed top-0 left-0 flex justify-center items-center w-full h-full z-100">
            <div class="loading-style flex justify-center items-center">
                <div class="bubble-1"></div>
                <img :src="require('@/assets/images/logo-pic.png')" class="bubble-2 loading-img w-20 h-20">
                <div class="bubble-3"></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'AppLoading',
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        if (this.isLoading) document.body.style.overflow = 'hidden';
    },
    watch: {
        isLoading(val) {
            document.body.style.overflow = val ? 'hidden' : ''
        },
    },
    beforeDestroy() {
        document.body.style.overflow = ''
    },
}
</script>

<style>
.loading-style {
    animation-delay: 1.44s;
}

.bubble-1,
.bubble-3 {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #d6270a;
}

.loading-style {
    animation: loadingRotate 2s linear infinite;
}

.loading-style .bubble-1,
.loading-style .bubble-2,
.loading-style .bubble-3 {
    animation: bounce 2s ease-in-out infinite;
}

.loading-style .bubble-1,
.loading-style .bubble-3 {
    animation-delay: -1s;
}

.loading-style .bubble-1 {
    animation: bubbleMove1 2s ease-in-out infinite;
}

.loading-style .bubble-3 {
    animation: bubbleMove3 2s ease-in-out infinite;
}

@keyframes loadingRotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: scale(0.2);
    }

    50% {
        transform: scale(1);
    }
}

@keyframes bubbleMove1 {

    0%,
    100% {
        transform: scale(1) translateX(0);
    }

    50% {
        transform: scale(0.2) translateX(65px);
    }
}

@keyframes bubbleMove3 {

    0%,
    100% {
        transform: scale(1) translateX(0);
    }

    50% {
        transform: scale(0.2) translateX(-65px);
    }
}
</style>