import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='  form d-flex justify-content-center mx-auto text-white'>
      <div className='container  p-4 d-flex flex-column justify-content-center w-100'>

<div className="py-4">
      <p class="fw-bold tex text-white px-2"
      style={{
        fontSize:'3rem'
      }}
      >
        CONTACT
      </p>
      <p className="text-white py-3">Connect with me!!</p>
    </div >
    <div className=' contact  d-flex justify-content-center mx-auto'>
      <form action=" https://getform.io/f/pboxekya"
      method='POST'>
      <input type="text" placeholder='Name' name='name'   className="form-control mb-3 bg-light text-dark" required />
      <input type="text"  placeholder='Email' name='email' className="form-control mb-3 bg-light text-dark " required />
      <textarea name='messege' placeholder='Message' rows={10} className='form-control mb-3 bg-light text-dark' required></textarea>
      <button type="submit" class="btn btn-primary">Submit</button>





      </form>


      </div>

      </div>

     </div>





    

  )
}

export default Contact