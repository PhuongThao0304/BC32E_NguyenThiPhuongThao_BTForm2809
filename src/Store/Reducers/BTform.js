import { ADD_SV, DELETE_SV, EDIT_SV, UPDATE_SV } from "../types/types"

const stateDefault = {

    mangSV: [
        // {
        //     maSV: 1,
        //     hoTen: 'Nguyen Thi Phuong Thao',
        //     soDT: 84913475011,
        //     email: 'ntphuongthao0304@gmail.com'
        // }

    ],
    selectedSV: null,
    searchmangSV: []
    

}


export const BTform = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case ADD_SV: {
            const newmangSV = [...state.mangSV]
            newmangSV.push(payload)
            return {...state, mangSV: newmangSV}
        }
        case DELETE_SV: {
            const newmangSV = state.mangSV.filter((item) => item.maSV !== payload)
            return {...state, mangSV: newmangSV}
        }
        case EDIT_SV: {
            const editSV = state.mangSV.find((item)=> item.maSV === payload)

            return {...state, selectedSV: editSV
            }
        }
        case UPDATE_SV: {
            const updatedmangSV = state.mangSV.map((item) => item.maSV === payload.maSV ? payload : item)
            state.selectedSV = null
            return {...state, mangSV: updatedmangSV}
        }
        case 'SEARCH_SV': {
            let index = state.mangSV.findIndex((item) => item.maSV === payload )
            console.log(index)
            let searchmangSV = [...state.searchmangSV]
            if (index === -1) {
                searchmangSV = []
            }
            else {
                let searchedSV = state.searchedSV
                searchedSV = state.mangSV[index]
                searchmangSV.push(searchedSV)
            }
            
            return {...state, searchmangSV: searchmangSV}
        }
        



        default: return { ...state }
    }




}