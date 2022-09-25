

import React from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Course({course, index}) {

  const [isError,setisError] = useState(false);
  // console.log(props)  
  return (
    <NavLink to={`/detail/${course.maKhoaHoc}`} className='h-60 w-60'>
            {/* course */}
            <div className='flex flex-col items-start space-y-[1px]'>
              <img className='h-32 w-full' alt='true' onError={()=>{setisError(true)}} src={!isError ? course?.hinhAnh:"https://cdn2.vectorstock.com/i/1000x1000/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"} />
    
                <h2 className='font-bold text-md pt-1'>{course?.tenKhoaHoc}</h2>
                <div className='flex space-x-1 '>
                    <h3 className='text-orange-800 font-bold text-sm'>Vote</h3>
                    <div className='flex items-center pb-3'>
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                        <StarIcon className='w-4 text-orange-400' />
                    </div>
                    <p className='text-xs'>Lượt xem: {course?.luotXem} </p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <h3 className=''>Price: 19$</h3>
                </div>  
            </div>
        </NavLink>
  )
}
