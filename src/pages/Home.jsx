import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [data, setData] = useState([]);
  const images = [
    "https://erdencreamery.com/wp-content/uploads/2023/02/BuffaloMilk_1200x620_Website.png",
    "https://4sfoods.co.in/wp-content/uploads/2021/07/Website-banner-03.jpg",
    "https://www.sumul.com/images/slider1.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full mt-16">
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-96 w-full object-cover"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <div className="w-4/5 mx-auto mt-20">
        <h1 className="font-bold text-3xl text-green-600 mb-6 text-left">
          Our Dairy Products
        </h1>
        <div className="flex flex-wrap justify-between">
          {data.map((item, index) => (
            <div className="w-1/5 ml-">
            <div key={index} className="mb-4 border overflow-hidden shadow-lg">
              <img
                className="h-40 w-40 bg-green-100 object-cover mx-auto mb-2"
                src={item.prodImage}
                alt={`Product ${index + 1}`}
              />
              <hr />
              </div>
              <div >
              <p className="text-left font-semibold text-xl text-green-600">{item.prodName}</p>
            <p className="text-green-600 text-justify" > {item.body} </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
