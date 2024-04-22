import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [state, handleSubmit] = useForm("mvoedble");
  if (state.succeeded) {
      return <p>Thanks for the feedback</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      /> <br /><br />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      Message
      <textarea
        id="message"
        name="message"
      /> 
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function ContactForm() {
  return (
    <App />
  );
}
export default ContactForm;