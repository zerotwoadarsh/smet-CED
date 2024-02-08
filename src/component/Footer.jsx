import React from 'react'

const year = new Date().getFullYear()

function Footer() {
    return (
        <div className='Footer'>
            <footer className="site-footer self-end flex flex-col justify-center items-center py-4">
                <p className=" flex">SMET © {year} All Rights Reserved</p>
                <p className=' flex px-10 max-sm:flex-col text-center'>Site Developed and Maintained by Tech Team <span> @ <a target='_blank'  href='http://www.infranitkkr.in/' >Infrastructure Society</a></span></p>
            </footer>
        </div>
    )
}

export default Footer