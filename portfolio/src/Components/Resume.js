import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <h3>Master of Science - Computer Science</h3>
                  <p className="info">University of Texas at Tyler <span>&bull;</span>
                  <em className="date">May 2018</em></p>
                  <p>
                  GPA: 4.0
                  </p>
                <h3>Bachelor of Technology - Civil Engineering</h3>
                   <p className="info">Jawaharlal Nehru Technological University<span>&bull;</span>
                   <em className="date">May 2015</em></p>
                   <p>
                   GPA: 3.75
                   </p>
               </div>
            </div>
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Graduate Assistant</h3>
                  <p className="info">University of Texas at Tyler<span>&bull;</span> <em className="date">June 2017 - Present</em></p>
                  <h6>Responsibilities</h6>
                  <p>
                  Worked on an application to request for the emergency work in the university and
                  check the update of the request work. Redesigned the website for user-friednly experience from the mock-ups.
                  </p>
               </div>
            </div>
            <div className="row item">
               <div className="twelve columns">
                  <h3>Research Assistant</h3>
                  <p className="info">University of Texas at Tyler<span>&bull;</span> <em className="date">Jan 2017 - May 2017</em></p>
                  <h6>Responsibilities</h6>
                  <p>
                  Worked in an application to aid the production of events using You Tube API. Built the webpage from mockups.
                  Assisted the professor in performing google analytics about the events.
                  </p>
               </div>
            </div>
            <div className="row item">
               <div className="twelve columns">
                  <h3>Front-end Web Developer</h3>
                  <p className="info">Spatial Consultants<span>&bull;</span> <em className="date">June 2015 - February 2016 </em></p>
                  <h6>Responsibilities</h6>
                  <p>
                  Worked in building a reponsive user interface application which handles the current projects of the
                  company from the database. Improved the styling of the website using SASS.
                  </p>
               </div>
            </div>
            <div className="row item">
               <div className="twelve columns">
                  <h3>Web Developer (Intern)</h3>
                  <p className="info">MC Designs<span>&bull;</span> <em className="date">April 2014 - June 2014</em></p>
                  <h6>Responsibilities</h6>
                  <p>
                  Worked in developing a responsive web pages using Bootstrap to improve the user experienece.
                  Experienced in using CSS framework.
                  </p>
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>What do I know...? </p>
				<div className="bars">
				   <ul className="skills">
             <li><span className="bar-expand css"></span><em>CSS</em></li>
             <li><span className="bar-expand html5"></span><em>HTML5</em></li>
             <li><span className="bar-expand javascript"></span><em>JavaScript</em></li>
             <li><span className="bar-expand react"></span><em>ReactJS</em></li>
						 <li><span className="bar-expand angular"></span><em>AngularJS</em></li>
             <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
             <li><span className="bar-expand php"></span><em>PHP</em></li>
						 <li><span className="bar-expand java"></span><em>Java</em></li>
             <li><span className="bar-expand WordPress"></span><em>WordPress</em></li>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
