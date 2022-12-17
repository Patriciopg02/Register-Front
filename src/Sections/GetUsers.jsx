import axios from "axios";

export default async function GetUsers(page) {
    const response = await axios.get(`${process.env.REACT_APP_MY_API_URL}/users?page=${page}`);
    return response;
}