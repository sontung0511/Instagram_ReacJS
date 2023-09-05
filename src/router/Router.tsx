import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../components/root/root";
import reportWebVitals from "../reportWebVitals";
import Explore from "../Pages/Explore/explore";
import Reels from "../Pages/Reels/Reels";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/HomePage/Home";

import Search from "../Pages/Search/search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />}>
      <Route index path="" element={<Home />} />
      <Route index path="explore" element={<Explore />} />
      <Route index path="reels" element={<Reels />} />
      <Route index path="profile" element={<Profile />} />
    </Route>
  )
);
reportWebVitals();
