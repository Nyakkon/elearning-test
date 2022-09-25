import { http } from "../../utils/config";

// closure action
// export const getMenu = () => {
//   return async (dispatch)=> {
//         try {
//           //goi api bang axios
//           let result = await http.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');     
//           // DUA DU LIEU TU API VE REDUX
//           const action = {
//             type:'GET_SUB_MENU',
//             arrMenu: result.data
//           };
//           console.log(result.data)
//           dispatch(action)
//         } catch (err) {
//           console.log(err)
//         }
//       };
// }

export const getMenu = async (dispatch) => {
    try {
         //goi api bang axios
         let result = await http.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');     
         // DUA DU LIEU TU API VE REDUX
         const action = {
           type:'GET_SUB_MENU',
           arrMenu:result.data
         };
         console.log(result.data)
         dispatch(action)
    } catch (err) {
      console.log(err)
    }
}
