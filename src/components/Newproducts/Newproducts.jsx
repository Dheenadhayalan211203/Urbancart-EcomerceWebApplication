import "./Newproducts.css"

const  NewProducts = ()=>{
    return(
        <>
        <div className="newproduct-heading">
            <h1>New Arivals</h1>
        </div>
         <section className="newproduct-container">
              <div className="newproduct-card">
                <img src="shampoo.jpg" alt="product" />
                <div className="newproduct-content">
                   <h1>Shampoo</h1>
                   <h4> <em> Pure Revitalize Shampoo - Nourish Your Tresses </em></h4>
                   <p><i>Price : <strike>₹ 400</strike> ₹ 199 </i></p>
                    

                </div>
              </div>

              <div className="newproduct-card">
                <img src="jacket-5.jpg" alt="product" />
                <div className="newproduct-content">
                   <h1>Jacket</h1>
                   <h4> <em> Chic Comfort Women's Brown Jacket</em></h4>
                   <p><i>Price : <strike>₹ 3999</strike> ₹ 1999 </i></p>
                    

                </div>
              </div>

              
              <div className="newproduct-card">
                <img src="shoe-1.jpg" alt="product" />
                <div className="newproduct-content">
                   <h1>Formal Shoes</h1>
                   <h4> <em>  Elegance Defined Formal Shoes</em></h4>
                   <p><i>Price : <strike>₹ 2999</strike> ₹ 999 </i></p>
                    

                </div>
              </div>

              <div className="newproduct-card">
                <img src="watch-2.jpg" alt="product" />
                <div className="newproduct-content">
                   <h1>Smart Watch</h1>
                   <h4> <em> SleekBlack Smartwatch - Your Everyday Companion</em></h4>
                   <p><i>Price : <strike>₹ 9999</strike> ₹ 6999 </i></p>
                    

                </div>
              </div>

             

              

         </section>
        </>
    )
}
export default  NewProducts;