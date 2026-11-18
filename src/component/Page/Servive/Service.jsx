
import {
    GraduationCap,
    HeartPulse,
    Utensils,
    Home,
    Droplets,
    Leaf,
    Users,
    Baby,
    ArrowUpRight,
    HandHeart,
} from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: GraduationCap,
            title: "Education Support",
            description:
                "Providing quality education, books, scholarships and learning opportunities to underprivileged children.",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: HeartPulse,
            title: "Healthcare Services",
            description:
                "Organizing free health checkups, medical camps and healthcare awareness programs.",
            color: "bg-red-100 text-red-600",
        },
        {
            icon: Utensils,
            title: "Food Distribution",
            description:
                "Helping needy families by providing nutritious meals and essential food supplies.",
            color: "bg-orange-100 text-orange-600",
        },
        {
            icon: Home,
            title: "Shelter Support",
            description:
                "Supporting homeless people with safe shelter, clothing and basic living facilities.",
            color: "bg-purple-100 text-purple-600",
        },
        {
            icon: Droplets,
            title: "Clean Water",
            description:
                "Working to provide clean drinking water and improve sanitation in rural communities.",
            color: "bg-cyan-100 text-cyan-600",
        },
        {
            icon: Leaf,
            title: "Environment Protection",
            description:
                "Promoting tree plantation, cleanliness drives and environmental awareness.",
            color: "bg-green-100 text-green-600",
        },
        {
            icon: Baby,
            title: "Child Welfare",
            description:
                "Protecting children's rights and supporting their health, education and development.",
            color: "bg-pink-100 text-pink-600",
        },
        {
            icon: Users,
            title: "Women Empowerment",
            description:
                "Providing skill development, training and employment opportunities for women.",
            color: "bg-yellow-100 text-yellow-700",
        },
    ];

    return (
        <main className="bg-white">
            {/* Services Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Our Activities
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
                            We Work For A Better Tomorrow
                        </h2>

                        <p className="text-gray-500 leading-7">
                            Our services focus on building stronger communities and
                            creating equal opportunities for everyone.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div
                                        className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition`}
                                    >
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7 text-sm mb-7">
                                        {service.description}
                                    </p>

                                    <button className="flex items-center gap-2 text-green-700 font-bold text-sm group-hover:gap-4 transition-all">
                                        Learn More
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="bg-green-50 py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div>
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Our Impact
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                            Every Small Help Creates A Big Difference
                        </h2>

                        <p className="text-gray-600 leading-8 mb-8">
                            Together, we can support families, educate children,
                            improve healthcare and build a stronger society.
                            Your contribution can change someone's life.
                        </p>

                        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition flex items-center gap-3">
                            <HandHeart size={21} />
                            Support Our Work
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            ["10K+", "People Helped"],
                            ["500+", "Children Educated"],
                            ["100+", "Medical Camps"],
                            ["50+", "Active Volunteers"],
                        ].map(([number, title], index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-7 shadow-sm text-center"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-green-700">
                                    {number}
                                </h3>
                                <p className="text-gray-500 mt-3 text-sm">{title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Services;
