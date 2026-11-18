
import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Demo submission
        console.log("Contact Form Data:", formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            value: "Your NGO Address, Meerut, Uttar Pradesh, India",
            link: "https://www.google.com/maps/search/?api=1&query=Meerut+Uttar+Pradesh",
        },
        {
            icon: Phone,
            title: "Phone Number",
            value: "+91 98765 43210",
            link: "tel:+919876543210",
        },
        {
            icon: Mail,
            title: "Email Address",
            value: "info@yourngo.org",
            link: "mailto:info@yourngo.org",
        },
        {
            icon: Clock,
            title: "Working Hours",
            value: "Monday - Saturday, 9 AM - 6 PM",
            link: null,
        },
    ];

    const faqs = [
        {
            question: "How can I donate to your NGO?",
            answer:
                "You can visit our Donation page and choose your preferred donation amount and payment method.",
        },
        {
            question: "How can I become a volunteer?",
            answer:
                "Visit our Volunteer page and submit the registration form. Our team will contact you.",
        },
        {
            question: "How can I get information about your programs?",
            answer:
                "You can explore our Programs page or contact our team directly through this form.",
        },
        {
            question: "How long does it take to receive a response?",
            answer:
                "Our team aims to respond to inquiries during working hours as soon as possible.",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 py-24">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-emerald-100">
                        <MessageCircle size={18} />
                        We're Here to Help
                    </span>

                    <h1 className="mt-7 text-4xl font-extrabold text-white md:text-6xl">
                        Contact <span className="text-emerald-300">Us</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50 md:text-lg">
                        Have a question, idea or want to support our mission?
                        We would love to hear from you. Get in touch with our team.
                    </p>

                    <a
                        href="#contact-form"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
                    >
                        Send a Message <ArrowRight size={19} />
                    </a>
                </div>
            </section>

            {/* CONTACT INFORMATION */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-12 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Get In Touch
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            We'd Love to Hear From You
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                            Connect with us through phone, email or visit our office.
                            Our team is always ready to help.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;

                            const content = (
                                <div className="h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                        <Icon size={27} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 break-words text-sm leading-7 text-gray-500">
                                        {item.value}
                                    </p>
                                </div>
                            );

                            return item.link ? (
                                <a
                                    key={index}
                                    href={item.link}
                                    target={item.link.startsWith("http") ? "_blank" : undefined}
                                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={index}>{content}</div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section id="contact-form" className="bg-gray-50 py-20">
                <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div>
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Contact Our Team
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                            Let's Start a Conversation
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            Whether you want to volunteer, partner with us, make
                            a donation or simply learn more about our work, we
                            are here to answer your questions.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                    <CheckCircle size={23} />
                                </div>

                                <div>
                                    <h3 className="font-bold">Quick Response</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Our team will get back to you as soon as possible.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                    <HeartIcon />
                                </div>

                                <div>
                                    <h3 className="font-bold">We Value Your Support</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Every question and suggestion matters to us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="mt-10">
                            <h3 className="font-bold">Follow Us</h3>

                            <div className="mt-5 flex gap-3">
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-600 hover:text-white"
                                >
                                    <IoLogoFacebook size={21} />
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-600 hover:text-white"
                                >
                                    <FaInstagramSquare size={21} />
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-600 hover:text-white"
                                >
                                    <FaLinkedin size={21} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
                        <h3 className="text-2xl font-extrabold">
                            Send Us a Message
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Fill in the form below and we'll contact you.
                        </p>

                        {submitted && (
                            <div className="mt-6 flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
                                <CheckCircle size={20} />
                                Your message has been submitted in this demo.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-emerald-500 focus:bg-white"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-emerald-500 focus:bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-emerald-500 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Subject *
                                </label>

                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-emerald-500 focus:bg-white"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Donation">Donation</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Your Message *
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    required
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-emerald-500 focus:bg-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700"
                            >
                                Send Message <Send size={19} />
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            {/* GOOGLE MAP */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-8 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Find Us
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold">
                            Visit Our Office
                        </h2>

                        <p className="mt-3 text-gray-500">
                            We would be happy to welcome you.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
                        <iframe
                            title="NGO Office Location"
                            src="https://maps.google.com/maps?q=Meerut%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="400"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-12 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            FAQs
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                                    {faq.question}

                                    <span className="text-2xl text-emerald-600 transition group-open:rotate-45">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-gray-100 pt-4 leading-7 text-gray-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

// Small icon component
const HeartIcon = () => (
    <MessageCircle size={23} />
);

export default Contact;
