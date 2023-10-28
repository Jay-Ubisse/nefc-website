import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Header } from "../../components/en/Header"
import Image1 from "../../assets/img/services/service-1.png"
import Image2 from "../../assets/img/services/service-2.png"
import Image3 from "../../assets/img/services/service-3.png"
import Image4 from "../../assets/img/services/service-4.png"
import Image5 from "../../assets/img/services/service-5.png"

const slideImages = [
  {
    url: Image1,
    caption: 'Slide 1'
  },
  {
    url: Image2,
    caption: 'Slide 2'
  },
  {
    url: Image3,
    caption: 'Slide 1'
  },
  {
    url: Image4,
    caption: 'Slide 2'
  },
  {
    url: Image5,
    caption: 'Slide 2'
  },
];

export const HomePage = () => {

  return (
    <div className="overflow-hidden">
      <Header />
      <main className="w-screen">
        <section className="bg-background1 bg-cover h-[calc(100vh+10rem)]">
          <div className="bg-gradient-to-tr from-red-700/80 to-app-blue-200/80 h-full w-full">
            <h1 className='font-normal text-3xl text-white w-1/3 mx-auto text-center pt-20'>
              With NEFC PROJECTS LDA We Work Together For a Better Youth Generation
            </h1>
            <div className="slide-container w-1/2 mx-auto mt-10">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div className='w-full'>
                      <img src={slideImage.url} alt={slideImage.caption} />
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
