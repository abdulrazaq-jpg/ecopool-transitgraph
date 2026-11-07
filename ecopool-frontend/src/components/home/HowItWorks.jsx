const steps = [
    {
        number: "01",
        title: "Create an Account",
        description:
            "Register using your institutional details and join your campus community.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.87a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Find a Ride",
        description:
            "Explore available rides and filter them by destination, date and departure time.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-4-4m-5-8v6m-3-3h6" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Request a Seat",
        description:
            "Choose a suitable ride and send a seat request to the ride host for approval.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4 4 4-4 4M3 5h18v14H3z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Travel Together",
        description:
            "Once your request is approved, coordinate your journey and share the travel expenses.",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2l2-6h10l2 6h2v5h-2v2h-3v-2H8v2H5v-2H3v-5Zm4-1h10" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="w-full bg-white py-20 lg:py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">

                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                        Simple Process
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                        How EcoPool Works
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Getting started with shared campus travel is simple.
                        Follow these four steps to find your next ride.
                    </p>

                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative text-center"
                        >

                            {/* Step Icon */}
                            <div className="relative mx-auto w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">

                                {step.icon}

                                <span className="absolute -top-3 -right-3 w-7 h-7 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {step.number}
                                </span>

                            </div>

                            {/* Step Content */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}