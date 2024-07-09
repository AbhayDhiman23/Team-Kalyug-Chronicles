import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.jpeg'
import linkedin from '../assets/linkedin.jpeg'
const Socials = () => {
    return (
        <>

<section  id="socials">
    <div c>
        <div >
        <h1 >SOCIALS <span className="text-[#d47916]">.</span></h1>
        </div>
        <div>
        <div >
           <Link to="https://instagram.com/codingninjas_cuiet" className='flex items-center justify-center s:h-[35rem] h-[30rem] w-[15rem] s:w-[17.5rem]'>
                 <img src={instagram} alt="instagram" className='w-full h-full border sm:ml-6 lg:m-0 border-white rounded-3xl '/>
           </Link>
           </div>
           <div >
           <div>
                 <div>
                 <h1 >FOLLOW US</h1>
                 </div>
                 <div >
                 <h1 >INSTAGRAM</h1>
                 </div>
                 <div >
                 <h1 >LINKEDIN</h1>
                 </div>
                 <div >
                 <Link to="https://instagram.com/codingninjas_cuiet">
                 <h1 >@codingninjas_cuiet</h1>
                 </Link>
                 </div>
           </div>
           </div>
           <div >
        <Link to="https://www.linkedin.com/company/codingninjas-cuiet/">
                 <img src={linkedin} alt="linkedin" />
           </Link>
           </div>
        </div>
       
     </div>   
    </section>
        </>
    );
}

export default Socials