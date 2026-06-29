import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Lottie from 'lottie-react';
import gsap from 'gsap';

export default function Contacts({ darkMode }) {
    const [rotation, setRotation] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const containerRef = useRef(null);
    const sendButtonRef = useRef(null);
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/send.json')
            const json = await response.json()
            setData(json)
            const response1 = await fetch('/hero.json')
            const json1 = await response1.json()
            setData1(json1)
        }
        fetchData()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
        alert('Please fill in all fields');
        return;
    }

    const message = `*New Portfolio Contact*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.feedback}%0A%0A_Sent from mukuldixit.netlify.app_`;
    const whatsappNumber = "919104765356";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    if (sendButtonRef.current) {
        const tl = gsap.timeline();

        tl.to(sendButtonRef.current, {
            x: 300,
            y: -180,
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
        });
         tl.to(sendButtonRef.current, {
            duration: 1
        });

        tl.add(() => {
            window.open(whatsappURL);
        });
        tl.to(sendButtonRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    }
    setFormData({
        name: '',
        email: '',
        feedback: ''
    });
};




    return (
        <div ref={containerRef} className='w-full flex flex-col items-center px-4 sm:px-6 pt-10 sm:pt-20 pb-5'>

            <div className='w-full px-4 sm:px-8 lg:px-0 lg:ml-72 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12'>
                <div className='flex flex-col gap-0'>
                    <div className='text-xl text-gray-600 font-semibold text-left'>Your Suggestions</div>
                    <form onSubmit={handleSubmit} className={`z-40 ${darkMode ? 'text-gray-200' : 'text-black'} flex flex-col gap-6`}>
                        <fieldset className={`border-2 ${darkMode ? 'border-gray-500' : ' border-gray-500'} rounded-lg px-6 py-3`}>
                            <legend>Name</legend>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder='Insert your name'
                                className='w-full bg-transparent focus:outline-none'
                                required
                            />
                        </fieldset>
                        <fieldset className={`border-2 ${darkMode ? 'border-gray-500' : ' border-gray-500'} rounded-lg px-6 py-3`}>
                            <legend>Email</legend>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Insert your email'
                                className='w-full bg-transparent focus:outline-none'
                                required
                            />
                        </fieldset>
                        <fieldset className={`border-2 ${darkMode ? 'border-gray-500' : ' border-gray-500'} rounded-lg px-6 py-3`}>
                            <legend>Feedback</legend>
                            <textarea
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleInputChange}
                                placeholder='Your suggestions'
                                rows={4}
                                className='w-full bg-transparent focus:outline-none resize-none'
                                required
                            ></textarea>
                        </fieldset>
                        <button type='submit' className='flex justify-center md:mr-48 transition-all duration-300 ' ref={sendButtonRef}>
                            {data && <Lottie animationData={data} loop={true} />}
                        </button>
                    </form>
                </div>

                <div className='sm:flex items-center justify-center hidden'>
                    {data1 && (
                        <div className='w-80 h-80 relative mt-96'>
                            <Lottie
                                animationData={data1}
                                loop={true}
                                style={{ width: '200%', height: '200%', transform: 'translate(-60%, -60%)' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
