'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CollectionGrid = () => {
  const collections = [
    {
      id: 1,
      image: "/collection.png",
      title: "Collection 1",
      link: "/collection-1"
    },
    {
      id: 2,
      image: "/collection.png",
      title: "Collection 2",
      link: "/collection-2"
    },
    {
      id: 3,
      image: "/collection.png",
      title: "Collection 3",
      link: "/collection-3"
    },
    {
      id: 4,
      image: "/collection.png",
      title: "Collection 4",
      link: "/collection-4"
    }
  ];

  return (
    <section className="py-16 mb-24 px-[120px] max-w-[1920px] mx-auto bg-[#FFF5F5]">
      <div className="text-center mb-12">
        <h2 className="text-[#FF4DDB] text-[18px] uppercase tracking-wider">
          SHOP BY COLLECTION
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {collections.map((collection) => (
          <motion.div 
            key={collection.id}
            className="group relative cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Image container with white bottom portion */}
            <div className="flex flex-col bg-white">
              <motion.div 
                className="relative overflow-hidden aspect-[4/5]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />

                {/* Simple overlay on hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <div className="text-white text-center">
                    <p className="text-base font-light tracking-wider">
                      Shop Now
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              {/* White bottom portion */}
              <div className="h-10 bg-white"></div>
            </div>

            <a 
              href={collection.link}
              className="absolute inset-0"
              aria-label={`View ${collection.title}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CollectionGrid 