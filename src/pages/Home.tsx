import Header from "../components/layout/Header/Header";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <>
      {/* Shared site header. */}
      <Header />

      {/* Main landing page hero. */}
      <Hero />
    </>
  );
}

export default Home;