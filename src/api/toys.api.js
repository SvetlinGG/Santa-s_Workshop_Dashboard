import { request } from "./http";

export const toysApi = {
    getAll: () => request("GET", "/toys"),
    getById: (id) => request("GET", `/toys/${id}`),
    toggleStock: (id, inStock) => request("PATCH", `/toys/${id}`, {inStock}),
};