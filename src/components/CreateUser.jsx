import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const [input, setInput] = useState({
    'first_name': "",
    'last_name': "",
    'age': ""
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;

    setInput(input => ({...input, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    try{
      axios.post('http://localhost:8080/react-api/api/listdata.php', input, { headers: { 'Content-Type': 'application/json' } }).then(response => {
        console.log(response.data);
        navigate('/list-user');
      })
    }catch(error) {
      console.log(error);
    }
  }
  
  return (
    <section className='md:w-2xl w-xl mx-auto min-h-auto shadow-md shadow-gray-300 rounded-lg py-4 mt-5'>
      <div className='w-full'>
        <h2 className='font-semibold underline underline-offset-4 text-2xl text-center mb-6 text-gray-800'>Create User</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-6 w-full'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="first_name" className='text-slate-800'>First Name</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='first_name' name='first_name' value={input.first_name} onChange={handleChange} required/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="last_name" className='text-slate-800'>Last Name</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='last_name' name='last_name' value={input.last_name} onChange={handleChange} required/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="age" className='text-slate-800'>Age</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='age' name='age' value={input.age} onChange={handleChange} required/>
          </div>
          <button type='submit' className='font-semibold bg-blue-500 text-[18px] text-white mb-4 px-10 py-2 rounded-md hover:bg-blue-600 md:w-[350px] w-[300px]'>Create</button>
        </form>
        </div>
    </section>
  )
}

export default CreateUser