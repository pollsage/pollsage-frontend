import { getAPIResponseError } from "../../helpers/common"
import api from "../api.service"

const url = '/creators/comments'
const getCommentsByPollId = async (pollId) => {
    try {
        let res = await api.get(`${url}/${pollId}`)
        return res.data;
    } catch (e) {
        throw getAPIResponseError(e)
    }
}


export {
    getCommentsByPollId,
}