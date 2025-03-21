"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("xqapplwr");
    if (state.succeeded) {
        return <p className='text-green-500 py-2'>Merci de votre message ! J'ai bien reçu votre message et je vous répondrai dès que possible. Bonne journée !</p>;
    }
    return (
      <div className='max-w-3xl mx-auto py-16 rounded-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center uppercase'>Contactez Moi</h2>
        <form onSubmit={handleSubmit} className='space-y-4 grid grid-cols-1 m-2 shadow-md shadow-gray-700 p-4'>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          name="name"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Nom" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="Prénom">Prénom</label>
        <input
          id="Prénom"
          type="text"
          name="Prénom"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Prénom" 
          field="Prénom"
          errors={state.errors}
        />
        <label htmlFor="email">
          Adresse Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-indigo-500 outline-none transition-all duration-200 text-white'
          cols={40}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className='transition-colors duration-200 bg-indigo-500 py-2 px-4 rounded-full text-white hover:bg-indigo-600' type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
      </div>
    );
  }
  
  function App() {
    return (
      <Contact />
    );
}

export default App
