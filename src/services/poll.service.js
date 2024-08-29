import { getAPIResponseError } from "../helpers/common"
import api from "./api.service"

const getPollByPollId = async (pollId, password = null) => {
    try {
        let url;
        if (password) {
            url = `/polls/${pollId}?password=${password}`;
        } else {
            url = `/polls/${pollId}`
        }

        let res = await api.get(url);
        return res.data;
    } catch (e) {
        throw getAPIResponseError(e)
    }
}

const checkPasswordProtection = async (pollId) => {
    try {
        let res = await api.get(`/polls/check-password/${pollId}`)
        return res.data;
    } catch (e) {
        throw getAPIResponseError(e)
    }
}

const submitPoll = async (pollId, payload) => {
    try {
        let res = await api.post(`/polls/submit/${pollId}`, payload);
        return res.data
    } catch (e) {
        throw getAPIResponseError(e)
    }
}

export {
    submitPoll,
    getPollByPollId,
    checkPasswordProtection,

}