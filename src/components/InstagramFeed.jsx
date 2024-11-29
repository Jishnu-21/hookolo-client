'use client';

import React, { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramFeed = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  const instaPosts = [
    {
      id: 1,
      url: 'https://www.instagram.com/p/DBJUzSKM7mM/',
    },
    {
      id: 2,
      url: 'https://www.instagram.com/p/DCy5ZHIyT4L/',
    },
    {
      id: 3,
      url: 'https://www.instagram.com/p/DBJUzSKM7mM/',
    },
    {
      id: 4,
      url: 'https://www.instagram.com/p/DBJUzSKM7mM/',
    },
    {
      id: 5,
      url: 'https://www.instagram.com/p/DBJUzSKM7mM/',
    },
    {
      id: 6,
      url: 'https://www.instagram.com/p/DBJUzSKM7mM/',
    },
  ];

  return (
    <>
      <section className="w-full py-8">
        <div className="max-w-[1920px] mx-auto px-4">
          {/* Header text */}
          <div className="text-center mb-8">
            <h2 className="text-[#000000] text-2xl tracking-wider font-light">#HOOKOLO</h2>
            <p className="text-[#000000] text-xl tracking-wider font-light mt-1">JOIN OUR COMMUNITY</p>
          </div>

          {/* Instagram grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {isClient && instaPosts.map((post) => (
              <div 
                key={post.id} 
                className="relative aspect-square overflow-hidden instagram-post-wrapper group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <InstagramEmbed 
                  url={post.url}
                  width="100%"
                  height="120%"
                  captioned={false}
                  className="instagram-embed-container group-hover:scale-110 transition-transform duration-300"
                  style={{
                    width: '100%',
                    height: '120%',
                    border: 'none',
                    margin: '-50px 0',
                    padding: 0,
                    background: 'none',
                    pointerEvents: 'none',
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Post
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="text-center mt-8">
            <span className="text-2xl tracking-wider">.....</span>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="relative bg-white rounded-lg w-full max-w-[400px] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button - updated to black color */}
            <button 
              className="absolute top-2 right-2 z-50 text-black hover:text-gray-600 
                         transition-colors duration-200 text-lg"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>
            
            <div className="instagram-modal-container">
              <InstagramEmbed 
                url={selectedPost.url}
                width="100%"
                captioned={true}
                className="instagram-modal"
                style={{
                  margin: 0,
                  padding: 0,
                  transform: 'scale(0.95)',
                  transformOrigin: 'top center'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramFeed; 