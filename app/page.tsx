import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/Aboutus";
import Services from "./components/services";
import ContactUs from "./components/contact";





export default function Home() {
  return (<>
<Header />
<Banner />
<AboutUs />
<Services />
<ContactUs />
</>
  );
}
