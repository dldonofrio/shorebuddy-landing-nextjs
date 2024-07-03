'use client'

import { FormEvent, useState } from 'react';
import Image from "next/image";
import { supabase } from '../utils/supabase/supabaseClient'

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

export default function Home() {

  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');


  async function handleSubmit(event: React.FormEvent) {
    
    event.preventDefault();

    if (email == null) {
      return;
    }

    const {data: existingEmails, error: selectError } = await supabase
     .from('beta-signup-email')
     .select('email')
     .eq('email',email)
     .single()

    if (existingEmails) {
      setResponseMessage("You've already signed up!")
      return;
    }

    const { data, error } = await supabase
      .from('beta-signup-email')
      .insert([
        { email: email }
      ])
  
    if (error) {
      setResponseMessage('Error inserting email: '+ error)
      return { error }
    }

    setResponseMessage('Thanks for signing up!')
    return { data }
  }

  return (

    <main className="flex flex-col md:flex-row min-h-screen items-stretch justify-between p-4 md:p-24">

      <div className="flex-auto sm:p-2 md:p-14 md:w-2/3">
        <h1 className="text-7xl object-top">
          connect with other 
          <br />
          ocean enthusiasts.
        </h1>

        <p className="top">
          too many people die every year by going out in the water by themselves. we want to change that.
          shorebuddy is an app that helps you find a dive buddy.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          sign up to be notified when the beta goes live
          <br />
        </p>
        <form id="betasignupform" method="POST" onSubmit={handleSubmit}>
          <span className="py-2 flex items-center space-x-2">
          <input 
            className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
            placeholder="email address" 
            type="email" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          >
            Notify me
          </button>
          </span>
        </form>

        <p className="text-slate-500">
          <br />
          {responseMessage}
        </p>
        
      </div>

      <div className="flex justify-center md:flex-auto sm:w-full md:w-1/3">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/img/mockup_ios.png"
          alt="ShoreBuddy Mockup"
          width={300}
          height={37}
          priority
        />
      </div>

    </main>
  );
}
