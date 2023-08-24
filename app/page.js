import Homepage from "@/components/Homepage"
import CarCatalogue from "@/components/CarCatalogue"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center">
    <Header/>
    <Homepage/>
    <CarCatalogue/>
    <Footer/>
    </main>
  )
}
