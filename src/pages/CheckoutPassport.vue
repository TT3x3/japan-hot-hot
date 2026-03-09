<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-12">
            <!-- 進度條 -->
            <div class=" flex flex-row md:gap-4 gap-1">
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
                        <p class="text-sm text-base-light">填寫護照</p>
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
                <div class="flex flex-col justify-center ic gap-8 text-base-heavy md:w-[70%] w-full">
                    <div>
                        <p class="font-bold text-xl pt-4">護照資訊</p>
                        <p class="text-sm text-hot-red">※務必與護照上的資訊相同，否則無法使用票券。</p>
                    </div>
                    <div v-for="(people, index) in passportInfo" :key="people.id"
                        class="flex flex-col gap-5 bg-gray-50 border border-gray-200 md:px-6 px-2 md:py-6 py-4">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-1 text-gray-400">
                                <i class="fa-solid fa-user fa-sm"></i>
                                <p class="font-bold text-sm">旅客 {{ index + 1 }}</p>
                            </div>
                            <button @click="deleteInfo(index)" :disabled="passportInfo.length === 1"
                                class="flex items-center gap-1"
                                :class="passportInfo.length === 1 ? 'hidden' : 'cursor-pointer text-red-700 hover:text-red-600 active:text-red-800'">
                                <p class="font-bold text-sm">刪除資料</p>
                                <i class="fa-solid fa-trash fa-sm"></i>
                            </button>
                        </div>
                        <div class="flex md:flex-row flex-col md:justify-between md:gap-2 gap-5">
                            <div class="flex flex-col md:w-[70%] w-full gap-1">
                                <div class="flex flex-row items-center">
                                    <label for="firstNameInput"
                                        class="inline-block w-20 font-bold md:text-base text-sm text-base-light">姓氏</label>
                                    <input id="firstNameInput" type="text" v-model.trim="people.firstName"
                                        @focus="people.errors.firstName = ''"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': people.errors.firstName }" placeholder="請輸入護照姓氏">
                                </div>
                                <small v-if="people.errors.firstName" class="text-sm text-end text-hot-red">{{
                                    people.errors.firstName }}</small>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <div class="flex flex-row  items-center">
                                    <label for="secondNameInput"
                                        class="inline-block  w-20 font-bold md:text-base text-sm text-base-light">名字</label>
                                    <input id="secondNameInput" type="text" v-model.trim="people.secondName"
                                        @focus="people.errors.secondName = ''"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': people.errors.secondName }" placeholder="請輸入護照名稱">
                                </div>
                                <small v-if="people.errors.secondName" class="text-sm text-end text-hot-red">{{
                                    people.errors.secondName }}</small>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="idInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">身分證</label>
                                <input id="idInput" type="text" v-model.trim="people.idCard"
                                    @focus="people.errors.idCard = ''"
                                    @input="people.idCard = $event.target.value.toUpperCase()"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': people.errors.idCard }" placeholder="請輸入身分證">
                            </div>
                            <small v-if="people.errors.idCard" class="text-sm text-end text-hot-red">{{
                                people.errors.idCard }}</small>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="passportCodeInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">護照號碼</label>
                                <input id="passportCodeInput" type="text" v-model.trim="people.passportCode"
                                    @focus="people.errors.passportCode = ''"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': people.errors.passportCode }" placeholder="請輸入護照號碼">
                            </div>
                            <small v-if="people.errors.passportCode" class="text-sm text-end text-hot-red">{{
                                people.errors.passportCode }}</small>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="dateInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">證件效期</label>
                                <div class="relative w-full"
                                    :class="people.errors.exp ? 'border border-red-500' : 'border-none'" id="dateInput">
                                    <v-date-picker v-model="people.exp" :columns="2" :min-date="minDate"
                                        :max-date="maxDate" color="red"
                                        :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                        :masks="{ input: 'YYYY / MM / DD' }">
                                        <template #default="{ inputValue, togglePopover }">
                                            <input type="text" :value="inputValue" readonly @click="togglePopover"
                                                @focus="people.errors.exp = false"
                                                class="bg-white border border-gray-300 px-2 py-1 w-[100%] cursor-pointer"
                                                placeholder="請選擇日期" />
                                        </template>
                                    </v-date-picker>
                                </div>
                            </div>
                            <small v-if="people.errors.exp" class="text-sm text-end text-hot-red">{{
                                people.errors.exp }}</small>
                        </div>
                    </div>
                    <div>
                        <button @click.prevent="addPeople()" :disabled="passportInfo.length >= peopleNum"
                            class="border-gray-300 px-10 py-3 w-full"
                            :class="passportInfo.length >= peopleNum ? 'cursor-not-allowed bg-gray-100 text-gray-300' : 'cursor-pointer text-gray-400 hover:text-gray-600 active:text-gray-800 hover:bg-gray-50 active:bg-gray-200 border'">
                            <i class="fa-solid fa-square-plus fa-lg"></i> 新增旅客</button>
                        <small v-if="passportInfo.length >= peopleNum " class="text-sm text-red-600">* 最多只能填寫 {{ peopleNum }} 位旅客資料</small>
                    </div>
                    <div class="flex flex-row gap-4">
                        <button @click.prevent="submitBtn()"
                            class=" px-10 py-3 w-full bg-hot-red hover:bg-red-500 active:bg-red-700  text-white">確認送出</button>
                        <router-link to="/checkout"
                            class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</router-link>
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
            peopleNum: 1,
            passportInfo: [
                {
                    id: Date.now(),
                    firstName: '',
                    secondName: '',
                    idCard: '',
                    passportCode: '',
                    exp: '',
                    errors: {
                        firstName: '',
                        secondName: '',
                        idCard: '',
                        passportCode: '',
                        exp: '',
                    }
                }
            ],
            isError: false,
            isOver: false,
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
    },
    methods: {
        addPeople() {
            if (this.passportInfo.length >= this.peopleNum) {
                this.isOver = true;
                return;
            }

            const newItem = {
                id: Date.now(),
                firstName: '',
                secondName: '',
                idCard: '',
                passportCode: '',
                exp: '',
                errors: {
                    firstName: '',
                    secondName: '',
                    idCard: '',
                    passportCode: '',
                    exp: '',
                }
            };
            this.passportInfo.push(newItem);
        },
        deleteInfo(i) {
            this.passportInfo.splice(i, 1);
        },
        submitBtn() {
            this.passportInfo.forEach(p => {
                const nameRule = /^[A-Z,\-\s]+$/;
                if (!p.firstName || p.firstName.trim() === '') {
                    this.isError = true;
                    p.errors.firstName = '姓氏不可空白';
                }
                if (p.firstName && !nameRule.test(p.firstName)) {
                    this.isError = true;
                    p.errors.firstName = '名稱格式錯誤';
                }

                if (!p.secondName || p.secondName.trim() === '') {
                    this.isError = true;
                    p.errors.secondName = '名字不可空白';
                }
                if (p.secondName && !nameRule.test(p.secondName)) {
                    this.isError = true;
                    p.errors.secondName = '名稱格式錯誤';
                }

                if (!p.idCard || p.idCard.trim() === '') {
                    p.errors.idCard = '*請輸入身份證字號'
                    this.isError = true;
                }
                const idRule = /^[A-Z]\d{9}$/;
                if (!idRule.test(p.idCard)) {
                    p.errors.idCard = '*不符合台灣身分證格式'
                    this.isError = true;
                }

                if (!p.passportCode || p.passportCode.trim() === '') {
                    p.errors.passportCode = '*請輸入護照號碼';
                    this.isError = true;
                }
                const passportNumberRule = /^\d{9}$/;
                if (!passportNumberRule.test(p.passportCode)) {
                    p.errors.passportCode = '*護照必須是9碼數字';
                    this.isError = true;
                }

                if (!p.exp) {
                    p.errors.exp = '*請輸入護照號碼';
                    this.isError = true;
                }

                if (this.isError) return;
            })
        },
    },

}
</script>