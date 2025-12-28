import { request } from './http';

export const elvesApi = {
    getAll: () => request("GET", "/elves"),
    getById: (id) => request("GET", `/elves/${id}`),
}