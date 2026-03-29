<template>
    <div v-show="isModalOpen === true">
        <!-- 遮罩 -->
        <div class="fixed top-0 left-0 z-20 w-full h-full bg-black/60"></div>
        <!-- modal -->
        <div>
            <div class="fixed top-[50%] left-[50%] -translate-[50%] z-21 w-80 px-10 py-6 bg-white shadow-xl">
                <div class="flex flex-col gap-6 justify-center items-center">
                    <i v-if="hasError === true" class=" text-hot-red fa-solid fa-circle-exclamation fa-3x"></i>
                    <i v-if="hasSuccess === true" class="text-green-600 fa-solid fa-circle-check fa-3x"></i>
                    <div class="flex flex-col gap-1 justify-center items-center">
                        <p class="font-bold text-xl text-base-heavy">{{ modalTitle }}</p>
                        <p class="text-sm text-base-light">{{ modalContent }}</p>
                    </div>
                    <button type="button" @click.prevent="closeModal()"
                        class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 text-white py-2 w-full cursor-pointer">確認</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        isModalOpen: {
            type: Boolean,
            default: true,
        },
        hasError: {
            type: Boolean,
            default: true,
        },
        hasSuccess: {
            type: Boolean,
            default: false,
        },
        modalTitle: {
            type: String,
            default: '系統通知',
            require: true
        },
        modalContent: {
            type: String,
            default: '發生錯誤，請重新操作',
            require: true,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
            this.$emit('confirm');
        }
    },
    watch: {
        isModalOpen(val) {
            document.body.style.overflow = val ? 'hidden' : ''
        },
    },
}
</script>