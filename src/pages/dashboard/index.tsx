import { useEffect, useState } from "react";
import { usersResult } from "../../globalComponents/fetch-data";
import "./index.scss";
import { SideBar } from "./components/side-bar";
import { Main } from "./components/main";
import { IoIosArrowForward } from "react-icons/io";

export const Dashboard = () => {
  const [users, setUsers] = useState<usersType[]>([]);
  const [open_search, setOpen_serach] = useState(false);

  const handleClick = () => {
    setOpen_serach(!open_search);
  };

  useEffect(() => {
    const FectchUers = async () => {
      const result = await usersResult();
      setUsers(result);
    };

    FectchUers();
  }, []);

  return (
    <>
      {users && (
        <div className="dashboard_page container">
          <div className={open_search ? "sidebar_con active" : "sidebar_con"}>
            <SideBar users={users} />
            <div className="btn" onClick={handleClick}>
              <IoIosArrowForward />
            </div>
          </div>

          <div
            className={open_search ? "overlay active" : "overlay"}
            onClick={handleClick}
          ></div>

          {users.map((user) => {
            if (user.name.toLocaleLowerCase().includes("jessica taylor")) {
              console.log(user);
              return <Main user={user} />;
            }
          })}
        </div>
      )}
    </>
  );
};
