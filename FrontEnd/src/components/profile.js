import React, { Profiler } from 'react';
import "../stylesheets/profile.css";

const Profile = () => {
  return (
      <React.Fragment>

        <div className="PRHeadDiv" id="PRHeadDivID">
            <span>Your Profile</span>
        </div>
        <div className='PRMainDiv'>
            <div className='PRInnerDiv'>
                <div className='PRLeftDiv'>
                    <div className='PRprofile'>
                        <div className='PRProfilePic'>
                            <span>N</span>
                        </div>
                        <div className='PRDetails'>
                            <p>Name: <span>Meghana</span></p>
                            <p>Email: <span>meghana@gmail.com</span></p>
                        </div>
                    </div>
                    <hr class="PRrounded" />
                </div>
                
                <div className='PRRightDiv'>
                    <div className='PREdit'>
                        Edit Profile
                    </div>
                    <div className="PREditDetails">
                        <p>Name:</p> 
                        <input className="PRInput" type="text" />
                    </div>
                    <div className="PREditDetails">
                    <p>Email:</p>
                        <input className="PRInput" type="text" />
                    </div>
                    <div className="PREditDetails">
                        <p>Age:</p>
                        <input className="PRInput" type="text" />
                    </div>
                    <div className="PREditDetails">
                    <p>Difficulty:</p>
                    <select name="languages" id="lang" className='PRDropdown'> 
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className='PRExitButtonDiv'>
                <div>
                    <button className="PRExitButton">Save</button>
                </div>
            </div>
        </div>
      </React.Fragment>
    
  )
};

export default Profile;
