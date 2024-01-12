import React from 'react';
import ListName from './ListName'


const Home = () => {
    const styles = {
        backgroundImage: `url(${'https://th.bing.com/th/id/OIP.dClXLbXuCMrisHZF34jtQgHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const prof = [
        {
            name: 'B.V. Ramana Reddy',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'PATRON',
            post: 'Director, NIT Kurukshetra'
        },
        {
            name: 'Arun Goel',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'ORGANISING CHAIR',
            post: 'Professor & Head, Civil Engg. Deptt. '
        },
        {
            name: 'Dr. Mahesh Pal',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'Organizing secretary',
            post: 'Professor, Civil Engg. Deptt. '
        },
        {
            name: 'Dr. Ashwani Jain ',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'Organizing secretary',
            post: 'Professor, Civil Engg. Deptt. '
        },
        {
            name: 'Dr. Praveen Aggarwal ',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'Organizing secretary',
            post: 'Professor, Civil Engg. Deptt.'
        },
        {
            name: 'Dr. H D Chalak ',
            img: 'https://th.bing.com/th/id/OIP.jnHtL93hVOWndGheP0semAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.2&pid=1.7',
            designation: 'Organizing secretary',
            post: 'Assistant Professor, Civil Engg. Deptt.'
        }
    ]

    return (
        <div className='mb-5 bg-blue-200'>
            <div style={styles} className=' flex flex-col h-screen justify-center items-center'>
                <div className=' w-4/5 flex flex-col justify-center items-center text-justify'>
                    <header>
                        <p className=' text-6xl font-extrabold'>SMET-2024</p>
                    </header>
                    <p className='font-bold text-3xl flex flex-col text-center '>
                        Sustainable Materials, Environment and Technologies under climate change scenario
                    </p>
                    <main className=' flex justify-center items-center'>
                        <p className='flex justify-center items-center text-justify'>An International Conference on Sustainable Materials, Environment and Technologies under climate change scenario is being organized by the Department of Civil Engineering, National Institute of Technology, Kurukshetra. The need of the era is to use sustainable technologies. Sustainable development is the idea that human societies must live, and meet their needs, without compromising the ability of future generations to achieve their requirements. The conference aims to stimulate the exchange of information on current research, development and sharing of relevant experience in the specific areas of Civil Engineering. The conference shall provide a useful forum to academicians, technologists, entrepreneurs and the research scholars in respective domain to s </p>
                    </main>
                    <footer>
                        <p>&copy; 2024 Your Name</p>
                    </footer>
                </div>
            </div>

            <div className='text-black'>

                <div className='bg-blue-200 flex justify-center flex-col text-black'>
                    <div className='flex justify-center mt-32 text-justify'>
                        <p className='block font-semibold text-3xl mb-5'>Organising Committee</p>
                    </div>
                    <div className='flex justify-around items-center flex-col'>
                        <ListName data={prof} />
                    </div>
                </div>

                <div className='flex bg-blue-200 flew-row flex-wrap justify-evenly'>
                    <div className='flex flex-col justify-center items-center w-1/3 h-auto'>
                        <p className=' text-4xl m-5 font-bold'>Scope</p>
                        <p className=' text-blue-800 font-medium text-justify'>SMET-2024, an International Conference on Sustainable Materials, Environment and Technologies under climate change scenario in various areas of Civil Engineering, provides a forum for presentation of technological advances, latest research and policies in theoretical, experimental and applied aspects of sustainable developments of the field. High-quality full-length papers, which are not under review, and have not already been published or accepted for publication or communicated elsewhere, are solicited on the topics underlined and within the scope of conference theme and are expected to be communicated for possible publication. </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/3 h-auto'>
                        <p className='text-4xl m-5 font-bold'>Theme</p>
                        <p className=' font-medium'>The themes for SMET-2024 include but not limited to the following tracks in Civil Engineering.</p>
                        <ul className=' font-medium'>
                            <li>Structural Engineering</li>
                            <li>Geotechnical Engineering</li>
                            <li>Environmental Engineering</li>
                            <li>Transportation Engineering</li>
                            <li>Remote sensing and GIS Applications</li>
                            <li>Water Resource Engineering</li>
                            <li>AI and ML Applications in Civil Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
