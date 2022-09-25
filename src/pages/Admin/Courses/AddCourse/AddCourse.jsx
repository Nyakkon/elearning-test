import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { http } from "../../../../utils/config";
export default function AddCourse(props) {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { userLogin } = useSelector((state) => state.quanLyLogin);
  // console.log(userLogin)
  const [imgSrc, setImgSrc] = useState();

  const formik = useFormik({
    initialValues: {
      "maKhoaHoc": "",
      "biDanh": "",
      "tenKhoaHoc": "",
      "moTa": "",
      "luotXem": 0,
      "danhGia": 0,
      "hinhAnh": "",
      "maNhom": "GD",
      "ngayTao": "",
      "maDanhMucKhoaHoc": "TuDuy",
      "taiKhoanNguoiTao": "userLogin.taiKhoan",
    },
    onSubmit: async (values) => {
      console.log("values", values);

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      try {
        let result = await http.post(
          "/api/QuanLyKhoaHoc/ThemKhoaHoc",
          formData
        );
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleChangeDatePicker = (value) => {
    // console.log('handleChangeDatePicker',moment(value).format('DD/MM/YYYY'))
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file.type === "image/jpeg" || file.type === "image/jpg") {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log("a", e.target.result);
        setImgSrc(e.target.result);
      };
    }
    formik.setFieldValue("hinhAnh", file);
  };
  const handleChangeOption = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  return (
    <div>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Them moi phim</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ma Khoa Hoc">
          <Input name="maKhoaHoc" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Bi Danh">
          <Input name="biDanh" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ten Khoa Hoc">
          <Input name="tenKhoaHoc" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mo Ta">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ma Danh Muc Khoa Hoc">
          <Select name="maDanhMucKhoaHoc" onChange={handleChangeOption}>
            <Select.Option value="BackEnd">Học Backend</Select.Option>
            <Select.Option value="Design">Thiết kế Web</Select.Option>
            <Select.Option value="FullStack">Học Front end</Select.Option>
            <Select.Option value="FullStack">
              Học Full Stack
            </Select.Option>
            <Select.Option value="TuDuy">Tư duy lập trình</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Luot Xem">
          <InputNumber
            name="luotXem"
            onChange={handleChangeInputNumber("luotXem")}
            min={0}
            max={100}
          />
        </Form.Item>
        <Form.Item label="Danh Gia">
          <InputNumber
            name="danhGia"
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={5}
          />
        </Form.Item>

        {/* <Form.Item label="Ma Nhom">
          <Input name='maNhom' onChange={formik.handleChange} />
        </Form.Item> */}
        <Form.Item label="Ngay Tao">
          <DatePicker
            name="ngayTao"
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
          />
        </Form.Item>
        {/* <Form.Item label="Ma Danh Muc Khoa Hoc">
          <Input name='maDanhMucKhoaHoc' onChange={formik.handleChange} />
        </Form.Item> */}
        <Form.Item label="Hinh Anh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg"
          />
          <br />
          <img width={100} height={100} src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="Button">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Button
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
