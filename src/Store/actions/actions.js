import { ADD_SV, DELETE_SV, EDIT_SV, SEARCH_SV, UPDATE_SV } from "../types/types"

export const addSV = (payload) => {
    return {
        type:ADD_SV,
        payload
    }

}
export const deleteSV = (payload) => {
    return {
        type: DELETE_SV,
        payload
    }

}
export const editSV = (payload) => {
    return {
        type:EDIT_SV,
        payload
    }

}
export const updateSV = (payload) => {
    return {
        type:UPDATE_SV,
        payload
    }

}

export const searchSV = (payload) => {
    return {
        type:SEARCH_SV,
        payload
    }

}