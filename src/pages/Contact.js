import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isError, setIsError] = useState(false);

  const messageRef = useRef('');

  const checkError = () => {
    if (messageRef.current.value !== '') {
      setIsError(false);
    } 
    else {
      setIsError(true);
    }
  };

  useEffect(() => {
    checkError();
  });

  console.log(messageRef.current.value);
  console.log(isError);

  return (
    <>
      <div className="contact_container">
        <div className="content">
          <header className="contact_content_text">Contact Me</header>
          <h5 className="contact_helper_text">
            Hi there, contact me to ask about anything you have in mind.
          </h5>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="contact_input_container">
              <div className="input_con">
                <label htmlFor="first_name" className="small_input">
                  First Name
                </label>
                <input
                  type={'text'}
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="input_con">
                <label htmlFor="last_name" className="small_input">
                  Last Name
                </label>
                <input
                  type={'text'}
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="input_con">
              <label htmlFor="email" className="small_input">
                Email
              </label>
              <input
                type={'email'}
                name="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="input_con">
              <label htmlFor="message" className="small_input">
                Message
              </label>
              <textarea
                type={'text'}
                name="message"
                id="message"
                className={`${isError && 'error'}`}
                ref={messageRef}
                placeholder="Send a message and I'll reply you as soon as possible..."
              />
              {isError && <p className='contact_msg'>Please enter a message</p>}
            </div>

            <div className="">
              {/* <input
                name="cssCheckbox"
                id="demo_opt_1"
                type="checkbox"
                class="css-checkbox"
              />
              <label for="demo_opt_1">
                You agree to providing your data to astro who may contact you.
              </label> */}
              <input
                onChange={() => setIsAgreed(!isAgreed)}
                type={'checkbox'}
                name="check"
                id="check"
                checked={isAgreed ? true : false}
                placeholder="Send a message and I'll reply you as soon as possible..."
              />
              <label htmlFor="check" className="small_input check">
                You agree to providing your data to astro who may contact you.
              </label>
            </div>

            <button
              id="btn__submit"
              className={`${isAgreed ? '' : 'disabled'} `}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
