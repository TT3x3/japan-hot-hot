<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <div class=" flex flex-row gap-4">
                <div class="flex flex-col gap-2 w-full">
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 1</p>
                        <p class="text-sm text-base-light">結帳</p>
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
                <p class="font-bold text-xl text-base-heavy">高雄往返關西，極簡商務選航</p>
            </div>

            <div class="flex flex-col gap-4">
                <p class="font-bold text-xl text-base-heavy">購買資料</p>
                <div class="flex flex-row gap-2">
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">出發日期</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">2026/12/25</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">出發時間</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">07:30 AM</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-base-light">購買數量</p>
                        <p class="font-bold md:text-xl text-md text-base-heavy">3 <span class="text-sm">人</span></p>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-hot-red">回程日期</p>
                        <p class="font-bold md:text-xl text-md text-hot-red">2026/12/30</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-hot-red">回程時間</p>
                        <p class="font-bold md:text-xl text-md text-hot-red">06:30 PM</p>
                    </div>
                    <div class="bg-gray-100 md:px-8 px-2 py-4 w-full">
                        <p class="text-sm text-hot-red">購買天數</p>
                        <p class="font-bold md:text-xl text-md text-hot-red">5 <span class="text-sm">天</span></p>
                    </div>
                </div>
            </div>
            <div class="w-full h-px bg-gray-100"></div>

            <!-- 資訊欄 -->
            <div class="flex md:flex-row flex-col justify-between gap-4 text-base-heavy">
                <div class="flex flex-col gap-2 md:w-[150%] w-full">
                    <p class="font-bold text-xl ">收件資訊</p>
                    <div class="flex flex-col gap-4 border border-gray-100 px-6 md:py-6 py-4">
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="nameInput" class="inline-block w-24 font-bold text-base-light">購買人</label>
                                <input id="nameInput" type="text" v-model.trim="userInfo.password"
                                    @focus="errorInfo.password = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入購買人">
                            </div>
                            <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                errorInfo.password }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="emailInput"
                                    class="inline-block w-24 font-bold text-base-light">Email</label>
                                <input id="emailInput" type="text" v-model.trim="userInfo.password"
                                    @focus="errorInfo.password = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入Email">
                            </div>
                            <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                errorInfo.password }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="phoneInput" class="inline-block w-24 font-bold text-base-light">聯絡電話</label>
                                <input id="phoneInput" type="text" v-model.trim="userInfo.password"
                                    @focus="errorInfo.password = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入聯絡電話">
                            </div>
                            <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                errorInfo.password }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="addressInput" class="inline-block w-24 font-bold text-base-light">地址</label>
                                <input id="addressInput" type="text" v-model.trim="userInfo.password"
                                    @focus="errorInfo.password = ''" class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入地址">
                            </div>
                            <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                errorInfo.password }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-start">
                                <label for="noteInput" class="inline-block w-24 font-bold text-base-light">備註</label>
                                <textarea id="noteInput" type="text" v-model.trim="userInfo.password" rows="2" cols="20"
                                    maxlength="80" @focus="errorInfo.password = ''"
                                    class="w-full border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.password }"></textarea>
                            </div>
                            <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                errorInfo.password }}</small>
                        </div>
                    </div>
                </div>

                <!-- 付款資訊 -->
                <div class="flex flex-col gap-2 w-full">
                    <p class="font-bold text-xl ">價格資訊</p>
                    <div class="flex flex-col gap-4 border border-gray-100 p-6">
                        <div class="flex flex-row w-full items-center">
                            <label for="paymentInput" class="inline-block w-24 font-bold text-base-light">支付方式</label>
                            <select id="paymentInput" type="text" v-model.trim="userInfo.password"
                                @focus="errorInfo.password = ''"
                                class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入支付方式">
                                <option value="">選擇支付方式</option>
                                <option value="cash">現金</option>
                                <option value="card">信用卡</option>
                            </select>
                        </div>
                        <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                            errorInfo.password }}</small>
                        <div class="flex flex-row items-center justify-between bg-gray-100 p-6">
                            <p>總金額</p>
                            <p class="font-bold text-xl text-hot-red">NT$ 280,000</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <router-link to="/checkout/passport"
                            class="bg-hot-red hover:bg-red-500 active:bg-red-700 px-10 py-3 w-full font-bold text-center text-white">確認</router-link>
                        <button
                            class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CheckoutPage',
    data() {
        return {
            date: null,
            userInfo: {
                email: '',
                password: '',

            },
            errorInfo: {
                email: '',
                password: '',
                date: '',

            },
        }
    },
    methods: {
        addPeople() {
            if (this.passportInfo.length > 20) return;
            const newItem = {
                firstName: '',
                secondName: '',
                id: '',
                passportCode: '',
                exp: '',
            };
            this.passportInfo.push(newItem);
        }
    },
    computed: {
        minDate() {
            const today = new Date();
            today.setMonth(today.getMonth() + 6);
            return today;
        },
        maxDate() {
            const maxMonth = new Date();
            maxMonth.setMonth(maxMonth.getMonth() + 60);
            return maxMonth;
        }
    }
}
</script>