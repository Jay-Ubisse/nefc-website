import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Header } from "../../components/en/Header"
import Image1 from "../../assets/img/services/service-1.jpg"
import Image2 from "../../assets/img/services/service-2.jpg"
import Image3 from "../../assets/img/services/service-3.jpg"
import Image4 from "../../assets/img/services/service-4.jpg"
import Image5 from "../../assets/img/services/service-5.jpg"
import { Briefcase, ChalkboardTeacher, ChartLineUp, Globe, TreeStructure } from '@phosphor-icons/react';
import { Fade, Slide as SlideAwesome } from 'react-awesome-reveal';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}

const slideImages = [
  {
    url: Image1,
    caption: 'Online Learning, Tutoring and Creation',
    icon: <ChalkboardTeacher color='#fffffF' size={200} />
  },
  {
    url: Image2,
    caption: 'General Consulting Service',
    icon: <ChartLineUp color='#fffffF' size={200} />
  },
  {
    url: Image3,
    caption: 'Representation of International Partners',
    icon: <Globe color='#fffffF' size={200} />
  },
  {
    url: Image4,
    caption: 'International Business Facilitation',
    icon: <Briefcase color='#fffffF' size={200} />
  },
  {
    url: Image5,
    caption: 'Project Development and Management',
    icon: <TreeStructure color='#fffffF' size={200} />
  },
];

export const HomePage = () => {

  return (
    <div className="overflow-hidden">
      <Header />
      <main className="w-screen">
        <section className="bg-background1 bg-cover h-[calc(100vh+10rem)]">
          <div className="bg-gradient-to-tr from-red-700/80 to-app-blue-200/80 h-full w-full">
            <SlideAwesome duration={2000}>
              <h1 className='font-normal text-3xl text-white w-1/3 mx-auto text-center pt-20'>
                With NEFC PROJECTS LDA We Work Together For a Better Youth Generation
              </h1>
            </SlideAwesome>
            <Fade duration={5000}>
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
      </main>
    </div>
  )
}
