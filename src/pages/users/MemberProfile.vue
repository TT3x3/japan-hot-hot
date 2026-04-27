<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <BaseModal :is-modal-open="isModalOpen" :has-success="hasSuccess" :has-error="hasError"
            :modal-content="modalContent" @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <!-- top -->
        <MemberHero :banner-img="require('@/assets/images/carousel-4.jpg')" :page-title="pageTitle" />

        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-8">
            <p class="font-bold text-2xl text-base-heavy">哩賀！甲奔未！{{ oldInfo.name }}！</p>
            <div class="text-base-heavy">
                <div class="flex flex-row gap-4 ps-2 pb-4 items-center">
                    <i class="fa-solid fa-user"></i>
                    <p class="font-bold text-lg text-base-heavy">會員資料</p>
                </div>
                <div class="bg-white flex justify-center">
                    <form
                        class="bg-white md:px-10 px-8 md:py-18 py-12 w-full max-w-3xl flex flex-col gap-6 justify-center">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1">
                                <div class="flex md:flex-row flex-col md:items-center item-start w-full">
                                    <label for="emailInput"
                                        class="inline-block w-24 font-bold text-base-light">Email</label>
                                    <input id="emailInput" type="email" v-model.trim="userInfo.email"
                                        class="w-full border border-gray-300 bg-gray-200 px-2 py-1 text-base-light" D
                                        disabled="disabled">
                                </div>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="會員名稱" input-key="name" input-type="text" v-model="userInfo.name"
                                :error-title="isError.name" :clear-error-info="clearErrorInfo" required />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="真實姓名" input-key="realName" input-type="text"
                                v-model="userInfo.realName" :error-title="isError.realName"
                                :clear-error-info="clearErrorInfo" />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="護照名稱" input-key="passportName" input-type="text"
                                v-model="userInfo.passportName" :error-title="isError.passportName"
                                :clear-error-info="clearErrorInfo" />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="護照號碼" input-key="passportNumber" input-type="text"
                                v-model="userInfo.passportNumber" :error-title="isError.passportNumber"
                                :clear-error-info="clearErrorInfo" />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="身分證" input-key="idNumber" input-type="text"
                                v-model="userInfo.idNumber" :error-title="isError.idNumber"
                                :clear-error-info="clearErrorInfo" />
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1">
                                <div class="flex md:flex-row flex-col md:items-center item-start w-full">
                                    <label for="birthdayInput"
                                        class="inline-block w-24 font-bold text-base-light">出生日期<span
                                            class="text-hot-red">*</span></label>
                                    <div class="relative w-full"
                                        :class="isError.birthDate ? 'border border-red-500' : 'border-none'">
                                        <v-date-picker v-model="userInfo.birthDate" :columns="1" :min-date="minDate"
                                            id="birthdayInput" :max-date="maxDate" color="red"
                                            :popover="{ visibility: 'click', placement: 'bottom-start', appendTo: 'self' }"
                                            :masks="{ input: 'YYYY / MM / DD' }">
                                            <template #default="{ inputValue, togglePopover }">
                                                <input type="text" :value="inputValue" readonly @click="togglePopover"
                                                    @focus="isError.birthDate = false"
                                                    class="border border-gray-300  w-full px-2 py-1 cursor-pointer"
                                                    placeholder="請選擇日期" />
                                            </template>
                                        </v-date-picker>
                                    </div>
                                </div>
                                <small v-if="isError.birthDate" class="text-sm text-end text-hot-red">{{
                                    isError.birthDate }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="手機號碼" input-key="phone" input-type="tel" v-model="userInfo.phone"
                                :error-title="isError.phone" :clear-error-info="clearErrorInfo" required />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="地址" input-key="address" input-type="text" v-model="userInfo.address"
                                :error-title="isError.address" :clear-error-info="clearErrorInfo" />
                        </div>
                        <div class="flex md:flex-row flex-col gap-4 justify-center items-center md:py-0 py-4">
                            <BaseButton @click="patchUser" button-name="確認變更" is-red />
                            <BaseRouterLink go-to-path="/member" button-name="返回會員中心" :is-red="false" />
                        </div>
                        <div class="w-full h-px bg-gray-100"></div>
                        <div>
                            <p class="text-sm font-thin px-4 text-red-500">* 為必填欄位。</p>
                            <p class="text-sm font-thin px-4 text-red-500">* 務必確認證件及護照相關資料，否則將可能損失購票權益。</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div></div>

    </div>
</template>

<script>
import http from '@/api/http';
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import MemberHero from '@/components/layout/MemberHero.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'MemberProfile',
    data() {
        return {
            userInfo: {
                email: '',
                name: '',
                realName: '',
                passportName: '',
                passportNumber: '',
                idNumber: '',
                birthDate: null,
                phone: '',
                address: ''
            },
            isError: {
                name: '',
                realName: '',
                passportName: '',
                passportNumber: '',
                idNumber: '',
                birthDate: '',
                phone: '',
                address: '',
            },
            oldInfo: {
                email: '',
                name: '',
                realName: '',
                passportName: '',
                passportNumber: '',
                idNumber: '',
                birthDate: null,
                phone: '',
                address: ''
            },
            changeList: {},
            isFormValid: false,
            isCatchError: false,
            isModalOpen: false,
            hasError: false,
            hasSuccess: false,
            modalContent: '',
            pageTitle: '會員資料',
            isChanged: false,
        }
    },
    created() {
        this.getUser();
    },
    components: {
        BaseModal,
        MemberHero,
        BaseInput,
        BaseButton,
        BaseRouterLink,
    },
    methods: {
        async getUser() {
            const loading = useLoadingStore();
            loading.showPage();
            try {
                const token = localStorage.getItem('token');
                const res = await http.get(`/members/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const info = {
                    email: res.data.email || '',
                    name: res.data.name || '',
                    realName: res.data.realName || '',
                    passportName: res.data.passportName || '',
                    passportNumber: res.data.passportNumber || '',
                    idNumber: res.data.idNumber || '',
                    birthDate: res.data.birthDate ? new Date(res.data.birthDate) : '',
                    phone: res.data.phone || '',
                    address: res.data.address || '',
                }
                this.userInfo = { ...info };
                this.oldInfo = { ...info };
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.hasSuccess = false;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                loading.hidePage();
            }
        },
        async patchUser() {
            this.validateForm();
            if (!this.validateForm()) return;
            const loading = useLoadingStore();
            loading.showData();
            try {
                Object.keys(this.userInfo).forEach(key => {
                    if (this.userInfo[key] !== this.oldInfo[key]) {
                        this.changeList[key] = this.userInfo[key];
                    }
                });
                const token = localStorage.getItem('token');
                await http.patch(`/members/me`, this.changeList, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.getUser();
                this.changeList = {};
                this.isModalOpen = true;
                this.hasError = false;
                this.hasSuccess = true;
                this.isCatchError = false;
                this.modalContent = '資料更新成功！';
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.hasSuccess = false;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
                this.isCatchError = true;
            } finally {
                loading.hideData();
            }
        },
        validateForm() {
            const loading = useLoadingStore();
            loading.showData();
            this.isChanged = true;
            let isValid = true;
            const name = (this.userInfo.name || '').trim();
            if (name === '') {
                this.isError.name = '*請輸入會員名稱';
                isValid = false;
            } else if (this.userInfo.name.length < 2 || this.userInfo.name.length > 10) {
                this.isError.name = '*會員名稱長度需介於2到10個字元';
                isValid = false;
            }

            const realName = (this.userInfo.realName || '').trim();
            if (realName !== '') {
                if (this.userInfo.realName.length < 2 || this.userInfo.realName.length > 5) {
                    this.isError.realName = '*真實名稱長度需介於2到5個字元';
                    isValid = false;
                }
            }

            const passportName = (this.userInfo.passportName || '').trim();
            const passportNameRule = /^[A-Z,\-\s]+$/;
            if (passportName !== '') {
                if (passportName.trim() === '') {
                    this.isError.passportName = '*請輸入護照號碼';
                    isValid = false;
                } else if (this.userInfo.passportName.length < 4 || this.userInfo.passportName.length > 39) {
                    this.isError.passportName = '*護照名稱長度需介於4到39個字元';
                    isValid = false;
                } else if (!passportNameRule.test(this.userInfo.passportName)) {
                    this.isError.passportName = '*護照名稱只能包含大寫英文字母、逗號(,)或連字號(-)';
                    isValid = false;
                }
            }

            const passportNumber = (this.userInfo.passportNumber || '').trim();
            const numberRule = /^\d+$/;
            const passportNumberRule = /^\d{9}$/;
            if (passportNumber !== '') {
                if (passportNumber.trim() === '') {
                    this.isError.passportNumber = '*請輸入護照號碼';
                    isValid = false;
                } else if (!numberRule.test(this.userInfo.passportNumber)) {
                    this.isError.passportNumber = '*護照號碼只能包含數字';
                    isValid = false;

                } else if (!passportNumberRule.test(this.userInfo.passportNumber)) {
                    this.isError.passportNumber = '*護照號碼長度需為9個數字';
                    isValid = false;
                }
            }

            const idNumber = (this.userInfo.idNumber || '').trim();
            const idRule = /^[A-Z]\d{9}$/;
            if (idNumber !== '') {
                if (!idRule.test(this.userInfo.idNumber)) {
                    this.isError.idNumber = '*不符合台灣身分證格式'
                    isValid = false;
                }
            }

            if (!this.userInfo.birthDate) {
                this.isError.birthDate = '*請選擇出生日期';
                isValid = false;
            }

            const phone = (this.userInfo.phone || '').trim();
            const phoneRule = /^09[0-9]{8}$/;
            if (phone === '') {
                this.isError.phone = '*請輸入手機號碼';
                isValid = false;
            } else if (!phoneRule.test(this.userInfo.phone)) {
                this.isError.phone = '*請輸入正確的手機號碼';
                isValid = false;
            }

            const isSame = Object.keys(this.userInfo).every(key =>
                this.userInfo[key] === this.oldInfo[key] ||
                (this.userInfo[key] instanceof Date &&
                    this.oldInfo[key] instanceof Date &&
                    this.userInfo[key].getTime() === this.oldInfo[key].getTime())
            )
            if (isSame) {
                this.isModalOpen = true;
                this.hasError = true;
                this.hasSuccess = false;
                this.modalContent = '資料尚未變更';
                this.isCatchError = true;
                this.isChanged = false;
                isValid = false;
            }
            if (!isValid) loading.hideData();
            return isValid;
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            if (this.isChanged) {
                this.$router.push('/');
            }
        },
        clearErrorInfo(key) {
            this.isError[key] = '';
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