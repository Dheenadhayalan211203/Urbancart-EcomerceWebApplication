import "./Navigation.css"
const Navigation=()=>
{
    return (
        <>
        <section className="navigation">
            <div className="logo">
                <img src="Urban cart logo.png" alt="Brand logo" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search for products on Urban cart Covai" button/>
            </div>
            <div className="navigationbar">
               <p><a href="">Home</a></p>  
                <p><a href="#men">Men</a></p>
                <p><a href="">Women</a></p>
                <p><a href="">Kids</a></p>
            </div>
        </section>
        </>
    )
}

export default Navigation