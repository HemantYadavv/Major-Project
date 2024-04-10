import React from 'react'
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import {enqueueSnackbar} from "notistack"


const Contact = () => {
 
 
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      mesaage: "",
    },


    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:3000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
      enqueueSnackbar("contact added successfully", {variant:"success"})
        // navigate('/Contact');
      } else {
       enqueueSnackbar("somthing went worng", {variant:"warning"})
      }
    },

   
  })

  return (
    <>
      
     
      
    <div className="relative block py-24  lg:pt-25 bg-gray-300">

    
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center -mt-42">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mt-5 mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">Contact Us</h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                For any product related query
              </p>
              <form onSubmit={contactForm.handleSubmit}>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                   type="text"
                   id="name"
                   value={contactForm.values.name}
                   onChange={contactForm.handleChange}
                
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Full Name"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.values.email}
                  onChange={contactForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: "all 0.15s ease 0s" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                 type="text"
                 id="message"
                 value={contactForm.values.message}
                 onChange={contactForm.handleChange}
                  rows={4}
                  cols={80}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Type a message..."
                  defaultValue={""}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                  style={{ transition: "all 0.15s ease 0s" }}
                >
                  Send Message
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  
  
  </>
  )
}

export default Contact