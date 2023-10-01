import Homepage from "@/components/Homepage"
import CarCatalogue from "@/components/CarCatalogue"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarDetail from "@/components/CarDetail";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full">
    <Header/>
    <Homepage/>
    <CarCatalogue/>
    <CarDetail/>
    <Footer/>
    </main>
  )
}
