<template>
    <div class="flex flex-col gap-32 w-full">
        <div class="max-w-[80%] w-full mx-auto flex flex-col">
            <div class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-col gap-6 items-center py-20">
                    <div class="flex justify-center flex-col items-center gap-2">
                        <i class="fa-solid fa-person-burst fa-7x text-gray-500 py-4"></i>
                        <p class=" font-extrabold md:text-3xl text-xl text-gray-500">挖哩咧，好像沒這個地方捏？</p>
                        <p class="text-gray-400">請點擊下方按鈕回首頁，不要再迷路囉！</p>
                    </div>
                    <router-link to="/"
                        class=" bg-hot-red hover:bg-red-500 active:bg-red-700 md:px-10 px-4 py-3 w-full font-bold text-center text-white">回到首頁</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>