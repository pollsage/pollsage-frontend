import { getAPIResponseError } from "../helpers/common";
import api from "./api.service"

const url = '/comments'


const createComment = async (id, data) => {
    try {
        let res = await api.post(`${url}/${id}`, data);
        return res.data
    } catch (e) {
        throw getAPIResponseError(e)
    }
}

const getComments = async (id, limit, page) => {
    try {
        let res = await api.get(`${url}/${id}?page=${page}&limit=${limit}`);
        return res.data
    } catch (e) {
        throw getAPIResponseError(e)
    }
}

export {
    createComment,
    getComments
}