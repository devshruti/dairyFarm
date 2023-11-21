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

//   useEffect(() => {
//     fetch("http://localhost:3000/posts")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

const Data = [
    {
        prodIndex: 1,
        prodImage: "https://saptamveda.com/cdn/shop/products/AshwagandhaPlainthumbnail.jpg?v=1648782669",
        category: "Powder",
        prodName: "Ashwagandha",
        star: "3",
        oldPrice: 121,
        newPrice: 54,
        body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        prodIndex: 2,
        prodImage: "https://sharangdhar.com/cdn/shop/products/ashwagandha.jpg?v=1634966548",
        category: "Capsule",
        prodName: "Turmeric",
        star: "4",
        oldPrice: 99,
        newPrice: 39,
        body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        prodIndex: 3,
        prodImage: "https://oraah.in/cdn/shop/files/Ashwagandha-Powder-_1.jpg?v=1687346530",
        category: "Tablet",
        prodName: "Neem",
        star: "3.5",
        oldPrice: 89,
        newPrice: 49,
        body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        prodIndex: 4,
        prodImage: "https://bixabotanical.com/cdn/shop/files/Ashwagandha1_1024x1024.jpg?v=1697280416",
        category: "Liquid",
        prodName: "Brahmi",
        star: "5",
        oldPrice: 135,
        newPrice: 69,
        body: "Milk atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      }
]

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
        <h1 className="font-bold text-3xl text-orange-600 mb-6 text-left">
          Our Dairy Products
        </h1>
        <div className="lg:flex flex-wrap justify-between sm:block">
          {Data.map((item, index) => (
            <div className="lg:w-1/5 sm:w-1/1">
            <div key={index} className="mb-4 border overflow-hidden shadow-lg">
              <img
                className="h-40 w-40 bg-orange-100 object-cover mx-auto mb-2"
                src={item.prodImage}
                alt={`Product ${index + 1}`}
              />
              <hr />
              </div>
              <div >
              <p className="text-left font-semibold text-xl text-orange-600">{item.prodName}</p>
            <p className="text-orange-600 text-justify" > {item.body} </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
