import React from 'react';
export default class About extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {resumeData.roles[0].title}: {resumeData.roles[0].description}<br />
              {resumeData.roles[1].title}: {resumeData.roles[1].description}<br />
              {resumeData.roles[2].title}: {resumeData.roles[2].description}<br />
            </p>
            <p>I was born in raised in Utah, but I've spent several years living in South America and Asia.
            </p>
            <p>I am a family man - my amazing wife Becca, is a practicing RN and the mother of our three equally amazing children: Eli, Knox, and Phoebe Jo.
            </p>
            <p>I love learning and teaching - I'm bilingual (English and Spanish), a licensed amateur radio operator, served on joint military-diplomatic team in Afghanistan, .</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Stewart Brough</span><br />
                  <span>683 E 100 N<br />
                    Bountiful, UT 84010 US
                  </span><br />
                  <span>(801)783-9819</span><br />
                  <span>sbrough@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
}