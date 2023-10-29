import { Footer } from "../../components/en/Footer";
import { Header } from "../../components/en/Header"
import logo from "../../assets/img/logo.jpg"
import { Eye } from "@phosphor-icons/react";

export const AboutPage = () => {
    return (
        <div>
            <Header />
            <main className="bg-background1 w-screen bg-cover">
                <div className="w-full h-full bg-gradient-to-tl from-app-blue-200/90 to-red-700/60 py-10">
                    <section className='flex flex-row-reverse rounded-lg w-2/3 mx-auto py-10 bg-white'>
                        <div className='w-2/5 pt-20'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='w-3/5 pt-2 px-3 pl-5'>
                            <h2 className='text-4xl text-app-blue-200 font-semibold mb-2'>
                                Who We Are
                            </h2>
                            <hr className='h-2 w-20 bg-red-700 rounded-lg mb-5 border-none' />
                            <p className='text-slate-800'>
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
                    <section className='flex justify-around rounded-lg w-2/3 mx-auto py-10 mt-10 bg-white'>
                        <div className="text-center w-[45%]">
                            <Eye />
                            <h3>Our Vision</h3>
                            <p>
                                Our vision is to revolutionize business conceptualization through positive business
                                solution and tailored edutech. As a trusted partner, we are committed to seamless
                                global expansion, sustainable project development, and expert guidance. We also plan
                                to reshape the education landscape by promoting impactful curriculum and projects,
                                providing comprehensive IT tutoring and channeling youth entrepreneurship.
                            </p>
                        </div>
                        <div className="text-center w-[45%]">
                            <Eye />
                            <h3>Core Values</h3>
                            <p className="text-left">
                                <ul>
                                    <li>Excellence:;</li>
                                    <li>Integrity: ;</li>
                                    <li>Collaboration;</li>
                                    <li>Innovation</li>
                                </ul>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}