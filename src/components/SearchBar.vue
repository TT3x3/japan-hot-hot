<template>
    <div class="flex justify-center items-center max-w-[80%] w-full mx-auto">
        <div class="flex flex-col md:gap-4 gap-2 justify-center items-center w-full">
            <h3 class="font-bold md:text-3xl text-xl text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>

            <div ref="selectDropdown" class="relative w-full md:max-w-[400px] max-w-[340px]">

                <!-- 搜尋框 -->
                <div class="flex items-center w-full border border-gray-300">
                    <div class="flex justify-between items-center w-full">
                        <input type="search" v-model.trim="inputValue" :placeholder="`尋找${placeholderType}相關`"
                            class="py-2 px-4 w-full" />
                    </div>
                    <button type="button" class="cursor-pointer px-3">
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
export default {
    name: 'SearchBar',
    props: {
        search: {
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
    },
    computed: {
        inputValue: {
            get() {
                return this.search;
            },
            set(val) {
                this.$emit('update:search', val);
            }
        },
        filterProducts() {
            if (!this.search) return [];
            return this.allProducts.filter(item => {
                const matchKeyWords = item.title && item.title.toLowerCase().includes(this.search.toLowerCase());
                const matchNotice = item.notices && item.notices.some(list => list.includes(this.search.toLowerCase()))
                const matchTags = item.tags && item.tags.some(tag => tag.includes(this.search.toLowerCase()));
                return matchKeyWords || matchNotice || matchTags;
            })
        },
        showDropdown() {
            return this.search && this.filterProducts.length > 0;
        },
    },
    mounted() {
        document.addEventListener('click', this.handleDropdown);
    },
    watch: {
        search() {
            if (this.search) {
                this.isCompleted = true;
            }
        },
    }
}
</script>