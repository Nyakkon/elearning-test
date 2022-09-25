import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http } from "../../utils/config";
import {useSelector,useDispatch} from 'react-redux';

export default function Login(props) {


  const dispatch = useDispatch()
  const {userLogin} = useSelector (state => state.quanLyLogin)
  console.log('userLogin',userLogin)
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    
    validationSchema :
     yup.object({
      taiKhoan: yup.string().required('Yêu cầu nhập dữ liệu'),
      matKhau: yup.string().required('Yêu cầu nhập dữ liệu'),
    }),


    onSubmit: async (values) => {

      console.log('value',values)
     
      try {
        let result = await http.post('/api/QuanLyNguoiDung/userLogin',values);
        // console.log(result.data.accessToken)
        // console.log(result.status)
        if (result.status == 200) {
          alert('Dang Nhap Thanh Cong')
          const action = {
            type:'USER_LOGIN',
            userLogin: result.data
          }; 
            dispatch(action)
        }
      } catch (err) {
        console.log(err)
        // console.log('response from server',err.response.data)
        // alert(err.response.data)
      }
    },
  });
  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
        <h1 className="mb-8 text-3xl text-center">Đăng Nhập</h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="taiKhoan"
          placeholder="Tài Khoản"
          onChange={formik.handleChange}
        />
        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
         <p style={{color:'red'}}>{formik.errors.taiKhoan}</p>
       ) : null}
        <input
          type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="matKhau"
          placeholder="Mật Khẩu"
          onChange={formik.handleChange}
        />
        {formik.touched.matKhau && formik.errors.matKhau ? (
         <p style={{color:'red'}}>{formik.errors.matKhau}</p>
       ) : null}
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-cyan-400 text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Login
        </button>
      </form>
    </div>
  )
}
