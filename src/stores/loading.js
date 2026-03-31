import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
    state: () => ({
        pageLoading: false,
        dataLoading: false,
    }),

    actions: {
        showPage() {
        this.pageLoading = true;
        },
        hidePage() {
        this.pageLoading = false;
        },

        showData() {
        this.dataLoading = true;
        },
        hideData() {
        this.dataLoading = false;
        },
    },
});
