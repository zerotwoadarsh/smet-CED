import React from 'react';
import presentationBanner from '../../assets/images/registrsationBanner.jpg'

const Author_Presentation = () => {
    return (
        <div className=' bg-white text-black pb-5 '>
            <div style={{ textAlign: 'center', backgroundColor: 'white', color: '#333' }}>
                <img
                    src={presentationBanner}
                    alt="Registration Image"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                    className=' w-full'
                />
            </div>
            <div style={{ padding: '0 10%', textAlign: 'left' }} className='text-center sm:text-left  mr-5 ml-5' >
                <p className=' font-bold text-4xl text-center my-10 '>Presentation Guide</p>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2'>Tips for a Good Presentation</p>
                    <p className='text-sm text-justify'>Whether you are a seasoned presenter or a nervous first-timer, the following tips are intended as a simple guide.</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>What to Bring</p>
                    <p className='text-sm text-justify '>Bring your presentation on a USB drive, bring a copy on a second USB as a back-up and email the file to yourself ahead of time in case of loss or failure. In addition, you may bring along printed copies of your presentation, your full paper or other handouts, to distribute to audience members. We also recommend that you bring business cards.</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>Checklist</p>
                    <div className='ml-2 text-justify'>
                        <li className='text-sm'>Presentation on a USB drive</li>
                        <li className='text-sm'>Back-up of presentation (USB and email)</li>
                        <li className='text-sm'>Printouts of presentation, full paper and/or relevant handouts (optional)</li>
                        <li className='text-sm'>Business cards</li>
                    </div>
                </div>
                <div>
                    <p><span className='font-bold'>Important:</span> Please ensure that the file name of your presentation begins with your own name or Paper ID, rather than naming the file “ICMSN” or “UK”. This ensures you don’t waste valuable presentation time searching for the file.</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>What to Wear</p>
                    <p className='text-sm text-justify'>There is no official dress code, but delegates generally wear business casual. However, professional attire is appreciated by fellow professionals, so we suggest erring on the smart side – although a tie is not necessary!</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>Timing</p>
                    <p className='text-sm text-justify'>Aim to arrive the conference room at least a few minutes in advance before the session starts. Time is of vital importance in making a presentation, so please be aware of the overall length of your presentation, as well as how the time is divided within your presentation, to ensure that you leave the appropriate amount of time for each point.</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>How Long Is the Ideal Presentation?</p>
                    <p className='text-sm text-justify'>You have a 15-minute slot allocated in which to present, but your presentation itself should be no longer than 15 minutes. We would suggest aiming for around 12–13 minutes. This will allow ample time for directly engaging with the audience through discussion and questions.</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>Practice Makes Perfect</p>
                    <p className='text-sm text-justify'>Long before the conference, make sure you spend ample time distilling and crafting your ideas into a well-thought-out presentation. Do NOT just read out your paper – a well-written paper does not equal an interesting and effective presentation.
                        Practice delivery, timing and use of visuals a long while ahead of the event with your colleagues and friends. Invite feedback and incorporate their criticisms as you polish your presentation, which should be interesting and informative, well paced and lively. Show your passion for your subject: enthusiasm is infectious!</p>
                </div>
                <div className=' mt-4 mb-8'>
                    <p className=' font-bold mb-2 '>Checklist</p>
                    <div className='ml-2 text-justify'>
                        <li className='text-sm'>CHECK your facts, figures and quotes are accurate</li>
                        <li className='text-sm'>CHECK your presentation for grammatical errors and spelling mistakes. If English is not your first language, please consider asking a native speaker to assist with this.</li>
                        <li className='text-sm'>CHECK your timing, ensuring that your presentation is 15 minutes or less in length. Coming in under the 15-minute mark is better than overrunning.</li>
                        <li className='text-sm'>CHECK your presentation is interesting and informative, and that you are delivering it with the enthusiasm your topic deserves.</li>
                        <li className='text-sm'>CHECK you have printed copies of your presentation in case they are requested by audience members.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author_Presentation;