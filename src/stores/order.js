import { defineStore } from "pinia";
import http from "@/api/http";

export const useOrderStore = defineStore("order", {
  state: () => ({
    isLogin: false,
    orderInit: {},
    checkedInfo: {},
    isCheckoutStarted: false,
  }),
  actions: {
    async createTicketOrder({
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
        this.isCheckoutStarted = true;
        router.push(`/checkout/${res.data.orderId}`);
      } catch (error) {
        alert(error);
      }
    },
    async createTourOrder({
      productId,
      startDate,
      peopleCount,
      apiBase,
      router,
    }) {
      try {
        const orderDetail = {
          productId,
          date: new Date(startDate).toISOString().split("T")[0],
          peopleCount,
        };
        const token = localStorage.getItem("token");
        const res = await http.post(
          `${apiBase}/orders/tour/init`,
          orderDetail,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.orderInit = res.data;
        this.isCheckoutStarted = true;
        router.push(`/checkout/${res.data.orderId}`);
      } catch (error) {
        alert(error);
      }
    },
    async savePassportInfo({ passportInfo, apiBase, orderId, router }) {
      try {
        let travelerInfo = passportInfo.map((people) => ({
          firstName: people.firstName,
          lastName: people.lastName,
          idNumber: people.idNumber,
          passportNumber: people.passportNumber,
          passportExpiry: new Date(people.passportExpiry)
            .toISOString()
            .split("T")[0],
        }));
        const token = localStorage.getItem("token");
        const res = await http.patch(
          `${apiBase}/orders/${orderId}/travelers`,
          {
            travelers: travelerInfo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.checkedInfo = res.data;
        console.log(this.checkedInfo);
        router.push(`/checkout/checked/${res.data.orderId}`);
      } catch (error) {
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent =
          error.response?.data?.message || "發生錯誤，請重新操作";
      }
    },
  },
  persist: true,
});
