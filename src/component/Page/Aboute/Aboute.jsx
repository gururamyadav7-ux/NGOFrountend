
import {
    Heart,
    Users,
    Target,
    Eye,
    HandHeart,
    Award,
    Globe,
    ArrowRight,
} from "lucide-react";
import { IoIosPeople } from "react-icons/io";

const About = () => {
    const achievements = [
        { number: "Education support", title: "Lives Impacted", icon: Users },
        { number: "Health Care", title: "Active Volunteers", icon: HandHeart },
        { number: "Enviroment", title: "Projects Completed", icon: Award },
        { number: "Social Welfare", title: "Communities Served", icon: Globe },
        { number: "Shelter Support", title: "Communities Served", icon: Globe },
        { number: "Humanitarian Aid", title: "Communities Served", icon: Globe },
    ];

    return (
        <main className="w-full flex flex-col items-center">
            {/* About Content */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900"
                            alt="NGO volunteers helping people"
                            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
                        />

                        <div className="absolute -bottom-6 -right-4 md:right-[-20px] bg-yellow-400 p-6 rounded-2xl shadow-xl">
                            <h3 className="text-3xl font-bold text-green-950">10+</h3>
                            <p className="text-sm font-semibold text-green-950">
                                Years of Service
                            </p>
                        </div>
                    </div>

                    <div>
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Who We Are
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                            Making The World A Better Place For Everyone
                        </h2>

                        <p className="text-gray-600 leading-8 mb-5">
                            Our NGO works to improve the lives of underprivileged people.
                            We believe every person deserves education, healthcare,
                            equality and opportunities.
                        </p>

                        <p className="text-gray-600 leading-8 mb-8">
                            Through community programs, donations and volunteer support,
                            we are building a stronger and more compassionate society.
                        </p>

                        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition">
                            Learn More <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="bg-green-50 w-full py-16 px-6">
                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4">
                    {achievements.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl py-4 text-center shadow-sm hover:shadow-xl transition"
                            >
                                <div className="bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-4">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-[16px] font-bold text-green-800">
                                    {item.number}
                                </h3>

                                <p className="text-gray-500 mt-2">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className=" w-[90%] grid grid-cols-5 rounded-2xl bg-blue-600 h-30">
                <div className=" w-1/2 bg-amber-600 ">
                    <h6>
                        our effect
                    </h6>
                    <p>
                        milakar jeevan badalenage
                    </p>
                </div>
                <div className=" bg-amber-400 gap-3 w-3/5 grid grid-cols-4 ">
                    <div>
                        <i>
                            <IoIosPeople size={21} />
                        </i>
                        <span>
                            10,000+
                        </span>
                        <span>
                            benifite
                        </span>
                    </div>
                    <div>
                        <i>
                            <IoIosPeople size={21} />
                        </i>
                        <span>
                            10,000+
                        </span>
                        <span>
                            benifite
                        </span>
                    </div>
                    <div>
                        <i>
                            <IoIosPeople size={21} />
                        </i>
                        <span>
                            10,000+
                        </span>
                        <span>
                            benifite
                        </span>
                    </div>
                    <div>
                        <i>
                            <IoIosPeople size={21} />
                        </i>
                        <span>
                            10,000+
                        </span>
                        <span>
                            benifite
                        </span>
                    </div>
                </div>
            </div>

            {/* Mission Vision */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                        Our Purpose
                    </span>
                    <h2 className="text-4xl font-bold mt-3">
                        Mission & Vision
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="p-10 bg-green-700 rounded-3xl text-white">
                        <Target size={45} className="text-yellow-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-green-100 leading-8">
                            To empower underprivileged communities through education,
                            healthcare, awareness and sustainable development.
                        </p>
                    </div>

                    <div className="p-10 bg-gray-900 rounded-3xl text-white">
                        <Eye size={45} className="text-yellow-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-8">
                            To create a world where everyone has equal opportunities,
                            dignity and access to a better quality of life.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
