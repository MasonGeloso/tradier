import { AxiosInstance } from "axios";

export abstract class BaseRequests {
    api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }
}
