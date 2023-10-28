import React from 'react'
import { useState } from "react"
function Contact() {
    const [name, setName] = useState()             
    const [email, setEmail] = useState()             
    const [address, setAddress] = useState()             
    const [pincode, setPinCode] = useState()             
    const [contactnumber, setContactNumber] = useState()
    const [location, setLocation] = useState()
    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}/>

            <label>Email</label>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}/>

            <label>Address</label>
            <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }}/>

            <label>Pin Code</label>
            <input type="text" value={pincode} onChange={(e) => { setPinCode(e.target.value) }}/>

            <label>Contact Number</label>
            <input type="text" value={contactnumber} onChange={(e) => { setContactNumber(e.target.value) }}/>

            <label>Location</label>
            <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }}/>
        </div>
    )
}
export default Contact;