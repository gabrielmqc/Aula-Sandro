import "../styles/utility.css";
import Header from '../components/header';
import Hero from "../components/hero";
import Products from "../components/products";
import Contacts from "../components/contacts";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {

    return (
        <>
            <QueryClientProvider client={queryClient}>

                <Header />

                <Hero />

                <Products />

                <Contacts />

                <Testimonials />

                <Footer />
            </QueryClientProvider >
        </>

    )
}
