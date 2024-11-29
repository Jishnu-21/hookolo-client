import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';

const Footer = () => {
  const customerCareLinks = [
    { title: 'Help & FAQs', href: '/help-faqs' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Store locator', href: '/stores' },
    { title: 'Gift wrap service', href: '/gift-wrap' },
    { title: 'Size guide', href: '/size-guide' },
    { title: 'Under 26 and Student Discount', href: '/student-discount' },
    { title: 'Emergency Services & NHS Discount', href: '/nhs-discount' },
  ];

  const companyLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'On Instagram', href: '/instagram' },
    { title: 'Inclusivity and equality', href: '/inclusivity' },
    { title: 'Careers', href: '/careers' },
    { title: 'Sustainability', href: '/sustainability' },
    { title: 'Affiliates', href: '/affiliates' },
  ];

  const termsLinks = [
    { title: 'Ordering & payment', href: '/ordering' },
    { title: 'Paying with Klarna', href: '/klarna' },
    { title: 'Terms & conditions', href: '/terms' },
    { title: 'Security & privacy', href: '/privacy' },
    { title: 'Cookies', href: '/cookies' },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp size={18} />, href: 'https://whatsapp.com' },
    { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com' },
    { icon: <FaInstagram size={18} />, href: 'https://instagram.com' },
    { icon: <FaFacebookF size={18} />, href: 'https://facebook.com' },
    { icon: <FaPinterestP size={18} />, href: 'https://pinterest.com' },
  ];

  return (
    <>
      {/* Top divider */}
      <div className="h-[1px] bg-[#EEEEEE] w-full" />
      
      <footer className="bg-white pt-16 pb-8">
        <div className="max-w-[1920px] mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Customer Care Section */}
            <div>
              <h3 className="text-xs font-medium mb-6 tracking-wider text-[#111111]">CUSTOMER CARE</h3>
              <ul className="space-y-3">
                {customerCareLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-[#666666] hover:text-black">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-[#EEEEEE] text-sm px-6 py-3 flex items-center gap-2 hover:bg-[#E5E5E5] w-full md:w-auto justify-center text-black">
                <BsChatDots size={16} className="text-black" />
                Chat with us
              </button>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-xs font-medium mb-6 tracking-wider text-[#111111]">COMPANY</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-[#666666] hover:text-black">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms & Policies Section */}
            <div>
              <h3 className="text-xs font-medium mb-6 tracking-wider text-[#111111]">TERMS & POLICIES</h3>
              <ul className="space-y-3">
                {termsLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-[#666666] hover:text-black">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sign Up Section */}
            <div>
              <h3 className="text-xs font-medium mb-4 tracking-wider text-[#111111]">SIGN UP NOW</h3>
              <p className="text-sm text-[#666666] mb-4">
                And receive an exclusive 10% off your order.
              </p>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 border border-[#DDDDDD] px-4 py-2 text-sm focus:outline-none focus:border-black"
                />
                <button className="bg-black text-white px-6 py-2 text-sm hover:bg-[#222222]">
                  JOIN
                </button>
              </div>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index} 
                    href={social.href}
                    className="text-[#666666] hover:text-black transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-16 pt-8 border-t border-[#DDDDDD]">
            <p className="text-xs text-[#666666]">© 2024 Hookolo. E-commerce by WeMakewebsites</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 