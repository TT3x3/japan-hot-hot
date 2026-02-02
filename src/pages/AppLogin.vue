<template>
    <div>
        <div class="flex justify-center items-center py-8">
            <h1 class="text-3xl text-center tracking-[2rem] text-base-heavy">加入日頭</h1>
        </div>
        <!-- top -->
        <div class="relative h-80 overflow-hidden">
            <img src="../assets/images/tour-banner.jpg" alt="tour-banner" class=" w-full h-full object-cover">
        </div>
        <div class="bg-gray-200">
            <div class="mx-auto max-w-[80%] flex justify-between items-center">
                <div class="flex flex-col gap-32 w-full justify-center">
                    <div></div>
                    <!-- 登入區塊 -->
                    <div class="flex flex-col justify-center items-center gap-12">
                        <form class="bg-white px-10 py-18 w-full max-w-3xl flex flex-col gap-6 justify-center">
                            <div class="flex flex-col gap-4">
                                <div class="flex gap-2 items-center px-4">
                                    <label for="emailInput"
                                        class="inline-block w-24 font-bold text-base-light">Email</label>
                                    <input id="emailInput" type="email"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入Email">
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex gap-2 items-center px-4">
                                    <label for="passwordInput"
                                        class="inline-block w-24 font-bold text-base-light">密碼</label>
                                    <input id="passwordInput" type="password"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入密碼">
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex gap-2 items-center px-4">
                                    <label for="confirmPasswordInput"
                                        class="inline-block w-24 font-bold text-base-light">確認密碼</label>
                                    <input id="confirmPasswordInput" type="password"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入密碼">
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex gap-2 items-center px-4">
                                    <label for="usernameInput"
                                        class="inline-block w-24 font-bold text-base-light">會員名稱</label>
                                    <input id="usernameInput" type="text"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入會員名稱">
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex gap-2 items-center px-4">
                                    <label for="phoneInput"
                                        class="inline-block w-24 font-bold text-base-light">連絡電話</label>
                                    <input id="phoneInput" type="tel"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入連絡電話">
                                </div>
                                <div class="w-full h-px bg-gray-100"></div>
                                <div class="flex gap-2 items-center px-4">
                                    <label for="addressInput"
                                        class="inline-block w-24 font-bold text-base-light">地址</label>
                                    <input id="addressInput" type="text"
                                        class="w-full border border-gray-300 px-2 py-1 text-base-heavy"
                                        placeholder="請輸入地址">
                                </div>
                            </div>
                            <div class="flex gap-4 justify-center items-center">
                                <button type="submit"
                                    class="w-36 cursor-pointer bg-hot-red text-white px-10 py-3  hover:bg-red-500 active:bg-red-700 transition-colors">加入日頭</button>
                                <button
                                    class="w-36 cursor-pointer bg-gray-400 text-white px-10 py-3  hover:bg-gray-300 active:bg-gray-500 transition-colors">已有會員</button>
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
export default {
    name: 'AppLogin',
    data() {
        return {
        };
    },
}
</script>