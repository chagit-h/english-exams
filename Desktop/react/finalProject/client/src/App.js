import DashLayout from "./components/layout/dash/DashLayout";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SiteLayout from "./components/layout/site/SiteLayout";
import SeminaryList from "./features/seminaries/list/SeminaryList";
import AddSeminary from "./features/seminaries/add/AddSeminary";
import SingleSeminary from "./features/seminaries/view/SingleSeminary";
import UsersList from "./features/users/list/UsersList";
import AddUser from "./features/users/add/AddUser";
import SingleUser from "./features/users/view/SingleUser";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SiteLayout />}>
          <Route index element={<h1>dashboard</h1>} /> */}
        <Route path="/" element={<DashLayout />}>
          <Route index element={<h1>dashboard</h1>} />
        <Route path="users" element={<Outlet/>}>
          <Route index element={<UsersList/>}/>
          <Route path="add" element={<AddUser/>}/>
          <Route path=":userId" element={<SingleUser/>}/>
        </Route>

          <Route path="seminaries" element={<Outlet />}>

            <Route index element={<SeminaryList />} />
            <Route path="add" element={<AddSeminary />} />
            <Route path=":seminaryId" element={<SingleSeminary />} />

          </Route>

          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
