import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProductGrid from '@/components/ProductGrid'
import Histoire from '@/components/Histoire'
import Reviews from '@/components/Reviews'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <Histoire />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
