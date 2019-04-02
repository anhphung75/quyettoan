const apiUrl = "http://localhost:8000/api/v1/hoso";

export function Tat(nam) {
    if (Number(nam) == NaN) {
        nam = new Date().getFullYear();
    }
    const url = "${apiUrl}/${nam}";
    return axios
        .get(url)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Xoa(mahoso) {
    const url = "${apiUrl}/${mahoso}";
    return axios
        .delete(url)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Xem(mahoso) {
    const url = "${apiUrl}/${mahoso}";
    return axios
        .get(url)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Moi(mahoso, params = {}) {
    const url = "${apiUrl}/${mahoso}";
    return axios
        .post(url, params)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Sua(mahoso, params = {}) {
    const url = "${apiUrl}/${mahoso}";
    return axios
        .put(url, params)
        .then(response => response)
        .catch(xhr => xhr);
}
