import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import data from "../utils/constants/provinces";

function Provinces() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <>
      <Navbar />
      <Hero />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </>
  );
}

export default Provinces;
