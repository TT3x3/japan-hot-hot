<template>
    <div v-if="flights" class="flex flex-col md:gap-32 gap-12 w-full">
        <CustomModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false"  @confirm="handleModalClick()"/>
        <div class="flex justify-center items-center pt-8">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">機票</h1>
        </div>

        <!-- top -->
        <div class="relative md:h-80 h-40 overflow-hidden">
            <img src="../assets/images/carousel-2.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>

        <!-- 搜尋框 -->
        <div class="flex justify-center items-center max-w-[80%] w-full mx-auto">
            <div class="flex flex-col gap-2 justify-center items-center w-full">
                <h3 class="md:text-3xl text-xl text-bold text-base-heavy">麥囉唆，直接講想去哪嘿皮？</h3>
                <div class="flex justify-center items-center w-full">
                    <input type="text" placeholder="赤穗市"
                        class="outline-solid outline-1 outline-gray-300 py-2 px-4 md:w-[348px] w-full" />
                    <button type="button" class="cursor-pointer px-3">
                        <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- 分類 -->
        <div class="max-w-[80%] w-full mx-auto">
            <div class="flex md:flex-row flex-col md:gap-8 gap-2">
                <div class="relative bg-gray-500 flex-1 overflow-hidden">
                    <img src="../assets/images/carousel-1.jpg" alt="" class="object-cover w-full md:h-full h-16">
                    <h2 class="absolute left-5 bottom-5 font-bold text-white">日本本州</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 overflow-hidden">
                    <img src="../assets/images/carousel-2.jpg" alt="" class="object-cover w-full md:h-full h-16">
                    <h2 class="absolute left-5 bottom-5 font-bold text-white">四國/九州</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 overflow-hidden">
                    <img src="../assets/images/carousel-3.jpg" alt="" class="object-cover w-full md:h-full h-16">
                    <h2 class="absolute left-5 bottom-5 font-bold text-white">北海道</h2>
                </div>
                <div class="relative bg-gray-500 flex-1 overflow-hidden">
                    <img src="../assets/images/carousel-4.jpg" alt="" class="object-cover w-full md:h-full h-16">
                    <h2 class="absolute left-5 bottom-5 font-bold text-white">沖繩</h2>
                </div>
            </div>
        </div>

        <!-- banner -->
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <ul class="flex flex-wrap md:gap-x-6 md:gap-y-12 gap-4 md:justify-start justify-center">
                <!-- 卡片 -->
                <router-link :to="`/ticket-detail/${item.productId}`" v-for="item in flights" :key="item.productId"
                    class="relative md:flex-[0_0_calc(33.333%-1rem)] cursor-pointer group">
                    <div class="flex flex-col md:h-[450px] h-72 border border-gray-200">
                        <!-- 無庫存遮罩 -->
                        <p v-if="item.status !== 'active'"
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-3">
                            暫無庫存</p>
                        <div v-if="item.status !== 'active'" class="absolute inset-0 bg-black/30 z-2"></div>

                        <div class="relative h-72 overflow-hidden">
                            <img :src="`${apiBase}${item.thumbnail}`" alt="" class="object-cover w-full h-full">
                            <div
                                class="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                            </div>
                            <!-- md 以上收藏 -->
                            <button type="button" @click.prevent.stop="toggleLike(item.productId)"
                                class="hidden md:block absolute top-3 right-3 p-2  text-white/65 hover:text-red-500 transition-colors duration-200 ">
                                <i v-if="findLike(item.productId)"
                                    class="fa-solid fa-heart fa-xl text-red-500 cursor-pointer"></i>
                                <i v-else class="fa-regular fa-heart fa-xl cursor-pointer"></i>
                            </button>
                        </div>
                        <div class="flex flex-col gap-3 flex-1 p-5">
                            <div class="flex gap-2 justify-between">
                                <div class="flex gap-2 items-center">
                                    <p v-for="(tag, index) in item.tags" :key="index"
                                        class="font-thin text-sm px-1 inline-block border border-gray-300 text-gray-400">
                                        {{ tag }}
                                    </p>
                                </div>
                                <!-- md 以下收藏 -->
                                <button type="button" @click.prevent.stop="toggleLike(item.productId)"
                                    class=" block md:hidden text-red-500 hover:text-red-400 transition-colors duration-200 ">
                                    <i v-if="findLike(item.productId)"
                                        class="fa-solid fa-heart fa-lg  cursor-pointer"></i>
                                    <i v-else class="fa-regular fa-heart fa-lg cursor-pointer"></i>
                                </button>
                            </div>
                            <p class="font-bold line-clamp-2 text-lg text-base-heavy">{{ item.title }}</p>
                            <p class="font-bold text-lg text-hot-red mt-auto text-end">{{ item.price.toLocaleString() |
                                dollarSign | currency }}</p>
                        </div>
                    </div>
                </router-link>
            </ul>
            <button type="button"
                class="self-center px-10 py-3 bg-gray-400 text-white  hover:bg-gray-300 active:bg-gray-500 transition-colors md:w-auto w-full">查看更多</button>
        </div>
        <div></div>
    </div>
</template>

<script>
import http from '@/api/http'
import CustomModal from '@/components/CustomModal.vue';

export default {
    name: 'TicketsPage',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            flights: "",
            likesList: [],
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isCatchError: false,
        };
    },
    components: {
        CustomModal,
    },
    methods: {
        async getFlights() {
            const res = await http.get(`${this.apiBase}/product/flight`);
            this.flights = res.data.items;
        },
        async getLikes() {
            const token = localStorage.getItem('token');
            if (!token) return;
            try {
                const res = await http.get(`${this.apiBase}/cart`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.likesList = res.data.items;
                if (this.likesList.length === 0) {
                    return;
                }
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        findLike(id) {
            const token = localStorage.getItem('token');
            if (token) {
                return this.likesList.find(item => item.productId === id)
            }
        },
        async addToLikes(id) {
            const token = localStorage.getItem('token');
            if (!token) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '哇！登入才能使用收藏功能唷！';
                return;
            }
            try {
                await http.post(`${this.apiBase}/cart/items`, {
                    productId: id,
                    quantity: 1
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.getLikes();
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        async delLike(id) {
            const token = localStorage.getItem('token');
            if (!token) return;
            if (this.findLike(id)) {
                try {
                    await http.delete(`${this.apiBase}/cart/items`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        data: {
                            productId: id
                        }
                    });
                } catch (error) {
                    this.isModalOpen = true;
                    this.hasError = true;
                    this.modalContent = '伺服器錯誤，將轉跳回首頁';
                    this.isCatchError = true;
                }
                this.getLikes();
            }
        },
        toggleLike(id) {
            if (this.findLike(id)) {
                this.delLike(id);
            } else {
                this.addToLikes(id);
            }
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        }
    },
    created() {
        this.getFlights();
        this.getLikes();
    }

}
</script>