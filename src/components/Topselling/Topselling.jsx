import "./Topselling.css"

const Topselling=()=>
{ return (

    <>
    <div className="header-topselling">
        <h1>Top Selling Products</h1>
    </div>
        <section className="topseling-container">

           <div className="topseling-card">
               <img src="2.jpg" alt="product" />
               <div className="details-topselling">
                <h1>Classic Comfort Hoodie , Blue color  </h1>
                <p className="description-product"><i>Introducing our Classic Comfort Hoodie, <br />
                the perfect blend of style and coziness. <br /> This hoodie is designed to 
                  keep you <br /> warm while maintaining a fashion-forward look.</i></p>

                  <p>Price: ₹ 499 <span>/per One</span></p>
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <h2> <em>Discount 30 %</em></h2>
                  <button className="addtocart-button">Add To Cart</button>

                  <h3>Available:<span> 40</span></h3>
               </div>
           </div>

           <div className="topseling-card">
               <img src="shirt-1.jpg" alt="product" />
               <div className="details-topselling">
                <h1>Vibrant Essence Colored Shirt  </h1>
                <p className="description-product"><i>Elevate your wardrobe with our Vibrant <br />
                 Essence Colored Shirt – a perfect blend <br /> of style, comfort, and versatility. <br /> Crafted with meticulous attention to detail,<br />
                  this shirt is designed to make a statement. <br />
                   Here are the key features that set it apart</i></p>

                  <p>Price: ₹ 999 <span>/per One</span></p>
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <h2> <em>Discount 40 %</em></h2>
                  <button className="addtocart-button">Add To Cart</button>

                  <h3>Available:<span> 40</span></h3>
               </div>
           </div>

           <div className="topseling-card">
               <img src="jacket-1.jpg" alt="product" />
               <div className="details-topselling">
                <h1> Urban Explorer Brown Jacket  </h1>
                <p className="description-product"><i>Introducing our Urban Explorer <br />
                 Brown Jacket – a timeless piece <br />
                  that seamlessly blends style,<br />
                   functionality, and rugged elegance. <br />
                    Crafted to withstand the elements <br />
                     while making a bold fashion statement,<br />
                      this jacket is a must-have for your wardrobe. <br />
                       Here's why it stands out</i></p>

                  <p>Price: ₹ 199 <span>/per One</span></p>
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <h2> <em>Discount 20 %</em></h2>
                  <button className="addtocart-button">Add To Cart</button>

                  <h3>Available:<span> 12</span></h3>
               </div>
           </div>


           <div className="topseling-card">
               <img src="watch-1.jpg" alt="product" />
               <div className="details-topselling">
                <h1> TechPro Smartwatch - Your Ultimate Companion  </h1>
                <p className="description-product"><i>Introducing the TechPro Smartwatch, <br />
                 a cutting-edge wearable technology <br />
                 that seamlessly combines style and functionality. <br />
                  Elevate your lifestyle and stay <br />
                  connected with the world like never before. <br />
                   Here are the key features that make the TechPro a must-have</i></p>

                  <p>Price: 4999 <span>/per One</span></p>
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                  <img src="rating.png" alt="rating" className="rating" />
                
                  <h2> <em>Discount 30 %</em></h2>
                  <button className="addtocart-button">Add To Cart</button>

                  <h3>Available:<span> 40</span></h3>
               </div>
           </div>

           
        </section>
    </>
)

}
export default Topselling