import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="px-6 py-20">
            <div className="max-w-7xl mx-auto bg-green-700 rounded-3xl px-8 py-16 md:px-16 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    Ready to Make Your Daily Commute Better?
                </h2>

                <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    Join your campus community, share rides, reduce travel
                    expenses, and contribute to a more sustainable future.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
                    >
                        Get Started
                    </Link>

                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center px-8 py-3 border border-green-300 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                    >
                        Already a Member? Login
                    </Link>

                </div>
            </div>
        </section>
    );
}