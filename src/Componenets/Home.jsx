import Offer from "./Offer.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FlashSeals from "./FlashSeals.jsx";
import Categories from "./Categories.jsx";
import BestSellingProducts from "./BestSellingProducts.jsx";
import Banner from "./Banner.jsx";
import OurProducts from "./OurProducts.jsx";
import NewArrival from "./NewArrival.jsx";
import Information from "./Information.jsx";
import IndexPage from "./IndexPage.jsx";

function Home() {
    return (
        <div >
             <Offer/>
                <Navbar/>
                <IndexPage/>
                <FlashSeals/>
                <Categories/>
                <BestSellingProducts/>
                <Banner/>
                <OurProducts/>
                <NewArrival/>
                <Information/>
             <Footer/>
         </div>
    )
}

export default Home
