import './contact.css'
import {FiMail} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => (
  <section>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <FiMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>muralikrishnam056@gmail.com</h5>
          <a
            href="mailto:muralikrishnam056@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send a message
          </a>
        </article>
        <article className="contact__option">
          <FaWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+918801589971</h5>
          <a
            href="https://api.whatsapp.com/send?phone+918801589971"
            target="_blank"
            rel="noreferrer"
          >
            Send a message
          </a>
        </article>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="your Full Name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
