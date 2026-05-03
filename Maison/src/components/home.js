import NewArrivals from "./newarrivals";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

function Home() {
    return (
        <> 
        <div id='home'>
            <NewArrivals/>
        </div>

        <div id='about'>
            <About/>
        </div>

        <div id='contact'>
            <Contact/>
        </div>
        <div id='footer'>
            <Footer />
        </div>
         </>
    );
}

export default Home;