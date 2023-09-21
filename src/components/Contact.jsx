

import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'
import Navbar from '../layouts/Navbar'

function Contact() {
  return (
    <div className='overflow-hidden h-screen '>
        <Navbar />
        <div className='md:px-24 px-8 h-full flex items-center relative'>
            <div className="absolute md:top-36 md:left-36 top-24 right-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <div className="absolute -bottom-24 -right-4 md:w-96 w-72 md:h-96 h-72 bg-primary rounded-full blur-3xl opacity-20 "></div>
            <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
            <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] bottom-[47%] right-[10%] w-4 animate-pulse' />

            <div className='md:flex md:justify-between md:items-center items-start md:py-12 py-8 w-full'>
                
                <div className='hidden md:flex flex-col max-w-xl md:mt-0 mt-12 gap-4'>
                    <div className='md:flex md:justify-start justify-center hidden'>
                        <h2 className='md:max-w-sm md:w-full w-3/4 font-semibold md:text-5xl text-3xl md:text-left text-center text-secondary font-clash-display'>Get in Toch</h2>
                    </div>
                    <h2 className=' w-32 font-semibold font-montserrat'>
                        Contact Information
                    </h2>
                    <h2 className=' w-32 font-semibold font-montserrat'>
                        27,Alara Street
                        Yaba 100012
                        Lagos State
                    </h2>
                    <h2 className=' max-w-md font-semibold font-montserrat'>
                        Call Us : 07067981819
                    </h2>
                    <h2 className=' max-w-xs font-semibold font-montserrat'>
                        we are open from Monday-Friday 08:00am - 05:00pm
                    </h2>
                    <div className='flex-col '>
                        <h2 className="text-secondary text-sm font-bold">Follow us</h2>
                        <div className='flex items-center space-x-2 mt-2'>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className='lg:w-6/12 h-full'>
                    <div className='p-12 md:w-3/4 md:h-full h-full md:rounded-md md:shadow-lg md:shadow-black md:bg-white md:backdrop-blur md:bg-clip-padding md:backdrop-filter md:bg-opacity-5'>
                        <h2 className='font-clash-display text-secondary w-64 text-lg font-bold '>Question or need assistance? Let us know about it!</h2>

                        <div className='flex-col '>
                            <form>
                                <input 
                                    type="text" 
                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur mt-4 py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                    placeholder='First Name'
                                />
                                <input 
                                    type="text" 
                                    className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur mt-8 py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                    placeholder='First Name'
                                />
                                <textarea 
                                    className='resize-none w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur mt-8 py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                    name="message" 
                                    cols="5" 
                                    rows="3"
                                    placeholder='Message'
                                ></textarea>

                                <div className='flex items-center mt-6'>
                                    <button type='submit' className='bg-gradient-to-r from-lgrad to-grad py-2 px-8 md:ml-36 rounded-sm'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact