import { ArrowRight, X } from "@phosphor-icons/react";
import { Footer } from "../../components/en/Footer"
import { Header } from "../../components/en/Header"
import { slideImages } from "../../data/services-data";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [title, setTitle] = useState(slideImages[0].caption);
    const [content, setConent] = useState(slideImages[0].description);
    const [image, setImage] = useState(0);
    const [visibility, setVisibility] = useState(false);

    function displayCardContent(contentNumber: number) {
        setTitle(slideImages[contentNumber].caption);
        setConent(slideImages[contentNumber].description);
        setImage(contentNumber);
        setVisibility(true);
    }

    function closeCardContent() {
        setVisibility(false);
    }

    return (
        <div>
            <main className="overflow-x-hidden">
                <section className="bg-background1 w-screen h-72 bg-cover">
                    <div className="h-full w-full pb-5 bg-gradient-to-tl from-app-blue-200/90 to-red-700/70">
                        <Header />
                        <div className="flex flex-col items-center justify-end">
                            <Slide direction="up">
                                <h1 className='text-4xl text-white font-semibold text-center mt-20'>
                                    Our Services
                                </h1>
                                <hr className='h-2 w-10 bg-white mx-auto rounded-lg mt-2 border-none' />
                            </Slide>
                        </div>
                    </div>
                </section>
                <section className="bg-background3 bg-cover">
                    <div className="h-full w-full bg-app-blue-200/80 relative">
                        <Slide direction="down" delay={300}>
                            <h1 className="text-white w-fit mx-auto font-medium text-2xl pt-10">
                                Complete Solutions In Business And Technology Areas
                            </h1>
                        </Slide>
                        <div className="grid grid-cols-3 gap-y-5 justify-items-center py-10">
                            <Fade>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[0].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[0].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(0)}
                                                className="btn btn-primary bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[1].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[1].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(1)}
                                                className="btn btn-primary bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={100}>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[2].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[2].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(2)}
                                                className="btn btn-primary bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[3].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[3].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(3)}
                                                className="btn btn-primary bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={200}>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[4].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[4].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(4)}
                                                className="btn btn-primary mt-10 bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={200}>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[5].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[5].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(5)}
                                                className="btn btn-primary mt-10 bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={200}>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[6].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[6].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(6)}
                                                className="btn btn-primary mt-10 bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={200}>
                                <div className="card w-96 glass">
                                    <figure><img src={slideImages[7].url} alt="car!" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-white">{slideImages[7].caption}</h2>
                                        <div className="card-actions justify-end">
                                            <button
                                                onClick={() => displayCardContent(7)}
                                                className="btn btn-primary mt-10 bg-gradient-to-tr from-red-700 to-app-blue-200 border-none text-white"
                                            >
                                                <span>See more</span>
                                                <span>
                                                    <ArrowRight color="white" size={24} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            
                        </div>
                        <div className={`${visibility ? "block" : "hidden"
                            } w-screen h-screen fixed top-0 left-0 glass z-50 flex items-center justify-center`}>
                            <div className={`hero min-h-16 w-4/5 rounded-xl bg-app-blue-200 text-white relative`}>
                                <div className="hero-content flex-col laptop:flex-row-reverse">
                                    <img src={slideImages[image].url} className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-4xl font-bold mt-16">{title}</h1>
                                        <p className="py-6">{content}</p>
                                        <button
                                            className="absolute top-5 left-5 text-white border border-white rounded-md p-1"
                                            onClick={() => closeCardContent()}
                                        >
                                            <X size={24} weight="bold" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}