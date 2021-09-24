import Head from 'next/head'
import Navbar from "./components/Navbar"
import About from "./components/About"
import Founder from "./components/Founder"
import Achievement from "./components/Achievement"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About us Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <About />
      <Founder />
      <Achievement />
      <Footer />
    </div>
  )
}
