
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
    Menu,
    X,
    Home,
    User,
    Briefcase,
    Phone,
    Search,
    Bell,
    ChevronDown,
    Settings,
    LogOut,
    Moon,
    Sun
} from "lucide-react";

import logo from "../../../public/logo.jpeg"

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);
    const [serviceMenu, setServiceMenu] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Aboute", href: "aboute", icon: User },
        { name: "Services", href: "services", icon: Briefcase },
        { name: "Donation", href: "donation", icon: Phone },
    ];

    return (
        <div>
            <header
                className={`fixed top-0  left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 shadow-xl py-2"
                    : "bg-white/80  py-4"
                    } backdrop-blur-xl`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between gap-4">

                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 shrink-0">

                            <div className=" w-10 h-10">
                                <img src={logo} className=" rounded-full" alt="" />
                            </div>

                            <span className="text-2xl font-black text-gray-900">
                                SJKS<span className="text-indigo-600">.</span>
                            </span>

                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-7">

                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className="text-sm font-semibold text-black hover:text-black/10 dark:hover:text-black/50 transition-all duration-300 relative group"
                                >
                                    {item.name}

                                    <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gray-950 group-hover:w-full transition-all duration-300"></span>
                                </NavLink>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setServiceMenu(!serviceMenu)}
                                    className="flex items-center dark:hover:text-black/50 gap-1 text-sm font-semibold hover:text-indigo-600"
                                >
                                    More
                                    <ChevronDown size={16} />
                                </button>

                                {serviceMenu && (
                                    <div className="absolute top-10 -left-25 w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl shadow-2xl p-2">
                                        <a href="#web" className="block p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
                                            Campaigns
                                        </a>
                                        <a href="#design" className="block p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
                                            Transparency & Reports
                                        </a>
                                        <a href="#marketing" className="block p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
                                            Velunteer Opportunities
                                        </a>
                                        <a href="#marketing" className="block p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">
                                            Gallery
                                        </a>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden md:flex items-center gap-3">

                            {/* Search */}
                            {searchOpen && (
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-36 lg:w-44 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            )}

                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            {/* Theme */}
                            <button
                                onClick={() => setDark(!dark)}
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
                                aria-label="Toggle theme"
                            >
                                {dark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Notification */}
                            <button
                                className="relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 cursor-pointer bg-gray-800"
                                aria-label="Notifications"
                            >
                                <Bell size={20} />
                                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-950"></span>
                            </button>

                            {/* Profile Dropdown */}
                            <div className="relative">

                                <button
                                    onClick={() => setProfileMenu(!profileMenu)}
                                    className="flex items-center gap-2 p-1.5 rounded-xl cursor-pointer"
                                >
                                    <img
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="Profile"
                                        className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500"
                                    />

                                    <ChevronDown size={16} className="text-gray-500" />
                                </button>

                                {profileMenu && (
                                    <div className="absolute right-0 top-14 w-56 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-3">

                                        <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                                            <h3 className="font-bold text-gray-900 dark:text-white">
                                                John Doe
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                john@example.com
                                            </p>
                                        </div>

                                        <button className="w-full flex items-center gap-3 p-3 mt-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800">
                                            <User size={18} /> My Profile
                                        </button>

                                        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800">
                                            <Settings size={18} /> Settings
                                        </button>

                                        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-gray-800">
                                            <LogOut size={18} /> Logout
                                        </button>

                                    </div>
                                )}

                            </div>

                            {/* Get Started */}
                            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                Get Started
                            </button>

                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="md:hidden w-11 h-11 rounded-xl bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-white flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
                        </button>

                    </div>

                    {/* Mobile Sidebar */}
                    <div
                        className={`md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white dark:bg-gray-950 shadow-2xl z-50 transition-transform duration-500 ${mobileMenu ? "translate-x-0" : "translate-x-full"
                            }`}
                    >

                        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">

                            <span className="text-xl font-black text-gray-900 dark:text-white">
                                Nexa<span className="text-indigo-600">.</span>
                            </span>

                            <button
                                onClick={() => setMobileMenu(false)}
                                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white flex items-center justify-center"
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>

                        </div>

                        <div className="p-5">

                            <div className="relative mb-6">
                                <Search className="absolute left-4 top-3.5 text-gray-400" size={19} />
                                <input
                                    placeholder="Search here..."
                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 dark:text-white outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-2">

                                {navLinks.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenu(false)}
                                            className="flex items-center gap-4 p-4 rounded-xl text-gray-700 dark:text-gray-200 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 transition"
                                        >
                                            <Icon size={20} />
                                            {item.name}
                                        </a>
                                    );
                                })}

                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 flex flex-col gap-3">

                                <button
                                    onClick={() => setDark(!dark)}
                                    className="flex items-center gap-3 p-3 rounded-xl text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    {dark ? <Sun size={20} /> : <Moon size={20} />}
                                    {dark ? "Light Mode" : "Dark Mode"}
                                </button>

                                <button className="w-full py-3 rounded-xl border border-indigo-600 text-indigo-600 font-bold">
                                    Login
                                </button>

                                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold">
                                    Sign Up
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Mobile Overlay */}
                    {mobileMenu && (
                        <div
                            onClick={() => setMobileMenu(false)}
                            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        />
                    )}

                </nav>
            </header>
        </div>
    );
};

export default Header;

