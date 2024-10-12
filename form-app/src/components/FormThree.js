import React, { useState } from "react";

export default function FormThree() {

    const [username, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="cont">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <label htmlFor="email">email</label>
                <input
                    type="text"
                    name="email"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <label htmlFor="address">address</label>
                <input
                    type="text"
                    name="address"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}