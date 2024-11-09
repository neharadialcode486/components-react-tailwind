import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const FormValidation = () => {
    const initialState = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        selectedColor: "",
        image: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const form = useRef();

    // Password validation function
    const isValidPassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    const validateForm = () => {
        return (
            formData.name &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.password === formData.confirmPassword &&
            isValidPassword(formData.password) &&
            formData.phoneNumber.length === 10 &&
            formData.selectedColor
        );
    };

    const onsubmitHandler = (e) => {
        e.preventDefault();
        setError(true);

        if (validateForm()) {
            console.log("Form is valid, sending email");
            sendEmail(e);
            setFormData(initialState); // Reset form data after successful submit
            setError(false);
        } else {
            console.log("Form is invalid");
        }
    };

    useEffect(() => {
        if (formData.image instanceof File) {
            const reader = new FileReader();
            reader.onloadend = () => setFormData(prev => ({ ...prev, image: reader.result }));
            reader.readAsDataURL(formData.image);
        }
    }, [formData.image]);

    const sendEmail = (e) => {
        emailjs.sendForm('service_3rwtrur', 'template_4ruauh9', form.current, {
            publicKey: 'N9x2d_OkytANvnrD-' // Your EmailJS public key
        })
            .then(
                () => {
                    setSuccessMessage(true);
                    setTimeout(() => setSuccessMessage(false), 3000);
                },
                (error) => console.log('FAILED...', error.text)
            );
    };

    return (
        <>
            <form
                ref={form}
                onSubmit={onsubmitHandler}
                className="max-w-[700px] mx-auto h-screen flex gap-5 flex-col mb-10 justify-center items-center"
            >
                <input
                    type="text"
                    name="name" // Add name attribute for EmailJS template
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {error && formData.name === "" && <p className="text-red-600 font-semibold text-sm w-full -mt-2 pl-4">This field is required.</p>}

                <input
                    type="email"
                    name="email" // Add name attribute for EmailJS template
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {error && formData.email === "" && <p className="text-red-600 font-semibold text-sm w-full -mt-2 pl-4">This field is required.</p>}

                <input
                    type="text"
                    name="phoneNumber" // Add name attribute for EmailJS template
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                {error && formData.phoneNumber === "" && <p className="text-red-600 font-semibold text-sm w-full -mt-2 pl-4">This field is required.</p>}

                <input
                    type="password"
                    name="password" // Add name attribute for EmailJS template
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {error && formData.password === "" && <p className="text-red-600 font-semibold text-sm w-full -mt-2 pl-4">This field is required.</p>}

                <input
                    type="password"
                    name="confirmPassword" // Add name attribute for EmailJS template
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                {error && formData.confirmPassword === "" && <p className="text-red-600 font-semibold text-sm w-full -mt-2 pl-4">This field is required.</p>}

                <input
                    type="file"
                    name="image" // Add name attribute for EmailJS template
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                />
                {formData.image && <img className="w-full h-[50px] object-cover" src={formData.image} alt="imageData" />}

                <button className="mt-[31px] max-lg:mt-5 bg-[#3C278D] text-white font-semibold py-[14px] flex items-center justify-center rounded-xl max-md:px-32 max-sm:px-16 duration-300 transition-all ease-linear hover:text-[#3C278D] hover:bg-transparent hover:border-[#3C278D] hover:border sm:w-[410px] max-sm:max-w-[410px] max-sm:mx-auto max-[420px]:mt-[14px]">
                    Submit
                </button>
            </form>

            {successMessage && (
                <p className="mt-4 text-green-500 bg-white shadow-md z-40 fixed bottom-5 duration-300 ease-linear px-5 py-3 rounded w-fit right-5 shadow-[#3C278D]">
                    Sent successfully!
                </p>
            )}
        </>
    );
};

export default FormValidation;