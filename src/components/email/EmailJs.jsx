import React from 'react'

const EmailJs = () => {
    return (
        <section className="min-h-screen flex items-center justify-center max-xl:my-6">
            <div className="container mx-auto max-sm:px-3">
                <form>
                    <h1 className="font-medium text-black max-lg:text-3xl max-w-[429px] max-lg:mb-[20px] max-md:mb-5 max-sm:mb-5 mb-[31px] text-[40px] max-md:text-3xl leading-[120%] max-sm:mt-3 max-[420px]:mt-0">Love to hear from you, Get in touch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:gap-4">
                        <div>
                            <label htmlFor="name" className="block text-base font-medium pb-[10px] leading-[157%]">Your name</label>
                            <input type="text" placeholder="Edward Snowden" className="py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] text-[#000000B2] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none h-[52px]" required />
                            <label htmlFor="interest" className="leading-[157%] block text-base font-medium pb-[10px] mt-8 max-lg:mt-6 max-sm:mt-4">What you are interested in</label>
                            <input type="text" placeholder="Design & Branding" className="py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] text-[#000000B2] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none h-[52px]" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-base font-medium pb-[10px] leading-[157%]">Your email</label>
                            <input type="email" placeholder="itanexample@gmail.com" className="h-[52px] py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] text-[#000000B2] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none" required />
                            <label htmlFor="budget" className="leading-[157%] block text-base font-medium pb-[10px] mt-8 max-lg:mt-6 max-sm:mt-4">Project Budget</label>
                            <input type="text" placeholder="Select your budget" className="h-[52px] py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] text-[#000000B2] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none" required />
                        </div>
                    </div>
                    <label htmlFor="message" className="block text-base font-medium pb-[10px] mt-6 leading-[157%] max-sm:mt-4">Message</label>
                    <textarea name="message" id="message" className="min-h-[130px] resize-none text-[#000000B2] h-32 py-3 px-4 border border-gray-300 rounded-xl w-full text-base font-normal bg-[#8A8A8A2B] outline-none placeholder:text-base placeholder:font-normal placeholder:text-[#000000B2] border-none" placeholder="Let tell us know your project about"></textarea>
                    <button type="submit" className="mt-[31px] max-lg:mt-5 bg-[#3C278D] text-white font-semibold py-[14px] flex items-center justify-center rounded-xl max-md:px-32 max-sm:px-16 duration-300 transition-all ease-linear hover:text-[#3C278D] hover:bg-transparent hover:border-[#3C278D] hover:border sm:w-[410px] max-sm:max-w-[410px] max-sm:mx-auto max-[420px]:mt-[14px]">Just Send</button>
                </form>
            </div>
        </section>
    )
}

export default EmailJs