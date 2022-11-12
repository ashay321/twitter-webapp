import { Fragment } from "react";
import Feed from "./Components/Feed/Feed";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';
import Widgets from "./Components/Widgets/Widgets";
function App() {
  return (
    <Fragment>
      <div className="App">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </Fragment>
  );
}

export default App;
