import "./style.css";

import JapFoodMenu from "./JapFoodMenu";

const JapFood = () => {
    return (
    <> 
        <JapFoodMenu
            Home="Home Page"
            AboutUs="About Us"
            OurMenu="Our Menu"
            ContactUs="Contact Us"
        />
        <section id="hero">
            <div id="cta">
                <a href="#">
                    Make a Booking
                </a>
            </div>
        </section>
        <section id="about-us">
            <div class="content">
                <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
            </div>
        </section>
    </>
    );
}

export default JapFood;