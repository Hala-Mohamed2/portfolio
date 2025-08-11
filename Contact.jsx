import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  
  const [state, handleSubmit] = useForm("xgvzzorl");
  if (state.succeeded) {
      return <h1>Thanks for joining!</h1>;
  }


  return(
    <section className="contact">
      <h1>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p>Contact us for more information and Get notified when I publish something new.</p>

      <div className='flex'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input type="email" name='email' id='email' />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
          </div>
          <div className='flex'>
            <label htmlFor="message">Your Message:</label>
            <textarea style={{marginTop:"24px"}} name="message" id="message"></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>Submit</button>
          {state.succeeded && (
            <h1>Your message has been sent successfuly</h1>
          )}
        </form>
        <div className='animation'></div>
      </div>
    </section>
  )
}



export default Contact;