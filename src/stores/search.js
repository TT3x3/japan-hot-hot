import { defineStore } from "pinia";
import http from "@/api/http";

export const useResultStore = defineStore("search", {
  state: () => ({
    totalPages: 1,
    currentPage: 1,
    perPage: 1,
    products: [],
    isSearch: "",
  }),
  actions: {
    async getResult(search = "", page = 1) {
      try {
        const res = await http.get(
          `/product?keyword=${search}&page=${page}&pageSize=10`
        );
        this.isSearch = search;
        this.products = res.data.items;
        this.totalPages = parseInt(res.data.totalPages);
        this.currentPage = parseInt(res.data.page);
        this.perPage = parseInt(res.data.pageSize);
      } catch (error) {
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent = "伺服器錯誤，將轉跳回首頁";
      }
    },
  },
});
