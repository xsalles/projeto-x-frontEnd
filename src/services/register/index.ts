import { fetchApi } from "@/config/apiConfig";
import { UserData } from "@/interfaces/interfaces";

export async function register(userData: UserData) {
    return fetchApi("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData)
    })
}