import "./Singup.css"

const Signup=()=>{

    return (

        <>
           <section className="signup-container">

            <img src="Urban cart logo.png" alt="logo" />
            <form>
                <h1>Create an account</h1>
                 
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' name='name' placeholder='Enter your full name' required/><br/>

                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' name='email' placeholder='example@email.com' required/><br/>
            
                <div className="password-fields">
                    <label htmlFor='pass'>Password: </label>
                    <input type='password' id='pass' name='password' placeholder='Enter a password' required/><br/>
             </div>
             <div className="mobileno">
                <label htmlFor="phone">Mobile No.: </label>
                <input type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" id='phone' name='phone'  required/><br/>
             </div>
             <button for="signup">Sign Up</button>
            </form>
           </section>
        </>
    )

}

export default Signup