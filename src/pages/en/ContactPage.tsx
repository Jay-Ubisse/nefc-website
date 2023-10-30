import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone, TwitterLogo } from "@phosphor-icons/react";
import { Footer } from "../../components/en/Footer";
import { Header } from "../../components/en/Header"

export const ContactPage = () => {
    return (
        <div>
            <Header />
            <main className="bg-gradient-to-tr from-red-700/50 to-app-blue-200/60 p-1 pb-14">
                <section className="w-3/5 mx-auto mt-10 rounded-xl glass flex text-white justify-between pl-10 gap-7 py-5">
                    <div className="w-1/2">
                        <h2 className="font-semibold text-xl text-app-blue-200">Our Address</h2>
                        <hr className='h-1 w-16 mt-2 bg-app-blue-200 rounded-lg mb-5 border-none' />
                        <p>Tomás Nduda Avenue</p>
                        <p>Maputo City, 1193</p>
                        <p>Sommerschield 1, Maputo, Mozambique</p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="font-semibold text-xl text-app-blue-200">Our Contacts</h2>
                        <hr className='h-1 w-16 mt-2 bg-app-blue-200 rounded-lg mb-5 border-none' />
                        <p className="flex gap-2 items-center">
                            <span><EnvelopeSimple size={24} weight="fill" /></span>
                            <p>info@nefcprojectslda.com</p>
                        </p>
                        <p className="flex gap-2 items-center">
                            <span><Phone size={24} weight="fill" /></span>
                            <span>+258 84 425 2070</span>
                        </p>
                        <div className="flex mt-3 gap-2">
                            <span className="bg-app-blue-200 rounded-lg p-1">
                                <FacebookLogo size={24} weight="fill" />
                            </span>
                            <span className="bg-app-blue-200 rounded-lg p-1">
                                <InstagramLogo size={24} weight="fill" />
                            </span>
                            <span className="bg-app-blue-200 rounded-lg p-1">
                                <TwitterLogo size={24} weight="fill" />
                            </span>
                        </div>
                    </div>
                </section>
                <section className="w-4/5 mx-auto mt-10 rounded-xl glass pt-10">
                    <h2 className="font-semibold text-2xl text-center text-app-blue-200">Contact Us</h2>
                    <hr className='h-2 w-16 mt-2 mx-auto bg-app-blue-200 rounded-lg mb-1 border-none' />
                    <div className="hero rounded-xl bg-transparent">
                        <div className="hero-content flex-col laptop:flex-row-reverse">
                            <div className="border-l-2 border-app-blue-200 pl-5 py-1">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.3763288653551!2d32.5920731!3d-25.9676917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba6b95cd3a1%3A0xa99ecd85c926ba5d!2sAv.%20Tom%C3%A1s%20Nduda%2C%20Maputo!5e0!3m2!1sen!2smz!4v1685730075421!5m2!1sen!2smz"
                                    width="500"
                                    height="450"
                                    loading="lazy"
                                >

                                </iframe>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered bg-transparent border-app-blue-200 placeholder:text-slate-200" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="email" className="input input-bordered bg-transparent border-app-blue-200 placeholder:text-slate-200" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Message</span>
                                        </label>
                                        <textarea rows={5} className="border bg-transparent p-3 focus:outline-slate-500 rounded-lg border-app-blue-200 placeholder:text-slate-200" required></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-gradient-to-r from-red-700/90 to-app-blue-200/90 text-white border-none">Send Message</button>
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