import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";
import logo from "../images/mynt-new.png";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Logout from "@mui/icons-material/Logout";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);
  const [showModal, setShowModal] = useState(false)
  let pathname = window.location.pathname;
  const handleCloseModal = () => setShowModal(false);
  const { userData } = useSelector((state) => state.loginData);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate("/my-profile");
  };
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          {location.includes("/complete-your-profile") && ratio < 768 && (
            <ArrowBackIosRoundedIcon
              style={{ marginTop: "1em" }}
              onClick={() => navigate("/")}
            />
          )}

          {!location.includes("/complete-your-profile") && ratio < 768 && (
            <img
              src={logo}
              onClick={() => navigate("/")}
              className="ham-menu-img"
            ></img>
          )}

          {ratio < 768 && userData?.user_type ? (
            <div
              className="nav-profile-icon-mb"
              onClick={userData.user_type === "INVESTOR" ? handleProfile : null}
            >
              <Avatar
                alt="avatar"
                src={userData?.profile_image ? userData.profile_image : null}
              />{" "}
            </div>
          ) : null}
          {location.includes("/complete-your-profile") && ratio < 768 && (
            <img
              src={logo}
              style={{
                width: "78px",
                height: "35px",
                position: "sticky",
                left: "40%",
                top: "1em",
                cursor: "pointer",
              }}
            ></img>
          )}
          <input type="checkbox" name="" id="" />
          {/* <img onClick={() => navigate('/')} alt="mynt_logo" className="logo-web-mb" src={logo}></img> */}

          {!location.includes("/complete-your-profile") && (
            <>
              <div class="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </>
          )}

          <ul className="menu-items">
            <li>
              <span style={pathname === '/' ? { color: '#fbdf35' } : null} onClick={() => navigate("/")}>Home</span>
            </li>
            <hr className="ruler-navbar" />
            <li>
              <span style={pathname === '/dashboard/live-deals' ? { color: '#fbdf35' } : null} onClick={() => { if (userData?.id) { navigate('/dashboard/live-deals') } else { setShowModal(true) } }}>Deals</span>
            </li>
            <hr className="ruler-navbar" />
            <li>
              <span style={pathname === '/founder' ? { color: '#fbdf35' } : null} onClick={() => navigate("/founder")}>Raise</span>
            </li>
            <hr className="ruler-navbar" />
            <li>
              <span style={pathname === '/myntUniversity/faqs' ? { color: '#fbdf35' } : null} onClick={() => navigate("/myntUniversity/faqs")}>
                MyntUniversity
              </span>
            </li>
            <hr className="ruler-navbar" />
            {Object.keys(userData).length !== 0 ? (
              <>
                <li>
                  <span onClick={() => navigate("/")}>
                    {userData.name ? userData.name : userData?.first_name}
                  </span>
                </li>
                {userData.name ? <hr className="ruler-navbar" /> : null}

                {/* <div className="profile-mb">
                {userData.user_type === "FOUNDER" ? null : (
                  <MenuItem style={{paddingLeft:0 ,color: "#444",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: '16px',
                  cursor: "pointer",
                  transition:" color 0.3s ease-in-out"}} onClick={handleProfile}>
                    <Avatar
                      alt="avatar"
                      src={
                        userData?.profile_image ? userData.profile_image : null
                      }
                    />{" "}
                    Profile
                  </MenuItem>
                )}
              </div> */}

                {ratio > 768 && (
                  <>
                    {" "}
                    {
                      <Tooltip className="profile-avatar" title={userData.name}>
                        <Tooltip title="Account settings">
                          <IconButton
                            onClick={(e) => handleClick(e)}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? "account-menu" : null}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : null}
                          >
                            {userData?.profile_image ?
                              <Avatar alt="avatar" src={userData?.profile_image} style={{ margin: '0 10px' }} />
                              :
                              <Avatar alt="avatar">{userData?.first_name?.charAt(0)}</Avatar>
                            }
                          </IconButton>
                        </Tooltip>
                      </Tooltip>
                    }
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      {userData.user_type === "FOUNDER" ? null : (
                        <MenuItem onClick={handleProfile}>
                          {userData?.profile_image ?
                            <>
                              <Avatar alt="avatar" src={userData?.profile_image ? userData?.profile_image : null} /> Profile
                            </>
                            :
                            <>

                              <Avatar alt="avatar">{userData?.first_name?.charAt(0)}</Avatar>Profile
                            </>
                          }
                        </MenuItem>
                      )}
                      <MenuItem
                        style={{ padding: "6px 16px" }}
                        onClick={() =>
                          navigate(
                            userData.user_type === "FOUNDER"
                              ? "/dashboard-founder/e-signin"
                              : "/dashboard"
                          )
                        }
                      >
                        <ListItemIcon>
                          <GridViewOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Dashboard
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        style={{ padding: "6px 16px", width: "100%" }}
                        onClick={handleLogout}
                      >
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                )}

                {ratio < 768 && (
                  <div className="btn-section-navbar">
                    <li>
                      <button
                        className="get-started-btn-mobile"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </div>
                )}
              </>
            ) : (
              <>
                <li>
                  <button
                    className="login-btn"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="get-started-btn"
                    onClick={() => navigate("/get-started")}
                  >
                    Get Started
                  </button>
                </li>
                <div className="btn-section-navbar">
                  <li>
                    <button
                      className="get-started-btn-mobile"
                      onClick={() => navigate("/get-started")}
                    >
                      Get Started
                    </button>
                  </li>
                  <li>
                    <button
                      className="login-btn-mobile"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </li>
                </div>
              </>
            )}
          </ul>

          <img
            onClick={() => navigate("/")}
            alt="mynt_logo"
            className="logo-web"
            src={logo}
          ></img>
        </div>
      </nav>
      <LoginModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};
export default Navbar;
