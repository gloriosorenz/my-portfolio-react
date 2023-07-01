import React from "react";

function SkillsTab() {
  return (
    <>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsTab;
