import { Envelope, FacebookLogo, Globe, InstagramLogo, Phone, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logotipo from "../../assets/img/logo.jpg";

export const Footer = () => {
    return (
        <footer className=" p-10 bg-gradient-to-tl from-red-700 to-app-blue-200 text-white">
            <div className="footer">
                <nav>
                    <header className="font-bold text-xl text-white">Company</header>
                    <Link
                        to="/about"
                    >
                        <a className="link link-hover">About us</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">Our Services</a>
                    </Link>
                    <Link
                        to="/projects"
                    >
                        <a className="link link-hover">Our Projects</a>
                    </Link>
                    <Link
                        to="/about"
                    >
                        <a className="link link-hover">Our Management & Team </a>
                    </Link>
                </nav>
                <nav>
                    <header className="font-bold text-xl text-white">Projects</header>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">Projects development & management</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">International business facilitation</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">General consulting services</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">Business representation</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">EduTech mentoring</a>
                    </Link>
                    <Link
                        to="/services"
                    >
                        <a className="link link-hover">Creative services</a>
                    </Link>
                </nav>
                <nav>
                    <header className="font-bold text-xl text-white">Projects</header>
                    <Link
                        to="/projects"
                    >
                        <a className="link link-hover">Algorithmics</a>
                    </Link>
                    <Link
                        to="/projects"
                    >
                        <a className="link link-hover">New Tech & Youth Entrepreneurship Hub</a>
                    </Link>
                </nav>
                <div>
                    <header className="font-bold text-xl text-white">Our Social Media</header>
                    <div className="flex mt-3 gap-2 text-white">
                        <span className="bg-app-blue-200 rounded-lg p-2">
                            <FacebookLogo size={20} weight="fill" />
                        </span>
                        <span className="bg-app-blue-200 rounded-lg p-2">
                            <InstagramLogo size={20} weight="fill" />
                        </span>
                        <span className="bg-app-blue-200 rounded-lg p-2">
                            <TwitterLogo size={20} weight="fill" />
                        </span>
                    </div>
                </div>
            </div>
            <header className="font-bold text-xl text-white text-center mt-16">Contact Us</header>
            <div className="flex flex-row mt-5 justify-evenly pt-5">
                <div>
                    <div className="mt-5 ml-5">
                        <Link to="/" className="flex flex-row laptop:gap-1">
                            <img
                                src={logotipo}
                                alt="logo"
                                className="h-20"
                            />
                        </Link>
                    </div>
                    <div className="text-center mt-2 ml-4">
                        <p>Av. Tomas Nduda No 1193</p>
                        <p>Sommerschield 1</p>
                        <p>Maputo City</p>
                        <p>Republic of Mozambique</p>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h2 className="font-semibold text-xl mb-2">Office</h2>
                        <p className="flex gap-2">
                            <span><Phone weight="fill" size={20} /></span>
                            <span>+258 84 425 2070</span>
                        </p>
                        <p className="flex gap-2">
                            <span><Envelope weight="fill" size={20} /></span>
                            <span>info@nefcprojects.co.mz </span>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-2">Algorithmics Project</h2>
                        <p className="flex gap-2">
                            <span><Phone weight="fill" size={20} /></span>
                            <span>+258 87 847 2220</span>
                        </p>
                        <p className="flex gap-2">
                            <span><Envelope weight="fill" size={20} /></span>
                            <span>sommerschield-maputo@alg.academy </span>
                        </p>
                        <p className="flex gap-2">
                            <span><Globe weight="fill" size={20} /></span>
                            <span>https://sommerschield-maputo.alg.academy/en </span>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-sm mt-10">
                    &copy; 2023 NEFC Projects Lda. Designed and Developed by <span className="font-bold underline underline-offset-1">Binario</span>.
                </p>
            </div>
        </footer>
    );
}