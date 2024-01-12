import React from 'react'

const year = new Date().getFullYear();

export const MainFooter = () => {
    return (
        <div className='bg-blue-200 font-thin text-sm text-gray-500 h-20 mt-10'>
            <section className='flex justify-evenly justify-items-center flex-row'>
                <div>
                    <p>SMET @ {year} All Rights Reserved</p>
                </div>
                <div>
                    <p>Site Developed and Maintained by Tech Teams @ Infrastructure Society</p>
                </div>
            </section>
        </div>
    )
}
