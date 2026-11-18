
import {
    GraduationCap,
    HeartPulse,
    Utensils,
    Leaf,
    Users,
    Baby,
    ArrowUpRight,
    Heart,
    HandHeart,
    MapPin
} from "lucide-react";

const OurPrograms = () => {

    const programs = [
        {
            title: "Education For Everyone",
            category: "Education",
            description:
                "Providing free education, books, scholarships and learning resources to underprivileged children.",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            icon: GraduationCap,
            color: "bg-blue-100 text-blue-600",
            status: "Ongoing",
            location: "Rural Communities"
        },
        {
            title: "Healthcare For All",
            category: "Healthcare",
            description:
                "Organizing free medical camps, health checkups and awareness programs for needy families.",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
            icon: HeartPulse,
            color: "bg-red-100 text-red-600",
            status: "Ongoing",
            location: "Local Communities"
        },
        {
            title: "Food For Everyone",
            category: "Food Support",
            description:
                "Distributing healthy meals and essential food supplies to poor and homeless families.",
            image:
                "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
            icon: Utensils,
            color: "bg-orange-100 text-orange-600",
            status: "Ongoing",
            location: "Community Centers"
        },
        {
            title: "Green Earth Mission",
            category: "Environment",
            description:
                "Promoting tree plantation, environmental awareness and clean surroundings.",
            image:
                "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
            icon: Leaf,
            color: "bg-green-100 text-green-600",
            status: "Ongoing",
            location: "Schools & Villages"
        },
        {
            title: "Women Empowerment",
            category: "Empowerment",
            description:
                "Providing vocational training, skill development and employment opportunities for women.",
            image:
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
            icon: Users,
            color: "bg-purple-100 text-purple-600",
            status: "Ongoing",
            location: "Community Centers"
        },
        {
            title: "Child Welfare Program",
            category: "Child Welfare",
            description:
                "Supporting children's health, safety, education and overall development.",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
            icon: Baby,
            color: "bg-pink-100 text-pink-600",
            status: "Ongoing",
            location: "Schools & Communities"
        }
    ];

    return (
        <main className="bg-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 py-24 px-6 overflow-hidden">

                <div className="absolute w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full -top-20 right-10" />

                <div className="relative max-w-7xl mx-auto text-center">

                    <span className="inline-block bg-white/10 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold">
                        Our Initiatives
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-7 mb-6">
                        Our Programs
                        <span className="block text-yellow-400 mt-2">
                            Creating A Better Tomorrow
                        </span>
                    </h1>

                    <p className="text-green-100 max-w-2xl mx-auto text-lg leading-8">
                        Explore our initiatives designed to empower communities,
                        support families and build a brighter future for everyone.
                    </p>

                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto text-center">

                    <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                        What We Do
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Programs That Make A Difference
                    </h2>

                    <p className="text-gray-500 max-w-3xl mx-auto leading-8">
                        We work across different sectors to improve lives.
                        Every program is designed to create meaningful,
                        sustainable and positive change.
                    </p>

                </div>
            </section>

            {/* Programs Grid */}
            <section className="pb-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Explore Our Programs
                        </h2>

                        <span className="text-green-700 font-semibold">
                            {programs.length} Programs
                        </span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {programs.map((program, index) => {

                            const Icon = program.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >

                                    {/* Image */}
                                    <div className="relative overflow-hidden h-60">

                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        />

                                        <span className="absolute top-5 left-5 bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full">
                                            {program.status}
                                        </span>

                                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-lg">
                                            <Icon className="text-green-700" size={25} />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-7">

                                        <span className="text-green-700 text-xs font-bold uppercase tracking-widest">
                                            {program.category}
                                        </span>

                                        <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-4 group-hover:text-green-700 transition">
                                            {program.title}
                                        </h3>

                                        <p className="text-gray-500 leading-7 text-sm mb-6">
                                            {program.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                                            <MapPin size={17} className="text-green-700" />
                                            {program.location}
                                        </div>

                                        <button className="w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                                            Explore Program
                                            <ArrowUpRight size={19} />
                                        </button>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* Impact Section */}
            <section className="bg-green-50 py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Our Impact
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4">
                            Together We Are Stronger
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {[
                            ["10K+", "Lives Impacted"],
                            ["500+", "Children Educated"],
                            ["100+", "Projects Completed"],
                            ["50+", "Active Volunteers"]
                        ].map(([number, title], index) => (

                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-green-700">
                                    {number}
                                </h3>

                                <p className="text-gray-500 mt-3 text-sm">
                                    {title}
                                </p>

                            </div>

                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-950 to-green-700 rounded-3xl p-10 md:p-16 text-center">

                    <HandHeart size={48} className="text-yellow-400 mx-auto mb-6" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Be Part Of Our Mission
                    </h2>

                    <p className="text-green-100 max-w-2xl mx-auto mb-9 leading-8">
                        Your support can help us expand our programs and
                        bring hope to more people.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <button className="bg-yellow-400 hover:bg-yellow-300 text-green-950 px-8 py-4 rounded-xl font-bold transition">
                            Donate Now
                        </button>

                        <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-bold transition flex items-center gap-2">
                            <Heart size={19} />
                            Join As Volunteer
                        </button>

                    </div>

                </div>
            </section>

        </main>
    );
};

export default OurPrograms;
