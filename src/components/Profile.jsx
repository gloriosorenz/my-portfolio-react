import perfil2 from "../img/perfil2.png";
import resume from "../pdf/Renz_Glorioso-CV.docx.pdf";
import socials from "../js/main";
import { changeTheme } from "../js/main";

import Button from "./Button";
import ProfileInfo from "./ProfileInfo";

console.log(changeTheme);

function Profile() {
  return (
    <header className="profile container">
      {/*  Theme Button  */}
      <i
        onClick={changeTheme}
        className="ri-moon-line change-theme"
        id="theme-button"
        type="button"
      ></i>

      {/* Profile section */}
      <div className="profile__container grid">
        <div className="profile__data">
          {/* This is your profile image */}
          <div className="profile__border">
            <div className="profile__perfil">
              <img src={perfil2} alt="profile_img" />
            </div>
          </div>

          <h2 className="profile__name">Renz Glorioso</h2>
          <h3 className="profile__profession">Web Developer</h3>

          {/* Display social links */}
          <ul className="profile__social">
            {socials.map((s) => {
              return (
                <Button
                  key={s.id}
                  class={s.class}
                  icon={s.icon}
                  href={s.href}
                  type="button"
                  target="_blank"
                />
              );
            })}
          </ul>
        </div>

        {/* <!-- Profile Info Grid --> */}
        {/* <!-- Remove this section if not needed --> */}
        <ProfileInfo />

        <div className="profile__buttons">
          {/* <!-- Insert your CV --> */}
          <Button
            href={resume}
            class="button"
            icon="ri-download-line"
            content="Download CV"
            download="Renz_Glorioso-CV"
            type="button"
            target="_blank"
          />

          <div className="profile__buttons-small">
            {/* <!-- Insert a real number plus country code --> */}
            <Button
              href="https://wa.me/639175446351"
              class="button button__small button__gray"
              icon="ri-whatsapp-line"
              type="button"
              target="_blank"
            />

            {/* <!-- Insert your brand name or profile --> */}
            <Button
              href="google.com"
              class="button button__small button__gray"
              icon="ri-messenger-line"
              type="button"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Profile;
