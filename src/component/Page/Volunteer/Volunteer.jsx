
import { useState } from "react";
import {
    Heart,
    Users,
    HandHeart,
    GraduationCap,
    Stethoscope,
    Leaf,
    Clock,
    Award,
    ArrowRight,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

const Volunteer = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        availability: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Volunteer Details:", formData);

        alert("Thank you! Your volunteer application has been submitted.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            interest: "",
            availability: "",
            message: ""
        });
    };

    const opportunities = [
        {
            icon: GraduationCap,
            title: "Education Volunteer",
            description: "Help children learn, grow and build a brighter future.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Stethoscope,
            title: "Healthcare Volunteer",
            description: "Support medical camps and community health programs.",
            color: "bg-red-100 text-red-600"
        },
        {
            icon: Leaf,
            title: "Environment Volunteer",
            description: "Participate in tree plantation and cleanliness drives.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: HandHeart,
            title: "Community Volunteer",
            description: "Help needy families through social welfare activities.",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <main className="bg-white text-gray-800">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 py-24 px-6 overflow-hidden">

                <div className="absolute w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full -top-20 right-10" />

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-5 py-2 rounded-full text-sm">
                            <Heart size={16} />
                            Make A Difference
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-7 mb-6 leading-tight">
                            Become A
                            <span className="block text-yellow-400">
                                Volunteer
                            </span>
                        </h1>

                        <p className="text-green-100 text-lg leading-8 mb-8">
                            Join our team of passionate volunteers and help us
                            create a better world through kindness, compassion
                            and community service.
                        </p>

                        <a
                            href="#volunteer-form"
                            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-950 px-8 py-4 rounded-xl font-bold transition"
                        >
                            Join Our Team
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000"
                            alt="NGO volunteers helping people"
                            className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
                        />

                        <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <Users className="text-green-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl">500+</h3>
                                    <p className="text-gray-500 text-sm">Active Volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-6">

                <div className="max-w-3xl mx-auto text-center">

                    <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                        Join The Movement
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Small Actions Create Big Changes
                    </h2>

                    <p className="text-gray-500 leading-8">
                        You don't need special skills to make a difference.
                        Your time, energy and kindness can transform lives.
                        Become part of our mission and help communities grow.
                    </p>

                </div>
            </section>

            {/* Opportunities */}
            <section className="bg-green-50 py-20 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Volunteer Opportunities
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4">
                            Find Your Way To Help
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

                        {opportunities.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
                                >

                                    <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7 text-sm">
                                        {item.description}
                                    </p>

                                    <a
                                        href="#volunteer-form"
                                        className="inline-flex items-center gap-2 text-green-700 font-bold mt-6 hover:gap-4 transition-all"
                                    >
                                        Apply Now <ArrowRight size={17} />
                                    </a>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900"
                            alt="Community volunteering"
                            className="w-full h-[430px] object-cover rounded-3xl shadow-xl"
                        />
                    </div>

                    <div>

                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Why Volunteer With Us
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
                            Be A Part Of Something Meaningful
                        </h2>

                        <div className="space-y-6">

                            {[
                                {
                                    icon: Heart,
                                    title: "Make A Real Impact",
                                    desc: "Help improve the lives of people who need support."
                                },
                                {
                                    icon: Users,
                                    title: "Meet Amazing People",
                                    desc: "Connect with people who share your passion."
                                },
                                {
                                    icon: Award,
                                    title: "Learn New Skills",
                                    desc: "Develop leadership, teamwork and communication."
                                },
                                {
                                    icon: Clock,
                                    title: "Flexible Opportunities",
                                    desc: "Choose volunteering activities that fit your schedule."
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div key={index} className="flex gap-4">

                                        <div className="bg-green-100 text-green-700 w-12 h-12 shrink-0 rounded-xl flex items-center justify-center">
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm mt-2">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>
            </section>

            {/* Volunteer Form */}
            <section id="volunteer-form" className="bg-green-50 py-24 px-6">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">

                    {/* Form Information */}
                    <div className="lg:col-span-2">

                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Get Involved
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                            Become A Volunteer Today
                        </h2>

                        <p className="text-gray-500 leading-8 mb-9">
                            Fill out the application form and our team will
                            contact you with the next steps.
                        </p>

                        <div className="space-y-5">

                            <div className="flex gap-4 items-center">
                                <div className="bg-green-100 p-3 rounded-xl text-green-700">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email Us</p>
                                    <p className="font-bold">info@yourngo.org</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="bg-green-100 p-3 rounded-xl text-green-700">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Call Us</p>
                                    <p className="font-bold">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="bg-green-100 p-3 rounded-xl text-green-700">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="font-bold">India</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-7 md:p-10 rounded-3xl shadow-xl"
                        >

                            <h3 className="text-2xl font-bold mb-8">
                                Volunteer Registration
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-5">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600"
                                />

                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Your City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600"
                                />

                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600 bg-white"
                                >
                                    <option value="">Select Interest</option>
                                    <option value="Education">Education</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Environment">Environment</option>
                                    <option value="Food Distribution">Food Distribution</option>
                                    <option value="Community Service">Community Service</option>
                                </select>

                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600 bg-white"
                                >
                                    <option value="">Availability</option>
                                    <option value="Weekdays">Weekdays</option>
                                    <option value="Weekends">Weekends</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Flexible">Flexible</option>
                                </select>

                            </div>

                            <textarea
                                name="message"
                                placeholder="Tell us why you want to volunteer..."
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-green-600 mt-5 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-5 rounded-xl mt-6 flex items-center justify-center gap-3 transition"
                            >
                                Submit Application
                                <ArrowRight size={20} />
                            </button>

                            <p className="text-center text-gray-400 text-xs mt-5">
                                By submitting, you agree to be contacted regarding volunteering.
                            </p>

                        </form>
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-950 to-green-700 rounded-3xl p-10 md:p-16 text-center">

                    <Heart className="text-yellow-400 mx-auto mb-6" size={45} />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Together We Can Change Lives
                    </h2>

                    <p className="text-green-100 max-w-2xl mx-auto mb-8">
                        Your time is valuable. Give a little of it to make
                        someone's future brighter.
                    </p>

                    <a
                        href="#volunteer-form"
                        className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-950 px-9 py-4 rounded-xl font-bold transition"
                    >
                        Join Our Mission
                        <ArrowRight size={20} />
                    </a>

                </div>
            </section>

        </main>
    );
};

export default Volunteer;
