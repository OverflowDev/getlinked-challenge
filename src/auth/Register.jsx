import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import axios from "axios";

import toast, { Toaster } from 'react-hot-toast'


import Navbar from '../layouts/Navbar'

import RegistrationVector from '../assets/registration.svg'
import Star from '../assets/star.svg'
import StarPu from '../assets/starpu.svg'

function Register() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Adjust the breakpoint as needed

    const [categories, setCategories] = useState([])

    useEffect(() => {
        function handleResize() {
        setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
        }

        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
      const getCategories = async () => {
        try {
            const res =await axios.get('https://backend.getlinked.ai/hackathon/categories-list')
            setCategories(res?.data)
        } catch (error) {
            console.log(error)
            toast.error(error)
        }

      }

      getCategories()
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        team_name: '',
        project_topic: '',
        category: '',
        group_size: '1',
        privacy_poclicy_accepted: false
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    // console.log(formData)

    const handleFormSubmit = async (e) => {
        e.preventDefault()

    }

  return (
    <div className='overflow-hidden h-screen border-4 border-red-500'>
        <Toaster />

    {isDesktop ? (
        <Navbar /> 
    ) : (
        <nav className='py-5 md:px-16 px-8 flex justify-between'>
            <Link to='/' className='md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-lgrad to-secondary'>
                <div className='w-7 h-7 rounded-full flex items-center justify-center bg-main'>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
            </Link>
            <h2 className="text-white">Register</h2>
        </nav>
    )}

    <div className='md:px-24 px-8 flex items-center relative border'>
        <div className="absolute md:top-36 md:left-36 top-24 right-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 "></div>
        <div className="absolute -bottom-24 -right-4 md:w-96 w-72 md:h-96 h-72 bg-primary rounded-full blur-3xl opacity-20 "></div>
        <img src={Star} alt="star" className='absolute md:top-[20%] md:left-[20%] w-3 animate-pulse' />
        <img src={Star} alt="star" className='absolute md:bottom-[20%] md:right-[50%] top-[47%] right-[5%] w-4 animate-pulse' />
        <img src={StarPu} alt="star" className='absolute md:bottom-[20%] md:right-[10%] top-[10%] right-[10%] w-4 animate-pulse' />

        <div className='md:flex  md:py-8 py-2 w-full h-full'>
            
            <div className='md:mt-0 flex justify-center md:w-6/12'>
                <img src={RegistrationVector} alt="Register" className="md:w-full w-7/12" />
            </div>

            <div className='lg:w-7/12 md:h-max h-full md:mt-4'>
                <div className='md:p-12 p-4 md:w-full md:h-full h-full md:rounded-md md:shadow-lg md:shadow-black md:bg-white md:backdrop-blur md:bg-clip-padding md:backdrop-filter md:bg-opacity-5'>
                    <h2 className='font-clash-display text-secondary md:w-64 w-full md:text-3xl text-xl font-bold '>Register</h2>
                    <div className="flex items-center md:mt-5 mt-1">
                        <h2 className="text-sm">Be part of this movement</h2>
                        {/* <img src={movement} alt="movement" /> */}
                    </div>
                    <h2 className='md:text-2xl text-xl mt-0 font-semibold'>CREATE YOUR ACCOUNT</h2>

                    <div className='md:mt-6 mt-2'>
                        <form onSubmit={handleFormSubmit}>
                            <div className="flex flex-wrap md:gap-6 gap-4">

                                <div className="w-full md:w-72">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="email">Email</label>
                                    <input 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email" 
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                        placeholder='Email'
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-72">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="phone_number">Phone Number</label>
                                    <input 
                                        name="phone_number"
                                        type="number"
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none appearance-none'
                                        placeholder='Phone Number'
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-72 ">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="team_name">Team Name</label>
                                    <input 
                                        name="team_name"
                                        value={formData.team_name}
                                        onChange={handleInputChange}
                                        type="text" 
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                        placeholder='Team Name'
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-72 ">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="project_topic">Project Topic</label>
                                    <input 
                                        type="text" 
                                        name="project_topic"
                                        value={formData.project_topic}
                                        onChange={handleInputChange}
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white placeholder:text-white focus:text-white focus:outline-none'
                                        placeholder='Project Topic'
                                        required
                                    />
                                </div>
                                <div className="md:w-36 lg::w-72 ">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="category">Category</label>
                                    <select 
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white focus:text-white focus:outline-none'
                                    >
                                        <option
                                            value=''
                                            disabled
                                            className="bg-main"
                                        >
                                            Select Category
                                        </option>
                                        {categories.map(cat => (
                                            // <div key={cat.id}>
                                            <option 
                                                key={cat.id}
                                                value={cat.id}
                                                className="bg-main"
                                            >
                                                {cat.name}
                                            </option>
                                            // </div>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-24 md:w-72 ">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold md:mb-2" htmlFor="group_size">Group size</label>
                                    <select 
                                        name="group_size"
                                        value={formData.group_size}
                                        onChange={handleInputChange}
                                        className='w-full border px-3 rounded-md bg-secondary bg-opacity-5 backdrop-blur py-2 text-white focus:text-white focus:outline-none'
                                    >
                                        <option 
                                            value="1"
                                            className="bg-secondary"
                                        >
                                            1
                                        </option>
                                        <option 
                                            value="2"
                                            className="bg-secondary"
                                        >
                                            2
                                        </option>
                                        <option 
                                            value="3"
                                            className="bg-secondary"
                                        >
                                            3
                                        </option>
                                        <option 
                                            value="4"
                                            className="bg-secondary"
                                        >
                                            4
                                        </option>
                                        <option 
                                            value="5"
                                            className="bg-secondary"
                                        >
                                            5
                                        </option>
                                        <option 
                                            value="6"
                                            className="bg-secondary"
                                        >
                                            6
                                        </option>
                                        <option 
                                            value="7"
                                            className="bg-secondary"
                                        >
                                            7
                                        </option>
                                        <option 
                                            value="8"
                                            className="bg-secondary"
                                        >
                                            8
                                        </option>
                                        <option 
                                            value="9"
                                            className="bg-secondary"
                                        >
                                            9
                                        </option>
                                        <option 
                                            value="10"
                                            className="bg-secondary"
                                        >
                                            10
                                        </option>
                                    </select>
                                    
                                </div>

                            </div>

                            <h2 className="italic text-secondary md:text-sm text-[10px] mt-4">Please revieew your registration details before submitting</h2>

                            <label className="text-sm">
                                <input
                                    name="privacy_poclicy_accepted"
                                    type="checkbox"
                                    checked={formData.privacy_poclicy_accepted}
                                    onChange={handleCheckboxChange}
                                    required
                                />
                                I agreed with the event terms and conditions and privacy policy
                            </label>

                            <div className='flex justify-center mx-auto md:mt-6 mt-4'>
                                <button type='submit' className='bg-gradient-to-r from-lgrad to-grad py-2 px-8 rounded-sm'>Register Now</button>
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

export default Register