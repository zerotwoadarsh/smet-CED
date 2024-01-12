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
            name: 'Mahesh Pal',
            img: 'https://lh6.googleusercontent.com/-KOo-RCLUM01A5JEv-QwjNRmcyRA_AOru5WD4WEvRmrtEvgI1SBJmG_BvOABV-WWppL-fdEj1RD88PLOZ4PIvFhc-H0aV1Ic4zw2n2kiqi5f7mwYoX0j7WhY3Qg0YW_06Q=w1280',
            designation: 'senior',
            post: 'ML'
        },
        {
            name: ' Pal',
            img: 'https://lh6.googleusercontent.com/-KOo-RCLUM01A5JEv-QwjNRmcyRA_AOru5WD4WEvRmrtEvgI1SBJmG_BvOABV-WWppL-fdEj1RD88PLOZ4PIvFhc-H0aV1Ic4zw2n2kiqi5f7mwYoX0j7WhY3Qg0YW_06Q=w1280',
            designation: 'senior',
            post: 'ML'
        },
        {
            name: 'Mahesh ',
            img: 'https://lh6.googleusercontent.com/-KOo-RCLUM01A5JEv-QwjNRmcyRA_AOru5WD4WEvRmrtEvgI1SBJmG_BvOABV-WWppL-fdEj1RD88PLOZ4PIvFhc-H0aV1Ic4zw2n2kiqi5f7mwYoX0j7WhY3Qg0YW_06Q=w1280',
            designation: 'senior',
            post: 'ML'
        }
    ]

    return (
        <div>
            <div style={styles} className='flex flex-col h-screen  justify-center items-center'>
                <header>
                    <h1 className=' text-6xl '>SMET-2024</h1>
                </header>
                <h3>
                    Sustainable Materials, Environment and Technologies under climate change scenario
                </h3>
                <main className='w-4/5 flex justify-center items-center'>
                    <p className='flex justify-center items-center text-justify'>An International Conference on Sustainable Materials, Environment and Technologies under climate change scenario is being organized by the Department of Civil Engineering, National Institute of Technology, Kurukshetra. The need of the era is to use sustainable technologies. Sustainable development is the idea that human societies must live, and meet their needs, without compromising the ability of future generations to achieve their requirements. The conference aims to stimulate the exchange of information on current research, development and sharing of relevant experience in the specific areas of Civil Engineering. The conference shall provide a useful forum to academicians, technologists, entrepreneurs and the research scholars in respective domain to s </p>
                </main>
                <footer>
                    <p>&copy; 2024 Your Name</p>
                </footer>
            </div>
            <div className='bg-blue-300 flex justify-center flex-col'>

                <div className='flex justify-center mt-20 text-justify'>
                    <p className='block'>Organising Committee</p>
                </div>
                <div className='flex justify-around items-center flex-col'>
                    <ListName data={prof} />
                </div>
            </div>
        </div>
    );
};

export default Home;
