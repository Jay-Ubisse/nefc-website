import { Footer } from "../../components/en/Footer";
import { Header } from "../../components/en/Header"
import logo from "../../assets/img/logo.jpg"
import Colaborator1 from "../../assets/img/logos-and-colaborators/fred.jpeg"
import Colaborator2 from "../../assets/img/logos-and-colaborators/cecilia.jpeg"
import Colaborator3 from "../../assets/img/logos-and-colaborators/nadia.jpeg"
import Colaborator4 from "../../assets/img/logos-and-colaborators/vania.jpeg"
import Colaborator5 from "../../assets/img/logos-and-colaborators/elidio.jpeg"
import Colaborator6 from "../../assets/img/logos-and-colaborators/neil.jpeg"
import Colaborator7 from "../../assets/img/logos-and-colaborators/gualimbo.jpeg"
import Colaborator8 from "../../assets/img/logos-and-colaborators/mitchel.jpeg"
import Colaborator9 from "../../assets/img/logos-and-colaborators/marta.jpeg"
import { CaretDoubleRight, Eye, Target } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";
import { useEffect } from "react";

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <main className="bg-background1 w-screen bg-cover">
                <div className="w-full h-full bg-gradient-to-tl from-app-blue-200/90 to-red-700/60 py-10">
                    <Header />
                    <Slide direction="left"> 
                        <section className='flex flex-row-reverse gap-5 rounded-lg w-2/3 mx-auto py-10 px-10 mt-16 bg-gradient-to-r from-red-700 to-app-blue-200 text-white'>
                            <div className='w-2/5 pt-20'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='w-3/5 pt-2 px-3 pl-5'>
                                <h2 className='text-4xl font-semibold mb-2'>
                                    Who We Are
                                </h2>
                                <hr className='h-2 w-20 bg-white rounded-lg mb-5 border-none' />
                                <p>
                                    NEFC Projects Lda is a cross-industry businesses solution for established
                                    entities and individuals with entrepreneurial skills in Mozambique and within the SADC region at large.
                                </p>
                                <p className="mt-2">
                                    Specializing in international business facilitation, project development, Education
                                    Technology development(tutoring) and general consulting services, our mission is to
                                    foster growth, innovation, and success within the young population. With unwavering
                                    commitment, a collaborative approach, and strong core values, we offer exceptional
                                    and customized cross-industry solutions to drive our client’s business forward.
                                </p>
                            </div>
                        </section>
                    </Slide>
                    <Slide direction="down">
                        <section className='flex justify-around rounded-lg w-2/3 mx-auto py-10 mt-10  bg-gradient-to-r from-red-700 to-app-blue-200 text-white'>
                            <div className="text-center w-[45%]">
                                <div className="text-white mb-4">
                                    <Eye size={72} weight="bold" className="mx-auto" />
                                    <h3>Our Vision</h3>
                                </div>
                                <p className="text-sm">
                                    Our vision is to revolutionize business conceptualization through positive business
                                    solution and tailored edutech. As a trusted partner, we are committed to seamless
                                    global expansion, sustainable project development, and expert guidance. We also plan
                                    to reshape the education landscape by promoting impactful curriculum and projects,
                                    providing comprehensive IT tutoring and channeling youth entrepreneurship.
                                </p>
                            </div>
                            <div className="text-center w-[45%]">
                                <div className="text-white mb-4">
                                    <Target size={72} weight="bold" className="mx-auto" />
                                    <h3>Core Values</h3>
                                </div>
                                <p>
                                    At NEFC Projects Limitada, we driven toward empowering the
                                    youth and maximizing their potential:
                                </p>
                                <ul className="text-left ml-14 list-disc">
                                    <li>Excellence;</li>
                                    <li>Integrity;</li>
                                    <li>Collaboration;</li>
                                    <li>Innovation.</li>
                                </ul>
                            </div>
                        </section>
                    </Slide>
                    <Slide direction="left">
                        <section className='rounded-lg w-2/3 mx-auto p-10 mt-10  bg-gradient-to-r from-red-700 to-app-blue-200 text-white'>
                            <h2 className='text-4xl font-semibold mb-2'>
                                Why Us
                            </h2>
                            <hr className='h-2 w-20 bg-white rounded-lg mb-5 border-none' />
                            <ul className="ml-16 mt-10">
                                <li className="flex gap-2">
                                    <span><CaretDoubleRight size={24} className="text-white" /></span>
                                    <span>
                                        <strong>Expert Solutions: </strong>
                                        Our experienced team and partners deliver comprehensive and insightful
                                        solutions, fueling our client’s path to success.
                                    </span>
                                </li>
                                <li className="flex gap-2 my-2">
                                    <span><CaretDoubleRight size={24} className="text-white" /></span>
                                    <span>
                                        <strong>Holistic services: </strong>
                                        Enjoy the convenience of our all-encompassing range of services,
                                        addressing diverse client needs under one roof.
                                    </span>
                                </li>
                                <li className="flex gap-2 my-2">
                                    <span><CaretDoubleRight size={24} className="text-white" /></span>
                                    <span>
                                        <strong>Global Connections: </strong>
                                        Access a robust global network that opens doors to expanded opportunities,
                                        propelling your growth and businesses.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span><CaretDoubleRight size={24} className="text-white" /></span>
                                    <span>
                                        <strong>Youth Empowerment: </strong>
                                        We are driven by a dedication to empowering the youth for a successful future,
                                        shaping up tomorrow's leaders. With our extensive expertise, global network,
                                        holistic approach, and unwavering dedication, youth will be positively empowered
                                        through a profitable partnership that will enable them to achieve desired success.
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </Slide>
                    <section className="w-[90%] mx-auto rounded-xl mt-10">
                        <div className="w-full h-full rounded-xl  bg-gradient-to-r from-red-700 to-app-blue-200 pt-10">
                            <Slide direction="up">
                                <h2 className='text-4xl text-center text-white font-semibold mb-3'>
                                    Our Management Team
                                </h2>
                                <hr className='h-2 w-20 mx-auto bg-white rounded-lg mb-5 border-none' />
                            </Slide>
                            <div className="grid grid-cols-3 justify-items-center gap-y-8 py-16">
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator1} className="w-full" alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Fred Nyembue</h2>
                                        <p className="text-slate-50">
                                            General Director
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator2} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Cecilia Chambe Xai Xai</h2>
                                        <p className="text-slate-50">
                                            Sales Manager
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator3} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Nadia Dias Simango</h2>
                                        <p className="text-slate-50">
                                            Executive Assistant
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator4} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Vania Macome</h2>
                                        <p className="text-slate-50">
                                            Algorithmics Teacher - Digital Literacy
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator5} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Elidio Massingue</h2>
                                        <p className="text-slate-50">
                                            Algorithmics Teacher - Python Star & Visual Programming
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator6} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Neil Lopes</h2>
                                        <p className="text-slate-50">
                                            Algorithmics Teacher - Website Creation & Digital Literacy
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator7} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Gualimbo Alene</h2>
                                        <p className="text-slate-50">
                                            Security Officer
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator8} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Mitchell Bimo</h2>
                                        <p className="text-slate-50">
                                            Security Officer
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 h-[500px] glass">
                                    <figure><img src={Colaborator9} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Marta Nhamussua</h2>
                                        <p className="text-slate-50">
                                            Housekeeper
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 glass">
                                    <figure><img src={logo} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Joaquim Ubisse</h2>
                                        <p className="text-slate-50">
                                            Web Developer Consultant
                                        </p>
                                    </div>
                                </div>
                                <div className="card w-80 glass">
                                    <figure><img src={logo} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">Luisa Mia</h2>
                                        <p className="text-slate-50">
                                            Executive Director (HR, Compliance & Marketing)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}