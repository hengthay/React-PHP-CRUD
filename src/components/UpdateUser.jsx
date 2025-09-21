import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  // State
  const [update, setUpdate] = useState({
      first_name: "",
      last_name: "",
      age: ""
    });
  // get id from url
  const {id} = useParams();
  const navigate = useNavigate();

  // Fetch for update data
  useEffect(() => {
    if (!id) return;
    getUser();
  }, [id])

  // Send data to database
  useEffect(() => {
    handleSubmit;
  }, [])

  // fetch from database
  const getUser = () => {
    try {
      axios.get(`http://localhost:8080/react-api/api/listdata.php?id=${id}`).then((response) => {
        const data = response.data;
        console.log(data);
        setUpdate({
          first_name: data.first_name ?? "",
          last_name: data.last_name ?? "",
          age: data.age ?? ""
        })
      })
    } catch(error) {
      console.log(error);
    }
  }
  // Handle on update new information.
  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if (!update.first_name.trim() || !update.last_name.trim() || !String(update.age).trim()) {
      alert("All fields are required!");
      return;
    }

    try {
      axios.put(`http://localhost:8080/react-api/api/listdata.php?id=${id}`,
        {
          'first_name': update.first_name,
          'last_name': update.last_name,
          'age': update.age
        }, { headers: { 'Content-Type': 'application/json' } }).then(response => {
        navigate('/list-user');
      })
    } catch (error) {
      console.log(error);
    }
  }

  // Handle on change
  const handleChange = (event) => {
    const {name, value} = event.target;

    setUpdate({
      ...update,
      [name] : value
    })
  }

  return (
   <section className='md:w-2xl w-xl mx-auto min-h-auto shadow-md shadow-gray-300 rounded-lg py-4 mt-5'>
      <div className='w-full'>
        <h2 className='font-semibold underline underline-offset-4 text-2xl text-center mb-6 text-gray-800'>Update</h2>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-6 w-full'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="first_name" className='text-slate-800'>First Name</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='first_name' name='first_name' value={update.first_name} onChange={handleChange} required/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="last_name" className='text-slate-800'>Last Name</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='last_name' name='last_name' value={update.last_name} onChange={handleChange} required/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="age" className='text-slate-800'>Age</label>
            <input className='border border-gray-300 py-1.5 px-2 rounded-md outline-0 focus:border-fuchsia-500 focus:outline-1 focus:outline-fuchsia-500 md:w-[350px] w-[300px]' type="text" id='age' name='age' value={update.age} onChange={handleChange} required/>
          </div>
          <button type='submit' className='font-semibold bg-blue-500 text-[18px] text-white mb-4 px-10 py-2 rounded-md hover:bg-blue-600 md:w-[350px] w-[300px]'>Update</button>
        </form>
        </div>
    </section>
  )
}

export default UpdateUser