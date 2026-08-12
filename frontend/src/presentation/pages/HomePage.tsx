import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../landing/Hero";
import Features from "../landing/Features";

export default function HomePage() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <Features />
    </Background>
  );
}