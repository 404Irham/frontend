import DataCovid from "../components/DataCovid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DataCovid URL={"https://covid19.mathdro.id/api"} />
      <Summary URL={"https://covid19.mathdro.id/api/og"}/>
      <Footer />
    </>
  );
}

export default Home;
