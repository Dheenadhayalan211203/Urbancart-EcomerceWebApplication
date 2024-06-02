import "./Catogery.css"
const Catogery =()=>{
    return(
        <>
           <section className="catogerycard">
            <div className="cat-container">
                <a href="">
               <div className="catcard">
               <img src="clothes.jpg" alt="" />
               <h2>Clothing</h2>
               </div>
               </a>

               <a href=""> 
               <div className="catcard">
               <img src="footwear.jpg" alt="" />
               <h2>Footwear</h2>
               </div>
               </a>

               <a href="">
               <div className="catcard">
               <img src="perfumes.jpg" alt="" />
               <h2>Perfumes</h2>
               </div>
               </a>

               <a href="">
               <div className="catcard">
               <img src="glassesicon.jpg" alt="" />
               <h2>Glasses</h2>
               </div>
               </a>
               
            </div>
           </section>
        </>
    )
}
export default Catogery


