
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Heart,
    Send,
    Globe,
    ArrowUp
} from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const quickLinks = [
        "Home",
        "About Us",
        "Our Services",
        "Portfolio",
        "Contact Us",
    ];

    const services = [
        "Web Development",
        "UI / UX Design",
        "App Development",
        "Digital Marketing",
        "SEO Optimization",
    ];

    return (
        <footer className="relative overflow-hidden bg-[#080d1a] text-white">

            {/* Background Effects */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 pt-16">

                {/* Newsletter */}
                <div className="mb-16 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:flex-row md:p-12">

                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Non-Governmental Organization
                        </h2>

                        <p className="mt-3 text-gray-400">
                            An NGO is an independent, non-profit group that works for social, humanitarian, environmental, or community welfare causes without direct government control
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you for subscribing!");
                            e.target.reset();
                        }}
                        className="flex w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-2 focus-within:border-blue-500 md:w-auto"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-500"
                        />

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 px-5 py-3 font-semibold transition hover:scale-105"
                        >
                            Subscribe
                            <Send size={16} />
                        </button>
                    </form>
                </div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-extrabold">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                SJKS
                            </span>
                            <span className="text-white">.</span>
                        </h2>

                        <p className="mt-5 max-w-xs leading-7 text-gray-400">
                            An NGO is a voluntary, not for profit organization operating independently from the government.
                        </p>

                        <div className="mt-7 flex gap-3">
                            <a
                                href="#"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaFacebook size={21} />
                            </a>
                            <a
                                href="#"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-orange-600 hover:text-white"
                            >
                                <FaSquareInstagram size={21} />
                            </a>
                            <a
                                href="#"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaTwitter size={21} />
                            </a>
                            <a
                                href="#"
                                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaLinkedin size={21} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group flex items-center gap-2 text-gray-400 transition hover:translate-x-1 hover:text-blue-400"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 transition group-hover:opacity-100"
                                        />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">
                            Our Services
                        </h3>

                        <ul className="space-y-4">
                            {services.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 transition hover:text-purple-400"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-400">

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 shrink-0 text-blue-400" size={19} />
                                <p>India, Uttar Pradesh</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-400" size={19} />
                                <a href="mailto:hello@example.com">
                                    hello@example.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-400" size={19} />
                                <a href="tel:+910000000000">
                                    +91 00000 00000
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Globe className="text-blue-400" size={19} />
                                <a href="#">
                                    www.example.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 text-center md:flex-row">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Brand. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <a href="#" className="transition hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition hover:text-white">
                            Terms & Conditions
                        </a>
                        <a href="#" className="transition hover:text-white">
                            Sitemap
                        </a>
                    </div>

                    <p className="flex items-center gap-1 text-sm text-gray-500">
                        Made with <Heart size={15} className="fill-red-500 text-red-500" /> in India
                    </p>

                </div>

            </div>

            {/* Back To Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg shadow-blue-500/30 transition hover:-translate-y-1"
            >
                <ArrowUp size={20} />
            </button>

        </footer>
    );
};

export default Footer;
