import project1 from "../img/project1.jpg";

function MainContent() {
  return (
    <div className="filters__sections">
      {/* <!--=============== PROJECTS ===============--> */}
      <div
        className="projects__content grid filters__active"
        data-content
        id="projects"
      >
        <article className="projects__card">
          <img src={project1} alt="" className="projects__img" />

          <div className="projects__modal">
            <div>
              <span className="projects__subtitle">Web</span>
              <h3 className="projects__title">Payment Site</h3>
              <a
                href="_blank"
                className="projects__button button button__small"
              >
                <i className="ri-link"></i>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* <!--=============== SKILLS ===============--> */}
      <div className="skills__content grid" data-content id="skills">
        {/* <!-- Frontend dev --> */}
        <div className="skills__area">
          <h3 className="skills__title">Frontend</h3>
          <div className="skills__box">
            {/* <!-- Skills group 1 --> */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            {/* <!-- Skills group 2 --> */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">Booststrap</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Backend dev --> */}
        <div className="skills__area">
          <h3 className="skills__title">Backend</h3>
          <div className="skills__box">
            {/* <!-- Skills group 1 --> */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">MySQL</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            {/* <!-- Skills group 2 --> */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="ri-checkbox-circle-line"></i>

                <div>
                  <h3 className="skills__name">NodeJS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
