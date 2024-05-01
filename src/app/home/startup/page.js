"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/files/Navbar';
import {BASE_URL} from '../../../../utils/constants';
import Cookies from 'js-cookie';

const page = () => {
  const [log, setLog] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [news, setNews] = useState('');
  const [year, setYear] = useState('');
  const [dept, setDept] = useState('');
  const [sname, setSname] = useState('');
  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [femail, setFemail] = useState('');
  const [domain, setDomain] = useState('');
  const [college, setCollege] = useState('');
  const [oneline, setOneline] = useState('');
  const [fundstatus, setFundstatus] = useState('');
  const [desc, setDesc] = useState('');
  const [size, setSize] = useState('');
  const [futureplan, setFutureplan] = useState('');
  const [revenue, setRevenue] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  
  const send = async (e) => {
    e.preventDefault(); // Add parentheses to call the preventDefault method
    try {
      if(!BASE_URL){
        return null;
      }
      const data = await fetch(`${BASE_URL}/api/users/startup`,{
        method: 'POST',
        body: JSON.stringify({
          user : email,
          sname,
          domain,
          oneline,
          fundstatus,
          desc,
          futureplan,
          revenue,
          website,
          linkedIn,
          size,
          fname,
          phone,
          femail,
          college,
          dept,
          year
        })
      })
      console.log(data)
      if(data.status === 201){
        const datas = await fetch(`${BASE_URL}/api/users`,{

          method: 'PATCH',
          body: JSON.stringify({email, news})
        })
        console.log(datas)
        if(datas.status === 200){
          Cookies.set('new', false)
          window.location.href=`/home/${role}`
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  useEffect(() => {
    if(Cookies.get('role')){
      setRole(Cookies.get('role'));
    }
    if(Cookies.get('name')){
      setName(Cookies.get('name'));
    }
    if (Cookies.get('new') && Cookies.get('new') !== "undefined") {
      setNews(Cookies.get('new'));
    }
    if(Cookies.get('email') && Cookies.get('email') !== "undefined"){
      setEmail(Cookies.get('email'))
    }
    if (Cookies.get('token') && Cookies.get('role') === 'startup' && Cookies.get('token') !== "undefined" && Cookies.get('isloggedIn') === "true") setLog(Cookies.get('token'));
    else window.location.href = '/login'
  })


  return (
    <div className="flex flex-col items-center min-w-screen">
      <Navbar />
      {
        news === "true" ?
          <div>
            <div className='flex flex-col items-center justify-center min-w-screen'>
              <h1 className="text-4xl md:text-5xl text-white lg:text-6xl font-semibold text-center p-4">
                Enter the details
              </h1>
              <form className="flex flex-col gap-4 m-4 min-w-screen grid items-center justify-center grid-cols-1 sm:grid-cols-3">
                <div className=''>
                  <label className="text-xl text-white p-2">Startup name</label>
                  <input
                    type="text"
                    placeholder="Startup Name"
                    required
                    value={sname}
                    onChange={(e) => setSname(e.target.value)}
                    className=" flex flex-col m-2 justify-center items-center p-4 border border-black rounded-md"
                  />
                </div>
                <div className=''><label className="text-xl text-white p-2">Domain Name</label>
                  <input
                    type="text"
                    placeholder="Domain"
                    required
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className=" flex flex-col m-2 justify-center items-center p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">OneLine about the Startup</label>
                  <input
                    type="text"
                    placeholder="Oneline"
                    required
                    value={oneline}
                    onChange={(e) => setOneline(e.target.value)}
                    className=" flex flex-col m-2 justify-center items-center p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Funding status</label>
                  <input
                    type="text"
                    placeholder="Funding Status"
                    required
                    value={fundstatus}
                    onChange={(e) => setFundstatus(e.target.value)}
                    className=" flex flex-col m-2 justify-center items-center p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Description</label>
                  <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="flex flex-col justify-center w-3/4 items-center p-4 m-2 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Future Plan</label>
                  <input
                    type="text"
                    placeholder="Future Plan"
                    required
                    value={futureplan}
                    onChange={(ev) => setFutureplan(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Revenue</label>
                  <input
                    type="text"
                    placeholder="Revenue"
                    required
                    value={revenue}
                    onChange={(ev) => setRevenue(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Website</label>
                  <input
                    type="text"
                    placeholder="Website"
                    required
                    value={website}
                    onChange={(ev) => setWebsite(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">LinkedIn Profile</label>
                  <input
                    type="text"
                    placeholder="Linked In"
                    required
                    value={linkedIn}
                    onChange={(ev) => setLinkedIn(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Team Size</label>
                  <input
                    type="text"
                    placeholder="Team Size"
                    required
                    value={size}
                    onChange={(ev) => setSize(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Founder Name</label>
                  <input
                    type="text"
                    placeholder="Founder Name"
                    required
                    value={fname}
                    onChange={(ev) => setFname(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Email Id</label>
                  <input
                    type="text"
                    placeholder="Email Id"
                    required
                    value={femail}
                    onChange={(ev) => setFemail(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">College Name</label>
                  <input
                    type="text"
                    placeholder="College Name"
                    required
                    value={college}
                    onChange={(ev) => setCollege(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className=''><label className="text-xl text-white p-2">Department</label>
                  <input
                    type="text"
                    placeholder="Department Name"
                    required
                    value={dept}
                    onChange={(ev) => setDept(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div> <div className='flex flex-col justify-center'><label className="text-xl text-white p-2">Year</label>
                  <input
                    type="text"
                    placeholder="Year"
                    required
                    value={year}
                    onChange={(ev) => setYear(ev.target.value)}
                    className=" flex flex-col justify-center items-center m-2 p-4 border border-black rounded-md"
                  /></div>
                <div className='flex items-center justify-center m-4'>
                  <button
                    className="rounded-xl p-4 bg-red-700 border-red-700 text-white font-semibold flex items-center justify-center" onClick={send}>
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div> : <div>
            <div className='w-screen flex flex-col justify-center text-white p-4'>
              <div className='flex items-center'>Welcome <p className='flex text-red-400'> {name.toUpperCase()}</p></div>
              <div className='flex items-center'>Email : <p className='flex text-red-400'>{email}</p></div>
            </div>
          </div>
      }
    </div>
  )
}

export default page