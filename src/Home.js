import React from 'react';
import bannerimage from "./static/amazon-diwali-sale.jpg";
import "./Home.css";
import Product from './Product';
import book1 from "./static/Books_HD_(8314929977).jpg";
import mixer from "./static/download (1).jpeg"

function Home() {
  return (
    <div className='home'>
      <img className="img-banner"src={bannerimage}></img>
      <div className='home_row'>

      {/* { produvt id,title,price,rating,image} */}
      <Product
      id="1"
      title="the lean startuo :inovation"
      price={11.96}
      rating={5}
      image={book1}
      />
       <Product
      id="2"
      title="the bag"
      price={66.96}
      rating={5}
      image={book1}
      />
  
        
      </div>
      <div className='home_row'>

      {/* { produvt id,title,price,rating,image} */}
      <Product
      id="3"
      title="the outfit"
      price={100.96}
      rating={3}
      image={book1}
      />
      <Product
      id="4"
      title="the lean "
      price={13999.96}
      rating={5}
      image={book1}
      />
  <Product
      id="5"
      title="motivation"
      price={11.96}
      rating={4}
      image={book1}
      />
        
      </div>

      {/* last div below */}
    </div>
  );
}

export default Home
