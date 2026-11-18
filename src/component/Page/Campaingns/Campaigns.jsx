
import { useState } from "react";
import {
    Heart,
    Users,
    ArrowRight,
    MapPin,
    HandHeart,
    Target,
    TrendingUp
} from "lucide-react";

const Campaigns = () => {

    const [category, setCategory] = useState("All");

    const campaigns = [
        {
            id: 1,
            title: "Help Every Child Get Education",
            category: "Education",
            description:
                "Support poor children with school fees, books, uniforms and quality education.",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
            raised: 75000,
            goal: 100000,
            donors: 120,
            location: "Uttar Pradesh, India",
            days: 12
        },
        {
            id: 2,
            title: "Feed Hungry Families",
            category: "Food",
            description:
                "Help provide nutritious meals and food supplies to families in need.",
            image:
                "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900",
            raised: 45000,
            goal: 80000,
            donors: 85,
            location: "Delhi, India",
            days: 8
        },
        {
            id: 3,
            title: "Free Medical Treatment",
            category: "Healthcare",
            description:
                "Raise funds for free medical checkups, medicines and healthcare services.",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
            raised: 90000,
            goal: 150000,
            donors: 210,
            location: "Meerut, India",
            days: 15
        },
        {
            id: 4,
            title: "Save Clean Drinking Water",
            category: "Environment",
            description:
                "Help rural communities get access to clean and safe drinking water.",
            image:
                "https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=900",
            raised: 30000,
            goal: 50000,
            donors: 65,
            location: "Rural India",
            days: 20
        },
        {
            id: 5,
            title: "Support Girl Child Education",
            category: "Education",
            description:
                "Empower young girls with educational resources and learning opportunities.",
            image:
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900",
            raised: 60000,
            goal: 100000,
            donors: 150,
            location: "Uttar Pradesh, India",
            days: 10
        },
        {
            id: 6,
            title: "Emergency Family Support",
            category: "Healthcare",
            description:
                "Support vulnerable families with emergency essentials and medical assistance.",
            image:
                "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900",
            raised: 40000,
            goal: 60000,
            donors: 95,
            location: "India",
            days: 5
        }
    ];

    const categories = [
        "All",
        "Education",
        "Food",
        "Healthcare",
        "Environment"
    ];

    const filteredCampaigns =
        category === "All"
            ? campaigns
            : campaigns.filter((item) => item.category === category);

    const formatAmount = (value) =>
        "₹" + value.toLocaleString("en-IN");

    return (
        <main className="bg-gray-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 py-24 px-6 overflow-hidden">

                <div className="absolute w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl -top-20 right-10" />

                <div className="relative max-w-7xl mx-auto text-center">

                    <span className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-5 py-2 rounded-full text-sm">
                        <Heart size={17} />
                        Support A Cause
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-7 mb-6">
                        Our Campaigns
                        <span className="block text-yellow-400 mt-2">
                            Together We Can Help
                        </span>
                    </h1>

                    <p className="text-green-100 max-w-2xl mx-auto text-lg leading-8">
                        Every donation brings hope and creates a positive
                        difference in someone's life. Explore our campaigns
                        and become a part of the change.
                    </p>

                    <a
                        href="#campaign-list"
                        className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-950 px-8 py-4 rounded-xl font-bold mt-8 transition"
                    >
                        Explore Campaigns
                        <ArrowRight size={20} />
                    </a>

                </div>
            </section>

            {/* Statistics */}
            <section className="relative -mt-10 px-6">

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-7">

                    {[
                        { number: "25+", label: "Active Campaigns", icon: Target },
                        { number: "10K+", label: "People Helped", icon: Users },
                        { number: "₹25L+", label: "Funds Raised", icon: TrendingUp },
                        { number: "5K+", label: "Donors", icon: HandHeart }
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={index} className="text-center">
                                <Icon size={28} className="text-green-700 mx-auto mb-3" />
                                <h3 className="text-2xl md:text-3xl font-bold text-green-800">
                                    {item.number}
                                </h3>
                                <p className="text-gray-500 text-sm mt-2">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </section>

            {/* Campaign Section */}
            <section id="campaign-list" className="py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">
                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Make An Impact
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
                            Explore Our Campaigns
                        </h2>

                        <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-7">
                            Choose a cause that matters to you and help us
                            reach our fundraising goals.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">

                        {categories.map((item) => (

                            <button
                                key={item}
                                onClick={() => setCategory(item)}
                                className={`px-6 py-3 rounded-full font-semibold transition ${category === item
                                        ? "bg-green-700 text-white shadow-lg"
                                        : "bg-white text-gray-600 hover:bg-green-50 border border-gray-200"
                                    }`}
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                    {/* Campaign Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredCampaigns.map((campaign) => {

                            const progress = Math.min(
                                (campaign.raised / campaign.goal) * 100,
                                100
                            );

                            return (
                                <div
                                    key={campaign.id}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >

                                    {/* Image */}
                                    <div className="relative h-60 overflow-hidden">

                                        <img
                                            src={campaign.image}
                                            alt={campaign.title}
                                            className="w-full h-full object-cover hover:scale-110 transition duration-700"
                                        />

                                        <span className="absolute top-5 left-5 bg-green-700 text-white px-4 py-2 rounded-full text-xs font-bold">
                                            {campaign.category}
                                        </span>

                                        <span className="absolute top-5 right-5 bg-white text-green-800 px-4 py-2 rounded-full text-xs font-bold">
                                            {campaign.days} Days Left
                                        </span>

                                    </div>

                                    {/* Content */}
                                    <div className="p-7">

                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {campaign.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm leading-7 mb-5">
                                            {campaign.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                                            <MapPin size={16} className="text-green-700" />
                                            {campaign.location}
                                        </div>

                                        {/* Progress */}
                                        <div className="flex justify-between items-center text-sm mb-3">
                                            <span className="text-gray-500">
                                                Raised Amount
                                            </span>

                                            <span className="font-bold text-green-700">
                                                {progress.toFixed(0)}%
                                            </span>
                                        </div>

                                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transition-all"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>

                                        {/* Amount */}
                                        <div className="flex justify-between mt-5 mb-6">

                                            <div>
                                                <p className="text-gray-400 text-xs">
                                                    Raised
                                                </p>
                                                <h4 className="font-bold text-green-700 text-lg">
                                                    {formatAmount(campaign.raised)}
                                                </h4>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-gray-400 text-xs">
                                                    Goal
                                                </p>
                                                <h4 className="font-bold text-gray-900 text-lg">
                                                    {formatAmount(campaign.goal)}
                                                </h4>
                                            </div>

                                        </div>

                                        {/* Donors */}
                                        <div className="flex justify-between items-center border-t border-gray-100 pt-5 mb-6">

                                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                <Users size={17} />
                                                {campaign.donors} Donors
                                            </div>

                                            <span className="text-green-700 text-xs font-bold">
                                                Support Needed
                                            </span>

                                        </div>

                                        <button
                                            onClick={() => {
                                                window.location.href =
                                                    `/donation?campaign=${campaign.id}`;
                                            }}
                                            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition"
                                        >
                                            <Heart size={19} />
                                            Donate Now
                                            <ArrowRight size={18} />
                                        </button>

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    {filteredCampaigns.length === 0 && (
                        <p className="text-center text-gray-500 py-10">
                            No campaigns found.
                        </p>
                    )}

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-20">

                <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-950 to-green-700 rounded-3xl p-10 md:p-16 text-center">

                    <HandHeart size={48} className="text-yellow-400 mx-auto mb-6" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Be The Change You Want To See
                    </h2>

                    <p className="text-green-100 max-w-2xl mx-auto mb-9">
                        Your contribution can bring education, food,
                        healthcare and happiness to people in need.
                    </p>

                    <a
                        href="/donation"
                        className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-950 px-9 py-4 rounded-xl font-bold transition"
                    >
                        Donate Today
                        <Heart size={20} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Campaigns;
