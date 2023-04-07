import axios from "axios";
import ILogin from "../interfaces/login.interface";
import { getToken } from "../services/user";
import ISale from "../interfaces/sale.interface";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
})

function headers() {
  return { headers: { "Authorization": "Basic " + getToken() } }
}

async function singIn(form: { username: string, password: string }) {
  return api.post("auth/signIn", form).then((res): ILogin => res.data)
}

async function logIn(form: { username: string, password: string }) {
  return api.post("auth/logIn", form).then((res): ILogin => res.data)
}

async function getSales() {
  return api.get(`sales`, headers())
    .then((res): ISale[] => res.data || null)
}

async function getSaleById(sale_id: string) {
  return api.get(`sale/${sale_id}`, headers())
    .then((res): ISale => res.data)
}

async function postFileUpload(data: FormData) {
  return api.post(`fileupload`, data, headers())
    .then((res): any => res.data || null)
}


export default {
  singIn,
  logIn,
  getSales,
  getSaleById,
  postFileUpload
}