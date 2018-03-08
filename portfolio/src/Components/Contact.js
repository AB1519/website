import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">Got a project?? E-mail me the details will get back to you!!!
                  </p>
            </div>
         </div>

					   <h4>Details</h4>
					   <p className="address">
						   Bhargavi A<br />
						   <span>(216)-666-1332</span><br />
               <span>bhargavia93@outlook.com</span><br />

					   </p>


   </section>
    );
  }
}

export default Contact;
