import FAQ from "../../components/FAQ/FAQ"
import Hero from "../../components/Hero/Hero"
import Process from "../../components/Process/Process"
import Services from "../../components/Services/Services"
import WhyUs from "../../components/WhyUs/WhyUs"

const Home = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <Process/>
      <WhyUs/>
      <FAQ/>
    </main>
  )
}

export default Home
