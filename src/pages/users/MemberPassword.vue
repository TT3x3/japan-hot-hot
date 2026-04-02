<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :has-success="hasSuccess" :modal-content="modalContent"
            @close="isModalOpen = false;" @confirm="handleModalClick()" />
        <!-- top -->
        <MemberHero :banner-img="require('@/assets/images/pic-05.jpg')" :page-title="pageTitle" />
        <div class="max-w-[80%] w-full mx-auto flex flex-col gap-8">
            <div class="text-base-heavy">
                <div class="flex flex-row gap-4 ps-2 pb-4 items-center">
                    <i class="fa-solid fa-user"></i>
                    <p class="font-bold text-lg text-base-heavy">會員密碼</p>
                </div>
                <div class="bg-white flex justify-center">
                    <form
                        class="bg-white md:px-10 px-8 md:py-18 py-12 w-full max-w-3xl flex flex-col gap-6 justify-center">
                        <div class="flex flex-col gap-4">
                            <BaseInput label-name="舊密碼" input-key="oldPassword" input-type="password"
                                v-model="passwordInfo.oldPassword" :error-title="isError.oldPassword"
                                :clear-error-info="clearErrorInfo" required />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="新密碼" input-key="newPassword" input-type="password"
                                v-model="passwordInfo.newPassword" :error-title="isError.newPassword"
                                :clear-error-info="clearErrorInfo" required />
                            <div class="w-full h-px bg-gray-100"></div>
                            <BaseInput label-name="確認密碼" input-key="checkedPassword" input-type="password"
                                v-model="passwordInfo.checkedPassword" :error-title="isError.checkedPassword"
                                :clear-error-info="clearErrorInfo" required />
                            <div class="flex md:flex-row flex-col gap-4 justify-center items-center md:py-0 py-4">
                                <BaseButton @click="changePassword" button-name="確認變更" is-red />
                                <BaseRouterLink go-to-path="/member" button-name="返回會員中心" :is-red="false" />
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <p class="text-sm font-thin px-4 text-red-500">* 為必填欄位。</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div></div>

    </div>
</template>

<script>
import http from '@/api/http'
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import MemberHero from '@/components/layout/MemberHero.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'MemberPassword',
    data() {
        return {
            passwordInfo: {
                oldPassword: '',
                newPassword: '',
                checkedPassword: '',
            },
            isError: {
                oldPassword: '',
                newPassword: '',
                checkedPassword: '',
            },
            changeList: {},
            isFormValid: false,
            isModalOpen: false,
            modalContent: '',
            hasError: false,
            hasSuccess: false,
            pageTitle: '密碼管理',
        }
    },
    mounted() {
        const loading = useLoadingStore()
        loading.hidePage()
    },
    components: {
        BaseModal,
        MemberHero,
        BaseInput,
        BaseButton,
        BaseRouterLink,
    },
    methods: {
        async changePassword() {
            this.validateForm();
            if (!this.validateForm()) return;
            const loading = useLoadingStore()
            loading.showData()
            try {
                this.changeList = {
                    oldPassword: this.passwordInfo.oldPassword,
                    newPassword: this.passwordInfo.newPassword,
                }
                const token = localStorage.getItem('token');
                await http.patch(`/members/me/password`, this.changeList, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.isModalOpen = true;
                this.hasSuccess = true;
                this.hasError = false;
                this.modalContent = '恭喜內！密碼更改成功！';
                this.passwordInfo = {
                    oldPassword: '',
                    newPassword: '',
                    checkedPassword: '',
                };
                this.changeList = {};
            } catch {
                this.isModalOpen = true;
                this.hasError = true;
                this.hasSuccess = false;
                this.modalContent = '伺服器錯誤，將轉跳回首頁';
            } finally {
                loading.hideData();
            }
        },
        validateForm() {
            let isValid = true;
            const loading = useLoadingStore()
            loading.showData()
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
            if (this.passwordInfo.oldPassword.trim() === '') {
                this.isError.oldPassword = '*請輸入舊密碼';
                isValid = false;
            }
            else if (this.passwordInfo.oldPassword.length < 6 || this.passwordInfo.oldPassword.length > 20) {
                this.isError.oldPassword = '*密碼長度需介於6到20個字元';
                isValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.oldPassword)) {
                this.isError.oldPassword = '*密碼需包含至少一個字母和一個數字';
                isValid = false;
            }

            if (this.passwordInfo.newPassword.trim() === '') {
                this.isError.newPassword = '*請輸入新密碼';
                isValid = false;
            }
            else if (this.passwordInfo.newPassword.length < 6 || this.passwordInfo.newPassword.length > 20) {
                this.isError.newPassword = '*密碼長度需介於6到20個字元';
                isValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.newPassword)) {
                this.isError.newPassword = '*密碼需包含至少一個字母和一個數字';
                isValid = false;
            }
            else if (this.passwordInfo.newPassword === this.passwordInfo.password) {
                this.isError.newPassword = '*新密碼與舊密碼不可相同';
                isValid = false;
            }

            if (this.passwordInfo.checkedPassword.trim() === '') {
                this.isError.checkedPassword = '*請輸入確認密碼';
                isValid = false;
            }
            else if (this.passwordInfo.checkedPassword.length < 6 || this.passwordInfo.checkedPassword.length > 20) {
                this.isError.checkedPassword = '*密碼長度需介於6到20個字元';
                isValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.checkedPassword)) {
                this.isError.checkedPassword = '*密碼需包含至少一個字母和一個數字';
                isValid = false;
            }
            else if (this.passwordInfo.newPassword !== this.passwordInfo.checkedPassword) {
                this.isError.checkedPassword = '*確認密碼與新密碼不一致';
                isValid = false;
            }
            if (!this.isValid) loading.hideData();
            return isValid;
        },
        handleModalClick() {
            if (!this.isCatchError) return;
            this.$router.push('/');
        },
        clearErrorInfo(key) {
            this.isError[key] = '';
        },
    },
}
</script>