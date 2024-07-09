import React, { useState } from 'react';
import Header from '../components/Header';
import play from '../assets/play.svg';
import star from '../assets/star.svg';
import circle from '../assets/circle.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import line from '../assets/Line.svg';
import { IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import video from '../assets/render.mp4';
import pdf from '../assets/rulebook.pdf';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section style={{ width: '100%', position: 'relative', backgroundColor: '#1f1f1f' }} id="home">
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 8, paddingLeft: '2%', paddingRight: '4%', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', maxWidth: '95%', height: '100%', padding: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column', gap: 12, margin: '0 auto', width: '100%', minHeight: '100%' }}>
            {/* gif */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100%', maxWidth: '50%' }}>
              <h1 style={{ fontSize: '2.1rem', paddingTop: 2, color: '#d47612', fontFamily: 'black', letterSpacing: 'tight' }}>
                IGNITE
              </h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flex: 1, gap: 2, width: '100%', height: '100%', padding: 2 }}>
              <div style={{ backgroundColor: 'red', borderRadius: '50%', padding: 4, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'start', backgroundImage: 'video', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <img
                  src={play}
                  loading="lazy"
                  alt="play"
                  onClick={openModal}
                  style={{ width: 'auto', height: 24, marginRight: 6 }}
                />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column', width: '100%', minHeight: '100%', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100%', height: '100%' }}>
              <h1 style={{ fontSize: '2rem', color: '#d2d2d2', fontFamily: 'black', letterSpacing: 'tight' }}>
                BUILD A UNICORN
              </h1>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, width: '100%', minHeight: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column', width: '100%', padding: 1, gap: 6, marginTop: 6 }}>
              <p style={{ fontSize: '0.7rem', color: '#d6d5d5', fontFamily: 'normal', letterSpacing: '0.1rem' }}>
                The annual flagship event of the Coding Ninjas CUIET, IGNITE: Build A Unicorn, is an Accathon designed primarily for aspiring entrepreneurs providing the students with an opportunity to delve into the intricacies of building a start-up and developing it into a Unicorn through real-time experience. The students will explore the complexities of market dynamics, start-up management, and tech-assisted problem solving all while using virtual currency. Along with a sizable prize pool, the event is jam-packed with engaging games, sessions, and entertaining activities.
              </p>
            </div>
            {/* star */}
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'end', height: '100%' }}>
              <img src={star} loading="lazy" alt="star" style={{ width: 'auto', height: 16, marginRight: 6 }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 4, width: '100%', padding: 4, marginTop: 2, minHeight: 6 }}>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSezH9p9sd8QHaBhQO1v7bjHWj8VfEseCkYYyG4uiy3nPL-8nA/viewform?usp=sf_link"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', transition: '200ms ease-in-out', borderColor: 'black', borderRadius: '50%', maxWidth: '20%', p: 2, flex: 1 }}
            >
              <button type="submit" style={{ color: '#000000', transition: '200ms ease-in-out', borderRadius: '50%', fontSize: '0.7rem', fontFamily: 'black' }}>
                Register Now
              </button>
            </Link>
            <a
              href={pdf}
              download="rulebook"
              style={{ focus: 'none', outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderRadius: '50%', transition: '200ms ease-in-out', flex: 1, borderColor: 'white', maxWidth: '20%', p: 2 }}
            >
              <button type="submit" style={{ color: 'white', borderRadius: '50%', fontSize: '0.7rem', fontFamily: 'black' }}>
                Rule Book
              </button>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', minHeight: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <img src={circle} alt="circle" style={{ width: 10, height: 10 }} />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', position: 'absolute', bottom: 0, right: 2, xlRight: 4, width: '100%', height: '100%', }}>
            <div style={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-90deg)' }}>
                <img src={linkedin} alt="linkedin" style={{ width: 4, height: 4 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-90deg)' }}>
                <img src={instagram} alt="instagram" style={{ width: 4, height: 4 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-90deg)' }}>
                <img src={twitter} alt="twitter" style={{ width: 4, height: 4 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-90deg)' }}>
                <img src={line} alt="line" style={{ width: 6, height: 6 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <section style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="modal__bg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} className="modal__align">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="modal__content">
              <IoCloseOutline
                className="modal__close"
                arial-label="Close modal"
                onClick={() => { setModal() }}
              />
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner ">
                    <BiLoaderAlt
                      className="modal__spinner-style animate-spin"
                      fadein="none"
                    />
                  </div>
                ) : null}
                <video
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  src={video}
                  autoPlay
                  loop
                ></video>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </section>
  );
};

export default HeroPage;

