import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Projects Accomplished</h1>

          					            <h5>Survey Application</h5>
                                <p>Developed a single page application to conduct a survey about gamified e-learning which generate
                                a list of survey question about rating the participants experience and store the results in
                                a database for analysis</p>


                                <h5>Local Fun At Cities</h5>
                                <p>Developed a single page web application to display the images and the videos of the
                                locale upon the user entry of location</p>


                                <h5>Departmental Website</h5>
                                <p>Developed a single page application for the department, showing the list of events that are
                                organized during the fest</p>

                                <h5>Online Shopping Website</h5>
                                <p>Developed a website which gives the ability for a user to search for items based on images and add them to cart.</p>

                                <h5>Simple Calculator</h5>
                                <p>Developed a simple android mobile Calculator</p>



          					       </div>
                        </div>

   </section>
    );
  }
}

export default Projects;
