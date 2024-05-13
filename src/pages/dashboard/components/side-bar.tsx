import { more_x_icon, searchIcon } from "../../../assets";

type propsType = {
  users: usersType[];
};

export const SideBar = ({ users }: propsType) => {
  return (
    <>
      <div className="header">
        <h3>patients</h3>
        <img src={searchIcon} alt="searchIcon" />
      </div>

      <div className="wrapper">
        {users.map((user) => {
          return (
            <div
              className={
                user.name.toLocaleLowerCase().includes("jessica taylor")
                  ? "box active"
                  : "box "
              }
            >
              <div className="user_section">
                <div className="img">
                  <img src={user.profile_picture} alt="user image" />
                </div>
                <div className="txt">
                  <h5>{user.name}</h5>
                  <p>{user.gender}</p>
                </div>
              </div>
              <div className="icon_section">
                <img src={more_x_icon} alt="more icon" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
