import {useNavigate} from 'react-router-dom'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addProductSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const Addproduct = () => {
    const navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            pname: "",
            pdetail: "",
            pprice: "",
            pcategory: "",
            discountprice:"",
            image: "",
            createdAt:"",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:3000/product/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
            toast("Item uploaded successfully")
       navigate('/Product')
              
            }
            else {
           toast("Something went wrong")
            }
        },
        validationSchema: addProductSchema,

    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:3000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }

    
    return (
        <>
<div className="flex items-center justify-center">
            
            <form onSubmit={addProductForm.handleSubmit} className="mb-2 w-50 m-auto mt-5 ">
                
                <div className="form-group">
                    <label htmlFor="pname" className="mt-5 mb-2">Name</label>
                    <input
                        type="text"
                        name='pname'
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pname}
                        className="w-full bg-gray-300 py-1 rounded mb-3"
                        required=""
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="imageUrl" className="mb-2"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>
                
             
                <div className="form-group">
                    <label htmlFor="pdetail" className="mb-2">Detail</label>
                    <textarea
                        name="pdetail"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pdetail}
                        className="w-full bg-gray-300 py-1 rounded mb-3"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pprice" className="mb-2">price</label>
                    <input  type="text"
                        name="pprice"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pprice}
                        className="w-full bg-gray-300 py-1 rounded mb-3"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor=" discountprice" className="mb-2">
                        Originalprice</label>
                    <input type="text"
                        name="discountprice"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.discountprice}
                        className="w-full bg-gray-300 py-1 rounded mb-3"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pcategory" className="mb-2">pcategory</label>
                    <input
                        name="pcategory"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pcategory}
                        className="w-full bg-gray-300 py-1 rounded mb-3"
                        required=''
                    />
                </div>

                <button type="submit" className="bg-red-500 text-white  mb-5 w-full py-1 rounded-lg">     Add Product</button>


            </form>

            </div>
        </>
    )
}


export default Addproduct