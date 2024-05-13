import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {
  calender_icon,
  chatIcon,
  creditCardIcon,
  groupIcon,
  homeIcon,
  logo,
  more_y_icon,
  settingsIcon,
  userAvatar,
} from "../../assets";
import "./index.scss";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open_nav_tab, setOpen_nav_tab] = useState(false);

  const handle_click = () => {
    setOpen_nav_tab(!open_nav_tab);
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 3 ? setActive(true) : setActive(false);
  });

  return (
    <nav className={active ? "active" : ""}>
      <div className="container">
        <section className="logo">
          <img src={logo} alt="logo " />
        </section>

        <div
          className={
            open_nav_tab ? "navigation_section active" : "navigation_section"
          }
        >
          <div className="menu_btn" onClick={handle_click}>
            <IoMdClose />
          </div>

          <section className="navLinks">
            <NavLink to="/">
              <img src={homeIcon} alt="homeIcon" className="icon" />
              overview
            </NavLink>
            <NavLink to="/" className={"isactive"}>
              <img src={groupIcon} alt="homeIcon" className="icon" />
              patients
            </NavLink>
            <NavLink to="/">
              <img src={calender_icon} alt="homeIcon" className="icon" />
              schedule
            </NavLink>
            <NavLink to="/">
              <img src={chatIcon} alt="homeIcon" className="icon" />
              message
            </NavLink>
            <NavLink to="/">
              <img src={creditCardIcon} alt="homeIcon" className="icon" />
              transactions
            </NavLink>
          </section>

          <section className="userSection">
            <div className="user_wrapper">
              <img src={userAvatar} alt="user-avatar" />
              <div className="txt_con">
                <h5>dr. jose simmons</h5>
                <p>general practitioner</p>
              </div>
            </div>

            <div className="icon_wrapper">
              <img src={settingsIcon} alt="settings-icon" />
              <img src={more_y_icon} alt="dropmenu-icon" />
            </div>
          </section>
        </div>

        <div className="menu_btn menu" onClick={handle_click}>
          <LuMenu />
        </div>
      </div>
      <div className={open_nav_tab ? "backdrop active" : "backdrop"}></div>
    </nav>
  );
};
