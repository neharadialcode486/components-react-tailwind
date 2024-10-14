import React, { useEffect, useState } from "react";

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
  const onsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.phoneNumber &&
      formData.selectedColor
    ) {
      console.log(formData, "E");
      setFormData(initialState);
      setError(false);
    }
  };
  useEffect(() => {
    if (formData.image instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(formData.image);
    }
  }, [formData.image]);
  return (
    <>
      <form
        onSubmit={onsubmitHandler}
        action=""
        className="max-w-[700px] mx-auto h-screen flex flex-col justify-center items-center"
      >
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="Name"
          value={formData.name}
        />
        {error && formData.name === "" && <p>This field is required.</p>}
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Email"
          value={formData.email}
        />
        {error && formData.email === "" && <p>This field is required.</p>}
        <input
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="text"
          placeholder="Password"
          value={formData.password}
        />
        {error && formData.password === "" && <p>This field is required.</p>}
        <input
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          type="text"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
        />
        {error && formData.confirmPassword === "" ? (
          <p>This field is required.</p>
        ) : (
          error &&
          formData.confirmPassword !== formData.password &&
          "Password not matched"
        )}
        <input
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          type="number"
          placeholder="Phone Number"
          value={formData.phoneNumber}
        />
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        {formData.image && (
          <img
            className="w-full h-[50px] object-cover"
            src={formData.image}
            alt="image"
          />
        )}

        <select
          onChange={(e) =>
            setFormData({ ...formData, selectedColor: e.target.value })
          }
          name=""
          id=""
          value={formData.selectedColor}
        >
          <option defaultValue="Select color">Select color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
        </select>
        <button className="mt-4">Submit</button>
      </form>
    </>
  );
};

export default FormValidation;
