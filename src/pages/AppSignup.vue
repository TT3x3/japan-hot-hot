<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <!-- top -->
        <div class="relative md:h-80 h-40 overflow-hidden">
            <img :src="require('@/assets/images/carousel-5.jpg')" alt="" class=" w-full h-full object-cover">
        </div>
        <div>
            <div class="flex justify-center items-center">
                <h1 class="text-3xl text-center md:tracking-[2rem] tracking-[1rem] pl-[2rem] text-base-heavy">加入日頭</h1>
            </div>
            <div class="mx-auto max-w-[80%] flex justify-between items-center">
                <div class="flex flex-col md:gap-32 gap-12 w-full justify-center">
                    <div></div>
                    <!-- 登入區塊 -->
                    <div class="flex flex-col justify-center items-center gap-12">
                        <form
                            class="bg-white md:px-10 px-4 md:py-18 py-6  w-full max-w-3xl flex flex-col gap-6 justify-center">
                            <div class="flex flex-col gap-4">
                                <BaseInput label-name="Email" input-key="email" input-type="email" v-model="userInfo.email"
                                    :error-title="errorInfo.email" :clear-error-info="clearErrorInfo" required />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <BaseInput label-name="密碼" input-key="password" input-type="password"
                                    v-model="userInfo.password" :error-title="errorInfo.password"
                                    :clear-error-info="clearErrorInfo" required />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <BaseInput label-name="確認密碼" input-key="confirmPassword" input-type="password"
                                    v-model="userInfo.confirmPassword" :error-title="errorInfo.confirmPassword"
                                    :clear-error-info="clearErrorInfo" required />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <BaseInput label-name="會員名稱" input-key="username" input-type="text"
                                    v-model="userInfo.username" :error-title="errorInfo.username"
                                    :clear-error-info="clearErrorInfo" required />
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <BaseInput label-name="手機號碼" input-key="phone" input-type="tel" v-model="userInfo.phone"
                                    :error-title="errorInfo.phone" :clearErrorInfo="clearErrorInfo" required />
                            </div>
                            <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
                                <BaseButton @click="validateForm" button-name="註冊" is-red />
                                <BaseRouterLink go-to-path="/login" button-name="已有會員" :is-red="false" />
                            </div>
                            <!-- <p class="text-center text-sm px-4 cursor-pointer text-base-light">忘記密碼了嗎？</p> -->
                            <div class="md:block hidden w-full h-px bg-gray-100"></div>
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
import { useLoadingStore } from '@/stores/loading';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseRouterLink from '@/components/ui/BaseRouterLink.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    name: 'AppLogin',
    data() {
        return {
            userInfo: {
                email: '',
                password: '',
                confirmPassword: '',
                username: '',
                phone: '',
            },
            errorInfo: {
                email: '',
                password: '',
                confirmPassword: '',
                username: '',
                phone: '',
            },
            isError: false,
        };
    },
    components: {
        BaseInput,
        BaseRouterLink,
        BaseButton,
    },
    mounted() {
        const loading = useLoadingStore()
        loading.hidePage()
    },
    methods: {
        validateForm() {
            this.isError = false;
            const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.userInfo.email.trim() === '') {
                this.errorInfo.email = '*請輸入電子郵件';
                this.isError = true;
            }
            if (!emailRule.test(this.userInfo.email)) {
                this.errorInfo.email = '*請輸入正確的電子郵件格式';
                this.isError = true;
            }

            if (this.userInfo.password.trim() === '') {
                this.errorInfo.password = '*請輸入密碼';
                this.isError = true;
            }
            if (this.userInfo.password.length < 6 || this.userInfo.password.length > 20) {
                this.errorInfo.password = '*密碼長度需介於6到20個字元';
                this.isError = true;
            }

            if (this.userInfo.confirmPassword.trim() === '') {
                this.errorInfo.confirmPassword = '*請輸入確認密碼';
                this.isError = true;
            }
            if (this.userInfo.confirmPassword.length < 6 || this.userInfo.confirmPassword.length > 20) {
                this.errorInfo.confirmPassword = '*密碼長度需介於6到20個字元';
                this.isError = true;
            }
            if (this.userInfo.password !== this.userInfo.confirmPassword) {
                this.errorInfo.confirmPassword = '*確認密碼與密碼不一致';
                this.isError = true;
            }

            if (this.userInfo.username.trim() === '') {
                this.errorInfo.username = '*請輸入會員名稱';
                this.isError = true;
            }
            if (this.userInfo.username.length < 2 || this.userInfo.username.length > 10) {
                this.errorInfo.username = '*會員名稱長度需介於2到10個字元';
                this.isError = true;
            }

            const phoneRule = /^09[0-9]{8}$/;
            if (this.userInfo.phone.trim() === '') {
                this.errorInfo.phone = '*請輸入手機號碼';
                this.isError = true;
            }
            if (!phoneRule.test(this.userInfo.phone)) {
                this.errorInfo.phone = '*請輸入正確的手機號碼';
                this.isError = true;
            }
        },
        clearErrorInfo(key) {
            this.errorInfo[key] = '';
        },
    },
}
</script>