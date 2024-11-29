import React from 'react'
import Header from '@/components/Header'
import VideoBanner from '@/components/VideoBanner'
import ReelsSlider from '@/components/ReelsSlider'
import CollectionGrid from '@/components/CollectionGrid'
import ProductBanner from '@/components/ProductBanner'
import InstagramFeed from '@/components/InstagramFeed'
import CoverProduct from '@/components/CoverProduct'
import BraGallery from '@/components/BraGallery'
import BlogGrid from '@/components/BlogGrid'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
const Page = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 w-full max-w-[1920px] mx-auto">
        <VideoBanner />
        <ReelsSlider />
        <CollectionGrid />
        <ProductBanner />
        <CoverProduct />
        <BraGallery />
        <BlogGrid />
        <InstagramFeed />
        <div className="mb-20">
          <Testimonials />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Page