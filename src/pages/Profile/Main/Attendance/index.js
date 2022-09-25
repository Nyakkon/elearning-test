import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { http } from "../../../../utils/config";

export default function Attendance(props) {
  const dispatch = useDispatch();
  const { arrCourseAttend } = useSelector((state) => state.quanlyProfile);
  const { userLogin } = useSelector((state) => state.quanLyLogin);

  useEffect(async () => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
      console.log("result", result);
      // setInfo(result.data)
      const action = {
        type: "GET_COURSE_ATTEND",
        arrCourseAttend: result.data.chiTietKhoaHocGhiDanh,
      };
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }, [props]);
  // console.log(arrInfo.taiKhoan)
  const renderCourseAttend = () => {
    return arrCourseAttend.map((course,index)=>{
      return   <div className="course-of-user flex divide-y-4" style={{border:'1px solid black',marginBottom:'5px'}}>
      <div className="detail-course-user basis-3/4 flex">
      <div className="img-course-user ">
        <img src={course.hinhAnh} style={{ width: 150, height: 100 }} />
      </div>
      <div className="detail-course-user">
        <div>
          <NavLink to={`/detail/${course.maKhoaHoc}`} >Detail</NavLink> <span>{course.tenKhoaHoc}</span>
        </div>
        <div>
          <p>
            {course.moTa.length >200 ? course.moTa.substr(0,80) + '...' : course.moTa }
          </p>
        </div>
      </div>
      </div>
      <div className="basis-1/4 button">
        <button onClick={ async ()=>{
          let inFoUser = {
            "maKhoaHoc": course.maKhoaHoc,
            "taiKhoan": userLogin.taiKhoan
          }
          try{
            let result = await http.post('api/QuanLyKhoaHoc/HuyGhiDanh',inFoUser)
            if (result.status == 200) {
              alert(result.data)
            }
          }catch(err) {
            console.log('err',err)
          }

        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        </button>

      </div>
    </div>
    })
}

  return (
    <div>
      <div className="container-profile">
        <div className="course-attendance-header">
          <h1>Khóa học đã ghi danh</h1>
          <p>Thông tin về khóa học bạn đã ghi danh</p>
          <hr />
        </div>
        <div className="course-attendance-main">
         
          {renderCourseAttend()}

          
          
          
        </div>
      </div>
    </div>
  );
}
