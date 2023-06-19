import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <div className="main">
        <main>
          <div className="container">
            <div className="empty1"></div>
            <div className="col-6-lg col-12" id="titles">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
              <p>
                Little Lemon Restaurant, a family run <br />
                Mediterranean restaurant located in <br /> Chicago, Illinois.
                Please come and enjoy <br />
                our wide selection of authentic <br />
                Mediterranean cuisine!
              </p>
              <Link to="/Reservation">
                <button>Reserve a table</button>
              </Link>
            </div>
            <div className="col-6-lg col-12" id="image">
              <img
                src="restaurant chef B.jpg"
                alt="Chef img"
                className="img-fluid"
              />
            </div>
            <div className="empty2"></div>
          </div>
        </main>
      </div>
      <div className="specials">
        <h3>This weeks specials!</h3>
        <Link to="/Menu">
            <button>Online Menu</button>
        </Link>
      </div>
      <div className="spe">
        <Specials id="special1" image="greek salad.jpg" title="Greek salad" price="$12.99" description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, with garlic and rosemary croutons."/>
        <Specials id="special2" image="bruchetta.svg" title="Bruschetta" price="$5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
        <Specials id="special3" image="lemon dessert.jpg" title="Lemon Dessert" price="$5.00" description="This comes straight from grandma’s recipe book,every last ingredient has been sourced and is as authentic as can be imagined"/>
      </div>
      <h2>Testimonials</h2>
      <div className="testimonials">
        <Testimonials id="test1" profile="profile1.jpeg" name="Julie" rating="⭐⭐⭐⭐⭐" review="“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"/>
        <Testimonials id="test2" profile="profile1.jpeg" name="Julie" rating="⭐⭐⭐⭐⭐" review="“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"/>
        <Testimonials id="test3" profile="profile1.jpeg" name="Julie" rating="⭐⭐⭐⭐⭐" review="“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"/>
        <Testimonials id="test4" profile="profile1.jpeg" name="Julie" rating="⭐⭐⭐⭐⭐" review="“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"/>
      </div>
    </>
  );
}

export default Home;