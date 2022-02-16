import React, { Profiler, useState } from "react";
import Loading from "./loading";
import "../stylesheets/profile.css";

const Profile = (props) => {
  let [loading, setLoading] = useState(false);

  let saveHandle = async () => {
    let name = document.getElementsByClassName("PRInput")[0];
    let email = document.getElementsByClassName("PRInput")[1];
    let difficulty = document.getElementsByClassName("PRDropdown")[0];
    setLoading(true);

    await fetch(process.env.React_App_Backend_domain + "/saveProfile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        userData: {
          name: name.value,
          email: email.value,
          difficulty: difficulty.value,
        },
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="PRHeadDiv" id="PRHeadDivID">
        <span>Your Profile</span>
      </div>
      <div className="PRMainDiv">
        <div className="PRInnerDiv">
          <div className="PRLeftDiv">
            <div className="PRprofile">
              <div className="PRProfilePic">
                <span>{props.name.charAt(0).toUpperCase()}</span>
              </div>
              <div className="PRDetails">
                <p>
                  Name: <span>{props.name}</span>
                </p>
                <p>
                  Email: <span>{props.email}</span>
                </p>
              </div>
            </div>
            <hr className="PRrounded" />
          </div>

          <div className="PRRightDiv">
            <div className="PREdit">Edit Profile</div>
            <div className="PREditDetails">
              <p>Name:</p>
              <input
                className="PRInput"
                type="text"
                defaultValue={props.name}
              />
            </div>
            <div className="PREditDetails">
              <p>Email:</p>
              <input
                className="PRInput"
                type="text"
                defaultValue={props.email}
              />
            </div>

            <div className="PREditDetails">
              <p>Difficulty:</p>
              <select
                name="languages"
                id="lang"
                className="PRDropdown"
                defaultChecked={props.difficulty}
              >
                {"easy" === props.difficulty ? (
                  <option value="easy" name="easy" selected="selected">
                    Easy
                  </option>
                ) : (
                  <option value="easy" name="easy">
                    Easy
                  </option>
                )}
                {"medium" === props.difficulty ? (
                  <option value="medium" name="medium" selected="selected">
                    Medium
                  </option>
                ) : (
                  <option value="medium" name="medium">
                    Medium
                  </option>
                )}
                {"hard" === props.difficulty ? (
                  <option value="hard" name="hard" selected="selected">
                    Hard
                  </option>
                ) : (
                  <option value="hard" name="hard">
                    Hard
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="PRExitButtonDiv">
          <div>
            <button className="PRExitButton" onClick={saveHandle}>
              Save
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </React.Fragment>
  );
};

export default Profile;
