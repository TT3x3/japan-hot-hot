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
          `/orders/flight/init`,
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
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent = "伺服器錯誤，將轉跳回首頁";
        this.isCatchError = true;
      }
    },
    async createTourOrder({
      productId,
      startDate,
      peopleCount,
     
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
          `/orders/tour/init`,
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
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent = "伺服器錯誤，將轉跳回首頁";
        this.isCatchError = true;
      }
    },
    async savePassportInfo({ passportInfo, orderId, router }) {
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
          `/orders/${orderId}/travelers`,
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
        router.push(`/checkout/checked/${res.data.orderId}`);
      } catch (error) {
        this.isModalOpen = true;
        this.hasError = true;
        this.modalContent = "伺服器錯誤，將轉跳回首頁";
        this.isCatchError = true;
      }
    },
  },
  persist: true,
});
