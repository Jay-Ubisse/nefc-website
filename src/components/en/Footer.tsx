export const Footer = () => {
    return (
        <footer className=" p-10 bg-gradient-to-tl from-red-700 to-app-blue-200 text-white">
            <div className="footer">
                <nav>
                    <header className="font-bold text-xl text-white">Services</header>
                    <a className="link link-hover">Online Learning, Tutoring and Creation</a>
                    <a className="link link-hover">General Consulting Service</a>
                    <a className="link link-hover">Representation of International Partners</a>
                    <a className="link link-hover">International Business Facilitation</a>
                    <a className="link link-hover">Project Development and Management</a>
                </nav>
                <nav>
                    <header className="font-bold text-xl text-white">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <header className="font-bold text-xl text-white">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="font-bold text-xl text-white">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-slate-900" />
                            <button className="btn btn-primary bg-app-blue-200 border-app-blue-200 border-2 hover:bg-app-blue-200/80 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div>
                <p className="text-center text-sm mt-10">
                    &copy; 2023 NEFC Projects Lda. Designed and Developed by <span className="font-bold underline underline-offset-1">Binario</span>.
                </p>
            </div>
        </footer>
    );
}