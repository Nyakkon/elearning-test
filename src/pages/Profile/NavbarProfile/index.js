import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
export default function NavbarProfile(props) {
  const location = useLocation();
  console.log("location", location);

  const arrListMenu = [
    {
      name: "Thông Tin Tài Khoản",
      path: "/profile/info-course",
    },
    {
      name: "Khóa Học Ghi danh",
      path: "/profile/attendance",
    },
    {
      name: "Khóa Học Của Tôi",
      path: "/profile/mycourse",
    },
  ];

  return (
    <div className="navbar-profile text-center p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div
        className="image-avatar text-center rounded-full text-center "
        
      >
        <img src="http://bootdey.com/img/Content/User_for_snippets.png" className="rounded-full mx-auto" style={{width:100,height:100}} />
      </div>
      <div className="title">Le Bui Anh Tuan</div>
      <div className="menu-profile">
        <ul>
          {arrListMenu.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className={`${
                  item.path === location.pathname
                    ? styles.activeMenu
                    : styles.unactiveMenu
                }`}
              >
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>

    </div>
  );
}
