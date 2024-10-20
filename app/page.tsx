import Footer from "./home/components/Footer";
import LandingPage from "./home/components/landingPage";
import Navbar from "./home/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
