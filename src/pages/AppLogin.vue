<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <BaseLoading :isLoading="isLoading" />
        <BaseModal :isModalOpen="isModalOpen" :hasError="hasError" :modalContent="modalContent"
            @close="isModalOpen = false" />
        <!-- top -->
        <div class="relative md:h-80 h-40 overflow-hidden">
            <img :src="require('@/assets/images/carousel-5.jpg')" alt="" class=" w-full h-full object-cover">
        </div>
        <div>
            <div class="flex justify-center items-center">
                <h1 class="text-3xl text-center md:tracking-[2rem] tracking-[1rem] pl-[2rem] text-base-heavy">歡迎回來</h1>
            </div>
            <div class="mx-auto max-w-[80%] flex justify-between items-center">
                <div class="flex flex-col md:gap-32 gap-12 w-full justify-center">
                    <div></div>
                    <!-- 登入區塊 -->
                    <div class="flex flex-col justify-center items-center gap-12">
                        <form
                            class="bg-white md:px-10 px-4 md:py-18 py-6 w-full max-w-3xl flex flex-col gap-6 justify-center">
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-1 px-4">
                                    <div
                                        class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="emailInput"
                                            class="inline-block w-24 font-bold text-base-light">Email</label>
                                        <input id="emailInput" type="email" v-model.trim="loginInfo.email"
                                            @focus="errorInfo.email = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.email }" placeholder="請輸入Email">
                                    </div>
                                    <small v-if="errorInfo.email" class="text-sm text-end text-hot-red">{{
                                        errorInfo.email }}</small>
                                </div>
                                <LoginInput labelName="Email" inputKey="email" inputType="email" v-model="loginInfo.email"
                                    :errorTitle="errorInfo.email" :clearErrorInfo="clearErrorInfo" />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <div class="flex flex-col gap-1 px-4">
                                    <div
                                        class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="passwordInput"
                                            class="inline-block w-24 font-bold text-base-light">密碼</label>
                                        <input id="passwordInput" type="password" v-model.trim="loginInfo.password"
                                            @focus="errorInfo.password = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入密碼">
                                    </div>
                                    <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                        errorInfo.password }}</small>
                                </div>
                            </div>
                            <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
                                <button type="submit" @click.prevent="postLogin()"
                                    class="md:w-36 w-full cursor-pointer bg-hot-red text-center text-white py-3  hover:bg-red-500 active:bg-red-700 transition-colors">登入</button>
                                <router-link to="/signup"
                                    class="md:w-36 w-full cursor-pointer bg-gray-400 text-center text-white py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">加入日頭</router-link>
                            </div>
                            <!-- <p class="text-center text-sm px-4 cursor-pointer text-base-light">忘記密碼了嗎？</p> -->
                            <div class="w-full h-px bg-gray-100"></div>
                            <div>
                                <p class="text-xs px-4 text-gray-400">＊請以半角字元輸入“@”符號。</p>
                                <p class="text-xs px-4 text-gray-400">＊必須擁有會員才能購買商品及查看相關資訊。</p>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/api/http'
import { login } from '@/utils/auth'
import BaseModal from '@/components/base/BaseModal.vue';
import BaseLoading from '@/components/base/BaseLoading.vue';
import LoginInput from '@/components/ui/LoginInput.vue';

export default {
    name: 'AppLogin',
    data() {
        return {
            isLoading: true,
            isModalOpen: false,
            hasError: false,
            modalContent: '',
            loginInfo: {
                email: '',
                password: '',

            },
            errorInfo: {
                email: '',
                password: '',

            },
            isError: false,
            loginErrorMessage: '',
        };
    },
    components: {
        BaseModal,
        BaseLoading,
        LoginInput,
    },
    methods: {
        validateForm() {
            const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.loginInfo.email.trim() === '') {
                this.errorInfo.email = '*請輸入電子郵件';
                this.isError = true;
            }
            if (!emailRule.test(this.loginInfo.email)) {
                this.errorInfo.email = '*請輸入正確的電子郵件格式';
                this.isError = true;
            }

            if (this.loginInfo.password.trim() === '') {
                this.errorInfo.password = '*請輸入密碼';
                this.isError = true;
            }
            if (this.loginInfo.password.length < 6 || this.loginInfo.password.length > 20) {
                this.errorInfo.password = '*密碼長度需介於6到20個字元';
                this.isError = true;
            }
        },
        async postLogin() {
            this.validateForm();
            if (this.isError) return;
            this.isLoading = true;
            try {
                const res = await http.post(`/members/login`, this.loginInfo);
                const token = res.data?.access_token;
                const name = res.data?.member?.name;
                if (token) {
                    login(token, name);
                    this.$router.push('/');
                }
            } catch (error) {
                this.isModalOpen = true;
                this.hasError = true;
                this.modalContent = error.response?.data?.message;
                this.loginInfo.email = '';
                this.loginInfo.password = '';
            } finally {
                this.isLoading = false;
            }
        },
        clearErrorInfo(key) {
            this.errorInfo[key] = '';
        },
    },
    mounted() {
        this.isLoading = false;
    },
}
</script>