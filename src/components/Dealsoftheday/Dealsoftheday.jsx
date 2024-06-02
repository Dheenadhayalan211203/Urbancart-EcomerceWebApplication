import { useEffect, useState } from "react";
import "./Dealsoftheday.css";

const Dealsoftheday = () => {
  const [responsedata, setresponsedata] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setresponsedata(data))
      .catch(err => console.error("Error fetching data: ", err));
  }, [responsedata]);

  return (
    <>
      <div className="deal-head">
        <h1>Best Deal Today</h1>
      </div>
      <section className="deals-container">
        {responsedata.map((data) => (
          <div key={data.id} className="deals-card">
            <img src={data.image} alt={data.title} className="prodimg" />
            <p className="dealname">{data.title}</p>
            
            <div className="rating">
              
                <p className="rating">{data.rating.rate}</p>
              
            </div>
            <p>
              <span className="price">
                <strike><b>₹ {Math.round(data.price * 1.5)}</b></strike>
              </span>
              <span> &nbsp; ₹ {data.price}</span>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Dealsoftheday;
