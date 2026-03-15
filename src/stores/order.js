import { defineStore } from "pinia";
import http from "@/api/http";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orderInit: {},
  }),
  actions: {
    async createOrder({
      productId,
      startDate,
      endDate,
      peopleCount,
      apiBase,
      router,
    }) {
      try {
        const orderDetail = {
          productId,
          startDate: new Date(startDate).toISOString().split("T")[0],
          endDate: new Date(endDate).toISOString().split("T")[0],
          peopleCount,
        };
        const token = localStorage.getItem("token");
        const res = await http.post(
          `${apiBase}/orders/flight/init`,
          orderDetail,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.orderInit = res.data;
        router.push(`/checkout/${res.data.orderId}`);
      } catch (error) {
        alert(error);
      }
    },
  },
});
