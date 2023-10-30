import { Footer } from "../../components/en/Footer";
import { Header } from "../../components/en/Header"
import algorithmicsImage from "../../assets/img/projects/LOGO-ALGORITHMICS.png"
import newTechImage from "../../assets/img/projects/new-tech.png"
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";

export const ProjectsPage = () => {
    return (
        <div>
            <Header />
            <main className="overflow-x-hidden">
                <section className="bg-background1 w-screen h-52 bg-cover">
                    <div className="h-full w-full pb-5 flex flex-col items-center justify-end bg-gradient-to-tl from-app-blue-200/90 to-red-700/60">
                        <Slide direction="up">
                            <h1 className='text-4xl text-white font-semibold text-center mt-20'>
                                Our Projects
                            </h1>
                            <hr className='h-2 w-10 bg-white mx-auto rounded-lg mt-2 border-none' />
                        </Slide>
                    </div>
                </section>
                <section className="pb-20">
                    <Slide direction="left" delay={400}>
                        <div className='flex shadow-lg shadow-red-700 w-2/3 mx-auto mt-10'>
                            <div className='w-2/5'>
                                <img src={algorithmicsImage} alt="" className='p-5 pt-20' />
                            </div>
                            <div className='w-3/5 pt-5 px-3 pr-20'>
                                <h2 className='text-2xl text-app-blue-200 font-semibold mb-1'>
                                    Algorithmics
                                </h2>
                                <hr className='h-1 w-20 bg-red-700 rounded-lg mb-5 border-none' />
                                <p className='text-slate-800'>
                                    We facilitate the learning of computer coding/programming for children
                                    from 6 to 17 years who are registered with Algorithmics International School
                                    of Programming. This program is available on a part-time basis and can be offered
                                    in our premises and/or at any normal school in Maputo.
                                </p>
                                <div className="w-fit ml-auto">
                                    <Link
                                        to="/"
                                        target="_blank"
                                        className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white my-5"
                                    >
                                        <span>See More</span>
                                        <span><ArrowCircleRight size={24} /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction="right">
                        <div className='flex flex-row-reverse shadow-lg shadow-app-blue-200 w-2/3 mx-auto mt-10'>
                            <div className='w-2/5 p-5 pt-20'>
                                <img src={newTechImage} alt="" className='' />
                            </div>
                            <div className='w-3/5 pt-5 pl-20'>
                                <h2 className='text-2xl text-app-blue-200 font-semibold mb-1'>
                                    New Tech & Youth Entrepreneurship Hub
                                </h2>
                                <hr className='h-1 w-32 bg-red-700 rounded-lg mb-5 border-none' />
                                <p className='text-slate-800'>
                                    We offer mentorship services to youth and adults interested in acquiring
                                    and developing skills in the fields of computer coding, 3D universe, basics
                                    of cybersecurity and other new technology and business entrepreneurship development.
                                    We also offer our facility to those who are doing or want to do distance learning
                                    with international online platforms; we mentor and guide them through the whole
                                    learning process.
                                </p>
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white my-5"
                                >
                                    <span>See More</span>
                                    <span><ArrowCircleRight size={24} /></span>
                                </Link>
                            </div>
                        </div>
                    </Slide>
                </section>
            </main>
            <Footer />
        </div>
    );
}