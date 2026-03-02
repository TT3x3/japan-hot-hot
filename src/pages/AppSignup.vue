<template>
    <div class="flex flex-col md:gap-32 gap-12 w-full bg-gray-100">
        <!-- top -->
        <div class="relative md:h-80 h-40 overflow-hidden">
            <img src="../assets/images/carousel-5.jpg" alt="" class=" w-full h-full object-cover">
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
                        <form class="bg-white md:px-10 px-4 md:py-18 py-6  w-full max-w-3xl flex flex-col gap-6 justify-center">
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-1">
                                    <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="emailInput"
                                            class="inline-block w-24 font-bold text-base-light">Email</label>
                                        <input id="emailInput" type="email" v-model.trim="userInfo.email"
                                            @focus="errorInfo.email = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.email }" placeholder="請輸入Email">
                                    </div>
                                    <small v-if="errorInfo.email" class="text-sm text-end text-hot-red">{{
                                        errorInfo.email }}</small>
                                </div>
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <div class="flex flex-col gap-1">
                                    <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="passwordInput"
                                            class="inline-block w-24 font-bold text-base-light">密碼</label>
                                        <input id="passwordInput" type="password" v-model.trim="userInfo.password"
                                            @focus="errorInfo.password = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.password }" placeholder="請輸入密碼">
                                    </div>
                                    <small v-if="errorInfo.password" class="text-sm text-end text-hot-red">{{
                                        errorInfo.password }}</small>
                                </div>
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <div class="flex flex-col gap-1">
                                    <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="confirmPasswordInput"
                                            class="inline-block w-24 font-bold text-base-light">確認密碼</label>
                                        <input id="confirmPasswordInput" type="password"
                                            v-model.trim="userInfo.confirmPassword"
                                            @focus="errorInfo.confirmPassword = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.confirmPassword }"
                                            placeholder="請輸入確認密碼">
                                    </div>
                                    <small v-if="errorInfo.confirmPassword" class="text-sm text-end text-hot-red">{{
                                        errorInfo.confirmPassword }}</small>
                                </div>
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <div class="flex flex-col gap-1">
                                    <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="usernameInput"
                                            class="inline-block w-24 font-bold text-base-light">會員名稱</label>
                                        <input id="usernameInput" type="text" v-model.trim="userInfo.username"
                                            @focus="errorInfo.username = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.username }" placeholder="請輸入會員名稱">
                                    </div>
                                    <small v-if="errorInfo.username" class="text-sm text-end text-hot-red">{{
                                        errorInfo.username }}</small>
                                </div>
                                <div class="md:block hidden w-full h-px bg-gray-100"></div>
                                <div class="flex flex-col gap-1">
                                    <div class="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-1 w-full">
                                        <label for="phoneInput"
                                            class="inline-block w-24 font-bold text-base-light">手機號碼</label>
                                        <input id="phoneInput" type="tel" v-model.trim="userInfo.phone"
                                            @focus="errorInfo.phone = ''"
                                            class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                            :class="{ 'border-hot-red': errorInfo.phone }" placeholder="請輸入手機號碼">
                                    </div>
                                    <small v-if="errorInfo.phone" class="text-sm text-end text-hot-red">{{
                                        errorInfo.phone }}</small>
                                </div>
                            </div>
                            <div class="flex md:flex-row flex-col gap-4 justify-center items-center">
                                <button type="submit" @click.prevent="validateForm()"
                                    class="md:w-36 w-full cursor-pointer bg-hot-red text-center text-white py-3 hover:bg-red-500 active:bg-red-700 transition-colors">加入日頭</button>
                                <router-link to="/login"
                                    class="md:w-36 w-full cursor-pointer bg-gray-400 text-center text-white py-3 hover:bg-gray-300 active:bg-gray-500 transition-colors">已有會員</router-link>
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
        };
    }, methods: {
        validateForm() {
            const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.userInfo.email.trim() === '') {
                this.errorInfo.email = '*請輸入電子郵件';
            }
            if (!emailRule.test(this.userInfo.email)) {
                this.errorInfo.email = '*請輸入正確的電子郵件格式';
            }

            if (this.userInfo.password.trim() === '') {
                this.errorInfo.password = '*請輸入密碼';
            }
            if (this.userInfo.password.length < 6 || this.userInfo.password.length > 20) {
                this.errorInfo.password = '*密碼長度需介於6到20個字元';
            }

            if (this.userInfo.confirmPassword.trim() === '') {
                this.errorInfo.confirmPassword = '*請輸入確認密碼';
            }
            if (this.userInfo.confirmPassword.length < 6 || this.userInfo.confirmPassword.length > 20) {
                this.errorInfo.confirmPassword = '*密碼長度需介於6到20個字元';
            }
            if (this.userInfo.password !== this.userInfo.confirmPassword) {
                this.errorInfo.confirmPassword = '*確認密碼與密碼不一致';
            }

            if (this.userInfo.username.trim() === '') {
                this.errorInfo.username = '*請輸入會員名稱';
            }
            if (this.userInfo.username.length < 2 || this.userInfo.username.length > 10) {
                this.errorInfo.username = '*會員名稱長度需介於2到10個字元';
            }

            const phoneRule = /^09[0-9]{8}$/;
            if (this.userInfo.phone.trim() === '') {
                this.errorInfo.phone = '*請輸入手機號碼';
            }
            if (!phoneRule.test(this.userInfo.phone)) {
                this.errorInfo.phone = '*請輸入正確的手機號碼';
            }
        },
    }
}
</script>