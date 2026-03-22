import Vue from "vue";

export const auth = Vue.observable({
    isLoggedIn: !!localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")) || null,
});

// 登入
export function login(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    auth.isLoggedIn = true;
    auth.user = user;
}

// 登出
export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    auth.isLoggedIn = false;
    auth.user = null;
}
