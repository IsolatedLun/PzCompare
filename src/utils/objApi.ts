import axios from "axios"
import { parseName } from "./funcs.js"

export const getObjs = (objA: string, objB: string, filter: boolean) => {
    return axios.get('http://localhost:8000/pz/' + parseName(objA) + '/with/' 
        + parseName(objB) + '?filter=' + filter)
}