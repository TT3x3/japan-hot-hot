<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <BaseModal :is-modal-open="isModalOpen" :has-error="hasError" :modal-content="modalContent"
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
                                <BaseInput label-name="Email" input-key="email" input-type="email"
                                    v-model="loginInfo.email" :error-title="errorInfo.email"
                                    :clear-error-info="clearErrorInfo" required />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <BaseInput label-name="密碼" input-key="password" input-type="password"
                                    v-model="loginInfo.password" :error-title="errorInfo.password"
                                    :clear-error-info="clearErrorInfo" required />
                            </div>
                            <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
                                <BaseButton @click="postLogin" button-name="登入" is-red />
                                <BaseRouterLink go-to-path="/signup" button-name="加入我們" :is-red="false" />

                            </div>
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
import { useLoadingStore } from '@/stores/loading';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';

export default {
    name: 'AppLogin',
    data() {
        return {
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
        BaseInput,
        BaseButton,
        BaseRouterLink,
    },
    mounted() {
        const loading = useLoadingStore()
        loading.hidePage()
    },
    methods: {
        validateForm() {
            const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isError = false;
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
            const loading = useLoadingStore()
            loading.showPage()
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
                this.modalContent = '帳號或密碼錯誤，請重新輸入';
                this.loginInfo.email = '';
                this.loginInfo.password = '';
            } finally {
                loading.hidePage()
            }
        },
        clearErrorInfo(key) {
            this.errorInfo[key] = '';
        },
    },
}
</script>