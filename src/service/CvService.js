import axios from "axios";

const API_ENDPOINT = '//192.168.0.47:3002'

export default {
    fetchAll() {
        return axios
            .get(`${API_ENDPOINT}/`)
            .then(res => res.data)
            .catch(console.error);
    },
    fetchOne(cvId) {
        console.log(cvId)
        return axios
            .get(`${API_ENDPOINT}/cv/generator/${cvId}`)
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
