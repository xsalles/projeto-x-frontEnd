import { fetchApi } from "@/config/apiConfig";
import { UserData } from "@/interfaces/interfaces";

export async function login(userData: UserData) {
    return fetchApi("/auth/login", {
        method: "POST",
        body: JSON.stringify(userData)
    }).then((response) => {
        if (response && response.access_token) {
            localStorage.setItem("access_token", response.access_token)
            return response;
        }

        return Promise.reject(new Error("Login failed: No access token received."));
    })
}