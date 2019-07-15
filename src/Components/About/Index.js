import React from 'react';
export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I was born in raised in Utah, but I've spent several years living in South America and Asia. The world is a beautiful place - I'd love to see all of it, but there is no place like home.
            </p>
            <p>I am a family man - my amazing wife Becca, is a practicing RN and the mother of our three equally amazing children: Eli, Knox, and Phoebe Jo. Every minute we invest in loving and caring for them pays huge dividends to our happiness.
            </p>
            <p>I love learning and teaching - there are so many interesting things in this world ranging from natural science to cultural customs. I'm bilingual (English and Spanish), possess an amateur radio license, have served in combat as a U.S. Army Armor Officer, and enjoy the solitude of the mountains as much as I love visiting museums and historical architecture.</p>
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