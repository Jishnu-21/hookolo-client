'use client'

import React from 'react';

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/blog1.png',
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      date: '24 Jan,2024'
    },
    {
      id: 2,
      image: '/blog1.png',
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      date: '24 Jan,2024'
    },
    {
      id: 3,
      image: '/blog1.png',
      title: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      date: '24 Jan,2024'
    }
  ];

  return (
    <section className="w-full bg-white mt-[100px]">
      <div className="max-w-[1920px] mx-auto py-24 px-[120px]">
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1200px] mx-auto">
            {/* Blog Grid */}
            <div className="grid grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group cursor-pointer bg-[#F8F8F8] max-w-[360px]"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-[14px] text-gray-800 leading-tight mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[12px] text-gray-500">
                      {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid; 