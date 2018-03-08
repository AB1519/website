import React, { Component } from 'react';


class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">

      <div className="text-container">

         <div className="row">

            <div className="two columns header-col">

               <h1><span>Client Testimonials</span></h1>

            </div>

            <div className="ten columns flex-container">

               <div className="flexslider">

                  <ul className="slides">

                     <li>
                        <blockquote>
                           <p>TRUST THE PROCESS.YOUR TIME IS COMING.
                           JUST DO THE WORK AND THE RESULTS WILL HANDLE THEMSELVES.
                           </p>

                        </blockquote>
                     </li>

                     <li>
                        <blockquote>
                           <p>GENERATE IDEAS, PUT THEM ON PAPER
                           AND ANALYSE, FRAME DESIGNS, DEVELOP THE IDEA, IMPLEMENT
                           THEM, TEST FOR BUGS AND FINALLY LAUNCH.
                           </p>

                        </blockquote>
                     </li>

                  </ul>

               </div>

            </div>

         </div>

       </div>

   </section>
    );
  }
}

export default Testimonials;
