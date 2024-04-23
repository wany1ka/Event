import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [state, handleSubmit] = useForm("mvoedble");
  if (state.succeeded) {
    return <p style={{ textAlign: 'center', fontSize: '18px', color: 'green' }}>Thanks for the feedback</p>;
  }
  return (
    <div>
        <h2 className='text-center text-2xl my-5'>Contact us</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', marginBottom: '50px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <label htmlFor="fName" style={{ display: 'block', marginBottom: '10px' }}>
            Name:
          </label>
          <input
            id="fName"
            type="text"
            name="fName"
            placeholder='Full Name...'
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <ValidationError
            prefix="FName"
            field="fname"
            errors={state.errors}
            style={{ color: 'red', marginBottom: '10px' }}
          />
          <label htmlFor="email" style={{ display: 'block', marginBottom: '10px' }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder='Email Address...'
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            style={{ color: 'red', marginBottom: '10px' }}
          />
          <label htmlFor="message" style={{ display: 'block', marginBottom: '10px' }}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            style={{ color: 'red', marginBottom: '10px' }}
          />
          <button
            type="submit"
            disabled={state.submitting}
            style={{ cursor: 'pointer' }}
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
    </div>
  );
}

function ContactForm() {
  return (
    <App />
  );
}

export default ContactForm;
