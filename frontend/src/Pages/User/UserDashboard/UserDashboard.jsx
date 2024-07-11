import React, { useEffect, useState } from 'react';
import { useStore2 } from '../../../Component/Zustand';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserDashboard() {
  const { usertoken, isloggedin, userId, removeUser } = useStore2();
  const navigate = useNavigate();
 const [userdata,setdata]=useState('');
  useEffect(() => {
    if (!isloggedin) {
      navigate('/login');
    } else {
      const fetchUserData = async () => {
        try {
          const headers = {
            'Authorization': `Bearer ${usertoken}`,
            'Content-Type': 'application/json',
          };

          const response = await axios.get(`http://localhost:5500/users/${userId}`, {
            headers,
          });
         if(response.status==200){
          
          setdata(JSON.stringify(response.data));
          console.table(response.data)
         }
         else{
          console.log(response);
          isloggedin=false;
         }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [isloggedin, usertoken, userId]);

  return (
    <>
      <div>UserDashboard</div>
      <div>UserData:{userdata}</div>
      <br />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          if (confirm("Logout user?")) {
            removeUser();
            navigate('/login');
          }
        }}
      >
        Logout
      </button>
    </>
  );
}

export default UserDashboard;
