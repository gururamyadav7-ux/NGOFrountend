import { useState } from "react";
import {
    Heart,
    HandHeart,
    ShieldCheck,
    Users,
    GraduationCap,
    Utensils,
    ArrowRight,
    CreditCard,
    Smartphone,
    Wallet,
    CheckCircle
} from "lucide-react";

const Donation = () => {
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState("");
    const [payment, setPayment] = useState("upi");

    const amounts = [500, 1000, 2000, 5000, 10000, 20000];

    const selectedAmount = customAmount
        ? Number(customAmount)
        : amount;

    const handleDonate = (e) => {
        e.preventDefault();

        if (!selectedAmount || selectedAmount <= 0) {
            alert("Please select a valid donation amount");
            return;
        }

        alert(
            `Donation amount: ₹${selectedAmount}\nPayment method: ${payment}\nConnect payment gateway to continue.`
        );
    };

    return (
        <main className="bg-gray-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 py-24 px-6 overflow-hidden">

                <div className="absolute w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full -top-20 right-10" />

                <div className="relative max-w-7xl mx-auto text-center">

                    <span className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-5 py-2 rounded-full text-sm">
                        <Heart size={16} />
                        Make A Difference
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-7 mb-6">
                        Your Donation Can
                        <span className="block text-yellow-400 mt-2">
                            Change A Life
                        </span>
                    </h1>

                    <p className="text-green-100 max-w-2xl mx-auto text-lg leading-8">
                        Your support helps us provide education, food,
                        healthcare and hope to people in need.
                    </p>

                </div>
            </section>

            {/* Donation Form */}
            <section className="py-20 px-6">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">

                    {/* Left Content */}
                    <div className="lg:col-span-2">

                        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">
                            Support Our Mission
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                            Every Contribution Matters
                        </h2>

                        <p className="text-gray-500 leading-8 mb-9">
                            Your generosity helps us reach more families,
                            educate children and provide essential support
                            to communities.
                        </p>

                        {/* Impact Cards */}
                        <div className="space-y-5">

                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Education For Children",
                                    desc: "Support learning materials and education."
                                },
                                {
                                    icon: Utensils,
                                    title: "Food For Families",
                                    desc: "Help provide nutritious meals."
                                },
                                {
                                    icon: Users,
                                    title: "Community Support",
                                    desc: "Help families build a better future."
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div key={index} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm">

                                        <div className="bg-green-100 text-green-700 p-4 rounded-xl">
                                            <Icon size={26} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        {/* Trust */}
                        <div className="flex gap-3 items-center mt-9 text-green-700">
                            <ShieldCheck size={28} />
                            <div>
                                <h4 className="font-bold">Secure Donation</h4>
                                <p className="text-gray-500 text-sm">
                                    Your information should be protected.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Donation Form */}
                    <div className="lg:col-span-3">

                        <form
                            onSubmit={handleDonate}
                            className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                        >

                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                                    <HandHeart size={28} />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Make A Donation
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        Choose your contribution
                                    </p>
                                </div>
                            </div>

                            {/* Amount Selection */}
                            <label className="font-bold text-gray-800">
                                Select Donation Amount
                            </label>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 mb-5">

                                {amounts.map((value) => (
                                    <button
                                        type="button"
                                        key={value}
                                        onClick={() => {
                                            setAmount(value);
                                            setCustomAmount("");
                                        }}
                                        className={`py-4 rounded-xl border-2 font-bold transition ${amount === value && !customAmount
                                            ? "border-green-700 bg-green-50 text-green-700"
                                            : "border-gray-200 text-gray-600 hover:border-green-500"
                                            }`}
                                    >
                                        ₹{value.toLocaleString("en-IN")}
                                    </button>
                                ))}

                            </div>

                            {/* Custom Amount */}
                            <label className="font-bold text-gray-800">
                                Enter Custom Amount
                            </label>

                            <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 mt-3 mb-8 focus-within:border-green-600">
                                <span className="text-xl font-bold text-green-700">₹</span>

                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Enter amount"
                                    value={customAmount}
                                    onChange={(e) => setCustomAmount(e.target.value)}
                                    className="w-full p-4 outline-none"
                                />
                            </div>

                            {/* Donor Details */}
                            <h3 className="font-bold text-xl mb-5">
                                Personal Information
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-5">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="border border-gray-200 rounded-xl p-4 outline-none focus:border-green-600"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="border border-gray-200 rounded-xl p-4 outline-none focus:border-green-600"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="border border-gray-200 rounded-xl p-4 outline-none focus:border-green-600"
                                />

                                <input
                                    type="text"
                                    placeholder="City"
                                    className="border border-gray-200 rounded-xl p-4 outline-none focus:border-green-600"
                                />

                            </div>

                            {/* Payment Method */}
                            <h3 className="font-bold text-xl mt-9 mb-5">
                                Payment Method
                            </h3>

                            <div className="grid sm:grid-cols-3 gap-4">

                                {[
                                    { id: "upi", name: "UPI", icon: Smartphone },
                                    { id: "card", name: "Card", icon: CreditCard },
                                    { id: "netbanking", name: "Net Banking", icon: Wallet }
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <button
                                            type="button"
                                            key={item.id}
                                            onClick={() => setPayment(item.id)}
                                            className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition ${payment === item.id
                                                ? "border-green-700 bg-green-50 text-green-700"
                                                : "border-gray-200 text-gray-500"
                                                }`}
                                        >
                                            <Icon size={27} />
                                            <span className="font-semibold">{item.name}</span>
                                        </button>
                                    );
                                })}

                            </div>

                            {/* Total */}
                            <div className="bg-green-50 rounded-2xl p-5 mt-9 flex justify-between items-center">

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Total Donation
                                    </p>
                                    <h3 className="text-3xl font-bold text-green-800">
                                        ₹{(selectedAmount || 0).toLocaleString("en-IN")}
                                    </h3>
                                </div>

                                <CheckCircle className="text-green-700" size={32} />

                            </div>

                            {/* Donate Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-5 rounded-xl mt-7 flex items-center justify-center gap-3 transition shadow-lg shadow-green-700/20"
                            >
                                <Heart size={22} />
                                Donate Now
                                <ArrowRight size={20} />
                            </button>

                            <p className="text-center text-gray-400 text-xs mt-5">
                                <ShieldCheck size={14} className="inline mr-1" />
                                Secure payment processing will be provided by the payment gateway.
                            </p>

                        </form>

                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-green-950 py-16 px-6 text-center">

                <Heart className="text-yellow-400 mx-auto mb-5" size={40} />

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    Be Someone's Reason To Smile
                </h2>

                <p className="text-green-100 max-w-xl mx-auto">
                    Together we can create hope, opportunity and a better future.
                </p>

            </section>

        </main>
    );
};

export default Donation;
