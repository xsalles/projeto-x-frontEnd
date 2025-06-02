import { fetchApi } from "@/config/apiConfig";
import { UserData } from "@/interfaces/interfaces";

export async function login(userData: UserData) {
    return fetchApi("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userData)
    }).then((response) => {
        if (response && response.token) {
            localStorage.setItem("token", response.token)
            return response;
        }

        return Promise.reject(new Error("Login failed: No token received."));
    })
}