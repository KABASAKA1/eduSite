import React from 'react'
import './Contact.css'
import message_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2204c66d-a188-4e77-9a85-324a840b31ab");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };





    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={message_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit praesentium nisi placeat ad ducimus culpa doloremque.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />iletisim@serkan.com</li>
                    <li><img src={phone_icon} alt="" />+90 523 532 32 32</li>
                    <li><img src={location_icon} alt="" />No:28 Heves cad. Mevlana mah. Anayurt <br /> Talas/KAYSERİ - TURKEY</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='enter your name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='enter your phone number' required />
                    <label >Write Your Message Here</label>
                    <textarea name="message " rows='6' placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img className='img' src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>



        </div>
    )
}

export default Contact