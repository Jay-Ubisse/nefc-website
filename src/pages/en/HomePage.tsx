import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Fade, Slide as SlideAwesome } from 'react-awesome-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Disclosure } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { Header } from "../../components/en/Header"
import { Footer } from '../../components/en/Footer';
import { slideImages } from '../../data/services-data';
import pentagonLogo from '../../assets/img/logos-and-colaborators/pentagon.jpeg'
import binarioLogo from '../../assets/img/logos-and-colaborators/Binario2.png'
import fredzLogo from '../../assets/img/logos-and-colaborators/fredz.jpeg'
import misoLogo from '../../assets/img/logos-and-colaborators/mis.png'
import yoloLogo from '../../assets/img/logos-and-colaborators/yolo.jpeg'
import wansatiLogo from '../../assets/img/logos-and-colaborators/wansati.jpeg'
import bigCityLogo from '../../assets/img/logos-and-colaborators/big.jpeg'
import statesLogo from '../../assets/img/logos-and-colaborators/states.jpeg'

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main className="w-screen">
        <section className="bg-background1 bg-cover h-screen overflow-visible">
          <div className="bg-gradient-to-r from-red-700/90 to-app-blue-200/90 h-full w-full overflow-visible">
            <Header />
            <SlideAwesome duration={2000}>
              <h1 className='font-normal text-3xl text-white w-[45%] mx-auto text-center pt-20'>
                With <span className='font-medium text-4xl'>NEFC PROJECTS LIMITADA</span>, we can make a lasting impact.
              </h1>
            </SlideAwesome>
            <Fade duration={3000}>
              <div className="slide-container shadow-2xl w-1/3 mx-auto mt-20">
                <Slide>
                  {slideImages.map((slideImage, index) => (
                    <div key={index}>
                      <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        <div className='bg-gradient-to-r from-red-700/80 to-app-blue-200/80 w-full h-full flex flex-col items-center justify-center'>
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
        <section className='w-screen pt-40 pb-16 bg-gradient-to-r from-red-700 to-app-blue-200 text-white'>
          <SlideAwesome direction='up' duration={1000}>
            <h1 className='text-4xl font-semibold text-center'>
              Who We Are
            </h1>
            <hr className='h-2 w-10 mx-auto bg-white rounded-lg mt-2' />
          </SlideAwesome>
          <SlideAwesome direction='left'>
            <div className='w-2/3 mx-auto mt-10'>
              <p>
                NEFC Projects Lda is a cross-industry businesses solution for established entities
                and individuals with entrepreneurial skills in Mozambique and within the SADC region at large.
              </p>
              <p className='mt-5'>
                Specializing in international business facilitation, project development, Education Technology
                development(tutoring) and general consulting services, our mission is to foster growth, innovation,
                and success within the young population. With unwavering commitment, a collaborative approach,
                and strong core values, we offer exceptional and customized cross-industry solutions to drive
                our client’s business forward.
              </p>
            </div>
          </SlideAwesome>
        </section>
        <section className='w-screen bg-app-blue-100 p-1 pb-20'>
          <SlideAwesome direction='up'>
            <h1 className='text-4xl text-app-blue-200 font-semibold text-center mt-20'>
              What We Do
            </h1>
            <hr className='h-2 w-10 bg-app-blue-200 mx-auto rounded-lg mt-2 border-none' />
          </SlideAwesome>
          <Fade delay={500} duration={500}>
            <div className="flex flex-col gap-2 text-white w-2/3 mx-auto mt-10 transition-colors duration-1000 ease-in-out">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${open
                      ? "from-app-blue-200 to-red-800"
                      : "from-red-700 to-app-blue-200"
                      } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                      <span>General consulting service</span>
                      <CaretDown
                        weight="bold"
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-appgreen-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                      <p>
                        As a trusted partner, we bring expertise and insights to
                        help you overcome challenges and make informed decisions.
                        Through our collaborative approach and industry insights, we
                        provide unique solutions for strategic planning, process
                        optimization, market research, and more. Whether you're a
                        startup, small business, or established enterprise, our
                        general consulting services are designed to unlock your
                        potential. We strive to help you achieve sustainable growth,
                        operational efficiency, and a competitive edge in the market
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${open
                      ? "from-app-blue-200 to-red-800"
                      : "from-red-700 to-app-blue-200"
                      } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                      <span>Projects development and management</span>
                      <CaretDown
                        weight="bold"
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-appgreen-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                      <p>
                        We understand that embarking on projects can be a complex
                        journey but with the right team, planning, and execution
                        success is guaranteed. With our expertise and dedicated
                        team, we seamlessly guide your projects from inception to
                        completion. Our tailored solutions encompass meticulous
                        planning, resource optimization, risk mitigation, and
                        performance monitoring
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${open
                      ? "from-app-blue-200 to-red-800"
                      : "from-red-700 to-app-blue-200"
                      } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                      <span> International business facilitation</span>
                      <CaretDown
                        weight="bold"
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-appgreen-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                      <p>
                        Unlocking the potential of local, regional and international
                        markets can take be a very complicated process involving
                        time and effort. At NEFC Projects Limitada, we understand
                        the complexities and obstacles businesses face when
                        expanding globally. That's why we're here to help you
                        throughout the entire process.
                      </p>
                      <p className='mt-5'>
                        We offer solutions that simplify and streamline your expansion. Through our extensive network
                        and expertise, we connect you to key stakeholders, help you navigate regulations, and seize
                        opportunities that align with your goal. From market analysis to logistics coordination, we
                        tailor our services to your needs.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`${open
                      ? "from-app-blue-200 to-red-800"
                      : "from-red-700 to-app-blue-200"
                      } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                      <span>Foreign Companies/Businesses representation</span>
                      <CaretDown
                        weight="bold"
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-appgreen-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                      <p>
                        Expanding your operations abroad, navigating local regulations, establishing connections,
                        and building a solid presence can be daunting. But that’s where we step in to guide
                        businesses to success in foreign representation.
                      </p>
                      <p className='mt-5'>
                        Our experienced team understands local business practices, regulations, and cultural nuances.
                        We help you establish a strong presence by connecting you with stakeholders, facilitating
                        negotiations, and providing valuable guidance.
                      </p>
                      <p className='mt-5'>
                        Our service covers a wide range of activities, including market research, partner
                        identification, distributor network establishment, and government relations.
                        We customize our approach to align with your specific goals and objectives,
                        ensuring seamless integration into the local business landscape.
                      </p>
                      <p className='mt-5'>
                        This allows you to focus on your core operations while we navigate new territories on your behalf.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Link
                to="/services"
                className="btn bg-gradient-to-r w-fit mx-auto rounded-3xl px-6 py-3 border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white my-5"
              >
                See More
              </Link>
            </div>
          </Fade>
        </section>
        <section className='w-screen bg-background3 '>
          <div className='bg-app-blue-200/30'>
            <SlideAwesome direction='up'>
              <h1 className='text-4xl text-white font-semibold text-center pt-10'>
                Why Us
              </h1>
              <hr className='h-2 w-10 bg-white mx-auto rounded-lg mt-2 border-none' />
            </SlideAwesome>
            <Fade cascade>
              <ul className='flex justify-around mt-20 pb-10'>
                <li className='h-60 w-60 shadow-lg shadow-red-700 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                  Expert Solutions
                </li>
                <li className='h-60 w-60 shadow-lg shadow-app-blue-200 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                  Global Connections
                </li>
                <li className='h-60 w-60 shadow-lg shadow-red-700 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                  Holistic services
                </li>
                <li className='h-60 w-60 shadow-lg shadow-app-blue-200 glass text-app-blue-200 text-xl font-semibold flex items-center justify-center'>
                  Youth Empowerment
                </li>
              </ul>
            </Fade>
            <div className='w-fit mx-auto'>
              <Link
                to="/about"
                className="btn bg-gradient-to-r rounded-3xl px-6 py-3 border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white my-5"
              >
                See Details
              </Link>
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
        <section className='w-screen bg-gradient-to-r from-red-700 to-app-blue-200 p-1 pb-20'>
          <SlideAwesome direction='up'>
            <h1 className='text-4xl text-white font-semibold text-center mt-20'>
              Our Partners
            </h1>
            <hr className='h-2 w-10 bg-white mx-auto rounded-lg mt-2 border-none' />
          </SlideAwesome>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            Mozambique
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='w-60 rounded-md  text-xl flex-col flex'>
                <img src={pentagonLogo} alt="" />
              </li>
              <li className='w-60 rounded-md  text-xl flex-col flex'>
                <img src={binarioLogo} alt="" />
              </li>
              <li className='w-60 rounded-md bg-white h-fit text-xl flex-col flex'>
                <img src={misoLogo} alt="" />
              </li>
              <li className='w-60 rounded-md  text-xl flex-col flex'>
                <img src={wansatiLogo} alt="" />
              </li>
              <li className='h-60 w-60 rounded-md glass text-xl flex-col flex justify-center items-center'>
                <span className='font-semibold'>
                  Mabutana & Momade Serviços Lda
                </span>
                <span className='text-sm mt-10 font-semibold'>
                  (Mozambique)
                </span>
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            Namibia
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='w-60 rounded-md text-xl flex-col flex'>
                <img src={bigCityLogo} alt="" />
              </li>
              <li className='w-60 rounded-md text-xl flex-col flex'>
                <img src={fredzLogo} alt="" />
              </li>
              <li className='w-60 rounded-md text-xl flex-col flex'>
                <img src={statesLogo} alt="" />
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            USA
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='w-60 rounded-md text-xl flex-col flex'>
                <img src={pentagonLogo} alt="" />
              </li>
              <li className='w-60 rounded-md glass text-xl flex-col flex'>
                <img src={yoloLogo} alt="" />
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            Malawi
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='h-60 w-60 rounded-md glass text-xl flex-col flex'>
                <span className='font-semibold'>
                  Manpower Link Multinational
                </span>
                <span className='text-sm mt-10 font-semibold'>
                  (Malawi)
                </span>
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            Mauritius
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='h-60 w-60 rounded-md glass text-xl flex-col flex'>
                <span className='font-semibold'>
                  SIFA Enterprises Limited
                </span>
                <span className='text-sm mt-10 font-semibold'>
                  (Mauritius)
                </span>
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            DRC
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='h-60 w-60 rounded-md glass text-xl flex-col flex'>
                <span className='font-semibold'>
                  Tanganyika Mining Company Sarl
                </span>
                <span className='text-sm mt-10 font-semibold'>
                  (DRC)
                </span>
              </li>
            </ul>
          </Fade>
          <h1 className='text-xl ml-5 text-white font-semibold mt-20'>
            UAE
          </h1>
          <hr className='h-1 w-80 ml-5 bg-white rounded-lg mt-2 border-none' />
          <Fade cascade>
            <ul className='mt-20 grid grid-cols-4 gap-y-16 justify-items-center text-white text-center'>
              <li className='h-60 w-60 rounded-md glass text-xl flex flex-col'>
                <span className='font-semibold'>
                  Algorithmics Global FZE
                </span>
                <span className='text-sm mt-10 font-semibold'>
                  (UAE)
                </span>
              </li>
            </ul>
          </Fade>
        </section>
      </main>
      <Footer />
    </div>
  )
}
