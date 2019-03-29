const apiUrl = "http://localhost:8000/api/v1/dot";

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

export function Xoa(madot) {
    const url = "${apiUrl}/${madot}";
    return axios
        .delete(url)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Xem(madot) {
    const url = "${apiUrl}/${madot}";
    return axios
        .get(url)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Moi(madot, params = {}) {
    const url = "${apiUrl}/${madot}";
    return axios
        .post(url, params)
        .then(response => response)
        .catch(xhr => xhr);
}

export function Sua(madot, params = {}) {
    const url = "${apiUrl}/${madot}";
    return axios
        .put(url, params)
        .then(response => response)
        .catch(xhr => xhr);
}
