import { ACCESSTOKEN, USER_LOGIN } from "../../utils/config"

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
   userLogin : user

}

export const quanLyLogin = (state = stateDefault,action) => {
    switch (action.type) {
        case 'USER_LOGIN': {
            const {userLogin} = action
            // state.userLogin = action.userLogin;
            localStorage.setItem(USER_LOGIN,JSON.stringify(userLogin))
            localStorage.setItem(ACCESSTOKEN,JSON.stringify(userLogin.accessToken))   
            return {...state,userLogin:userLogin}
        }

        default : return state
    }
}