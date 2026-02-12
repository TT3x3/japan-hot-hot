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
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 2</p>
                        <p class="text-sm text--base-light">填寫護照</p>
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

            <!-- 資訊欄 -->
            <div class="flex justify-center">
                <div class="flex flex-col justify-center ic gap-8 text-base-heavy w-[60%]">
                    <p class="font-bold text-xl pt-4">護照資訊</p>
                    <p class="text-sm text-hot-red">※務必與護照上的資訊相同，否則無法使用票券。</p>
                    <div v-for="(people, index) in passportInfo" :key="index"
                        class="flex flex-col gap-4 bg-gray-50 border border-gray-200 px-6 md:py-6 py-4">
                        <div class="flex flex-row justify-between ">
                            <div class="flex flex-col w-[70%] gap-1 px-4">
                                <div class="flex flex-row items-center">
                                    <label for="firstNameInput"
                                        class="inline-block  w-20 font-bold text-base-light">姓氏</label>
                                    <input id="firstNameInput" type="text" v-model.trim="people.firstName"
                                        @focus="errorInfo.firstName = ''"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': errorInfo.firstName }" placeholder="請輸入護照姓氏">
                                </div>
                                <small v-if="errorInfo.firstName" class="text-sm text-end text-hot-red">{{
                                    errorInfo.firstName }}</small>
                            </div>
                            <div class="flex flex-col gap-1 px-4 w-full">
                                <div class="flex flex-row  items-center">
                                    <label for="secondNameInput"
                                        class="inline-block  w-20 font-bold text-base-light">名字</label>
                                    <input id="secondNameInput" type="text" v-model.trim="people.secondName"
                                        @focus="errorInfo.secondName = ''"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': errorInfo.secondName }" placeholder="請輸入護照名稱">
                                </div>
                                <small v-if="errorInfo.secondName" class="text-sm text-end text-hot-red">{{
                                    errorInfo.secondName }}</small>
                            </div>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="idInput" class="inline-block w-20 font-bold text-base-light">身分證</label>
                                <input id="idInput" type="text" v-model.trim="people.id" @focus="errorInfo.id = ''"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.id }" placeholder="請輸入身分證">
                            </div>
                            <small v-if="errorInfo.id" class="text-sm text-end text-hot-red">{{
                                errorInfo.id }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="passportCodeInput"
                                    class="inline-block w-20 font-bold text-base-light">護照號碼</label>
                                <input id="passportCodeInput" type="text" v-model.trim="people.passportCode"
                                    @focus="errorInfo.passportCode = ''"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': errorInfo.passportCode }" placeholder="請輸入護照號碼">
                            </div>
                            <small v-if="errorInfo.passportCode" class="text-sm text-end text-hot-red">{{
                                errorInfo.passportCode }}</small>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div class="flex flex-col gap-1 px-4">
                            <div class="flex flex-row w-full items-center">
                                <label for="dateInput" class="inline-block w-20 font-bold text-base-light">證件效期</label>
                                <div class="relative w-full"
                                    :class="errorInfo.exp ? 'border border-red-500' : 'border-none'" id="dateInput">
                                    <v-date-picker v-model="people.exp" :columns="2" :min-date="minDate"
                                        :max-date="maxDate" color="red"
                                        :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                        :masks="{ input: 'YYYY / MM / DD' }">
                                        <template #default="{ inputValue, togglePopover }">
                                            <input type="text" :value="inputValue" readonly @click="togglePopover"
                                                @focus="errorInfo.exp = false"
                                                class="bg-white border border-gray-300 px-2 py-1 w-[100%] cursor-pointer"
                                                placeholder="請選擇日期" />
                                        </template>
                                    </v-date-picker>
                                </div>
                            </div>
                            <small v-if="errorInfo.exp" class="text-sm text-end text-hot-red">{{
                                errorInfo.exp }}</small>
                        </div>
                    </div>
                    <button @click.prevent="addPeople()"
                        class="bg-gray-100 hover:bg-gray-50 active:bg-gray-200 border border-gray-300 px-10 py-3 w-full text-gray-400"><i
                            class="fa-solid fa-square-plus fa-lg"></i> 新增旅客</button>
                    <div class="flex flex-row gap-4">
                        <button
                            class=" px-10 py-3 w-full bg-hot-red hover:bg-red-500 active:bg-red-700  text-white">確認送出</button>
                        <router-link to="/checkout"
                            class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</router-link >
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
            passportInfo: [
                {
                    firstName: 'YELLOW',
                    secondName: 'FLY-CAT',
                    id: 'S123456789',
                    passportCode: '123456789',
                    exp: '2028/02/28',
                }
            ],
            errorInfo: {
                firstName: '',
                secondName: '',
                id: '',
                passportCode: '',
                exp: '',
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