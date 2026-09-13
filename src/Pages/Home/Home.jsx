import FAQ from "../../components/FAQ/FAQ"
import Hero from "../../components/Hero/Hero"
import Process from "../../components/Process/Process"
import Services from "../../components/Services/Services"
import WhyUs from "../../components/WhyUs/WhyUs"
import Footer from "../../components/Footer/Footer";
import CTA from "../../components/CTA/CTA"
const Home = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <Process/>
      <WhyUs/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default Home
