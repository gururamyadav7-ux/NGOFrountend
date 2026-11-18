
import { useState } from "react";
import {
    Search,
    CalendarDays,
    Clock,
    ArrowRight,
    Heart,
    Newspaper,
    Mail,
    Send,
    BookOpen,
} from "lucide-react";

const blogs = [
    {
        id: 1,
        title: "Bringing Education to Every Child",
        category: "Education",
        date: "15 November 2026",
        readTime: "5 min read",
        author: "NGO Team",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
        description:
            "We are working to make quality education accessible to children from underserved communities.",
    },
    {
        id: 2,
        title: "Free Health Camp for Rural Families",
        category: "Healthcare",
        date: "10 November 2026",
        readTime: "4 min read",
        author: "Health Team",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900",
        description:
            "Our healthcare initiative brings medical support and awareness to families in rural areas.",
    },
    {
        id: 3,
        title: "Helping Families Through Food Distribution",
        category: "Community",
        date: "05 November 2026",
        readTime: "3 min read",
        author: "Volunteer Team",
        image:
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900",
        description:
            "Our volunteers are helping families by distributing essential food supplies.",
    },
    {
        id: 4,
        title: "Women Empowerment: Creating Opportunities",
        category: "Women",
        date: "28 October 2026",
        readTime: "6 min read",
        author: "NGO Team",
        image:
            "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=900",
        description:
            "We support women through skill development, education and employment opportunities.",
    },
    {
        id: 5,
        title: "Planting Trees for a Greener Future",
        category: "Environment",
        date: "20 October 2026",
        readTime: "4 min read",
        author: "Green Team",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
        description:
            "Our community tree plantation campaign encourages people to protect the environment.",
    },
    {
        id: 6,
        title: "Volunteers Making a Real Difference",
        category: "Community",
        date: "12 October 2026",
        readTime: "5 min read",
        author: "Volunteer Team",
        image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900",
        description:
            "Meet the volunteers who dedicate their time to building a better and stronger community.",
    },
];

const categories = [
    "All",
    "Education",
    "Healthcare",
    "Community",
    "Women",
    "Environment",
];

const NewsBlog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [email, setEmail] = useState("");

    const filteredBlogs = blogs.filter((blog) => {
        const matchCategory =
            activeCategory === "All" ||
            blog.category === activeCategory;

        const matchSearch =
            blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.description.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) return;

        alert("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 py-24">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-emerald-100">
                        <Newspaper size={17} />
                        News • Stories • Updates
                    </span>

                    <h1 className="mt-7 text-4xl font-extrabold text-white md:text-6xl">
                        News & <span className="text-emerald-300">Blog</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50 md:text-lg">
                        Discover our latest activities, inspiring stories,
                        community updates and the positive impact we are creating together.
                    </p>

                    <a
                        href="#latest-news"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
                    >
                        Explore Stories <ArrowRight size={19} />
                    </a>
                </div>
            </section>

            {/* FEATURED NEWS */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                            <BookOpen size={25} />
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                                Featured Story
                            </p>
                            <h2 className="text-2xl font-extrabold">
                                Story of the Month
                            </h2>
                        </div>
                    </div>

                    <div className="grid overflow-hidden rounded-3xl bg-gray-50 shadow-sm lg:grid-cols-2">
                        <div className="h-72 overflow-hidden lg:h-full">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
                                alt="Children learning together"
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                                Education
                            </span>

                            <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">
                                Every Child Deserves a Better Future
                            </h2>

                            <p className="mt-5 leading-8 text-gray-500">
                                Education is the foundation of a better society.
                                Through our educational initiatives, we aim to
                                provide opportunities and brighter futures for children.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                    <CalendarDays size={17} />
                                    15 November 2026
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={17} />
                                    5 min read
                                </span>
                            </div>

                            <a
                                href="/blog/featured-story"
                                className="mt-8 inline-flex w-fit items-center gap-2 font-bold text-emerald-700 hover:gap-4 transition-all"
                            >
                                Read Full Story <ArrowRight size={19} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* LATEST NEWS */}
            <section id="latest-news" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-10 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Latest Updates
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Latest News & Articles
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Read about our work, campaigns and community stories.
                        </p>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="mx-auto mb-8 max-w-xl">
                        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm focus-within:border-emerald-500">
                            <Search className="text-emerald-600" size={22} />

                            <input
                                type="text"
                                placeholder="Search news and articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent outline-none placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* CATEGORY FILTER */}
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-6 py-3 text-sm font-bold transition ${activeCategory === category
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                                        : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-500 hover:text-emerald-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* BLOG CARDS */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-700 shadow">
                                        {blog.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <CalendarDays size={14} />
                                            {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {blog.readTime}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-xl font-extrabold leading-snug transition group-hover:text-emerald-700">
                                        {blog.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-500">
                                        {blog.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                                        <span className="text-sm font-semibold text-gray-500">
                                            {blog.author}
                                        </span>

                                        <a
                                            href={`/blog/${blog.id}`}
                                            className="flex items-center gap-2 font-bold text-emerald-700 transition hover:gap-4"
                                        >
                                            Read More <ArrowRight size={17} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="py-16 text-center">
                            <Newspaper size={45} className="mx-auto text-gray-300" />
                            <h3 className="mt-4 text-xl font-bold">
                                No Articles Found
                            </h3>
                            <p className="mt-2 text-gray-500">
                                Try another search or category.
                            </p>

                            <button
                                onClick={() => {
                                    setSearch("");
                                    setActiveCategory("All");
                                }}
                                className="mt-5 font-bold text-emerald-700"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-600 p-8 text-white md:p-14">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                <Mail size={28} />
                            </div>

                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Stay Connected With Us
                            </h2>

                            <p className="mt-4 leading-8 text-emerald-50">
                                Subscribe to receive our latest news, inspiring stories
                                and updates about upcoming campaigns.
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                            <label htmlFor="newsletter-email" className="font-semibold">
                                Your Email Address
                            </label>

                            <input
                                id="newsletter-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-emerald-100 focus:border-white"
                            />

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
                            >
                                Subscribe Now <Send size={18} />
                            </button>

                            <p className="text-xs text-emerald-100">
                                We respect your privacy. You can unsubscribe anytime.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-100 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <Heart size={38} className="mx-auto text-emerald-600" />

                    <h2 className="mt-5 text-3xl font-extrabold">
                        Be Part of Our Story
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
                        Join our mission and help us create more inspiring stories
                        and meaningful changes in society.
                    </p>

                    <a
                        href="/volunteer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 font-bold text-white transition hover:bg-emerald-700"
                    >
                        Become a Volunteer <ArrowRight size={19} />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default NewsBlog;
