import React, { useState } from "react";

export default function FormOne() {

    const [userRegister, setUserRegister] = useState({
        name: "",
        address: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegister({ ...userRegister, [name]: value })
    }

    const [records, setRecords] = useState([]);

    const handleSubmite = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegister, id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)

        setUserRegister({ name: "", address: "", email: "", password: "" })
    }

    return (
        <div className="container">
            <form action="" onSubmit={handleSubmite}>
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" autoComplete="off"
                        onChange={handleInput}
                        name="name" value={userRegister.name} placeholder="Enter full name" />
                </div>
                <div>
                    <label htmlFor="address">address:</label>
                    <input type="text" id="address" autoComplete="off"
                        onChange={handleInput}
                        name="address" value={userRegister.address} placeholder="Enter address" />
                </div>
                <div>
                    <label htmlFor="email">email:</label>
                    <input type="text" id="email" autoComplete="off"
                        onChange={handleInput}
                        name="email" value={userRegister.email} placeholder="Enter email" />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="text" id="password" autoComplete="off"
                        onChange={handleInput}
                        name="password" value={userRegister.password} placeholder="Enter password" />
                </div>
                <button type="submit">register</button>
            </form>
            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div className="showDataStyle">
                                <p>{curElem.name}</p>
                                <p>{curElem.address}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}