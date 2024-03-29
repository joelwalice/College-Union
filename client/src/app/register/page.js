"use client"
import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            role: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, password, cpassword, role } = this.state;

        // Email validation function
        const isValidEmail = (email) => {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(email);
        };

        // Log state for debugging
        console.log(name, email, password, role);

        // Validate the fields
        if (name === '' || email === '' || password === '' || cpassword === '' || role.length === 0) {
            alert("Please fill all the fields");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Invalid Email");
            return;
        }

        
        if (role === "none") {
            alert("Please Enter a role");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        axios.post("https://content.vercel.app/admin/register", {
            name,
            email,
            password,
            role,
        })
            .then((response) => {
                const data = response.data;
                console.log(data, "user");
                if (data.Status === "Success") {
                    alert("Register Successful");
                    window.location.href = "/login";
                }
            })
            .catch((error) => {
                // Handle the error
                console.error("Error:", error);
            });
    }
    render() {
        return (
            <div>
                <title>User Register</title>
                <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900'>
                    <div className='w-[550px] md:w-[550px] lg:w-[550px] h-[500px] bg-gray-200 rounded-3xl p-4 mx-auto my-auto'>
                        <div className={'w-full flex flex-col justify-center'}>
                            <h1 className='text-4xl md:text-5xl lg:text-5xl flex items-center justify-center font-semibold px-4 lg:mr-3 pt-4'>User Register</h1>
                            <form action="" className='flex flex-col justify-center p-3 gap-5 mt-3 items-center'>
                                <div className='flex flex-col justify-center gap-5'>
                                    <input className='p-2  outline outline-1 rounded outline-black' type="text" name='Name' placeholder='User Name' onChange={e => this.setState({ name: e.target.value })} />
                                    <input className='p-2  outline outline-1 rounded outline-black' type="email" name='email' placeholder='Email' onChange={e => this.setState({ email: e.target.value })} />
                                    <input className='p-2 outline outline-1 rounded outline-black' type="password" name='password' placeholder='Password' onChange={e => this.setState({ password: e.target.value })} />
                                    <input className='p-2 outline outline-1 rounded outline-black' type="password" name='cpassword' placeholder='Confirm Password' onChange={e => this.setState({ cpassword: e.target.value })} />
                                    <div className='flex items-center min-w-screen'>
                                        <label className='p-2 text-xl font-semibold'>Role</label>
                                        <div className="flex gap-2 p-2 items-center">
                                            <select onChange={e => this.setState({ role: e.target.value })} className='w-full rounded-md shadow-lg p-2'>
                                                <option value="none">-NONE-</option>
                                                <option value="sf">Startup Founder</option>
                                                <option value="Investor">Investor</option>
                                                <option value="Corporate">Corporate</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Student">Student</option>
                                                <option value="Club">Club</option>
                                                <option value="Professor">Professor</option>
                                                <option value="College">College</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className='bg-cyan-600 text-white p-2 text-xl border-cyan-600 rounded-xl' onClick={this.handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}