import Feed from "./Components/Feed/Feed";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Widgets from "./Components/Widgets/Widgets";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/Authnetication/LoginPage";
import SignupPage from "./Components/Authnetication/SignupPage";
import AdminPage from "./Components/Authnetication/Admin/AdminPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import DetailedPost from "./Components/Post/DetailedPost";
import SettingsPage from "./Components/Pages/Settings/SettingsPage";
import NotificationPage from "./Components/Pages/NotificationPage";
import ExplorePage from "./Components/Pages/ExplorePage";
import BookmarksPage from "./Components/Pages/BookmarksPage";
import AdminSideBar from "./Components/Authnetication/Admin/AdminSideBar";
import UsersRequestPage from "./Components/Authnetication/Admin/UsersRequestPage";
import UsersListPage from "./Components/Authnetication/Admin/UsersListPage";
import MessagesPage from "./Components/Messages/MessagesPage";
import { useStateValue } from "./StateProvider";

function App() {
  const [{userId}] = useStateValue();

  return (<div>
        {
          !userId 
          ? <Router>
            <Routes>
              <Route
                path="/login"
                element={
                  <div className="App">
                    <LoginPage />
                  </div>
                }
              />

              <Route
                path="/signup"
                element={
                  <div className="App">
                    <SignupPage />
                  </div>
                }
              />
            <Route path="*" element={<Navigate to="/login" />} />

            </Routes>
          </Router> : 
          
          <Router><Routes>
            <Route path="/admin" element={<AdminPage />} />
        
        <Route
          path="/home"
          element={
            <div className="App">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          }
        />

        <Route
          path="/messages"
          element={
            <div className="App">
              <Sidebar />
              <MessagesPage/>
            </div>
          }
        />

        <Route
          path="/messages/:roomId"
          element={
            <div className="App">
              <Sidebar />
              <MessagesPage/>
            </div>
          }
        />

        <Route
          path="/notifications"
          element={
            <div className="App">
              <Sidebar />
              <NotificationPage/>
            </div>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <div className="App">
              <Sidebar />
              <BookmarksPage/>
            </div>
          }
        />

        <Route
          path="/profile"
          element={
            <div className="App">
              <Sidebar />
              <ProfilePage/>
            </div>
          }
        />

        <Route
          path="/settings"
          element={
            <div className="App">
              <Sidebar />
              <SettingsPage />
            </div>
          }
        />

        <Route
          path="/tweet/:id"
          element={
            <div className="App">
              <Sidebar />
              <DetailedPost/>
            </div>
          }
        />

        <Route
          path="/admin/requests"
          element={
            <div className="App">
              <AdminPage children={<UsersRequestPage/>}/>
            </div>
          }
        />

        <Route
          path="/admin/users"
          element={
            <div className="App">
              <AdminPage children={<UsersListPage/>}/>
            </div>
          }
        />

        <Route path="*" element={<Navigate to="/home" />} />
            </Routes></Router>
        } 
    </div>
  );
}

export default App;
