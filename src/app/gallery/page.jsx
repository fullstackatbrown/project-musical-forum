import ImageGallery from '@/components/ImageGallery'
import Navbar from '@/components/Navbar'
import React from 'react'
import { images } from '../page'
import { navItems } from '../alumni/page'

function page() {
  return (
    <>
    <Navbar navItems={navItems} />
    <ImageGallery images={images}></ImageGallery>
    </>
  )
}

export default page