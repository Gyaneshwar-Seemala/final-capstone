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
                <button id="res">Reserve a table</button>
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
      <h2 id="testi">Testimonials</h2>
      <div className="testimonials">
        <Testimonials id="test1" profile="profile1.jpeg" name="David" rating="⭐⭐⭐⭐⭐" review="“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"/>
        <Testimonials id="test2" profile="profile2.jpg" name="Julie" rating="⭐⭐⭐⭐" review="“ This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again."/>
        <Testimonials id="test3" profile="profile3.jpeg" name="Samantha" rating="⭐⭐⭐⭐" review="“This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it."/>
        <Testimonials id="test4" profile="profile4.jpeg" name="Duplessis" rating="⭐⭐⭐⭐" review="“. Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended."/>
      </div>
      <div className="about">
        <div className="empty1"></div>
        <div className="col-6-lg col-12" id="titles2">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
              <p>
                Little Lemon Restaurant, a family run <br />
                Mediterranean restaurant located in <br /> Chicago, Illinois.
                Please come and enjoy <br />
                our wide selection of authentic <br />
                Mediterranean cuisine!
              </p>
            </div>
            <div className="col-6-lg col-12" id="image2">
              <img
                src="Mario and Adrian A.jpg"
                alt="Chef img"
                className="img-fluid"
              />
            </div>
            <div className="empty2"></div>
      </div>
    </>
  );
}

export default Home;