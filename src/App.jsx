// importing necessary files and hooks
import React, { useState } from "react";
import Navbar from "./Componants/Navbar";
import Header from "./Componants/Header";
import Card from "./Componants/Card";
import Footer from "./Componants/Footer";

const App = () => {
  // setting up state for the card data
  const [value, setValue] = useState(0);

  // setting up the card data
  const cardData = [
    {
      name: "Iphone 15",
      price: "$400.00 - $450.00",
      details: "128 GB ",
      colour: "pink",
      imageUrl:
        "https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1695427946",
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 15 Plus",
      price: "$600",
      colour: "green",
      details: "128 GB",
      imageUrl:
        "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Plus_Green_PDP_Image_Position-1__en-IN_1445x.jpg?v=1694606862",
      sale: true,
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 15 Pro",
      price: "$899",
      colour: "Black",
      details: "256 GB",
      imageUrl:
        "https://iqstoreindia.com/assets/images/iphone-15-pro/iphone15-pro-black.png",
      sale: true,
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 15 pro Max",
      price: "$999",
      colour: "Black",
      details: "256 GB",
      imageUrl:
        "https://betasystem.net/wp-content/uploads/2023/09/iphone-15-pro-15-pro-max.png",
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 14",
      price: "$450",
      colour: "Blue",
      details: "128 GB",
      imageUrl:
        "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2022/11/iPhone-14-Plus.JPG",
      sale: true,
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 14 Plus",
      price: "$600 - $650",
      colour: "Yellow",
      details: "128 GB",
      imageUrl:
        "https://media.croma.com/image/upload/v1708671771/Croma%20Assets/Communication/Mobiles/Images/270415_0_vlsyas.png",
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 14 Pro",
      price: "$859",
      colour: "Purpule",
      details: "128 GB",
      imageUrl:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_iPhone_14_Pro_Purple_Lay_Down_Full_a97da96acf.jpeg",
      sale: true,
      buttonText: "Add to cart",
    },
    {
      name: "Iphone 14 Pro Max",
      price: "$999",
      colour: "White",
      details: "256 GB",
      imageUrl:
        "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
      buttonText: "Add to cart",
    },
  ];

  return (
    // Calling Everything
    <>
      <Navbar value={value} />
      <Header />

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Mapping the data */}
            {cardData.map((card, index) => (
              <Card key={index} {...card} setValue={setValue} value={value} />
            ))}
           
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default App;
