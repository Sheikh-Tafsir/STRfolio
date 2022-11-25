import React from 'react'

import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';

const Contacts = () => {
  return (
    <>
        <div className="cntk" id="contacts">
            <h2>Contact Me</h2>
            <div className="cntkmnu">
                <div className="cntkbar" data-aos="slide-right">
                    <h3>Talk to me</h3>
                    <div className="cntkpnt">
                        <AiOutlineMail className="cntkpnticons"></AiOutlineMail>
                        <h4>Email</h4>
                        <p>190041130tafsir@gmail.com</p>
                        <button><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTflxmKpkQKmTDWwrCjJwCJlgDlPDzVtvxXRtkzzsLDwhfVsLhxncRQmPctlQvvMJNnhL" target="_blank" className="cntkpntbut">Write Me <FaArrowRight className="warrow"></FaArrowRight></a></button>
                    </div>
                    <div className="cntkpnt">
                        <FaWhatsapp className="cntkpnticons"></FaWhatsapp>
                        <h4>WhatsApp</h4>
                        <p>01817530115</p>
                        <button><a href="https://web.whatsapp.com/" target="_blank" className="cntkpntbut">Write Me <FaArrowRight className="warrow"></FaArrowRight></a></button>
                    </div>
                    <div className="cntkpnt">
                        <FaFacebookMessenger className="cntkpnticons"></FaFacebookMessenger>
                        <h4>Messenger</h4>
                        <p>sheikh tafsir rahman</p>
                        <button><a href="#" target="_blank" className="cntkpntbut">Write Me <FaArrowRight className="warrow"></FaArrowRight></a></button>
                    </div>
                </div>
                <div className="mailbar" data-aos="slide-left">
                    <h3>Write me your project</h3>
                    <form className="con-form" action="https://formspree.io/f/xeqnvlln" method="POST">
                        <p>Name</p><input type="text" id="name" placeholder="Insert Your Name" name="Name" required />
                        <p>Email</p><input type="email" id="email" placeholder="Insert Your Emaiil" name="Email" required />
                        <p>Project</p><textarea id="message" placeholder="Your Needs" name="needs" required></textarea><br/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts