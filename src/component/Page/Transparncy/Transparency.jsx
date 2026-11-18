
import {
    ShieldCheck,
    FileText,
    Download,
    TrendingUp,
    Heart,
    Wallet,
    CheckCircle,
    ArrowRight,
    Eye,
    Award,
    Users,
} from "lucide-react";

const reports = [
    {
        title: "Annual Report 2025-26",
        category: "Annual Report",
        description: "Our yearly activities, achievements and community impact.",
        date: "2025-2026",
        size: "2.4 MB",
        file: "/reports/annual-report-2025-26.pdf",
    },
    {
        title: "Financial Audit Report 2025",
        category: "Audit Report",
        description: "A detailed overview of our audited financial statements.",
        date: "2025",
        size: "1.8 MB",
        file: "/reports/audit-report-2025.pdf",
    },
    {
        title: "Annual Report 2024-25",
        category: "Annual Report",
        description: "Our previous year's programs, activities and outcomes.",
        date: "2024-2025",
        size: "2.1 MB",
        file: "/reports/annual-report-2024-25.pdf",
    },
    {
        title: "Donation Utilization Report",
        category: "Financial Report",
        description: "How donations are allocated across our initiatives.",
        date: "2025",
        size: "1.2 MB",
        file: "/reports/donation-utilization.pdf",
    },
];

const financialData = [
    { label: "Education Programs", percentage: 40, amount: "₹4,00,000" },
    { label: "Healthcare Support", percentage: 30, amount: "₹3,00,000" },
    { label: "Food & Essentials", percentage: 20, amount: "₹2,00,000" },
    { label: "Administration", percentage: 10, amount: "₹1,00,000" },
];

const Transparency = () => {
    return (
        <div className="bg-white text-gray-800">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 py-24">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-emerald-100">
                        <ShieldCheck size={17} />
                        Trust • Transparency • Accountability
                    </span>

                    <h1 className="mt-7 text-4xl font-extrabold text-white md:text-6xl">
                        Transparency & <span className="text-emerald-300">Reports</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50 md:text-lg">
                        We believe every contribution deserves accountability.
                        Explore our reports, financial information and the impact
                        your support creates.
                    </p>

                    <a
                        href="#reports"
                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-emerald-800 transition hover:bg-emerald-100"
                    >
                        Explore Reports <ArrowRight size={19} />
                    </a>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Our Commitment
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Transparency Builds Trust
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            We maintain transparency in every activity, donation
                            and decision to ensure your trust is always respected.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        {[
                            {
                                icon: Eye,
                                title: "Open Information",
                                text: "We share our activities, achievements and financial information openly.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Accountability",
                                text: "Every contribution is handled responsibly with proper records.",
                            },
                            {
                                icon: Award,
                                title: "Regular Audits",
                                text: "Our financial records and reports are reviewed regularly.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="mt-3 leading-7 text-gray-500">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FINANCIAL TRANSPARENCY */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        <div>
                            <span className="font-bold uppercase tracking-widest text-emerald-600">
                                Financial Transparency
                            </span>

                            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                                Every Donation Makes a Difference
                            </h2>

                            <p className="mt-5 leading-8 text-gray-500">
                                We aim to use every donation responsibly. Here is an
                                illustrative breakdown of how funds may be allocated
                                across our activities.
                            </p>

                            <div className="mt-8 space-y-6">
                                {financialData.map((item, index) => (
                                    <div key={index}>
                                        <div className="mb-2 flex justify-between gap-3">
                                            <span className="font-semibold">{item.label}</span>
                                            <span className="font-bold text-emerald-700">
                                                {item.percentage}%
                                            </span>
                                        </div>

                                        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>

                                        <p className="mt-1 text-right text-sm text-gray-500">
                                            {item.amount}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-5 text-xs text-gray-400">
                                Demo figures only. Replace with verified financial data
                                from your NGO's audited records before publishing.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-600 p-8 text-white shadow-xl md:p-10">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                                <Wallet size={32} />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                Responsible Fund Management
                            </h3>

                            <p className="mt-4 leading-8 text-emerald-50">
                                We are committed to managing donations carefully and
                                directing resources toward meaningful community impact.
                            </p>

                            <div className="mt-8 space-y-5">
                                {[
                                    "Transparent financial records",
                                    "Responsible donation management",
                                    "Regular reporting and reviews",
                                    "Focus on community impact",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle size={20} className="shrink-0 text-emerald-200" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* REPORTS SECTION */}
            <section id="reports" className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-600">
                            Documents & Reports
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Download Our Reports
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Access our annual reports, audit documents and financial records.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {reports.map((report, index) => (
                            <div
                                key={index}
                                className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:gap-5"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                                        <FileText size={28} />
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                                            {report.category}
                                        </span>
                                        <h3 className="mt-1 text-lg font-bold">
                                            {report.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            {report.description}
                                        </p>
                                        <p className="mt-3 text-xs text-gray-400">
                                            {report.date} • {report.size} • PDF
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={report.file}
                                    download
                                    className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700 sm:mt-0"
                                >
                                    <Download size={18} />
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Add your actual PDF files inside the public/reports folder
                        and update the file paths above.
                    </p>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="bg-emerald-950 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <span className="font-bold uppercase tracking-widest text-emerald-300">
                            Our Impact
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                            Your Trust Creates Change
                        </h2>
                    </div>

                    <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: Heart, value: "5,000+", label: "Lives Supported" },
                            { icon: Users, value: "200+", label: "Active Volunteers" },
                            { icon: TrendingUp, value: "50+", label: "Projects Completed" },
                            { icon: Wallet, value: "100%", label: "Commitment to Transparency" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                    <Icon size={32} className="mx-auto text-emerald-300" />
                                    <h3 className="mt-5 text-3xl font-extrabold">
                                        {item.value}
                                    </h3>
                                    <p className="mt-2 text-emerald-100">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-6 text-center text-xs text-emerald-200/60">
                        Sample statistics — replace with your NGO's verified figures.
                    </p>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-emerald-600 to-teal-500 px-7 py-14 text-center text-white md:px-16">
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Have Questions About Our Reports?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
                        We believe in open communication. Contact our team if you
                        need more information about our work or financial reports.
                    </p>

                    <a
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                        Contact Us <ArrowRight size={19} />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Transparency;