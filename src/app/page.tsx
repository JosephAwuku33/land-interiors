import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import Studio from "./_components/Studio";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import About from "./_components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Studio />
      <Banner />
      <Explore />
      <About />
      <Footer />
    </main>
  );
}
