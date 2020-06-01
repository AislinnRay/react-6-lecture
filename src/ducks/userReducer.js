const initialState = {
    user: '',
    isLoggdedIn: false
}

const LOGIN_USER ='LOGIN_USER'

export function loginUser(user){
    return{
        type: LOGIN_USER,
        payload:user
    }
}

//the default export is the reducer function
export default function(state=initialState, action){
    switch(action.type){
        case LOGIN_USER: 
            return {...state,user: action.payload, isLoggdedIn: true}
        default: 
            return state
    }
}