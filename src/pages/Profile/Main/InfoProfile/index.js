import React, { useEffect, useState } from "react";
import { ACCESSTOKEN, http } from "../../../../utils/config";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

export default function InfoProfile(props) {
  const dispatch = useDispatch();
  const { arrInfo } = useSelector((state) => state.quanlyProfile);

  useEffect(async () => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
      console.log("result", result);
      // setInfo(result.data)
      const action = {
        type: "GET_PROFILE",
        arrInfo: result.data,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: arrInfo.taiKhoan,
      matKhau: arrInfo.matKhau,
      hoTen: arrInfo.hoTen,
      soDT: arrInfo.soDT,
      maNhom: "GP01",
      email: arrInfo.email,
      maLoaiNguoiDung: "HV",
    },
    // cach 1
    // validationSchema: signUpUserSchema,

    // cách 2
    validationSchema: yup.object({
      taiKhoan: yup.string().required("Yêu cầu nhập dữ liệu"),
      matKhau: yup.string().required("Yêu cầu nhập dữ liệu"),
      hoTen: yup.string().required("Yêu cầu nhập dữ liệu"),
      soDT: yup
        .string()
        .required("Yêu cầu nhập dữ liệu")
        .matches(/^[0-9]+$/),
      email: yup
        .string()
        .required("Yêu cầu nhập dữ liệu")
        .email("Không đúng định dạng email"),
    }),

    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("value", values);
      // alert('abcd')
      try {
        let result = await http.put(
          "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
          values
        );
        if (result.status == 200) {
          alert("Cap nhat thanh cong");
        }
      } catch (err) {
        console.log(err);
        // console.log('response from server',err.response.data)
        alert(err.response.data);
      }
    },
  });

  return (
    <div>
      <div className="container-profile ">
        <h1>Thông tin tài khoản</h1>
        <p>Xem thông tin hoặc chỉnh sửa thông tin của bạn</p>
        <hr />

        <form className="h-full" onSubmit={formik.handleSubmit}>
          <div className="border-b-2 block md:flex">
            <div className="w-full  p-8 bg-white lg:ml-4 shadow-md">
              <div className="rounded  shadow p-6">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Tên tài khoản
                  </label>
                  <div className="flex">
                    <input
                      name="taiKhoan"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={formik.values.taiKhoan}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                      <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
                    ) : null}
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Mật Khẩu
                  </label>
                  <input
                    name="matKhau"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formik.values.matKhau}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.matKhau && formik.errors.matKhau ? (
                    <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
                  ) : null}
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Tên Người Dùng
                  </label>
                  <input
                    name="hoTen"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formik.values.hoTen}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.hoTen && formik.errors.hoTen ? (
                    <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
                  ) : null}
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Số Điện Thoại
                  </label>
                  <input
                    name="soDT"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value={formik.values.soDT}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.soDT && formik.errors.soDT ? (
                    <p style={{ color: "red" }}>{formik.errors.soDT}</p>
                  ) : null}
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p style={{ color: "red" }}>{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="button">
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sửa thông tin
            </button>
            <button  type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Lưu thay đổi
            </button>
          </div>
        </div>
              </div>
            </div>
          </div>
        </form>
       
      </div>
    </div>
  );
}
