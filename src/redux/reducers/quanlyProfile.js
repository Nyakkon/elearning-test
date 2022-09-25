
const stateDefault = {
    arrInfo: [],
    arrCourseAttend: []
}

export const quanlyProfile = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_PROFILE': {
            state.arrInfo = action.arrInfo;
            return {...state}
        }
        case 'GET_COURSE_ATTEND': {
            state.arrCourseAttend = action.arrCourseAttend;
            return {...state}
        }

        default : return state
    }
}