const stateDefault = {
    arrCourses: [],
    arrDanhMuc:[],
    detailCourse: {}

}

export const coursesReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case 'GET_COURSES': {
            state.arrCourses = action.arrCourses;
            return {...state}
        }
        case 'GET_DANH_MUC': {
            state.arrDanhMuc = action.arrDanhMuc;
            return {...state}
        }
        case 'GET_DETAIL': {
            state.detailCourse = action.detailCourse;
            return {...state}
        }
        default : return state
    }
}