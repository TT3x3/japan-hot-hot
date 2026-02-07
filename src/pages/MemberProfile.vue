<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">會員資料</h1>
        </div>
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-8">
            <p class="font-bold text-2xl text-base-heavy">哩賀！甲奔未！{{ userInfo.username }}！！！</p>
            <div class="text-base-heavy">
                <div class="flex flex-row gap-4 ps-2 pb-4 items-center">
                    <i class="fa-solid fa-user"></i>
                    <p class="font-bold text-lg text-base-heavy">會員資料</p>
                </div>
                <div class="bg-white flex justify-center p-8">
                    <form class="bg-white px-10 py-18 w-full max-w-3xl flex flex-col gap-6 justify-center">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center items-center">
                                    <label for="emailInput"
                                        class="inline-block w-28 font-bold text-base-light">Email</label>
                                    <input id="emailInput" type="email" v-model.trim="userInfo.email"
                                        class="w-full border border-gray-300 bg-gray-200 px-2 py-1 text-base-light" D
                                        disabled="disabled">
                                </div>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="usernameInput"
                                        class="inline-block w-28 font-bold text-base-light">會員名稱<span
                                            class="text-red-500">*</span></label>
                                    <input id="usernameInput" type="text" v-model.trim="userInfo.username"
                                        @focus="isError.username = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.username }" placeholder="請輸入會員名稱">
                                </div>
                                <small v-if="isError.username" class="text-sm text-end text-hot-red">{{
                                    isError.username }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="realNameInput"
                                        class="inline-block w-28 font-bold text-base-light">真實姓名<span
                                            class="text-red-500">*</span></label>
                                    <input id="realNameInput" type="text" v-model.trim="userInfo.realName"
                                        @focus="isError.realName = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.realName }" placeholder="請輸入真實姓名">
                                </div>
                                <small v-if="isError.realName" class="text-sm text-end text-hot-red">{{
                                    isError.realName }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="passportNameInput"
                                        class="inline-block w-28 font-bold text-base-light">護照名稱<span
                                            class="text-red-500">*</span></label>
                                    <input id="passportNameInput" type="text" v-model.trim="userInfo.passportName"
                                        @focus="isError.passportName = ''"
                                        @input="userInfo.passportName = $event.target.value.toUpperCase()"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.passportName }" placeholder="請輸入護照名稱">
                                </div>
                                <small v-if="isError.passportName" class="text-sm text-end text-hot-red">{{
                                    isError.passportName }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="passportNumberInput"
                                        class="inline-block w-28 font-bold text-base-light">護照號碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="passportNumberInput" type="text" v-model.trim="userInfo.passportNumber"
                                        @focus="isError.passportNumber = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.passportNumber }" placeholder="請輸入護照號碼">
                                </div>
                                <small v-if="isError.passportNumber" class="text-sm text-end text-hot-red">{{
                                    isError.passportNumber }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="idNumberInput"
                                        class="inline-block w-28 font-bold text-base-light">身分證號碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="idNumberInput" type="text" v-model.trim="userInfo.idNumber"
                                        @focus="isError.idNumber = ''"
                                        @input="userInfo.idNumber = $event.target.value.toUpperCase()"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.idNumber }" placeholder="請輸入身分證號碼">
                                </div>
                                <small v-if="isError.idNumber" class="text-sm text-end text-hot-red">{{
                                    isError.idNumber }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="birthdayInput"
                                        class="inline-block w-28 font-bold text-base-light">出生日期<span
                                            class="text-red-500">*</span></label>
                                    <div class="relative w-full"
                                        :class="isError.birthday ? 'border border-red-500' : 'border-none'">
                                        <v-date-picker v-model="userInfo.birthday" :columns="2" :min-date="minDate"
                                            id="birthdayInput" :max-date="maxDate" color="red"
                                            :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                            :masks="{ input: 'YYYY / MM / DD' }">
                                            <template #default="{ inputValue, togglePopover }">
                                                <input type="text" :value="inputValue" readonly @click="togglePopover"
                                                    @focus="isError.birthday = false"
                                                    class="border border-gray-300  w-full px-2 py-1 cursor-pointer"
                                                    placeholder="請選擇日期" />
                                            </template>
                                        </v-date-picker>
                                    </div>
                                </div>
                                <small v-if="isError.birthday" class="text-sm text-end text-hot-red">{{
                                    isError.birthday }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="phoneInput"
                                        class="inline-block w-28 font-bold text-base-light">手機號碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="phoneInput" type="tel" v-model.trim="userInfo.phone"
                                        @focus="isError.phone = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.phone }" placeholder="請輸入手機號碼">
                                </div>
                                <small v-if="isError.phone" class="text-sm text-end text-hot-red">{{
                                    isError.phone }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1 px-4">
                                <div class="flex flex-row w-full items-center">
                                    <label for="addressInput"
                                        class="inline-block w-28 font-bold text-base-light">地址</label>
                                    <input id="addressInput" type="text" v-model.trim="userInfo.address"
                                        @focus="isError.address = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.address }" placeholder="請輸入地址">
                                </div>
                                <small v-if="isError.address" class="text-sm text-end text-hot-red">{{
                                    isError.address }}</small>
                            </div>
                        </div>
                        <div class="flex gap-4 justify-center items-center">
                            <button type="submit" @click.prevent="validateForm()"
                                class="w-36 cursor-pointer bg-hot-red text-white py-3  hover:bg-red-500 active:bg-red-700 transition-colors">確認變更</button>
                            <router-link to="/member"
                                class="w-36 cursor-pointer bg-gray-400 text-white text-center py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">返回</router-link>
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div>
                            <p class="text-xs px-4 text-red-500">* 為必填欄位。</p>
                            <p class="text-xs px-4 text-red-500">* 務必確認證件及護照相關資料，否則將可能損失購票權益。</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div></div>

    </div>
</template>

<script>
export default {
    name: 'MemberProfile',
    data() {
        return {
            userInfo: {
                email: 'fly_dragon2000@gmail.com',
                username: '飛龍飛上天',
                realName: '黃飛貓',
                passportName: 'HUANG FEI-MAO',
                passportNumber: '888800123',
                idNumber: 'A123456789',
                birthday: '1978-2-28',
                phone: '0912345678',
                address: '飛天市昇龍區雲海里飛龍大道999號',
            },
            isError: {
                username: '',
                realName: '',
                passportName: '',
                passportNumber: '',
                idNumber: '',
                birthday: '',
                phone: '',
                address: '',
            },
            oldInfo: {},
            isFormValid: false,
        }
    },
    mounted() {
        this.oldInfo = { ...this.userInfo };
    },
    methods: {
        validateForm() {
            this.isFormValid = true;

            if (this.userInfo.username.trim() === '') {
                this.isError.username = '*請輸入會員名稱';
                this.isFormValid = false;
            }
            if (this.userInfo.username.length < 2 || this.userInfo.username.length > 10) {
                this.isError.username = '*會員名稱長度需介於2到10個字元';
                this.isFormValid = false;
            }

            if (this.userInfo.realName.trim() === '') {
                this.isError.realName = '*請輸入真實名稱';
                this.isFormValid = false;
            }
            if (this.userInfo.realName.length < 2 || this.userInfo.realName.length > 5) {
                this.isError.realName = '*真實名稱長度需介於2到5個字元';
                this.isFormValid = false;
            }

            if (this.userInfo.realName.trim() === '') {
                this.isError.realName = '*請輸入真實名稱';
                this.isFormValid = false;
            }
            if (this.userInfo.realName.length < 2 || this.userInfo.realName.length > 5) {
                this.isError.realName = '*真實名稱長度需介於2到5個字元';
                this.isFormValid = false;
            }

            if (this.userInfo.passportName.trim() === '') {
                this.isError.passportName = '*請輸入護照名稱';
                this.isFormValid = false;
            }
            if (this.userInfo.passportName.length < 4 || this.userInfo.passportName.length > 39) {
                this.isError.passportName = '*護照名稱長度需介於4到39個字元';
                this.isFormValid = false;
            }

            const passportNameRule = /^[A-Z,\-\s]+$/;

            if (!passportNameRule.test(this.userInfo.passportName)) {
                this.isError.passportName = '*護照名稱只能包含大寫英文字母、逗號(,)或連字號(-)';
                this.isFormValid = false;
            }

            if (this.userInfo.passportNumber.trim() === '') {
                this.isError.passportNumber = '*請輸入護照號碼';
                this.isFormValid = false;
            }
            const numberRule = /^\d+$/;
            const passportNumberRule = /^\d{9}$/;
            if (!passportNumberRule.test(this.userInfo.passportNumber) || !numberRule.test(this.userInfo.passportNumber)) {
                this.isError.passportNumber = '*護照必須是9碼數字';
                this.isFormValid = false;
            }

            if (this.userInfo.idNumber.trim() === '') {
                this.isError.idNumber = '*請輸入身份證字號'
                this.isFormValid = false;
            }
            const idRule = /^[A-Z]\d{9}$/;
            if (!idRule.test(this.userInfo.idNumber)) {
                this.isError.idNumber = '*不符合台灣身分證格式'
                this.isFormValid = false;
            }

            if (!this.userInfo.birthday) {
                this.isError.birthday = '*請選擇出生日期';
                this.isFormValid = false;
            }

            const phoneRule = /^09[0-9]{8}$/;
            if (this.userInfo.phone.trim() === '') {
                this.isError.phone = '*請輸入手機號碼';
                this.isFormValid = false;
            }
            if (!phoneRule.test(this.userInfo.phone)) {
                this.isError.phone = '*請輸入正確的手機號碼';
                this.isFormValid = false;
            }

            if (this.userInfo.address.trim() === '') {
                this.isError.address = '*請輸入地址';
                this.isFormValid = false;
            }

            if (!this.isFormValid) return;
            if (JSON.stringify(this.userInfo) === JSON.stringify(this.oldInfo)) {
                alert('資料未變更');
                return;
            }
        },
    },
    computed: {
        minDate() {
            return new Date(1900, 0, 1);
        },
        maxDate() {
            const today = new Date();
            today.setDate(today.getDate() - 7);
            return today;
        }
    }
}
</script>