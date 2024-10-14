import React from "react";

const FormValidation = () => {
  return (
    <>
      <form
        action=""
        className="max-w-[700px] mx-auto h-screen flex flex-col justify-center items-center"
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone Number" />
        <select name="" id="">
          <option value="" selected disabled>
            Select color
          </option>
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
