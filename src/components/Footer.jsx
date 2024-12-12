import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1E222F] py-10 md:mt-[70px] mt-[210px]">
      {/* First Row */}
      <div className="flex flex-wrap justify-between mb-12 p-10 md:p-20">
        <div>
          <h1 className="text-2xl font-bold text-[#CB6686] mt-6">Lyte-Hosting</h1>
          <p className="text-sm text-white mt-4 font-[100] leading-6">
            1942 BROADWAY STREET, BOULDER CO, US<br />
            Copyright 2023 LyteHosting.com
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-700">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Second and Third Row (Combined) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto px-6 md:px-16 p-8 text-white">
          <div>
            <h2 className="text-lg font-[400] mb-4">Hosting</h2>
            <ul className="space-y-4 text-sm font-[200]">
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Shared Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Reseller Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  VPS Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  WordPress Hosting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-[400] mb-4">Company</h2>
            <ul className="space-y-4 text-sm font-[200]">
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  All Our Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-[400] mb-4">Contact</h2>
            <ul className="space-y-4 text-sm font-[200]">
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Submit Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CB6686]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-10 border-gray-300 w-full" />

      {/* Final Rows */}
      <div className="text-sm text-white flex flex-col justify-between items-center md:flex-row md:items-center md:justify-between w-full px-20 mt-8">
        {/* First Row */}
        <p className="text-center">Copyright &copy; 2024</p>
        {/* Second Row */}
        <div className="flex space-x-1">
          <div>
            <img src="/images/paypal.svg" alt="paypal.svg" className="h-12 w-12" />
          </div>
          <div>
            <img src="/images/visa.svg" alt="visa.svg" className="h-12 w-12" />
          </div>
          <div>
            <img src="/images/masterCard.svg" alt="masterCard.svg" className="h-12 w-12" />
          </div>
          <div>
            <img src="/images/Express.svg" alt="Express.svg" className="h-12 w-12" />
          </div>
        </div>
        {/* Third Row */}
        <p className="text-center">
          All Rights Reserved |{" "}
          <a href="#" className="underline text-white-400">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline text-white-400">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;