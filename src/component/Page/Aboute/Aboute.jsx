
import {
    ArrowRight,
} from "lucide-react";
import { IoIosPeople } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa6";
// 
import { BiSolidGraduation } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";

const About = () => {
    const achievements = [
        { number: "Education support", title: "Lives Impacted", icon: <BiSolidGraduation className="text-black" size={35}/> },
        { number: "Health Care", title: "Active Volunteers", icon: <MdHealthAndSafety className="text-green-500" size={35}/> },
        { number: "Enviroment", title: "Projects Completed", icon: <PiPlantFill className="text-green-600" size={35}/> },
        { number: "Social Welfare", title: "Communities Served", icon: <IoIosPeople className=" text-blue-500" size={35}/> },
        { number: "Shelter Support", title: "Communities Served", icon: <FaHome className=" text-orange-800" size={34}/> },
        { number: "Humanitarian Aid", title: "Communities Served", icon: <RiHandHeartFill className=" text-red-600" size={35}/> },
    ];

    return (
        <main className="w-full flex flex-col items-center">
            {/* About Content */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div className="relative">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/041/760/876/large_2x/ngo-or-non-governmental-organization-illustration-to-serve-specific-social-and-political-needs-in-flat-cartoon-background-vector.jpg"
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
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl py-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition"
                            >
                                <i>
                                    {item.icon}
                                </i>
                                <h3 className="text-[16px] font-bold text-green-800">
                                    {item.number}
                                </h3>

                                <p className="text-gray-500 mt-2">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className=" w-[90%] gradiant text-white flex rounded-2xl bg-blue-600 py-2">
                <div className=" w-[30%]">
                    <h6 className=" text-xl text-green-500 font-bold pl-5">
                        our effect
                    </h6>
                    <p className=" text-2xl text-white font-bold pl-5">
                        milakar jeevan badalenage
                    </p>
                </div>
                <div className=" w-[70%] gap-3 grid grid-cols-4 px-5">
                    <div className=" border-l border-r border-white flex items-center flex-col justify-center">
                        <i>
                            <IoIosPeople size={35} className="text-green-500" />
                        </i>
                        <span className=" font-bold text-2xl">
                            10,000+
                        </span>
                        <span>
                            Benifite
                        </span>
                    </div>
                    <div className=" border-r border-white flex items-center flex-col justify-center">
                        <i>
                            <GoHeartFill size={30} className="text-green-500" />
                        </i>
                        <span className=" font-bold text-2xl">
                            500+
                        </span>
                        <span>
                            Like
                        </span>
                    </div>
                    <div className=" border-r border-white flex items-center flex-col justify-center">
                        <i>
                            <FaLocationDot size={30} className="text-green-500" />
                        </i>
                        <span className=" font-bold text-2xl">
                            50+
                        </span>
                        <span>
                            location distic
                        </span>
                    </div>
                    <div className="border-r border-white flex items-center flex-col justify-center">
                        <i>
                            <FaWineGlass size={32} className="text-green-500" />
                        </i>
                        <span className=" font-bold text-2xl">
                            100%
                        </span>
                        <span>
                            result
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
