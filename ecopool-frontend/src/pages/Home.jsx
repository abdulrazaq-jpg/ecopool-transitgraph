import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import HowItWorks from "../components/home/HowItWorks";
import AudienceCards from "../components/home/AudienceCards";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            <HowItWorks />
            <AudienceCards />
            <CallToAction />
        </>
    );
}