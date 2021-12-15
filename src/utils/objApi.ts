import axios from "axios"
import { parseName } from "./funcs"
import { BACKEND_URL } from "../constants/consts"

export const getObjs = (objA: string, objB: string, filter: boolean) => {
    if (objA.length < 1 && objB.length < 1) {
        throw "Something went wrong"
    }
    
    return axios.get(BACKEND_URL + 'pz/' + parseName(objA) + '/with/' 
        + parseName(objB) + '?filter=' + filter)
}