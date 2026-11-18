
import { useState } from "react";
import {
    Camera,
    X,
    ChevronLeft,
    ChevronRight,
    Heart,
    Image as ImageIcon,
} from "lucide-react";

const galleryData = [
    {
        id: 1,
        title: "Education for Every Child",
        category: "Education",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
    },
    {
        id: 2,
        title: "Healthcare Awareness Camp",
        category: "Healthcare",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000",
    },
    {
        id: 3,
        title: "Food Distribution Drive",
        category: "Community",
        image:
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1000",
    },
    {
        id: 4,
        title: "Women Empowerment Program",
        category: "Women",
        image:
            "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1000",
    },
    {
        id: 5,
        title: "Tree Plantation Campaign",
        category: "Environment",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",
    },
    {
        id: 6,
        title: "Community Volunteer Activity",
        category: "Community",
        image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000",
    },
    {
        id: 7,
        title: "Children Learning Together",
        category: "Education",
        image:
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000",
    },
    {
        id: 8,
        title: "Medical Support Initiative",
        category: "Healthcare",
        image:
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1000",
    },
    {
        id: 9,
        title: "Building a Greener Future",
        category: "Environment",
        image:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000",
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

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = galleryData.filter((item) => {
        return (
            activeCategory === "All" ||
            item.category === activeCategory
        );
    });

    const currentIndex = filteredImages.findIndex(
        (item) => item.id === selectedImage?.id
    );

    const showPrevious = () => {
        const index =
            (currentIndex - 1 + filteredImages.length) %
            filteredImages.length;

        setSelectedImage(filteredImages[index]);
    };

    const showNext = () => {
        const index =
            (currentIndex + 1) % filteredImages.length;

        setSelectedImage(filteredImages[index]);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 py-24">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-emerald-100">
                        <Camera size={18} />
                        Our Memories • Our Impact
                    </span>

                    <h1 className="mt-7 text-4xl font-extrabold text-white md:text-6xl">
                        Our <span className="text-emerald-300">Gallery</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50 md:text-lg">
                        Every picture tells a story of hope, kindness and
                        positive change. Explore the moments that inspire our mission.
                    </p>

                    <a
                        href="#gallery"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
                    >
                        Explore Gallery <ImageIcon size={19} />
                    </a>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <span className="font-bold uppercase tracking-widest text-emerald-600">
                        Moments That Matter
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                        A Picture of Our Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
                        From education and healthcare to community development,
                        every moment reflects our commitment to making a difference.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-10">
                        <div>
                            <h3 className="text-3xl font-extrabold text-emerald-700">
                                {galleryData.length}+
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Gallery Photos</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-extrabold text-emerald-700">
                                5
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Categories</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-extrabold text-emerald-700">
                                100+
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Happy Moments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section id="gallery" className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-10 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Photo Collection
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Explore Our Activities
                        </h2>
                    </div>

                    {/* CATEGORY FILTER */}
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setSelectedImage(null);
                                }}
                                className={`rounded-full px-6 py-3 text-sm font-bold transition ${activeCategory === category
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                                    : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-500 hover:text-emerald-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* IMAGE GRID */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredImages.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedImage(item)}
                                className="group relative h-72 overflow-hidden rounded-3xl text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100" />

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                    <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-3 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                                        <Camera size={16} />
                                        View Image
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <p className="py-12 text-center text-gray-500">
                            No images found.
                        </p>
                    )}
                </div>
            </section>

            {/* LIGHTBOX */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                        aria-label="Close image"
                    >
                        <X size={26} />
                    </button>

                    {filteredImages.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrevious();
                                }}
                                className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                                className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
                                aria-label="Next image"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}

                    <div
                        className="w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="mx-auto max-h-[75vh] w-full rounded-2xl object-contain"
                        />

                        <div className="mt-5 text-center text-white">
                            <span className="text-sm font-semibold text-emerald-300">
                                {selectedImage.category}
                            </span>

                            <h3 className="mt-2 text-xl font-bold md:text-2xl">
                                {selectedImage.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                {currentIndex + 1} / {filteredImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-500 px-8 py-14 text-center text-white md:px-16">
                    <Heart size={38} className="mx-auto" />

                    <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
                        Be a Part of Our Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
                        Every helping hand creates a new story. Join us and
                        become a part of our mission to make the world better.
                    </p>

                    <a
                        href="/volunteer"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                        Join Our Mission <Heart size={18} />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Gallery;
