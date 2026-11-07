const audiences = [
    {
        id: 1,
        title: "For Students",
        subtitle: "Make your campus commute easier.",
        description:
            "Connect with fellow students travelling along similar routes. Find available rides, request seats and share travel expenses.",
        features: [
            "Discover available campus rides",
            "Request seats from ride hosts",
            "Share commuting expenses",
        ],
        label: "Student Community",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10 12 4 2 10l10 6 10-6ZM6 12.5V17l6 3 6-3v-4.5M22 10v6" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "For Faculty",
        subtitle: "Share your journey with colleagues.",
        description:
            "Offer available seats in your vehicle, manage incoming ride requests and coordinate your campus commute with fellow faculty members.",
        features: [
            "Create and manage your rides",
            "Accept or reject seat requests",
            "Share travel expenses",
        ],
        label: "Faculty Community",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 7a8 8 0 0 1 16 0M19 8h3m-1.5-1.5v3" />
            </svg>
        ),
    },
];

export default function AudienceCards() {
    return (
        <section id="about" className="w-full bg-gray-50 py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">

                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                        One Platform, Two Communities
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                        Built for Your Campus Community
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Whether you are a student or a faculty member,
                        EcoPool makes shared commuting easier.
                    </p>

                </div>

                {/* Audience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {audiences.map((audience) => (
                        <div
                            key={audience.id}
                            className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 hover:shadow-lg hover:border-green-200 transition-all duration-300"
                        >

                            {/* Icon and Label */}
                            <div className="flex items-center justify-between mb-8">

                                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                                    {audience.icon}
                                </div>

                                <span className="px-4 py-2 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                                    {audience.label}
                                </span>

                            </div>

                            {/* Card Content */}
                            <h3 className="text-2xl font-bold text-gray-900">
                                {audience.title}
                            </h3>

                            <p className="text-green-700 font-medium mt-2">
                                {audience.subtitle}
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed mt-4">
                                {audience.description}
                            </p>

                            {/* Features */}
                            <div className="mt-7 space-y-4">

                                {audience.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-600 shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m5 12 4 4L19 6"
                                            />
                                        </svg>

                                        <span className="text-sm text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}