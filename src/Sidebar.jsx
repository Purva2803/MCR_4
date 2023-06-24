
import React from "react";
import "./Sidebar.css"; // Import the CSS file for styling
import { BrowserRouter as Router, Route, Link,Routes,NavLink } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Explore } from "./Explore";
import { Bookmarks } from "./Bookmarks";
import { Profile } from "./Profile";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" activeClassName="active">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" activeClassName="active">
              Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:postId" element={<HomePage />} />
        </Routes>
      </div>
      <div className="sort-section">
  <h2>Sort By</h2>
  <select>
    <option value="latest">Latest Post</option>
    <option value="old">Old Post</option>
  </select>
</div>

    </div>
  ); 
};

export default Sidebar;
