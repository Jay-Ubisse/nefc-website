import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone, TwitterLogo } from "@phosphor-icons/react";
import { Footer } from "../../components/en/Footer";
import { Header } from "../../components/en/Header"
import { useEffect } from "react";

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <div>
            <main className="bg-gradient-to-tr from-red-700 to-app-blue-200 p-1 pb-14">
                <Header />
                <section className="w-3/5 mx-auto mt-10 rounded-xl glass flex text-white justify-between pl-10 gap-7 py-5">
                    <div className="w-1/2">
                        <h2 className="font-semibold text-xl text-white">Our Address</h2>
                        <hr className='h-1 w-16 mt-2 bg-white rounded-lg mb-5 border-none' />
                        <p>Tomás Nduda Avenue</p>
                        <p>Maputo City, 1193</p>
                        <p>Sommerschield 1, Maputo, Mozambique</p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="font-semibold text-xl text-white">Our Contacts</h2>
                        <hr className='h-1 w-16 mt-2 bg-white rounded-lg mb-5 border-none' />
                        <p className="flex gap-2 items-center">
                            <span><EnvelopeSimple size={24} weight="fill" /></span>
                            <p>info@nefcprojectslda.com</p>
                        </p>
                        <p className="flex gap-2 items-center">
                            <span><Phone size={24} weight="fill" /></span>
                            <span>+258 84 425 2070</span>
                        </p>
                        <div className="flex mt-3 gap-2 text-app-blue-200">
                            <span className="bg-white rounded-lg p-1">
                                <FacebookLogo size={24} weight="fill" />
                            </span>
                            <span className="bg-white rounded-lg p-1">
                                <InstagramLogo size={24} weight="fill" />
                            </span>
                            <span className="bg-white rounded-lg p-1">
                                <TwitterLogo size={24} weight="fill" />
                            </span>
                        </div>
                    </div>
                </section>
                <section className="w-4/5 mx-auto mt-10 rounded-xl glass pt-10">
                    <h2 className="font-semibold text-2xl text-center text-white">Contact Us</h2>
                    <hr className='h-2 w-16 mt-2 mx-auto bg-white rounded-lg mb-1 border-none' />
                    <div className="hero rounded-xl bg-transparent">
                        <div className="hero-content flex-col laptop:flex-row-reverse">
                            <div className="border-l-2 border-white pl-5 py-1">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.3763288653551!2d32.5920731!3d-25.9676917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba6b95cd3a1%3A0xa99ecd85c926ba5d!2sAv.%20Tom%C3%A1s%20Nduda%2C%20Maputo!5e0!3m2!1sen!2smz!4v1685730075421!5m2!1sen!2smz"
                                    width="500"
                                    height="450"
                                    loading="lazy"
                                >

                                </iframe>
                            </div>
                            <div className="card -mt-5 flex-shrink-0 w-full max-w-sm">
                                <form onSubmit={handleSubmit} className="card-body flex flex-col gap-8">
                                    <div className="form-control">
                                        <input type="text" placeholder="NAME" className="border-b bg-transparent border-white placeholder:text-slate-200 p-2 focus:outline-none focus:border-b-2 text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" placeholder="EMAIL" className="border-b bg-transparent border-white placeholder:text-slate-200 p-2 focus:outline-none focus:border-b-2 text-white" required />
                                    </div>
                                    <div className="form-control">
                                        <textarea rows={5} placeholder="MESSAGE" className="border-b bg-transparent p-2 focus:outline-none border-white placeholder:text-slate-200 focus:border-b-2 text-white" required></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-gradient-to-r from-red-700/90 to-app-blue-200 text-white border-none">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}