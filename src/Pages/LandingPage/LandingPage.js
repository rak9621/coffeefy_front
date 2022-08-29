import React from 'react'

import { NavLink } from 'react-router-dom'
import './LandingPage.css'
import Footer from "../../component/Footer/footer"


const LandingPage = () => {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
 
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://res.cloudinary.com/drpmtab2a/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1661753334/4384541378_10f294fc92_b_akmzet.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://res.cloudinary.com/drpmtab2a/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1661752775/2019-07-20_08_20_26_A_serving_of_cranberry_juice_in_a_plastic_cup_at_the_Marriott_Residence_Inn_on_Katy_Mills_Parkway_in_Katy_2C_Fort_Bend_County_2C_Texas_ejeiz1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://res.cloudinary.com/drpmtab2a/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1661752232/BevragesProduct%20image/landing%20page%20image/Mocaccino-Coffee_aqaxms.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      <div class="row mt-5 mb-5">
            <div class="btn-group d-flex justify-content-center" role="group" aria-label="First group">
          
          <NavLink to="/login">
          <button type="button" class="btn btn-outline-dark m-3">
              Login
          </button>
            </NavLink>

            <NavLink to="/signup" >
          <button type="button" class="btn btn-outline-warning m-3">
              Sign up    
          </button>
            </NavLink>

        </div>
        </div>

       
    <div className='landingFoot'>
      <Footer/>
      </div>
      
    </>
  )
}


export default LandingPage





