import Banner from "@/Components/HomePage/Banner";
import AboutUs from "@/Components/HomePage/AboutUs";
import Services from "@/Components/HomePage/Services";


export default function Home() {
  return (
    <main className="container mx-auto">
      <Banner/>
      <AboutUs/>
      <Services/>
    </main>
  );
}
