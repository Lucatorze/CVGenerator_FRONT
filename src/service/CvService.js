import axios from "axios";

const API_ENDPOINT = '//10.38.163.169:3002'

export default {
    fetchAll() {
        return axios
            .get(`${API_ENDPOINT}/`)
            .then(res => res.data)
            .catch(console.error);
    },
    fetchOne(cv) {
        return axios
            .get(`${API_ENDPOINT}/cv/${cv._id}`)
            .then(res => res.data)
            .catch(console.error);
    },
    removeCv(cv){
        return axios
            .delete(`${API_ENDPOINT}/cv/${cv.id}`)
            .then(res => res.data)
            .catch(console.error);
    },
    addCv(cv){
        return axios
        .post(`${API_ENDPOINT}/cv, cv`)
        .then(res => res.data)
        .catch(console.error);
    }
}
