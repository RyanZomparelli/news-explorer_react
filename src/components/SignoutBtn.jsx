//LIBRARY IMPORTS
import { useState } from "react";

// ASSETS
import logoutIconDark from "../assets/logout.svg";
import logoutIconLight from "../assets/logout_white.svg";
import logoutIconBlue from "../assets/logout_blue.svg";

import "../blocks/signoutBtn.css";

const SignoutBtn = ({ isSavedView }) => {
  // isHovered is for the logoutIcon to turn blue on hover. Note that the rest of the button
  // gets it's hover effect from css. Because the logoutIcon is an img tag and not
  // a background-image in CSS, I needed to track this with React.
  // I wanted a smooth transition, but wanted to avoid inline styles in the component
  // and wanted to keep the signout icon as an img tag. This combination of programmatic styling and css meets that critera.
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        isSavedView
          ? "nav__signout-btn nav__signout-btn_saved"
          : "nav__signout-btn"
      }
    >
      {/* Layout div needed to arrange icon and text together inside the button. */}
      <div className="nav__signout-content">
        Ryan
        <img
          className="nav__signout-img"
          //   Multi step ternary. isHovered gets priority. Then the condition is based on route.
          src={
            isHovered
              ? logoutIconBlue
              : isSavedView
              ? logoutIconDark
              : logoutIconLight
          }
          alt="Sign out"
        />
      </div>
    </button>
  );
};

export default SignoutBtn;
