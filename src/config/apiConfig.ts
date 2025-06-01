import { RequestInit } from "next/dist/server/web/spec-extension/request";

const backEndUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export function fetchApi(endpoint: string, options: RequestInit) {
    const url = `${backEndUrl}${endpoint}`;
    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then(response => {
        if (!response.ok) {
            return Promise.reject(new Error(`HTTP error! status: ${response.status}`));
        }

        if (response.status === 204) {
            console.log("No content returned from the server.");
            return null;
        }

        return response.json()
    })
}