import React from 'react'
// import download from '../asset/img/download.png'
import {
    ShoppingCartIcon,
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from "@heroicons/react/outline"
export default function Footer(props) {
  return (
    <div className='bg-black text-white pt-2 pl-2 pr-2'>
        <div className="footer-top flex justify-between mb-5">
            <div className="footer-top-left flex justify-between w-3/5">
                <div>
                   <a href="" className='block'>Udemy Business</a>
                   <a href="" className='block'>Teach on Udemy</a>
                   <a href="" className='block'>Get the app</a>
                   <a href="" className='block'>About us</a>
                   <a href="" className='block'>Contact us</a>
                </div>
                <div>
                    <a href="" className='block'>Careers</a>
                    <a href="" className='block'>Blog</a>
                    <a href="" className='block'>Help and Support</a>
                    <a href="" className='block'>Affiliate</a>
                    <a href="" className='block'>Investors</a>
                </div>
                <div>
                    <a href="" className='block'>Terms</a>
                    <a href="" className='block'>Privacy policy</a>
                    <a href="" className='block'>Cookie settings</a>
                    <a href="" className='block'>Sitemap</a>
                    <a href="" className='block'>Accessibility statement</a>
                </div>
            </div>
            <div className='footer-top-right w-2/5 text-right'>
                <GlobeAltIcon className='h-5 w-5 inline-block mr-2' />
                <a href="">English</a>
            </div>
        </div>
        <div className="footer-bot flex justify-between">
            <a href="">
                {/* <img src={download} alt="" className='w-25 h-10' /> */}
            </a>
            <p>© 2022 Udemy, Inc.</p>
        </div>
    </div>
  )
}
