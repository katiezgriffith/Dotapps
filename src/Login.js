import React from "react"

import ReactDOM from 'react-dom';




export default function Login({ setCurrentUser, history }) {
  const handleClick = () => {
    setCurrentUser({ id:1, name: "Cody"})
  }
  return(
  <div>
        <button onClick={handleClick}>
            Sign In
        </button>
  </div>);
}
ReactDOM.render( /*#__PURE__*/React.createElement(Login, null), document.getElementById("root"));
