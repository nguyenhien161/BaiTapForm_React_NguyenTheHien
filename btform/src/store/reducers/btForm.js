const stateDefault = {
    thongtinSV: [
        
    ],
    selectedUser: null,
}

export const baitapForm = (state = stateDefault, {type, payload})=>{
    switch(type){
        case "ADD_USER":{
            const data = [ ...state.thongtinSV]
            const sinhvien = { ...payload, MaSV: Date.now()}
            data.push(sinhvien)
            return { ...state, thongtinSV: data}
        }
        case "DELETE_USER": {
            const data = state.mangNguoiDung.filter(item => item.id !== payload)
            return { ...state, mangNguoiDung: data}
        }
        case "EDIT_USER": {
            const user = state.mangNguoiDung.find(item => item.id === payload)
            return { ...state, selectedUser: user}
        }
        default: return state
    }
}