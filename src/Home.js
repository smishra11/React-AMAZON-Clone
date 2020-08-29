import React from "react";
import "./Home.css";

import Product from "./Product";

//MORE IMAGES LINK
//https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg
//https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Samsung/Note20/BAU/V237003006_SamsungNote20_BAU_DesktopTallHero_1500x600._CB406492550_.jpg

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How constant Innovation Creates Radically Successful Business Paperback"
          price={130}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="4"
          title="Mi Smart Band 4-,AMOLED Touch Screen, with Music Control"
          price={2299}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="2"
          title="Apple Watch Series 5 (GPS, 44mm) - Space Gray"
          price={44000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SX679_.jpg"
        />
        <Product
          id="3"
          title="Amazon Echo (2nd Gen) - Powered by Dolby; White"
          price={5999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61UnzwX%2B4NL._SX679_.jpg"
        />
        <Product
          id="5"
          title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
          price={74999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="LG 34 inch Curved 21:9 Ultrawide Monitor - WQHD, IPS Panel with, HDMI, Display, USB, Thunderbolt Ports - 34UC98 (Black/Silver)"
          price={87999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/418fPJ7pn3L.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
