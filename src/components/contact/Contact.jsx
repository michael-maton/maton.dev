import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Have a Question?</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's collaborate!</h3>
          <p className="contact__details">
            I'm all ears for new ideas and ready to bring them to life. Whether
            it's a new venture or a creative challenge. Reach out and let's turn
            those ideas into something extraordinary!
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
