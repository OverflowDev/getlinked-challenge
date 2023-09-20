
import { Link } from 'react-router-dom';


import Navbar from '../layouts/Navbar';

import Vector from '../assets/vector.svg'
import Man from '../assets/man.png'
import Metrix from '../assets/metrix.png'
import Planet from '../assets/planet.png'
import Creative from '../assets/Creative.svg'
import Chain from '../assets/chain.svg'
import Flare from '../assets/flare.svg'
import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'
import Idea from '../assets/idea.png'
import Arrow from '../assets/arrow.svg'
import Rules from '../assets/rules.png'
import Criteria from '../assets/criteria.png'
import Question from '../assets/question.png'
import FAQ from '../assets/faq.png'
import Prize from '../assets/prize.png'
import Gold from '../assets/gold.svg'
import GoldM from '../assets/gold_medal.png'
import Silver from '../assets/silver.svg'
import Bronze from '../assets/bronze.svg'


function Home() {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        {/* Home  */}
        <section className="relative border-b border-gray-700 md:px-24 px-8">
            {/* Flare  */}
            <div className="absolute md:-top-12 md:left-36 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={Star} alt="star" className='absolute md:top-24 md:left-36 w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:top-24 md:left-[50%] w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:top-[70%] md:left-[35%] w-3 animate-pulse' />
            
            <div className="flex md:justify-end justify-center mt-4">
                <h2 className="md:text-3xl w-auto md:relative font-semibold italic">
                    Ignitting a Revolution in HR Innovation
                {/* <TypeAnimation
                    sequence={[
                        'Igniting a Revolution in HR Innovation',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Igniting a Revolution in HR Innovation',
                        1000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    style={{ fontSize: '1.875em', display: 'inline-block' }}
                    repeat={Infinity}
                /> */}
                    {/* <span className='md:relative'>HR Innovation</span> */}

                    <img 
                        src={Vector} 
                        alt="vector" 
                        className='absolute md:w-40 w-24 left-64 md:left-96 transform'
                    />
                </h2>
            </div>  

            <div className='md:flex items-center mt-4'>

                <div className='md:max-w-2xl md:mt-0 mt-12'>
                    <h2 className='md:text-8xl text-5xl md:text-left text-center font-extrabold font-clash-display relative'>
                        <span className='absolute md:-top-14 md:right-16 -top-6 right-10'><img src={Creative} alt="creative" className='md:w-full w-6' /></span>
                        getlinked Tech Hackathon <span className='text-secondary'>1.0</span> 
                        <span className='flex absolute md:bottom-5 bottom-3 md:-right-6 -right-5'><img src={Chain} alt="Chain" className='md:w-14 w-6' /> <img src={Flare} alt="Flare" className='w-5 md:w-12' /> </span>
                    </h2>
                    <p className='md:text-left text-center max-w-md mt-3'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    {/* Register  */}
                    <div className='mt-8  flex md:justify-start justify-center'>
                        <Link 
                            to='/register'
                            className='bg-gradient-to-r from-lgrad to-grad py-3 px-12 rounded-sm'
                        >
                            Register
                        </Link>
                    </div>
                    {/* Time  */}
                    <div className='font-unica-one mt-10 flex md:justify-start justify-center items-center gap-5'>
                        <h2 className='text-5xl'>
                            00<span className='text-sm'>H</span>
                        </h2>
                        <h2 className='text-5xl'>
                            00<span className='text-sm'>M</span>
                        </h2>
                        <h2 className='text-5xl'>
                            00<span className='text-sm'>S</span>
                        </h2>
                    </div>
                </div>

                <div className='md:mt-0 mt-[88px]'>
                    {/* Flare  */}
                    <div className="absolute top-24 right-36 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 "></div>
                    <img src={Planet} alt="planet" className='absolute md:w-5/12 w-80' />
                    <img src={Man} alt="man" className='md:w-full ' />
                    <img src={Metrix} alt="man" className='absolute top-24 md:-right-0 w-96 h-96' />
                </div>
            </div>

        </section>

        {/* Introduction  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <img src={StarPu} alt="Pu" className='absolute md:top-64 md:left-36 w-3 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-64 md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Arrow} alt="star" className='absolute md:bottom-20 md:right-[50%] bottom-[48%] right-[45%] w-12 animate-pulse' />

            <div className='md:flex md:justify-between justify-center items-center py-12 mt-4'>
                <img src={Idea} alt="idea" className='md:w-5/12' />

                <div className='flex flex-col max-w-xl md:mt-0 mt-12'>
                    <h2 className='max-w-md font-clash-display font-semibold md:text-4xl text-3xl md:text-left text-center'>Introduction to getlinked <span className='text-secondary'>tech Hackthon 1.0</span></h2>
                    <p className='tracking-wide leading-1 mt-6'>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>
            </div>
        </section>

        {/* Rules  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <div className="absolute md:top-36 md:left-36 top-24 right-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <div className="absolute -bottom-24 -right-4 md:w-96 w-72 md:h-96 h-72 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='md:flex md:justify-between justify-center items-center py-12 mt-4'>

                <img src={Rules} alt="idea" className='md:w-6/12 order-last' />

                <div className='flex flex-col max-w-xl md:mt-0 mt-12'>
                    <h2 className='max-w-sm font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Rules and <span className='text-secondary'>Guidelines</span></h2>
                    <p className='tracking-wide leading-1 mt-6'>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>
            </div>
        </section>

        {/* Criteria  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <div className="absolute top-72 left-36 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute -bottom-48 -right-4 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[20%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='md:flex md:justify-between justify-center items-center py-10 mt-2'>

                <img src={Criteria} alt="idea" className='md:w-6/12' />

                <div className='flex flex-col max-w-xl md:mt-0 mt-12'>
                    <h2 className='max-w-sm font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Judging Criteria <span className='text-secondary'>Key attributes</span></h2>
                    <div className='flex flex-col gap-4 mt-4 font-montserrat'>
                        <h2 className='text-md leading-1 text-key font-medium'>Innovation and Creativity: <span className='text-white'>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</span></h2>
                        <h2 className='text-md leading-1 text-key font-medium'>Functionality: <span className='text-white'>Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</span></h2>
                        <h2 className='text-md leading-1 text-key font-medium'>Impact and Relevance:  <span className='text-white'>Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span></h2>
                        <h2 className='text-md leading-1 text-key font-medium'>Technical Complexity: <span className='text-white'>Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</span></h2>
                        <h2 className='text-md leading-1 text-key font-medium'>Adherence to Hackathon Rules: <span className='text-white'>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span></h2>
                    </div>

                    <button className='bg-gradient-to-r from-lgrad to-grad py-2 px-8 w-48 rounded-sm mt-12'>Read More</button>
                </div>
            </div>
        </section>

        {/* faq  */}
        <section className="border-b border-gray-700 md:px-24 px-8 relative">
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <div className='md:flex md:justify-between justify-center items-center py-10 mt-2'>

                <div className='flex flex-col max-w-xl md:mt-24 mt-12'>
                    <h2 className='max-w-sm font-clash-display font-semibold md:text-5xl text-3xl md:text-left text-center'>Frequent Ask <span className='text-secondary'>Question</span></h2>
                    <p className='mt-4 max-w-md'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>

                    <div className="grid divide-y divide-secondary mt-8">
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5"> Can I work on a project I started before the hackathon?</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                Can I work on a project I started before the hackathon?
                            </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5">What happens if I need help during the hackathon?</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                What happens if I need help during the hackathon?
                            </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5">Can I join a team or do I have to come with one?</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                Can I join a team or do I have to come with one?
                            </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5">What happens after the hackathon ends</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                What happens after the hackathon ends
                            </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5">What happens if I don't have an idea for a project?</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                What happens if I don't have an idea for a project?
                            </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="flex group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none h-10 w-full">
                                <span className="w-4/5">Can I work on a project I started before the hackathon?</span>
                                <span className="transition group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                </span>
                            </summary>
                            <p className="text-white mt-3 group-open:animate-fadeIn">
                                Can I work on a project I started before the hackathon?
                            </p>
                            </details>
                        </div>
                    </div>
                </div>

                <div className='flex relative justify-center mt-12'>
                    <div className='flex items-center gap-6 justify-center absolute md:-top-20 -top-10 md:right-[50%] right-[45%]'>
                        <img src={Question} alt="question" className='md:w-8 w-6' />
                        <img src={Question} alt="question" className='md:w-16 w-8' />
                        <img src={Question} alt="question" className='md:w-8 w-6' />
                    </div>
                    <img src={FAQ} alt="idea" className='md:w-8/12' />
                </div>
            </div>
        </section>

        {/* timeline  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative'>

            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:left-[20%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='flex flex-col items-center justify-center py-12'>
                <h2 className='font-clash-display font-bold text-2xl'>Timeline</h2>
                <p className='text-center max-w-md text-sm'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>

            <div className=''>
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    {/* 1*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Hackathon Announcement</h3>
                            <p className="leading-tight text-justify font-montserrat text-sm">
                                The getlinked texh hackathon 1.0 formally announced to the general public and teams begin to get ready to register
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">1</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">2</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Team Registation begins</h3>
                            <p className="leading-tight text-justify text-sm font-montserrat">
                                Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>

                    {/* 3*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Team Registration ends</h3>
                            <p className="leading-tight md:text-right text-sm font-montserrat">
                                Interested participants are no longer allowed to register
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">3</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto md:flex items-center justify-center hidden">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto hidden md:flex items-center justify-center">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">4</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Announcement of the accepted teams and ideas</h3>
                            <p className="leading-tight text-justify text-sm font-montserrat">
                                All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>

                    {/* 5*/}
                    <div className="flex flex-row-reverse md:contents">
                        <div className=" col-start-1 col-end-5 p-4 my-4 ml-auto">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Getlinked Hackathon 1.0 Officially Begins</h3>
                            <p className="leading-tight text-justify text-sm font-montserrat">
                                Accepted teams can now proceed to build their ground breaking skill driven solutions
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10  ">
                            <div className="h-full w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">5</div>
                        </div>
                        {/* right  */}
                        <div className="col-start-6 col-end-10 p-4 my-4 mr-auto hidden md:flex items-center justify-center">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="flex md:contents">
                        {/* left */}
                        <div className="col-start-1 col-end-5 p-4 my-4 ml-auto md:flex items-center justify-center hidden">
                            <h3 className=" font-semibold text-lg mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                        {/* stepper  */}
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-20 w-8 flex items-center justify-center">
                                <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                            </div>
                            <div className="w-8 h-8 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-lgrad to-grad shadow flex items-center justify-center font-bold border-4 border-main">6</div>
                        </div>
                        {/* right */}
                        <div className=" col-start-6 col-end-10 p-4 my-4 mr-auto shadow-md">
                            <h3 className="font-semibold md:text-lg mb-1 text-secondary">Demo DAy</h3>
                            <p className="leading-tight text-justify text-sm font-montserrat">
                                Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced this day
                            </p>
                            <h3 className="mt-2 md:hidden font-semibold text-md mb-1 text-secondary">September 18, 2023</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* prize  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative'>
            <div className="absolute top-56 left-48 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute -bottom-48 -right-4 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={StarPu} alt="star" className='absolute md:top-[10%] md:left-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <div className='flex md:justify-end justify-center mt-12'>
                <h2 className='max-w-sm font-clash-display font-bold md:text-5xl text-3xl md:text-left text-center'>Prizes and <span className='text-secondary'>Rewards</span></h2>
            </div>

            <div className='md:flex md:justify-between justify-center items-center py-10 mt-2'>

                <img src={Prize} alt="idea" className='md:w-10/12' />

                <div className='flex md:gap-4 gap-2 items-center justify-center md:mt-0 mt-16 w-full font-montserrat'>
                    
                    <div className='w-36 h-56 rounded-md border border-secondary bg-secondary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                        <img src={Silver} alt="second" className='absolute md:-top-16 -top-8' />
                        <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>2nd</h2>
                        <h2 className='text-sm'>Runner</h2>
                        <h2 className='md:text-2xl font-bold text-secondary'>N300,000</h2>
                    </div>

                    <div className='w-32 h-60 rounded-md border border-primary bg-primary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                        <img src={GoldM} alt="second" className='absolute w-56 md:-top-16 -top-8' />
                        <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>1st</h2>
                        <h2 className='text-sm'>Runner</h2>
                        <h2 className='md:text-2xl font-bold text-primary'>N400,000</h2>
                    </div>

                    <div className='w-36 h-56 rounded-md border border-secondary bg-secondary backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-5 flex flex-col items-center justify-center relative'>
                        <img src={Bronze} alt="second" className='absolute md:-top-16 -top-8' />
                        <h2 className='font-bold md:text-4xl text-center tracking-wide mt-14'>3rd</h2>
                        <h2 className='text-sm'>Runner</h2>
                        <h2 className='md:text-2xl font-bold text-secondary'>N200,000</h2>
                    </div>
                    
                </div>
            </div>
        </section>

        {/* Partners  */}
        <section className='border-b border-gray-700 md:px-24 px-8 relative py-12'>
            <div className="absolute top-56 left-48 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <div className="absolute -bottom-48 -right-4 md:w-96 md:h-96 bg-primary rounded-full blur-3xl opacity-30 "></div>
            <img src={Star} alt="star" className='absolute md:bottom-[10%] md:right-[10%] bottom-[47%] right-[10%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[20%] md:right-[33%] w-4 animate-pulse' />
            <img src={StarPu} alt="star" className='absolute md:top-[40%] md:right-[40%] w-4 animate-pulse' />

            <div className='flex flex-col items-center justify-center py-4'>
                <h2 className='font-clash-display font-bold text-2xl'>Partners and Sponsors</h2>
                <p className='text-center max-w-md text-sm'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>

            <div className='flex justify-center items-center rounded-md border border-secondary w-full h-96 mt-12'>

            </div>
        </section>
      
    </div>
  )
}

export default Home