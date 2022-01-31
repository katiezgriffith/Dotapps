// import { useState } from 'react';
import {Redirect, Route, Routes} from 'react-router-dom';
// import './App.css';
// import MyHome from './MyHome';
// import Nav from './Nav';
// import Login from './Login';
// import Tracker from './Tracker';
import Dashboard from './Components/Dashboard'
import Preferences from './Components/Preferences'




// function App() {
 
//   const [currentUser, setCurrentUser] = useState(false);

//   return (
//   <>
//       <Routes path={"/"}>
//         <Nav />
//       </Routes>
  
//       <Routes exact path={"/"}
//        render={(props) => 
//          currentUser ? 
//          <MyHome currentUser={currentUser} />
//          :
//          <Login setCurrentUser={setCurrentUser} {...props} />
//         }
//         />
//       <Routes exact path={"/"}>
//         <Tracker />
//       </Routes>
      
//     <div className="wrapper">
//       <h1>Application</h1>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/preferences">
//             <Preferences />
//           </Route>
        
//     </div>
//   );)
// </>
//   )}

    
function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      
          <Routes path={"/"}>
            <Dashboard />
          </Routes>
          <Route path={"/"}>
            <Preferences />
          </Route>
        
    </div>
  );
}

export default App;
  



  
  


