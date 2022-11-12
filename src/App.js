import Feed from "./Components/Feed/Feed";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';
import Widgets from "./Components/Widgets/Widgets";
import {BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom'
import LoginPage from './Components/Authnetication/LoginPage';
import SignupPage from './Components/Authnetication/SignupPage';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/login" element={
          <div className="App">
            <LoginPage/>
          </div>
        }/>

        <Route path="/signup" element={
          <div className="App">
            <SignupPage/>
          </div>
        }/>

        <Route path="/home" element={
          <div className="App">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        }/>

        <Route path="/explore" element={
          <div className="App">
            <Sidebar />
          </div>
        }/>

        <Route path="/notifications" element={
          <div className="App">
            <Sidebar />
          </div>
        }/>

        <Route path="/messages" element={
          <div className="App">
            <Sidebar />
          </div>
        }/>

        <Route path="/profile" element={
          <div className="App">
            <Sidebar />
          </div>
        }/>

        <Route path="/settings" element={
          <div className="App">
            <Sidebar />
          </div>
        }/>

        <Route path="*" element={<Navigate to="/home"/>}/>
        
      </Routes>
    </Router>
    
      
  );
}

export default App;
