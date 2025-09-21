import axios from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteUser = () => {
  // Get an id from url
  const { id } = useParams();
  const navigate = useNavigate();

  // Handle on delete user and also confirm message.
  const deleteUser = useCallback(async () => {
    try {
      const res = await axios.delete(`http://localhost:8080/react-api/api/listdata.php?id=${id}`);
      console.log('User deleted successfully');
      navigate('/list-user');
    } catch (error) {
      console.log(error);
    }
  }, [id, navigate]) 

  const confirmMessage = useMemo(() => {
    return `Are you sure that you want to delete user with ID ${id}?`
  })

  return (
    <div className='mt-8 bg-gray-200 py-4 px-6 rounded-md shadow-lg shadow-gray-300 min-w-[400px]'>
      <div className='space-x-4 space-y-4 text-center'>
        <h3 className='text-slate-950 border-b-2 border-gray-500 border-dashed pt-2 pb-3'>{confirmMessage}</h3>
        <div className='text-right space-x-2 mr-4'>
          <button onClick={deleteUser} className='bg-fuchsia-400 text-lg text-white font-semibold leading-relaxed min-w-[80px] py-1.5 rounded-sm cursor-pointer' type='submit'>Yes</button>
          <button onClick={() => navigate('/list-user')} className='bg-slate-400 text-lg text-white font-semibold leading-relaxed min-w-[80px] py-1.5 rounded-sm cursor-pointer' type='submit'>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser