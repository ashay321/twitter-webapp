import { Fragment } from "react";
import "./App.css";
// import Feed from "./Components/Feed/Feed";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Widgets from "./Components/Widgets/Widgets";
// import Login from "./Components/Authnetication/LoginPage";
import SignupPage from "./Components/Authnetication/SignupPage";

function App() {
  return (
    <Fragment>
      <div className="App">
        {/* <Sidebar />
        <Feed />
        <Widgets /> */}
        {/* <Login /> */}
        <SignupPage />
      </div>
    </Fragment>
  );
}

export default App;
