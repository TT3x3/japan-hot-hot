<template>
    <div class="flex flex-col gap-32 w-full">
        <CustomModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <div class=" flex flex-row md:gap-4 gap-1">
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 1</p>
                        <p class="text-sm text-gray-400">結帳</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-gray-400"></div>
                    <div class="p-1">
                        <p class="font-bold text-gray-400">Step 2</p>
                        <p class="text-sm text-gray-400">填寫護照</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-gray-400"></div>
                    <div class="p-1">
                        <p class="font-bold text-gray-400">Step 3</p>
                        <p class="text-sm text-gray-400">訂單確認</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-gray-400"></div>
                    <div class="p-1">
                        <p class="font-bold text-gray-400">Step 4</p>
                        <p class="text-sm text-gray-400">完成！</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <img src="../assets/images/carousel-3.jpg" class="w-full h-64 object-cover" alt="">
                <p class="font-extrabold text-xl text-base-heavy">高雄往返關西，極簡商務選航</p>
            </div>

            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl text-base-heavy">購買資料</p>
                <div class="flex flex-row gap-2">
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">出發日期</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">{{ orderInfo.startDate || orderInfo.date
                            }}</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">出發時間</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">{{ orderInfo.departureTime
                            || orderInfo.scheduleTime }}</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">購買數量</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">{{ orderInfo.peopleCount }}<span
                                class="text-sm">人</span></p>
                    </div>
                </div>
            </div>
            <div class="w-full h-px bg-gray-100"></div>

            <!-- 資訊欄 -->
            <div class="flex md:flex-row flex-col justify-between gap-4 text-base-heavy">
                <div class="flex flex-col gap-2 md:w-[150%] w-full">
                    <div class="flex items-center">
                        <p class="font-bold text-xl ">收件資訊</p>
                        <p class="text-sm px-4 text-gray-400">* 為必填欄位</p>
                    </div>
                    <div class="flex flex-col gap-4 border border-gray-100 md:px-6 px-2 md:py-6 py-4">
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <label for="nameInput"
                                    class="inline-block w-24 font-bold text-base-light md:text-base text-sm">姓名<span
                                        class="text-hot-red">*</span></label>
                                <input id="nameInput" type="text" v-model.trim="userInfo.name"
                                    @focus="errorInfo.name = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.name }" placeholder="請輸入姓名">
                            </div>
                            <small v-if="errorInfo.name" class="text-sm text-end text-hot-red">{{
                                errorInfo.name }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <label for="emailInput"
                                    class="inline-block w-24 font-bold text-base-light md:text-base text-sm">Email<span
                                        class="text-hot-red">*</span></label>
                                <input id="emailInput" type="text" v-model.trim="userInfo.email"
                                    @focus="errorInfo.email = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.email }" placeholder="請輸入Email">
                            </div>
                            <small v-if="errorInfo.email" class="text-sm text-end text-hot-red">{{
                                errorInfo.email }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                                <label for="phoneInput"
                                    class="inline-block w-24 font-bold text-base-light md:text-base text-sm">聯絡電話<span
                                        class="text-hot-red">*</span></label>
                                <input id="phoneInput" type="text" v-model.trim="userInfo.phone"
                                    @focus="errorInfo.phone = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.phone }" placeholder="請輸入聯絡電話">
                            </div>
                            <small v-if="errorInfo.phone" class="text-sm text-end text-hot-red">{{
                                errorInfo.phone }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-2 px-4"
                            :class="{ 'border border-hot-red py-2': errorInfo.address }">
                            <div class="flex md:flex-row flex-col gap-4">
                                <div class="flex flex-col w-full">
                                    <label for="citySelect"
                                        class="inline-block w-24 font-bold text-base-light md:text-base text-sm">縣市<span
                                            class="text-hot-red">*</span></label>
                                    <v-select id="citySelect" v-model="selectCity" @open="openCitySelect"
                                        label="CityName" placeholder="請選擇" :options="cities"></v-select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="citySelect"
                                        class="inline-block w-24 font-bold text-base-light md:text-base text-sm">鄉鎮市<span
                                            class="text-hot-red">*</span></label>
                                    <v-select label="AreaName" v-model="selectArea" :disabled="!selectCity"
                                        placeholder="請選擇" :options="areaOptions"></v-select>
                                </div>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="citySelect"
                                    class="inline-block w-24 font-bold text-base-light md:text-base text-sm">詳細地址<span
                                        class="text-hot-red">*</span></label>
                                <input id="addressInput" type="text" v-model.trim="userInfo.address"
                                    @focus="errorInfo.address = ''" class="w-full border border-gray-300 px-2 py-1"
                                    placeholder="請輸入詳細地址">
                            </div>
                            <small v-if="errorInfo.address" class="text-sm text-end text-hot-red">{{
                                errorInfo.address }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex md:flex-row flex-col w-full items-start">
                                <label for="noteInput"
                                    class="inline-block w-24 font-bold text-base-light md:text-base text-sm">備註</label>
                                <textarea id="noteInput" type="text" v-model.trim="userInfo.note" rows="5"
                                    maxlength="80" @focus="errorInfo.note = ''"
                                    class="w-full border border-gray-300 px-2 py-1 resize-none"
                                    :class="{ 'border-hot-red': errorInfo.note }"></textarea>
                            </div>
                            <small v-if="errorInfo.note" class="text-sm text-end text-hot-red">{{
                                errorInfo.note }}</small>
                        </div>
                    </div>
                </div>

                <!-- 付款資訊 -->
                <div class="flex flex-col gap-2 w-full">
                    <p class="font-bold text-xl ">價格資訊</p>
                    <div class="flex flex-col gap-4 border border-gray-100 p-6">
                        <div class="flex md:flex-row flex-col w-full md:items-center items-start">
                            <label for="paymentInput"
                                class="inline-block w-24 font-bold text-base-light md:text-base text-sm">支付方式</label>
                            <select id="paymentInput" type="text" v-model.trim="userInfo.payment"
                                @focus="errorInfo.payment = ''"
                                class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                :class="{ 'border-hot-red': errorInfo.payment }" placeholder="請輸入支付方式">
                                <option value="" disabled>選擇支付方式</option>
                                <option value="cash">現金</option>
                                <option value="card" disabled>信用卡(尚未開放)</option>
                            </select>
                        </div>
                        <small v-if="errorInfo.payment" class="text-sm text-end text-hot-red">{{
                            errorInfo.payment }}</small>
                        <div
                            class="flex md:flex-row flex-col md:items-center items-start justify-between bg-gray-100 p-6">
                            <p>總金額</p>
                            <p class="font-bold text-xl text-hot-red">{{ orderInfo.totalAmount | dollarSign | currency
                                }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <button type="button" @click.prevent="saveCheckoutInfo()"
                            class="bg-hot-red hover:bg-red-500 active:bg-red-700 px-10 py-3 w-full font-bold text-center text-white">確認</button>
                        <button type="button" @click.prevent="$router.back(-1)"
                            class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/api/http'
import cities from '@/json/city.json';
import { useOrderStore } from '@/stores/order';
import CustomModal from '@/components/CustomModal.vue';

export default {
    name: 'CheckoutPage',
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            store: '',
            cities,
            selectCity: null,
            selectArea: null,
            date: null,
            userInfo: {
                name: '',
                email: '',
                phone: '',
                address: '',
                note: '',
                payment: '',
            },
            isError: false,
            errorInfo: {
                name: '',
                email: '',
                phone: '',
                address: '',
                note: '',
                payment: '',
            },
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            isCatchError: false,
        }
    },
    components: {
        CustomModal,
    },
    created() {
        this.store = useOrderStore();
    },
    methods: {
        openCitySelect() {
            this.errorInfo.address = '';
            this.selectCity = '';
        },
        validateForm() {
            const nameRule = /^[A-Za-z\u4E00-\u9FFF\s-]{1,10}$/;
            if (this.userInfo.name.trim() === '') {
                this.isError = true;
                this.errorInfo.name = '姓名不可空白';
            }
            if (!nameRule.test(this.userInfo.name)) {
                this.isError = true;
                this.errorInfo.name = '姓名不可使用英文/中文以外的文字';
            }

            const emailRule = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (this.userInfo.email.trim() === '') {
                this.isError = true;
                this.errorInfo.email = 'Email不可空白';
            }
            if (!emailRule.test(this.userInfo.email)) {
                this.isError = true;
                this.errorInfo.email = '請輸入正確的Email格式';
            }

            const phoneRule = /^09\d{8}$/;
            if (this.userInfo.phone.trim() === '') {
                this.isError = true;
                this.errorInfo.phone = '電話不可空白';
            }
            if (!phoneRule.test(this.userInfo.phone)) {
                this.isError = true;
                this.errorInfo.phone = '請輸入正確的電話格式';
            }

            const noteRule = /^[A-Za-z0-9\u4e00-\u9fa5\s.,!?'"()\-_:]+$/;
            if (this.userInfo.note && !noteRule.test(this.userInfo.note)) {
                this.isError = true;
                this.errorInfo.note = '不允使用 < > ／＼ = & 等特殊符號。';
            }

            if (this.userInfo.address.trim() === "" || this.selectCity === null || this.selectArea === null) {
                this.isError = true;
                this.errorInfo.address = '必須完整填寫並選擇地址'
            }

            const addressRule = /^[\u4e00-\u9fa5a-zA-Z0-9\s（）()\-_.#/,，．／]+$/;
            if (!addressRule.test(this.userInfo.address)) {
                this.isError = true;
                this.errorInfo.address = '請填寫常規台灣地址'
            }

            if (this.userInfo.payment.trim() === '') {
                this.isError = true;
                this.errorInfo.payment = '付款方式不可空白';
            }
        },
        async saveCheckoutInfo() {
            this.validateForm();
            if (this.isError === true) return;
            const info = {
                name: this.userInfo.name,
                email: this.userInfo.email,
                phone: this.userInfo.phone,
                address: this.userInfo.address,
                remark: this.userInfo.note || '',
                paymentMethod: this.userInfo.payment,
            }
            try {
                const token = localStorage.getItem('token');
                await http.patch(`${this.apiBase}/orders/${this.orderInfo.orderId}/contact`, info, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.$router.push(`passport/${this.orderInfo.orderId}`)
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            }
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        }
    },
    computed: {
        orderInfo() {
            return this.store.orderInit;
        },
        areaOptions() {
            return this.selectCity ? this.selectCity.AreaList : []
        }
    },
    watch: {
        selectCity() {
            this.selectArea = null
        }
    },
}
</script>