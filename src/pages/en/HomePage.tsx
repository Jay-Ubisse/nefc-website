import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Fade, Slide as SlideAwesome } from 'react-awesome-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "../../components/en/Header"
import image7 from "../../assets/img/how-we-work/smart.webp"
import image8 from "../../assets/img/how-we-work/smarter.webp"
import image9 from "../../assets/img/how-we-work/fast.webp"
import { Footer } from '../../components/en/Footer';
import { slideImages } from '../../data/services-data';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};


export const HomePage = () => {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="w-screen">
        <section className="bg-background1 bg-cover h-[calc(100vh-5rem)] overflow-visible">
          <div className="bg-gradient-to-tr from-red-700/80 to-app-blue-200/80 h-full w-full overflow-visible">
            <SlideAwesome duration={2000}>
              <h1 className='font-normal text-3xl text-white w-1/3 mx-auto text-center pt-20'>
                With NEFC PROJECTS LDA We Work Together For a Better Youth Generation
              </h1>
            </SlideAwesome>
            <Fade duration={3000}>
              <div className="slide-container w-1/2 mx-auto mt-10">
                <Slide>
                  {slideImages.map((slideImage, index) => (
                    <div key={index}>
                      <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        <div className='bg-app-blue-200/80 w-full h-full flex flex-col items-center justify-center'>
                          <span>{slideImage.icon}</span>
                          <h1 className='font-semibold text-2xl text-center text-white'>
                            {slideImage.caption}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </Fade>
          </div>
        </section>
        <section className='w-screen pt-32 pb-16'>
          <h1 className='text-4xl text-app-blue-200 font-semibold text-center'>
            How We Work
          </h1>
          <hr className='h-2 w-10 bg-app-blue-200 mx-auto rounded-lg mt-2' />
          <div className='flex shadow-lg shadow-red-700 w-2/3 mx-auto mt-10 h-60'>
            <div className='w-2/5 flex'>
              <img src={image7} alt="" className='h-40' />
              <img src={image8} alt="" className='h-36 relative top-20 -left-16' />
            </div>
            <div className='w-3/5 pt-5 px-3'>
              <h2 className='text-2xl text-app-blue-200 font-semibold mb-6'>
                Smart
              </h2>
              <p className='text-slate-800'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse provident possimus perferendis in, vel et alias praesentium quaerat,
                eius dignissimos facilis autem corporis, nesciunt vero vitae. Quisquam odit natus quas!
              </p>
            </div>
          </div>
          <div className='flex flex-row-reverse shadow-lg shadow-red-700 w-2/3 mx-auto mt-10 h-60'>
            <div className='w-2/5 flex'>
              <img src={image9} alt="" className='h-full ml-auto' />
            </div>
            <div className='w-3/5 pt-5 pl-20'>
              <h2 className='text-2xl text-app-blue-200 font-semibold mb-6'>
                Fast
              </h2>
              <p className='text-slate-800'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse provident possimus perferendis in, vel et alias praesentium quaerat,
                eius dignissimos facilis autem corporis, nesciunt vero vitae. Quisquam odit natus quas!
              </p>
            </div>
          </div>
        </section>
        <section className='w-screen bg-app-blue-100 h-[calc(100vh-10rem)] p-1'>
          <h1 className='text-4xl text-app-blue-200 font-semibold text-center mt-20'>
            What We Do
          </h1>
          <hr className='h-2 w-10 bg-app-blue-200 mx-auto rounded-lg mt-2 border-none' />
          <p className='mt-10 text-slate-900 text-center w-2/3 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis inventore id eaque voluptatem ad quibusdam,
            tenetur assumenda non odio at, sequi vitae dolore. Minus quos quis perferendis quibusdam earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis inventore id eaque voluptatem ad quibusdam,
            tenetur assumenda non odio at, sequi vitae dolore. Minus quos quis perferendis quibusdam earum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reiciendis inventore id eaque voluptatem ad quibusdam,
            tenetur assumenda non odio at, sequi vitae dolore. Minus quos quis perferendis quibusdam earum?
          </p>
        </section>
        <section className='w-screen bg-background3 '>
          <div className='bg-app-blue-200/30'>
            <h1 className='text-4xl text-white font-semibold text-center pt-10'>
              Why Us
            </h1>
            <hr className='h-2 w-10 bg-white mx-auto rounded-lg mt-2 border-none' />
            <div className='flex justify-around mt-20 pb-10'>
              <div className='h-60 w-60 shadow-lg shadow-red-700 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                Expert Solutions
              </div>
              <div className='h-60 w-60 shadow-lg shadow-app-blue-200 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                Global Connections
              </div>
              <div className='h-60 w-60 shadow-lg shadow-red-700 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                Holistic services
              </div>
              <div className='h-60 w-60 shadow-lg shadow-app-blue-200 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                Youth Empowerment
              </div>
            </div>
          </div>
        </section>
        <section className='w-screen bg-background2 bg-cover h-[calc(100vh-10rem)]'>
          <div className='bg-gradient-to-r from-app-blue-200/80 to-red-700/50 w-full h-full text-white p-1'>
            <Slider {...settings}>
              <div>
                <h3 className='text-xl text-white font-normal text-center mt-20'>
                  The Business Time
                </h3>
                <hr className='h-[1px] w-20 bg-white  border-none mx-auto rounded-lg mt-2 mb-20' />
                <h1 className='text-4xl font-semibold w-1/2 mx-auto mb-20 text-center'>
                  The smartest services in the market
                </h1>
              </div>
              <div>
                <h3 className='text-xl text-white font-normal text-center mt-20'>
                  Technology Today
                </h3>
                <hr className='h-[1px] w-20 bg-white  border-none mx-auto rounded-lg mt-2 mb-20' />
                <h1 className='text-4xl font-semibold w-1/2 mx-auto mb-20 text-center'>
                  The game changing project you'll need
                </h1>
              </div>
            </Slider>
          </div>
        </section>
        <section className='w-screen bg-white h-[calc(100vh-10rem)] p-1 mb-20'>
          <h1 className='text-4xl text-app-blue-200 font-semibold text-center mt-20'>
            Our Partners
          </h1>
          <hr className='h-2 w-10 bg-app-blue-200 mx-auto rounded-lg mt-2 border-none' />
          <div className='flex justify-around mt-20'>
            <div className='h-60 w-60 shadow-lg shadow-red-700 bg-white text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
              Partner 1
            </div>
            <div className='h-60 w-60 shadow-lg shadow-app-blue-200 bg-white text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
              Partner 2
            </div>
            <div className='h-60 w-60 shadow-lg shadow-red-700 bg-white text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
              Partner 3
            </div>
            <div className='h-60 w-60 shadow-lg shadow-app-blue-200 bg-white text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
              Partner 4
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
