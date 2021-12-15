import axios from "axios"
import { parseName } from "./funcs"
import { BACKEND_URL } from "../constants/consts"

export const getObjs = (objA: string, objB: string, filter: boolean) => {
    return axios.get(BACKEND_URL + 'pz/' + parseName(objA) + '/with/' 
        + parseName(objB) + '?filter=' + filter)
}