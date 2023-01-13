import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Tragedy from "../components/Tragedy";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={require("../assets/banner.png")}
        title="Help The Poor For Their Better Future"
        txt="Everyday we bring hope to Pakistanis's lives as a sign of God's unconditional love."
        btnClass="show"
        url="/"
        btnText="Donate"
      />
      <Mission />
      <Tragedy />
      <Footer />
    </>
  );
}
export default Home;
