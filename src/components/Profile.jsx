import perfil2 from "../img/perfil2.png";
import resume from "../pdf/Renz_Glorioso-CV.docx.pdf";

function Profile() {
  return (
    <header className="profile container">
      {/*  Theme Button  */}
      <i class="ri-moon-line change-theme" id="theme-button"></i>

      {/* Profile section */}
      <div class="profile__container grid">
        <div class="profile__data">
          {/* This is your profile image */}
          <div class="profile__border">
            <div class="profile__perfil">
              <img src={perfil2} alt="profile_img" />
            </div>
          </div>

          <h2 class="profile__name">Renz Glorioso</h2>
          <h3 class="profile__profession">Web Developer</h3>

          <ul class="profile__social">
            {/* <!-- Codepen --> */}
            <a
              href="https://codepen.io/renzboi"
              //   target="_blank"
              class="profile__social-link"
            >
              <i class="ri-codepen-line"></i>
            </a>
            {/* <!-- LinkedIn --> */}
            <a
              href="https://www.linkedin.com/in/renzcarloglorioso/"
              //   target="_blank"
              class="profile__social-link"
            >
              <i class="ri-linkedin-box-line"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              href="https://github.com/gloriosorenz"
              //   target="_blank"
              class="profile__social-link"
            >
              <i class="ri-github-line"></i>
            </a>
          </ul>
        </div>

        {/* <!-- Profile Info Grid --> */}
        {/* <!-- Remove this section if not needed --> */}
        <div class="profile__info grid">
          <div class="profile__info-group">
            <h3 class="profile__info-number">X</h3>
            <p class="profile__info-description">
              Years of <br />
              work
            </p>
          </div>
          <div class="profile__info-group">
            <h3 class="profile__info-number">+XX</h3>
            <p class="profile__info-description">
              Completed <br />
              projects
            </p>
          </div>
          <div class="profile__info-group">
            <h3 class="profile__info-number">XX</h3>
            <p class="profile__info-description">
              Satisfied <br />
              customers
            </p>
          </div>
        </div>

        <div class="profile__buttons">
          {/* <!-- Insert your CV --> */}
          <a href={resume} class="button" download>
            Download CV <i class="ri-download-line"></i>
          </a>

          <div class="profile__buttons-small">
            {/* <!-- Insert a real number plus country code --> */}
            <a
              href="https://wa.me/639175446351"
              //   taget="_blank"
              class="button button__small button__gray"
            >
              <i class="ri-whatsapp-line"></i>
            </a>
            {/* <!-- Insert your brand name or profile --> */}
            <a
              href="google.com"
              //   taget="_blank"
              class="button button__small button__gray"
            >
              <i class="ri-messenger-line"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Profile;
