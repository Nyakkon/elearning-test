// import { Field,Form, useFormik } from "formik";
import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup'
import { http } from "../../utils/config";

export default function Register(props) {

  // const signUpUserSchema = yup.object().shape({
  //       taiKhoan: yup.string().required('Yeu cau nhap du lieu'),
  //       matKhau: yup.string().required('Yeu cau nhap du lieu'),
  //       hoTen: yup.string().required('Yeu cau nhap du lieu'),
  //       soDT:yup.string().required('Yeu cau nhap du lieu').matches(/^[0-9]+$/),
  //       email:yup.string().required('Yeu cau nhap du lieu').email('Phai nhap email')
  // })
 
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT:'',
      maNhom:'GP01',
      email:''
    },
    // cach 1
    // validationSchema: signUpUserSchema,

    // cách 2
    validationSchema :
     yup.object({
      taiKhoan: yup.string().required('Yêu cầu nhập dữ liệu'),
      matKhau: yup.string().required('Yêu cầu nhập dữ liệu'),
      hoTen: yup.string().required('Yêu cầu nhập dữ liệu'),
      soDT:yup.string().required('Yêu cầu nhập dữ liệu').matches(/^[0-9]+$/),
      email:yup.string().required('Yêu cầu nhập dữ liệu').email('Không đúng định dạng email')
    }),


    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log('value',values)
      // alert('abcd')
      try {
        let result = await http.post('/api/QuanLyNguoiDung/DangKy',values);
        if (result.status == 200) {
            alert('Dang ky thanh cong')
          } 
      } catch (err) {
        console.log(err)
        // console.log('response from server',err.response.data)
        alert(err.response.data)
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <h1 className="mb-8 text-3xl text-center">Đăng ký</h1>
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
         <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="hoTen"
          placeholder="Họ Và Tên"
          onChange={formik.handleChange}
        />
        {formik.touched.hoTen && formik.errors.hoTen ? (
         <p style={{color:'red'}}>{formik.errors.hoTen}</p>
       ) : null}
         <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="soDT"
          placeholder="Số Điện Thoại"
          onChange={formik.handleChange}
        />
        {formik.touched.soDT && formik.errors.soDT ? (
         <p style={{color:'red'}}>{formik.errors.soDT}</p>
       ) : null}
        
        <div className="border border-grey-light p-3 rounded mb-4">
          <label>Ma nhom:</label>
          <select name="maNhom"   onChange={formik.handleChange}>
            <option >GP01</option>
            <option >GP02</option>
            <option >GP03</option>         
          </select>
        </div>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
         <p style={{color:'red'}}>{formik.errors.email}</p>
       ) : null}   
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-lime-400 text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
