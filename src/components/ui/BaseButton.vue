<template>
        <button :type="buttonType" @click.prevent="$emit('click')"
            class="md:w-auto w-full cursor-pointer text-center text-white px-10 py-3 transition-colors"
            :class=" [isRed ? 'bg-hot-red hover:bg-red-500 active:bg-red-700' : 'bg-gray-400 hover:bg-gray-300 active:bg-gray-500',isDisabled && 'cursor-not-allowed pointer-events-none opacity-50']"
            >{{ buttonName }}</button>
</template>
<script>
export default {
    name: 'BaseButton',
    props: {
        buttonType: {
            type: String,
            default: 'button'
        },
        buttonName: {
            type: String,
            required: true,
        },
        isRed: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
}
</script>