'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoverProduct = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showShopPopup, setShowShopPopup] = useState(false);

  const productSpots = [
    {
      id: 1,
      position: { top: '20%', left: '45%' },
      product: {
        name: 'Sports Bra',
        price: '$45.00',
        description: 'High-impact support sports bra',
        image: '/product-1.jpg'
      }
    },
    {
      id: 2,
      position: { top: '60%', left: '50%' },
      product: {
        name: 'Leggings',
        price: '$65.00',
        description: 'High-waisted compression leggings',
        image: '/product-2.jpg'
      }
    }
  ];

  const ProductModal = ({ product, onClose, position, isLowerHalf }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute bg-white p-6 shadow-lg w-[300px] z-[60]"
      style={{
        ...(isLowerHalf 
          ? { bottom: '0', left: '40px' }
          : { top: '-10px', left: '90px' })
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-black hover:text-gray-700"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      
      <div className="mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[200px] object-cover"
        />
      </div>
      
      <h3 className="text-lg font-medium mb-2 text-black">{product.name}</h3>
      <p className="text-black text-sm mb-3">{product.description}</p>
      <p className="text-lg font-medium mb-4 text-black">{product.price}</p>
      
      <button 
        onClick={() => {
          onClose();
          setShowShopPopup(true);
        }}
        className="w-full border-2 border-black py-2 px-4 hover:bg-gray-50 transition-colors text-sm font-medium text-black"
      >
        ADD TO CART
      </button>
    </motion.div>
  );

  const ShopPopup = ({ onClose }) => (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-3xl shadow-lg"
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-medium">Shop the look</h3>
          <button 
            onClick={onClose}
            className="text-black hover:text-gray-700"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {productSpots.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <div className="w-[120px] h-[160px] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={item.product.image} 
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">#{`MV${item.id}`}</p>
                <h4 className="font-medium mb-2">{item.product.name}</h4>
                <p className="text-lg font-medium mb-4">{item.product.price}</p>
                <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm font-medium">
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full mt-[100px]">
      <div className="max-w-[1920px] mx-auto py-24 px-[120px]">
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1600px] mx-auto">
            <div className="relative w-full rounded-lg overflow-hidden">
              <img
                src="/productCover.png"
                alt="Workout Cover"
                className="w-full h-[800px] object-fill"
              />

              {/* Product Spots */}
              {productSpots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={spot.position}
                >
                  <button
                    onClick={() => setSelectedSpot(selectedSpot === spot.id ? null : spot.id)}
                    className={`relative w-6 h-6 flex items-center justify-center z-40
                      ${selectedSpot === spot.id ? 'bg-black text-white' : 'bg-white'} 
                      rounded-full border border-black hover:scale-110 transition-transform`}
                  >
                    <svg 
                      width="10" 
                      height="10" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      {selectedSpot === spot.id ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                      ) : (
                        <>
                          <path d="M12 5v14M5 12h14" />
                        </>
                      )}
                    </svg>
                  </button>

                  {/* Product Modal */}
                  <AnimatePresence>
                    {selectedSpot === spot.id && (
                      <div className="relative">
                        <ProductModal
                          product={spot.product}
                          onClose={() => setSelectedSpot(null)}
                          position={{
                            top: '0',
                            left: '40px'
                          }}
                          isLowerHalf={parseFloat(spot.position.top) > 50}
                        />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shop Popup */}
      <AnimatePresence>
        {showShopPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[65]"
              onClick={() => setShowShopPopup(false)}
            />
            
            {/* Popup */}
            <ShopPopup onClose={() => setShowShopPopup(false)} />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoverProduct;