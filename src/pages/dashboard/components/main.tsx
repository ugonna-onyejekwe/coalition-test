import {
  arrowDown,
  arrowUp,
  calender_icon,
  downloadIcon,
  expandMoreIcon,
  femaleIcon,
  heartBpIcon,
  insuranceIcon,
  phoneIcon,
  respiratoryIcon,
  temperatureIcon,
} from "../../../assets";
import { Chart } from "./chart";

export const Main = ({ user }: { user: usersType }) => {
  return (
    <div className="main_container">
      <section className="part1">
        <div className="d_history_part">
          <h3 className="title">diagnosis history</h3>
          <div className="chart_section">
            <div className="chart_wrapper">
              <div className="chart_header">
                <h5>blood pressure</h5>
                <p>
                  last 6 month <img src={expandMoreIcon} alt="more icon" />
                </p>
              </div>
              <Chart user={user} />
            </div>

            <div className="summary_section">
              <div className="box">
                <p>systolic</p>
                <h4>160</h4>
                <p>
                  <img src={arrowUp} alt="arrow up" /> higher than average
                </p>
              </div>
              <div className="box">
                <p>diastolic</p>
                <h4>78</h4>
                <p>
                  <img src={arrowDown} alt="arrow up" /> lower than average
                </p>
              </div>
            </div>
          </div>

          <div className="box_con">
            <div className="box">
              <div className="img">
                <img src={respiratoryIcon} alt="respiratory icon" />
              </div>

              <div className="txt">
                <p>respiratory rate</p>
                <h3>20 bpm</h3>

                <p>normal</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={temperatureIcon} alt="respiratory icon" />
              </div>

              <div className="txt">
                <p>temperature</p>
                <h3>98.6&#8457;</h3>

                <p>normal</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={heartBpIcon} alt="respiratory icon" />
              </div>

              <div className="txt">
                <p>heart rate</p>
                <h3>78 bpm</h3>

                <p>
                  <img src={arrowDown} alt="arrow" /> lower than avaerage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d_list">
          <h3>diagnostic list</h3>

          <div className="main_con">
            <div className="con">
              <div className="header">
                <h5>problem/diagnosis</h5>
                <h5>description</h5>
                <h5>status</h5>
              </div>

              <div className="wrapper">
                {user.diagnostic_list.map((item, key) => {
                  return (
                    <div className="box" key={key}>
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                      <p>{item.status}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="part2">
        <div className="patience_details">
          <div className="img_con">
            <div className="img">
              <img src={user.profile_picture} alt="user image" />
            </div>

            <h3>{user.name}</h3>
          </div>

          <div className="txt_con">
            <div className="box">
              <div className="icon">
                <img src={calender_icon} alt="calender_icon" />
              </div>

              <div className="txt">
                <p>date of birth</p>
                <h6>{user.date_of_birth}</h6>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <img src={femaleIcon} alt="calender_icon" />
              </div>

              <div className="txt">
                <p>gender</p>
                <h6>{user.gender}</h6>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <img src={phoneIcon} alt="phone_icon" />
              </div>

              <div className="txt">
                <p>contact info.</p>
                <h6>{user.phone_number}</h6>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <img src={phoneIcon} alt="phone_icon" />
              </div>

              <div className="txt">
                <p>emergency xontacts</p>
                <h6>{user.emergency_contact}</h6>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <img src={insuranceIcon} alt="insurance_icon" />
              </div>

              <div className="txt">
                <p>insurance provider</p>
                <h6>{user.insurance_type}</h6>
              </div>
            </div>
          </div>

          <div className="btn_section">
            <button>show all information</button>
          </div>
        </div>

        <div className="lab_result">
          <h3>lab result</h3>
          <div className="wrapper">
            {user.lab_results.map((item) => {
              return (
                <div className="box">
                  <p>{item}</p>
                  <img src={downloadIcon} alt="download icon" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
