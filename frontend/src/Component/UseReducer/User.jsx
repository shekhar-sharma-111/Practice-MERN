// useReducer
// const [state,dispatch] =useReducer(reducer,initState,init);

/* reducer state , action dispatch function , reducer function , lazy initialization function (optional) 
state  : the state returned by useReducer 
dispatch :a function used to update the state
reducer: a functtion that takes 2 arguments :
first is previous state 
other is an obj containing info used for updating the state 
initialState : state at  the beginning 
*/

import React from "react";

function User() {
  let initialState =[];
  const data=JSON.parse(localStorage.getItem("users_data"))
  if (data!=null&&initialState.length!=0){
    initialState=[...data,initialState];
  }
  if (data!=null&&initialState.length==0){
    initialState=[...data];
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case "add user":
        return [...state, { name: action.payload }];

      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);



  return (
    <div>
      {" "}
      User
      <input id="user" type="text" value={state.name} name="uname" />
      <button
        type="submit"
        name="submit"
        className="btn btn-success"
        onClick={() => {
          if(document.getElementById("user").value!='')
         { const finaldata=JSON.stringify( [...state, { name: document.getElementById("user").value }]);
         localStorage.setItem(`users_data`,finaldata);
          return dispatch({
            type: "add user",
            payload: document.getElementById("user").value ,
          });
          

        }}}
      >
        add user
      </button>
     
    
      
    {  localStorage.getItem("users_data")!=null&&<h2>list user{JSON.parse(localStorage.getItem("users_data")).map((users) => (<li>{users.name}</li> ))}</h2>
}
    </div>
  );
}

export default User;
