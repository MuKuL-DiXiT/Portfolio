import { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import gsap from 'gsap';

export default function Contacts({ darkMode }) {
    const [rotation, setRotation] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current.querySelectorAll('.contact-card'),
            { opacity: 0, y: 60, scale: 2},
            { opacity: 1, y: 0, scale: 0.8, stagger: 0.6, duration: 1, ease: 'power3.out' }
        );
    }, []);

    function handleMouse(e, card) {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = -(clientX - left - width / 2) / 6;
        const y = (clientY - top - height / 2) / 6;
        setRotation((prev) => ({ ...prev, [card]: { x, y } }));
    }

    function resetRotation(card) {
        setRotation((prev) => ({ ...prev, [card]: { x: 0, y: 0 } }));
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.name || !formData.email || !formData.feedback) {
            alert('Please fill in all fields');
            return;
        }

        // Create WhatsApp message
        const message = `*New Portfolio Contact*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.feedback}%0A%0A_Sent from mukuldixit.netlify.app_`;
        
        // Replace with your WhatsApp number (include country code without +)
        const whatsappNumber = "+919104765356"; // Replace with your actual WhatsApp number
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            feedback: ''
        });
    };

    const contact = [
        { card: 1, href: "mailto:mukuldixit086@icloud.com", icon: <FaEnvelope className='text-red-500 text-3xl' />, name: "E - mail", text: "~Write to me~" },
        { card: 2, href: "https://www.linkedin.com/in/mukul-dixit-8b945227b/", icon: <FaLinkedin className='text-sky-600 text-3xl' />, name: "Linked In", text: "~Connect me~" },
        { card: 3, href: "https://www.instagram.com/mukul____dixit/", icon: <FaInstagram className='text-pink-500 text-3xl' />, name: "Instagram", text: "~Follow me~" }
    ];

    return (
        <div ref={containerRef} className='w-full h-screen flex flex-col items-center px-6 pt-20 pb-5'>
            
            <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Contact Cards */}
                <div className='flex flex-col gap-8 items-center'>
                    <div className='text-xl text-gray-600 font-semibold'>Talk to me</div>
                    {contact.map(({ card, href, icon, name, text }) => (
                        <div
                            key={card}
                            className='contact-card w-full'
                            onMouseMove={(e) => handleMouse(e, card)}
                            onMouseLeave={() => resetRotation(card)}
                            style={{
                                transform: `rotateX(${rotation[card]?.x || 0}deg) rotateY(${rotation[card]?.y || 0}deg)`,
                                perspective: '1000px',
                                transition: 'transform 0.25s ease-out'
                            }}
                        >
                            <a href={href} target='_blank' rel='noreferrer'>
                                <div className={`flex flex-col backdrop-blur-md items-center gap-2 py-5 rounded-2xl transition-transform hover:scale-105 ${darkMode ? ' bg-[#1F2937] text-white' : 'bg-white text-black'} shadow-xl px-6`}>
                                    {icon}
                                    <div className='text-lg font'>{name}</div>
                                    <div className='text-sm '>{text}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Suggestion Form */}
                <div className='flex flex-col gap-8'>
                    <div className='text-xl text-gray-600 font-semibold text-center'>Your Suggestions</div>
                    <form onSubmit={handleSubmit} className={`${darkMode ? 'text-gray-200' : 'text-black'} flex flex-col gap-6`}>
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
                        <button type='submit' className={`flex items-center justify-center gap-2 py-2 px-6 rounded-lg font-semibold  transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-green-700/50 hover:bg-green-600/70 text-green-100' : 'bg-green-600 hover:bg-green-700 text-white'} shadow-lg`}>
                            Send to WhatsApp <FaWhatsapp className='mt-1' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
