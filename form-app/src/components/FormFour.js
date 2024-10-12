// NOTE: this is the best one for form

import React, { useState } from "react";

export default function FormFour() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        address: "",
        comments: "",
        isFirendly: true,
    });

    // function handleChange(event) {
    //     setFormData (prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        console.log(name, value);
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        // ? this line is for if you want to remove the form data after submiting 
        // setFormData({ name: "", address: "", email: "", comments: "", isFirendly: false })
    }

    return (
        <div className="cont">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <label htmlFor="address">address</label>
                <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={formData.address}
                />
                <textarea
                    value={formData.comments}
                    placeholder="comments"
                    onChange={handleChange}
                    name="comments"
                />
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly!</label>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
