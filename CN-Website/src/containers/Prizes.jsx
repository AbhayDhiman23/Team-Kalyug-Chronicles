import React from "react";
import ReactDOM from "react-dom";

import prize from "../assets/poster.jpeg";
import vector from "../assets/Vector.svg";
import star2 from '../assets/star2.svg'
import cbs from '../assets/sponser_1.png';
import gmc from '../assets/sponser_2.png';
import selle from '../assets/sponser_3.png';
import spn5 from '../assets/sponser_5.png';
import vardiano from '../assets/vardiano.png';
import ccsc from '../assets/sponser_4.png';
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   EffectFade,
//   Autoplay,
//   Navigation,
//   Pagination,
// } from "swiper";
// import "swiper/css";
const Prizes = () => {
    return (
        <>


SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section >
        <div >
          <div>
            <div c>
              <div >
                <h1 >
                  PRIZES <span className="text-[#d47916]">.</span>
                </h1>
              </div>
              <div >
                <p >
                  Prizes include: Best Name Registery Category Award • Best Girls Team Award • Goodies worth 50k • Each participant gets a chance to win premium goodies.
                  <br />
                  <br />
                  Venue - Pierre Hall, Le Corbusier Block <br/>
                  Date - 22nd and 23rd February 2024.

                </p>
              </div>
              <br />
              <div >
                <div >
                  <h1 >
                    Exciting Prizes
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    2.2Lakh
                  </h1> */}
                </div>
                <div c>
                  <h1>
                    Fun activies
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    1Lakh
                  </h1> */}
                </div>
                <div >
                  <h1 >
                    Goodies worth 50k
                  </h1>
                  {/* <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black">
                    1Lakh
                  </h1> */}
                </div>
              </div>
            </div>
            <div >
              <div >
                <img src={prize} alt="prize" />
              </div>
              <div >
                <p >
                  It will be a 2 day event, team of 5 consisting of the CEO, CFO, COO, CMO and CTO, all from CSE department. Students are independent to make their own team and choose their problem statement which they will solve using their product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div >
          <div c>
            <div >
              <div >
                <p >
                  GUTS BUILD <span >EMPIRES</span>, NOT DOUBTS.
                  EVERY SETBACK IS A{" "}
                  <span >STEPPING STONE</span>, EVERY STORM A{" "}
                  <span >TEST. </span>
                  CLIMB ON, <span >FOUNDER</span>, YOUR SUMMIT AWAITS.
                </p>
                <img
                  src={vector}
                  alt="vector"
                  
                />
                <img
                  src={vector}
                  alt="vector"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div >

          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            navigation={false}
            slidesPerView={5}
            spaceBetween={50}
            autoplay={{ delay: 4500 }}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <div >
              <SwiperSlide >

                <div > <img src={ccsc} alt="ccsc"  /> </div>
              </SwiperSlide>
              <SwiperSlide >

              <div>
  <img src={spn5} alt="ccsc" />
</div>

              </SwiperSlide>
              <SwiperSlide >

                <div > <img src={cbs} alt="ccsc"  /> </div>

              </SwiperSlide>

              <SwiperSlide >

                <div > <img src={selle} alt="ccsc"  /> </div>

              </SwiperSlide>
              <SwiperSlide >


                <div c> <img src={gmc} alt="ccsc"  /> </div>

              </SwiperSlide>
            </div>
          </Swiper>





        </div>
        <div >
          <div c><marquee><h1 >DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR STARTUP</h1></marquee></div>
        </div>
        <div >
          <div c><marquee ><h1 >DESIGN YOUR IDEAS <img  src={star2} alt="star2" /> BUILD YOUR STARTUP</h1></marquee></div>
        </div>
        <div >
          <div ><marquee ><h1>DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR STARTUP</h1></marquee></div>
        </div>
        <div>
  <marquee>
    <h1>
      DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR STARTUP
    </h1>
  </marquee>
</div>


      </section>
    </>
  );




        
        </>
    );
}

export default Prizes