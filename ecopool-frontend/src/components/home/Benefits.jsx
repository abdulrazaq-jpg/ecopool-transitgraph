const benefits = [
    {
        id: 1,
        title: "Save Travel Costs",
        description:
            "Share fuel expenses with fellow travellers and make your daily campus commute more affordable.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2m0-10v10m7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Sustainable Travel",
        description:
            "Reduce individual vehicle usage by sharing rides and contribute to a cleaner environment.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-2-7-5-7-10a5 5 0 0 1 10 0c0 2-1 4-3 5m0 5v-5m0 0c3 0 6-2 7-6-4 0-7 2-7 6Z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Campus Community",
        description:
            "Connect with students and faculty members travelling along similar routes to your campus.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.87a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Easy Coordination",
        description:
            "Discover available rides, request seats and coordinate your campus journeys in one place.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0-3-3m3 3-3 3M16 17H4m0 0 3 3m-3-3 3-3" />
            </svg>
        ),
    }
];

export default function Benefits() {
    return (
        <section className="w-full bg-gray-50 py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">

                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                        Why EcoPool?
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                        A Better Way to Travel Together
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Make your everyday campus commute more affordable,
                        convenient and sustainable with shared journeys.
                    </p>

                </div>

                {/* Benefit Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}