import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slider />
        <div className="home__row">
          <Product
            id="75385294"
            title="The Lean Startup Creates Radically Successful Book"
            price={400}
            image="https://www.lajoe.id/blog/content/images/2023/05/Lajoe.id---The-Lean-Startup-karya-Eric-Ries.jpg"
            rating={3}
          />
          <Product
            id="12321341"
            title="The Derma Co 1% Hyaluronic Sunscreen SPF 50 Aqua Gel,For Oily, Dry, Acne-prone Skin & Blue Light Protection - 30g"
            price={275}
            image="https://s3.images-iherb.com/dme/dme00421/l/23.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="48596723"
            title="HP 818w 32GB USB 3.2 Flash Drive Silver Metal"
            price={599}
            image="https://m.media-amazon.com/images/I/518iWeYUC0L._SY450_.jpg"
            rating={5}
          />
          <Product
            id="15975382"
            title="Compact Portable 12V 150 PSI Digital Tyre Inflator with Carrying Case"
            price={2149}
            image="https://m.media-amazon.com/images/I/71v6o+eJLdL._SX355_.jpg"
            rating={4}
          />
          <Product
            id="35715982"
            title="Solimo Slim Stainless Steel Water Bottle, Set of 3, 1 liter Each"
            price={619}
            image="https://m.media-amazon.com/images/I/81RslC-Ke+S._AC_SS450_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="74136952"
            title="City Outdoor Furniture Single Seater Iron Frame Swing Chair With Stand&Cushion&Hook Outdoor Indoor|Balcony Garden Hanging Jhula Patio Swing For Adults(Brown,Beige Cushion)(Rattan),104 Cm,55 Cm"
            price={9689}
            image="https://m.media-amazon.com/images/I/61srZvoNWQL._SX425_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
