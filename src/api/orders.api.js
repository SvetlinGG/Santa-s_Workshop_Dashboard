import { request } from './http';

export const ordersApi = {
    getAll: () => request("GET", "/orders"),
    create: (data) => request("POST", "/orders", data),
};