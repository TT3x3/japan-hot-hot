<template>
    <div class="flex flex-col gap-32 w-full bg-gray-100">
        <!-- top -->
        <div class="relative  md:h-80 h-40 overflow-hidden">
            <img src="../assets/images/carousel-4.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="flex justify-center items-center ">
            <h1 class="text-3xl text-center tracking-[2rem] pl-[2rem] text-base-heavy">會員密碼</h1>
        </div>
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
                            <div class="flex flex-col gap-1">
                                <div class="flex md:flex-row flex-col md:items-center item-start w-full">
                                    <label for="usernameInput"
                                        class="inline-block w-28 font-bold text-base-light">舊密碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="usernameInput" type="password" v-model.trim="passwordInfo.oldPassword"
                                        @focus="isError.oldPassword = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.oldPassword }" placeholder="請輸入舊密碼">
                                </div>
                                <small v-if="isError.oldPassword" class="text-sm text-end text-hot-red">{{
                                    isError.oldPassword }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1">
                                <div class="flex md:flex-row flex-col md:items-center item-start w-full">
                                    <label for="usernameInput"
                                        class="inline-block w-28 font-bold text-base-light">新密碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="usernameInput" type="password" v-model.trim="passwordInfo.newPassword"
                                        @focus="isError.newPassword = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.newPassword }" placeholder="請輸入新密碼">
                                </div>
                                <small v-if="isError.newPassword" class="text-sm text-end text-hot-red">{{
                                    isError.newPassword }}</small>
                            </div>
                            <div class="w-full h-px bg-gray-100"></div>
                            <div class="flex flex-col gap-1">
                                <div class="flex md:flex-row flex-col md:items-center item-start w-full">
                                    <label for="realNameInput"
                                        class="inline-block w-28 font-bold text-base-light">確認新密碼<span
                                            class="text-red-500">*</span></label>
                                    <input id="realNameInput" type="password"
                                        v-model.trim="passwordInfo.checkedPassword"
                                        @focus="isError.checkedPassword = ''"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        :class="{ 'border-hot-red': isError.checkedPassword }" placeholder="請再次輸入新密碼">
                                </div>
                                <small v-if="isError.checkedPassword" class="text-sm text-end text-hot-red">{{
                                    isError.checkedPassword }}</small>
                            </div>
                            <div class="flex gap-4 justify-center items-center md:py-0 py-4">
                                <button type="submit" @click.prevent="changePassword()"
                                    class="md:w-36 w-full cursor-pointer bg-hot-red text-white py-3 hover:bg-red-500 active:bg-red-700 transition-colors">確認變更</button>
                                <router-link to="/member"
                                    class="md:w-36 w-full cursor-pointer bg-gray-400 text-white text-center py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">返回</router-link>
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
        }

    },
    methods: {
        async changePassword() {
            this.validateForm();
            if (!this.isFormValid) return;
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
                alert('密碼修改成功！');
                this.passwordInfo = {
                    oldPassword: '',
                    newPassword: '',
                    checkedPassword: '',
                };
                this.changeList = {};
                this.isFormValid = false;
            } catch (error) {
                alert(error);
            }
        },
        validateForm() {
            this.isFormValid = true;
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
            if (this.passwordInfo.oldPassword.trim() === '') {
                this.isError.oldPassword = '*請輸入舊密碼';
                this.isFormValid = false;
            }
            else if (this.passwordInfo.oldPassword.length < 6 || this.passwordInfo.oldPassword.length > 20) {
                this.isError.oldPassword = '*密碼長度需介於6到20個字元';
                this.isFormValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.oldPassword)) {
                this.isError.oldPassword = '*密碼需包含至少一個字母和一個數字';
                this.isFormValid = false;
            }

            if (this.passwordInfo.newPassword.trim() === '') {
                this.isError.newPassword = '*請輸入新密碼';
                this.isFormValid = false;
            }
            else if (this.passwordInfo.newPassword.length < 6 || this.passwordInfo.newPassword.length > 20) {
                this.isError.newPassword = '*密碼長度需介於6到20個字元';
                this.isFormValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.newPassword)) {
                this.isError.newPassword = '*密碼需包含至少一個字母和一個數字';
                this.isFormValid = false;
            }
            else if (this.passwordInfo.newPassword === this.passwordInfo.password) {
                this.isError.newPassword = '*新密碼與舊密碼不可相同';
                this.isFormValid = false;
            }

            if (this.passwordInfo.checkedPassword.trim() === '') {
                this.isError.checkedPassword = '*請輸入確認密碼';
                this.isFormValid = false;
            }
            else if (this.passwordInfo.checkedPassword.length < 6 || this.passwordInfo.checkedPassword.length > 20) {
                this.isError.checkedPassword = '*密碼長度需介於6到20個字元';
                this.isFormValid = false;
            }
            else if (!passwordRegex.test(this.passwordInfo.checkedPassword)) {
                this.isError.checkedPassword = '*密碼需包含至少一個字母和一個數字';
                this.isFormValid = false;
            }
            else if (this.passwordInfo.newPassword !== this.passwordInfo.checkedPassword) {
                this.isError.checkedPassword = '*確認密碼與新密碼不一致';
                this.isFormValid = false;
            }

            if (!this.isFormValid) return;
        },
    },
}
</script>