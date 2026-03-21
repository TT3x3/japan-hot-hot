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
                    <div class="w-full h-1 bg-hot-red"></div>
                    <div class="p-1">
                        <p class="font-bold text-hot-red">Step 2</p>
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

            <!-- 資訊欄 -->
            <div class="flex justify-center">
                <div class="flex flex-col justify-center ic gap-8 text-base-heavy md:w-[70%] w-full">
                    <div>
                        <p class="font-bold text-xl pt-4">護照資訊</p>
                        <p class="text-sm text-hot-red">※務必與護照上的資訊相同，否則無法使用票券。</p>
                        <p class="text-sm text-hot-red">※該訂單最多只能填寫 {{ orderInfo.peopleCount }} 位旅客資料</p>
                    </div>
                    <div v-for="(people, index) in passportInfo" :key="people.id"
                        class="flex flex-col gap-5 bg-gray-50 border border-gray-200 md:px-6 px-2 md:py-6 py-4">
                        <div class="flex justify-between">
                            <div class="flex items-center gap-1 text-gray-400">
                                <i class="fa-solid fa-user fa-sm"></i>
                                <p class="font-bold text-sm">旅客 {{ index + 1 }}</p>
                            </div>
                        </div>
                        <div class="flex md:flex-row flex-col md:justify-between md:gap-2 gap-5">
                            <div class="flex flex-col md:w-[70%] w-full gap-1">
                                <div class="flex flex-row items-center">
                                    <label for="lastNameInput"
                                        class="inline-block w-20 font-bold md:text-base text-sm text-base-light">姓氏</label>
                                    <input id="lastNameInput" type="text" v-model.trim="people.lastName"
                                        @focus="people.errors.lastName = ''; isError = false"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': people.errors.lastName }" placeholder="請輸入護照姓氏">
                                </div>
                                <small v-if="people.errors.lastName" class="text-sm text-end text-hot-red">{{
                                    people.errors.lastName }}</small>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <div class="flex flex-row  items-center">
                                    <label for="firstNameInput"
                                        class="inline-block  w-20 font-bold md:text-base text-sm text-base-light">名字</label>
                                    <input id="firstNameInput" type="text" v-model.trim="people.firstName"
                                        @focus="people.errors.firstName = ''; isError = false"
                                        class="w-full bg-white border border-gray-300 px-2 py-1 "
                                        :class="{ 'border-hot-red': people.errors.firstName }" placeholder="請輸入護照名稱">
                                </div>
                                <small v-if="people.errors.firstName" class="text-sm text-end text-hot-red">{{
                                    people.errors.firstName }}</small>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="idInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">身分證</label>
                                <input id="idInput" type="text" v-model.trim="people.idNumber"
                                    @focus="people.errors.idNumber = ''; isError = false"
                                    @input="people.idNumber = $event.target.value.toUpperCase()"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': people.errors.idNumber }" placeholder="請輸入身分證">
                            </div>
                            <small v-if="people.errors.idNumber" class="text-sm text-end text-hot-red">{{
                                people.errors.idNumber }}</small>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="passportNumberInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">護照號碼</label>
                                <input id="passportNumberInput" type="text" v-model.trim="people.passportNumber"
                                    @focus="people.errors.passportNumber = ''; isError = false"
                                    class="w-full bg-white border border-gray-300 px-2 py-1 "
                                    :class="{ 'border-hot-red': people.errors.passportNumber }" placeholder="請輸入護照號碼">
                            </div>
                            <small v-if="people.errors.passportNumber" class="text-sm text-end text-hot-red">{{
                                people.errors.passportNumber }}</small>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex flex-row w-full items-center">
                                <label for="dateInput"
                                    class="inline-block w-20 font-bold md:text-base text-sm text-base-light">證件效期</label>
                                <div class="relative w-full"
                                    :class="people.errors.passportExpiry ? 'border border-red-500' : 'border-none'"
                                    id="dateInput">
                                    <v-date-picker v-model="people.passportExpiry" :columns="1" :min-date="minDate"
                                        :max-date="maxDate" color="red"
                                        :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                        :masks="{ input: 'YYYY / MM / DD' }">
                                        <template #default="{ inputValue, togglePopover }">
                                            <input type="text" :value="inputValue" readonly @click="togglePopover"
                                                @focus="people.errors.passportExpiry = false; isError = false"
                                                class="bg-white border border-gray-300 px-2 py-1 w-[100%] cursor-pointer"
                                                placeholder="請選擇日期" />
                                        </template>
                                    </v-date-picker>
                                </div>
                            </div>
                            <small v-if="people.errors.passportExpiry" class="text-sm text-end text-hot-red">{{
                                people.errors.passportExpiry }}</small>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <button @click.prevent="savePassportInfo()" type="button"
                            class=" px-10 py-3 w-full bg-hot-red hover:bg-red-500 active:bg-red-700  text-white">確認送出</button>
                        <button @click.prevent="$router.back(-1)" type="button"
                            class="bg-gray-400 hover:bg-gray-300 active:bg-gray-500 px-10 py-3 w-full text-center text-white">返回</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useOrderStore } from '@/stores/order';
