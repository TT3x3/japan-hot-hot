<template>
    <footer class="w-full">
        <div class="mx-auto max-w-[80%] flex md:flex-row flex-col md:justify-between items-center gap-8 md:pt-16 md:pb-28 py-10">
            <div class="h-[218px] flex flex-col md:justify-between md:items-start items-center gap-8">
                <img src="../assets/images/logo-2-s.png" alt="logo-small" class="w-[200px] pb-5">
                <ul class="flex flex-col md:gap-1 gap-2 text-sm  text-base-light">
                    <li class="flex md:gap-2 gap-1 items-center"><i class="fa-solid fa-phone"></i><p>0912-345-678</p></li>
                    <li class="flex md:gap-2 gap-1 items-center"><i class="fa-solid fa-envelope"></i><p>japan-hothot@hot.com</p></li>
                    <li class="flex md:gap-2 gap-1 items-center"><i class="fa-solid fa-house"></i><p>航空市登機區 88 巷 168 號 (空橋下方第三個行李箱左轉)</p></li>
                </ul>
            </div>
            <div class="md:h-[218px] flex flex-col md:justify-between md:items-end items-center gap-8">
                <ul class="flex md:gap-4 gap-1 text-base-heavy">
                    <li class="cursor-pointer"><i class="fa-brands fa-threads fa-lg"></i></li>
                    <li class="cursor-pointer"><i class="fa-brands fa-facebook-f fa-lg"></i></li>
                    <li class="cursor-pointer"><i class="fa-brands fa-instagram fa-lg"></i></li>
                    <li class="cursor-pointer"><i class="fa-brands fa-x-twitter fa-lg"></i></li>
                </ul>
                <p class="text-xs text-base-light">© 2026 TT3x3 All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style scoped></style>