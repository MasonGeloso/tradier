import axios, { AxiosInstance } from "axios";

export const createTradierApi = (
    baseURL: string,
    accessToken: string
): AxiosInstance =>
    axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json"
        }
    });
