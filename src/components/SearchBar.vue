<template>
    <div class="flex justify-center items-center max-w-[80%] w-full mx-auto">
        <div class="flex flex-col md:gap-4 gap-2 justify-center items-center w-full">
            <h3 class="font-bold md:text-3xl text-xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>

            <div ref="selectDropdown" class="relative w-full md:max-w-[400px] max-w-[340px]">

                <!-- 搜尋框 -->
                <div class="flex items-center w-full border border-gray-300">
                    <div class="flex justify-between items-center w-full">
                        <input type="search" :value="value" @input="$emit('input', $event.target.value)" @keyup.enter.prevent="getResult()"
                            :placeholder="`尋找${placeholderType}`" class="py-2 px-4 w-full" />
                    </div>
                    <button type="button" @click.prevent="getResult()" class="cursor-pointer px-3">
                        <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
                    </button>
                </div>

                <!-- 選單 -->
                <ul v-if="showDropdown"
                    class="absolute top-full left-0 z-21 shadow-md w-full bg-white border border-gray-300 -mt-px text-base-light"
                    :class="isCompleted ? 'block' : 'hidden'">
                    <li v-for="item in filterProducts" :key="item.id" @click.prevent="searchProducts(item)"
                        class="hover:bg-gray-100">
                        <button type="button" @click.prevent="goToProduct(item)"
                            class="py-2 px-4 w-full text-start truncate">{{ item.title
                            }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { useResultStore } from '@/stores/search'

export default {
    name: 'SearchBar',
    props: {
        value: {
            type: String,
            required: true,
        },
        allProducts: {
            type: Array,
            required: true,
        },
        placeholderType: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            isCompleted: true,
            isShowDropdown: false,
        };
    },
    methods: {
        typeTranslate(type) {
            const list = {
                Flight: 'ticket',
                Tour: 'tour',
            };
            return list[type];
        },
        searchProducts(item) {
            this.$emit('update:search', item.title);
            this.isCompleted = false;
        },
        goToProduct(item) {
            const type = this.typeTranslate(item.type);
            this.$router.push(`/${type}-detail/${item.productId}`);
        },
        handleDropdown(e) {
            const selectDropdown = this.$refs.selectDropdown;
            if (!selectDropdown) return;
            if (!selectDropdown.contains(e.target)) {
                this.isCompleted = false;
            }
        },
        async getResult() {
            if (!this.value || !this.value.trim()) return;
            this.$emit('search-result', this.value);
        }
    },
    computed: {
        // inputValue: {
        //     get() {
        //         return this.search;
        //     },
        //     set(val) {
        //         this.$emit('update:search', val);
        //     }
        // },
        filterProducts() {
            if (!this.value) return [];
            return this.allProducts.filter(item => {
                const matchTitle = item.title && item.title.toLowerCase().includes(this.value.toLowerCase());
                const matchNotice = item.notices && item.notices.some(list => list.includes(this.value.toLowerCase()))
                const matchTags = item.tags && item.tags.some(tag => tag.includes(this.value.toLowerCase()));
                return matchTitle || matchNotice || matchTags;
            })
        },
        showDropdown() {
            return this.value && this.filterProducts.length > 0;
        },
    },
    mounted() {
        document.addEventListener('click', this.handleDropdown);
    },
    created() {
        this.store = useResultStore();
    },
    watch: {
        value(newValue) {
            if (newValue) {
                this.isCompleted = true;
            }
        },
    }
}
</script>