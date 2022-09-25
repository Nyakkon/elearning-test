
const stateDefault = {
    arrMenu: []
}

export const subNavReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_SUB_MENU': {
            state.arrMenu = action.arrMenu;
            return {...state}
        }

        default : return state
    }
}