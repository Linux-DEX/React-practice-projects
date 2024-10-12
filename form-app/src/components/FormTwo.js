import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


export default function FormTwo() {
    //formik logics

    const formik = useFormik({
        initialValues: {
            name: "",
            address: "utter pradesh",
            email: "",
            terms: "",
        },
        //validate form

        validationSchema: Yup.object({
            name: Yup.string().max(20, "name must be 20 characters or less.").required("name is required"),
            email: Yup.string().email("invalid email address").required("email is required"),
            terms: Yup.array().required("Terms of services must be checked"),
        }),

        //submit form
        onsubmit: (values) => {
            console.log(values);
        },
    });


    return (
        <form className="container"
            onSubmit={formik.handleSubmit}
        >
            <div>
                <label htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                <input type="text" name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter you name" />
            </div>
            <div>
                <label htmlFor="address">address</label>
                <select name=""
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    id="">
                    <option value="">karnataka</option>
                    <option value="">utter pradesh</option>
                    <option value="">bihar</option>
                    <option value="">tamil nadu</option>
                </select>
            </div>
            <div>
                <label htmlFor="email">{formik.touched.email && formik.errors.name ? formik.errors.name : "email"}</label>
                <input type="text" name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter you email" />
            </div>
            <div>
                <label htmlFor="terms">Terms of service</label>
                <input type="checkbox" name="terms"
                    onChange={formik.handleChange}
                    value="checked" />
            </div>
            <button type="submit" >submit</button>
        </form>
    )
}