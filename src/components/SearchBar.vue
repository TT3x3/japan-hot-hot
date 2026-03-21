<template>
    <div class="flex justify-center items-center max-w-[80%] w-full mx-auto">
        <div class="flex flex-col gap-2 justify-center items-center w-full">
            <h3 class="font-bold md:text-3xl text-xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>
            <div class="flex justify-center items-center w-full">
                <input type="text" placeholder="赤穗市"
                    class="outline-solid outline-1 outline-gray-300 py-2 px-4 md:w-[348px] w-full" />
                <button type="button" class="cursor-pointer px-3">
                    <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBar',
    data() {
        return {
        };
    },
    methods: {
    },
}
</script>