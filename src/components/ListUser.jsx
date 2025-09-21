import axios from 'axios';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';

// Render list of user.
const UserRow = memo(function UserRow({ user, index }) {
  return (
    <tr
      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-100 transition text-left`}
    >
      <td className="py-3 px-4">{user.id}</td>
      <td className="py-3 px-4">{user.first_name}</td>
      <td className="py-3 px-4">{user.last_name}</td>
      <td className="py-3 px-4">{user.age}</td>
      <td className="py-3 flex justify-center space-x-4">
        <Link
          to={`/delete-user/${user.id}`}
          className="bg-gray-400 text-white px-3 text-center md:min-w-[100px] w-auto py-1.5 rounded-md hover:bg-gray-300 transition duration-200 ease-linear"
        >
          Delete
        </Link>
        <Link
          to={`/update-user/${user.id}`}
          className="bg-pink-400 text-white text-center px-3 md:min-w-[100px] w-auto py-1.5 rounded-md hover:bg-pink-500 transition duration-200 ease-linear"
        >
          Update
        </Link>
      </td>
    </tr>
  );
});

const ListUser = () => {
  // State to handle or hold datas.
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null)

  // Render once when the page load
  useEffect(() => {
    handleData();
  }, [])

  // Retrvied data from database.
  const handleData = useCallback(async () => {
    try {
      setLoading(true);
      setErr(null);
      const res = await axios.get('http://localhost:8080/react-api/api/listdata.php');
      setUsers(res.data ?? []);
      
    } catch (error) {
      setErr(true);
      console.log(error);
    } finally {
      setLoading(false);
    }  
  }, []) 

  const rows = useMemo(
    () => users.map((user, index) => <UserRow user={user} index={index} key={user.id}/>), [users]
  );

  return (
    <section className='w-screen min-h-screen mx-auto container '>
      <div className='max-w-5xl md:max-w-7xl max-sm:max-w-3xl'>
        <h1 className='font-semibold underline underline-offset-4 text-xl text-center mb-6 text-gray-800'>List of users</h1>

        <div className="my-4">
          {loading && <div className="flex items-center gap-x-2 ">
            <span className='border-2 border-gray-300 border-t-transparent animate-spin rounded-full w-10 h-10'></span>
            <p className='md:text-2xl text-xl text-slate-600'>Loading...</p>
            </div>}
        </div>

        <div className='overflow-x-auto rounded-lg'>
          {err === true ? (<p className="text-red-600 text-center text-xl mt-2">An issue ouccrs, Please try again.</p>) : (
              <table className='min-w-full border border-gray-300'>
              <thead className="bg-pink-600 text-white border">
                <tr>
                  <th className="py-3 px-4 border">ID</th>
                  <th className="py-3 px-4 border">First Name</th>
                  <th className="py-3 px-4 border">Last Name</th>
                  <th className="py-3 px-4 border">Age</th>
                  <th className="py-3 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Block of user are render */}
                {rows}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  )
}

export default ListUser