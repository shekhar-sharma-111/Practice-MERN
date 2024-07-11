import{ create} from 'zustand';
import React from 'react';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    
      }),
      {
        name: 'count-storage', // unique name for the storage key
        // getStorage: () => localStorage, // you can change this to any storage, like sessionStorage
      }
    )
  );
export const useStore2 = create(
    persist(
      (set) => ({
        userid:null,
        isloggedin:false,
        useremail:null,
        usertoken:null,
        setUser:(userData)=>set({ usertoken:userData.token,useremail:userData.email,userid:userData.user_id,isloggedin:userData.token&&true}),
        removeUser:()=>set({isloggedin:false,usertoken:null ,useremail:null,userid:null}),
      
      }),
      {
        name: 'userData-storage', 
      }
    )
  );

const Counter = () => {

    const { count, increment, decrement } = useStore();
    const {usertoken ,useremail,isloggedin,userid}=useStore2();
    return (<>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <br /><br />
      <div >
        <h1 >user information:</h1>
        <div>loggedin:{isloggedin?'true':'false'}</div>
        <div>user email:{useremail}</div>
        <div>user id:{userid}</div>
        <div>user token:{usertoken&&'yes'}</div> 
      </div>
      </>
    );
  };
  
  export default Counter;