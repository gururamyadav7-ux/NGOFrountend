

import {
    Crown,
} from "lucide-react";

const leaders = [
    {
        name: "Name leader",
        role: "Post Nmae",
        description: "Description",
        image: "https://static.vecteezy.com/system/resources/previews/036/280/651/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
        color: "blue",
        Icon: Crown,
    },
    {
        name: "Name leader",
        role: "Post Nmae",
        description: "Description",
        image: "https://static.vecteezy.com/system/resources/previews/036/280/651/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
        color: "blue",
        Icon: Crown,
    },
    {
        name: "Name leader",
        role: "Post Nmae",
        description: "Description",
        image: "https://static.vecteezy.com/system/resources/previews/036/280/651/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
        color: "blue",
        Icon: Crown,
    },
    {
        name: "Name leader",
        role: "Post Nmae",
        description: "Description",
        image: "https://static.vecteezy.com/system/resources/previews/036/280/651/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
        color: "blue",
        Icon: Crown,
    },

];

const LeadershipBoard = () => {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-24 text-white">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 bg-clip-text text-transparent font-extrabold md:text-6xl">
                        Leadership{" "}
                        <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
                            Board
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-purple-500" />
                </div>

                {/* Leader Cards */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {leaders.map((leader, index) => {
                        // const Icon = leader.Icon;

                        return (
                            <div
                                key={index}
                                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] px-6 pb-8 pt-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/30 hover:bg-white/[0.07]"
                            >

                                {/* Profile Image */}
                                <div className="relative mx-auto mb-7 h-48 w-48">

                                    <div
                                        className={`absolute inset-0 rounded-full bg-${leader.color}-500 blur-md opacity-50 transition duration-500 group-hover:scale-110`}
                                    />

                                    <div
                                        className={`relative h-full w-full rounded-full border-[5px] border-${leader.color}-400 p-1 shadow-[0_0_25px_rgba(59,130,246,0.3)]`}
                                    >
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute -right-1 top-2 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 p-3 text-black shadow-lg">
                                        {/* <Icon size={20} /> */}
                                    </div>

                                </div>

                                {/* Name */}
                                <h3 className="text-2xl text-black font-bold transition group-hover:text-blue-700">
                                    {leader.name}
                                </h3>

                                <p className="mt-2 font-semibold text-blue-400">
                                    {leader.role}
                                </p>

                                <div className="mx-auto my-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                                <p className="min-h-14 text-sm leading-6 text-gray-400">
                                    {leader.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <button className="rounded-full border-2 px-5 py-3 rounded-xl hover:bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-white font-bold text-sm shadow-lg shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300  border-black px-10 py-4 font-semibold text-black transition duration-300 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                        View All Leaders →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default LeadershipBoard;

