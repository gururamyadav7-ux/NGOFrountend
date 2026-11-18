
import {
    Heart,
    Users,
    HandHeart,
    Globe,
    Play,
} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-green-950 to-emerald-700 py-24 px-6 overflow-hidden">

            {/* Background Image */}
            <img
                src="https://wallpaperaccess.com/full/11247165.png"
                alt="Children receiving support"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[90vh] w-full items-center px-5 py-20 sm:px-8 lg:px-16">

                <div className="max-w-3xl">

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Small Actions,
                        <span className="block text-green-400">
                            Big Changes.
                        </span>
                        Make The World Better.
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                        We work together to support underprivileged children,
                        empower communities, provide education and create a
                        brighter future for everyone.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap items-center gap-4">

                        <a
                            href="#donate"
                            className="group flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-xl shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-green-600"
                        >
                            Donate Now
                            <Heart size={19} className="transition group-hover:scale-125" />
                        </a>

                        <a
                            href="#about"
                            className="flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
                        >
                            <Play size={17} />
                            Learn More
                        </a>

                    </div>

                    {/* Statistics */}
                    <div className="mt-16 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/20 pt-8">

                        <div>
                            <Users className="mb-3 text-green-400" size={25} />
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                5K+
                            </h3>
                            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                Lives Helped
                            </p>
                        </div>

                        <div>
                            <HandHeart className="mb-3 text-green-400" size={25} />
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                120+
                            </h3>
                            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                Volunteers
                            </p>
                        </div>

                        <div>
                            <Globe className="mb-3 text-green-400" size={25} />
                            <h3 className="text-2xl font-bold text-white sm:text-3xl">
                                25+
                            </h3>
                            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                Communities
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-transparent" />

        </section>
    );
};

export default HeroSection;
