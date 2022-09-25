import React, { useEffect } from 'react'
import { Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { http } from '../../../utils/config';
import { NavLink } from 'react-router-dom';
export default function Courses(props) {
    const columns = [
        {
            title: 'Ten Khoa Hoc',
            dataIndex: 'tenKhoaHoc',
           
            
            sorter: (a, b) => {
                let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
                let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
                if (tenKhoaHocA > tenKhoaHocB) {
                    return 1;
                }
                return -1
            },
            sortDirections: ['descend','ascend'],
        },
        {
            title: 'Ma Khoa Hoc',
            dataIndex: 'maKhoaHoc',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Hinh Anh',
            dataIndex: 'hinhAnh',
            render: (text,course,index) => {
                return <>
                    <img src={course.hinhAnh} width={50} height={50} onError={(e)=>{
                        e.target.onError=null; e.target.src=`https:picsum.photos/id/${index}/50/50`
                    }} />
                </>
            }
        },
        {
            title: 'Danh Muc Khoa Hoc',
            dataIndex: 'danhMucKhoaHoc',
            render: (text,course,index) => {
                return <>
                   <p>{course.danhMucKhoaHoc.maDanhMucKhoahoc} </p>
                </>
            },
            filters: [
                {
                    text: 'FullStack',
                    value: 'FullStack',
                },
                {
                    text: 'Lập trình Front end',
                    value: 'Lập trình Front end',
                },
               
            ],
        },
        {
            title: '',
            dataIndex: '',
            render: (text,course) => {
                return <>
                    <NavLink className='mr-2 text-2xl p-2' to='/'><EditOutlined style={{color:'blue'}}/></NavLink>
                    <NavLink className='text-2xl' to='/'><DeleteOutlined style={{color:'red'}}/></NavLink>

                </>
            }
        },
    ];
    const { arrCourses } = useSelector(state => state.coursesReducer);
    console.log('arrCourses',arrCourses)

    const data = arrCourses

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => console.log(value);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(async (dispatch) => {
            try {
                let result = await http.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
                const action = {
                    type: 'GET_COURSES',
                    arrCourses: result.data
                };
                dispatch(action)
            } catch (err) {
                console.log(err)
            }
        })
    }, [])
    // console.log('props',props)
    const {history} =props
    return (
        <div>
            <h3>Quan Ly Khoa Hoc</h3>
            <Button type='primary' className='mb-2' onClick={()=>{
                history.push('/admin/courses/addnew')
            }}>Them khoa hoc</Button>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                className='mb-5'
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}
