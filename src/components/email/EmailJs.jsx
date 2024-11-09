import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_JS_DATA_LIST } from '../../utils/Helper';

const EmailJs = () => {

    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    form.current.reset();
                    setSuccessMessage(true);
                    setTimeout(() => setSuccessMessage(false), 3000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="min-h-screen flex items-center justify-center max-xl:my-6">
            <div className="container mx-auto max-sm:px-3">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className="font-medium text-black max-lg:text-3xl max-w-[429px] max-lg:mb-[20px] max-md:mb-5 max-sm:mb-5 mb-[31px] text-[40px] max-md:text-3xl leading-[120%] max-sm:mt-3 max-[420px]:mt-0">Love to hear from you, Get in touch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-4">
                        {EMAIL_JS_DATA_LIST.map((items, index) => (
                            <div key={index} className='flex flex-col'>
                                {items.map((obj, lastIndex) => (
                                    <div key={lastIndex} className="flex flex-col">
                                        <label className={`block text-base font-medium pb-[10px] leading-[157%] ${lastIndex === 1 ? "mt-8 max-lg:mt-6 max-sm:mt-4" : ""}`}>{obj.title}</label>
                                        <input type={obj.type} name={obj.name} placeholder={obj.placeholder} className="py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] text-[#000000B2] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none h-[52px]" required />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <label htmlFor="message" className="block text-base font-medium pb-[10px] mt-6 leading-[157%] max-sm:mt-4">Message</label>
                    <textarea name="message" id="message" className="min-h-[130px] resize-none text-[#000000B2] h-32 py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none" placeholder="Let tell us know your project about"></textarea>
                    <button type="submit" className="mt-[31px] max-lg:mt-5 bg-[#3C278D] text-white font-semibold py-[14px] flex items-center justify-center rounded-xl max-md:px-32 max-sm:px-16 duration-300 transition-all ease-linear hover:text-[#3C278D] hover:bg-transparent hover:border-[#3C278D] hover:border sm:w-[410px] max-sm:max-w-[410px] max-sm:mx-auto max-[420px]:mt-[14px]">Just Send</button>
                    <p className={`mt-4 text-green-500 bg-white shadow-md z-40 fixed bottom-5 duration-300 ease-linear px-5 py-3 rounded w-fit right-5 shadow-[#3C278D] ${successMessage ? "" : "translate-x-full -right-1"}`}>Email sent successfully!</p>
                </form>
            </div>
        </section>
    )
}

export default EmailJs