import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Indonesia from "../components/Indonesia";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function Main() {

  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Indonesia />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
