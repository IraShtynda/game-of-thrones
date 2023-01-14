import axios from "axios"

export function fetchCharacters() {
    return axios.get(`https://thronesapi.com/api/v2/Characters`);
}

export function fetchCharacter(id) {
    return axios.get(`https://thronesapi.com/api/v2/Characters/${id}`);
}