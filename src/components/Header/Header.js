import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../image/webphics.jpg";
const Header = () => {
  const navigate = useNavigate();
  const user = null;
  return (
    <div className="container">
      <div className="row">
        <div className=" col-12 d-flex justify-content-center align-items-center flex-direction-row appBar m-4">
          <div className="col-1">
            <img src={logo} alt="#" width="80px" height="50px" />
          </div>
          <div className="offset-3 mt-2">
            <h1>WebPhics</h1>
          </div>

          <div className="offset-4 row d-flex">
            {user ? (
              <div className="avatar">Add Avatar and Username first letter</div>
            ) : (
              <button
                className="btn btn-info"
                onClick={() => navigate("/auth")}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// {
/* <Link
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            exact
          ></Link> */
// }