import CustomModal from '@/components/CustomModal.vue';

export default {
    name: 'CheckoutPage',
    components: {
        CustomModal,
    },
    data() {
        return {
            apiBase: process.env.VUE_APP_API_PATH,
            store: '',
            date: null,
            passportInfo: [],
            isError: false,
            isOver: false,
            isCatchError: false,
            isModalOpen: false,
            hasError: false,
            modalContent: '',
        }
    },
    created() {
        this.store = useOrderStore();
        this.initPassport();
    },
    methods: {
        initPassport() {
            this.passportInfo = Array.from({ length: this.orderInfo.peopleCount }, () => (
                {
                    id: Math.random(),
                    firstName: '',
                    lastName: '',
                    idNumber: '',
                    passportNumber: '',
                    passportExpiry: '',
                    errors: {
                        firstName: '',
                        lastName: '',
                        idNumber: '',
                        passportNumber: '',
                        passportExpiry: '',
                    }
                }
            ))
        },
        validateForm() {
            let isValid = true;
            this.isError = false;
            this.passportInfo.forEach(p => {
                const nameRule = /^[A-Za-z,\-\s]+$/;
                if (!p.firstName || p.firstName.trim() === '') {
                    isValid = false;
                    p.errors.firstName = '姓氏不可空白';
                }
                if (p.firstName && !nameRule.test(p.firstName)) {
                    isValid = false;
                    p.errors.firstName = '名稱格式錯誤';
                }

                if (!p.lastName || p.lastName.trim() === '') {
                    isValid = false;
                    p.errors.lastName = '名字不可空白';
                }
                if (p.lastName && !nameRule.test(p.lastName)) {
                    isValid = false;
                    p.errors.lastName = '名稱格式錯誤';
                }

                if (!p.idNumber || p.idNumber.trim() === '') {
                    p.errors.idNumber = '*請輸入身份證字號'
                    isValid = false;
                }
                const idRule = /^[A-Z]\d{9}$/;
                if (!idRule.test(p.idNumber)) {
                    p.errors.idNumber = '*不符合台灣身分證格式'
                    isValid = false;
                }

                if (!p.passportNumber || p.passportNumber.trim() === '') {
                    p.errors.passportNumber = '*請輸入護照號碼';
                    isValid = false;
                }
                const passportNumberRule = /^\d{9}$/;
                if (!passportNumberRule.test(p.passportNumber)) {
                    p.errors.passportNumber = '*護照必須是9碼數字';
                    isValid = false;
                }

                if (!p.passportExpiry) {
                    p.errors.passportExpiry = '*請輸入護照號碼';
                    isValid = false;
                }
            })
            this.isError = !isValid;
            return isValid;
        },
        async savePassportInfo() {
            if (!this.validateForm()) return;
            if (this.findPassport()) return;
            if (this.isError) return;
            await this.store.savePassportInfo({
                passportInfo: this.passportInfo,
                apiBase: this.apiBase,
                orderId: this.orderInfo.orderId,
                router: this.$router,
            })
        },
        findPassport() {
            const setIdNumber = new Set();
            const setPassportNumber = new Set();
            for (let p of this.passportInfo) {
                if (setIdNumber.has(p.idNumber) ||
                    setPassportNumber.has(p.passportNumber)) {
                    this.isError = true;
                    alert('部分護照資訊不可重複')
                    return true;
                }
                setIdNumber.add(p.idNumber);
                setPassportNumber.add(p.passportNumber);
            }
            return false;
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
        minDate() {
            const today = new Date();
            today.setMonth(today.getMonth() + 6);
            return today;
        },
        maxDate() {
            const maxMonth = new Date();
            maxMonth.setMonth(maxMonth.getMonth() + 60);
            return maxMonth;
        },
    },
}
</script>