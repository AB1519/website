import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/Profile.jpg" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I love designing and creating simple, intutive and fun user experiences
            that keep customers engaged and happy. I am passionate about designing and coding.
            The balance between the two helps me to understand the feasibility and application of
            each product. Each design sprint helps me learn something new and evolve as an UI Developer.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Bhargavi A</span><br />
						   <span>(216)666-1332</span><br />
                     <span>bhargavia93@outlook.com</span>
					   </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
