import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-redhat">
      <NavBar />
      {/* Welcome Section */}
      <div className="flex items-center justify-center mt-8">
        <div className="border border-[#E0E2E6] rounded-full w-[130px] p-1 shadow-sm flex items-center justify-center">
          <h1 className="text-[#666D80] ml-1 text-md font-[700]">Welcome</h1>
          <div className="ml-1 text-xl mb-1">👋</div>
        </div>
      </div>
      {/* New Text Section */}
      <div className="text-center mt-4 md:text-6xl text-3xl font-bold text-[#000000]">
        <h2 className="">
          Welcome <span className="text-[#ffd300]">to</span>{" "}
          <span className="text-[#CB6686]">Your New</span>
        </h2>
        <h2 className="mt-2">Digital Home!</h2>
      </div>
      {/* Additional Text Section */}
      <div className="text-center mt-8 md:text-2xl text-sm font-[400] text-[#191825BF]">
        <h3 className="mb-2">
          High performance dedicated servers. with cloud flexibility &
        </h3>
        <h3>Scalability.</h3>
      </div>
      {/* Search Bar Section */}
      <div className="flex items-center justify-center mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="www.example.com"
            className="border border-[#E0E2E6] rounded-full md:w-[400px] w-[350px] p-4 pl-6 text-md placeholder-[#B2B6B299]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1E222F] text-white py-2 md:px-4 px-3 rounded-full hover:bg-[#a04f6a] transition duration-300">
            Search Domain
          </button>
        </div>
      </div>
      {/* Welcome Images */}
      <div className="flex items-center justify-center mt-6">
        <img
          src="/images/WelcomeImages2.png"
          alt="welcomeImage"
          className="md:w-[700px] w-[450px] md:h-[700px] h-[400px] object-cover mr-4" 
        />
      </div>
      {/* About us button */}
      <div className="flex items-center justify-center md:mt-[-300px] mt-[-180px] ml-10 cursor-pointer">
        <div className="border border-[#E0E2E6] rounded-full w-[130px] p-1 shadow-sm flex items-center justify-center">
          <h1 className="text-[#666D80] ml-1 text-md font-[700]">About Us</h1>
          <div className="ml-1 text-xl mb-1">🕵</div>
        </div>
      </div>
      {/* Why Choose Lyte-Hosting text */}
      <div className="text-center mt-2 md:text-4xl text-2xl font-semibold text-[#000000]">
        <h2>
          Why Choose Lyte-<span className="text-[#CB6686]">Hosting?</span>
        </h2>
      </div>
      {/* High Performance Servers text*/}
      <div className="text-center mt-4 text-sm font-[400] text-gray-400">
        <h3 className="mb-2">We provide high performance dedicated servers</h3>
        <h3>with cloud flexibility and scalability.</h3>
      </div>
      {/* Cards Section */}
      <div className='flex items-center justify-center px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full md:w-auto md:px-32">
          {/* Card 1 */}
          <div className="border border-[#E0E2E6] p-6 rounded-lg shadow-md md:text-start text-center bg-[#F9FAFC]">
            <h3 className="md:text-md text-md font-[500] mb-2">24/7 Customers Support 🤳🏻</h3>
            <p className="text-gray-400 text-sm md:text-start text-center">
              At Lyte Hosting, we pride ourselves on providing exceptional<br />
              customers service around the clock.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-[#E0E2E6] p-6 rounded-lg shadow-md md:text-start text-center bg-[#F9FAFC]">
            <h3 className="md:text-md text-md font-[500] mb-2">
              100% Network Up-time Guarantee 📡
            </h3>
            <p className="text-gray-400 text-sm md:text-start text-center">
              Your business deserves the best!, and with our 100% network<br />
              up time, you can trust that your online presence is active.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border border-[#E0E2E6] p-6 rounded-lg shadow-md md:text-start text-center bg-[#F9FAFC]">
            <h3 className="md:text-md text-md font-[500] mb-2">
              Daily Backup With One Click 🔄
            </h3>
            <p className="text-gray-400 text-sm md:text-start text-center">
              Our daily One Click Backup features ensure your website<br />
              data is secured and up to date with just a click.
            </p>
          </div>
          {/* Card 4 */}
          <div className="border border-[#E0E2E6] p-6 rounded-lg shadow-md md:text-start text-center bg-[#F9FAFC]">
            <h3 className="md:text-md text-md font-[500] mb-2">
              30 Days Money Back Guarantee 💰
            </h3>
            <p className="text-gray-400 text-sm md:text-start text-center">
              We believe in the quality and reliability of our services. That is<br />
              why we offer a 30 Days Money Back Guarantee.
            </p>
          </div>
        </div>
      </div>
      {/* Our pricing button */}
      <div className="flex items-center justify-center mt-10 md:ml-10 ml-0 cursor-pointer">
        <div className="border border-[#E0E2E6] rounded-full w-[130px] p-1 shadow-sm flex items-center justify-center">
          <h1 className="text-[#666D80] ml-1 text-md font-[700]">
            Our Pricing
          </h1>
          <div className="ml-1 text-xl mb-1">💰</div>
        </div>
      </div>
      {/* Pricing Section Title */}
      <div className="text-center mt-2 md:text-4xl text-2xl font-semibold text-[#000000]">
        <h2>
          Our Web <span className="text-[#CB6686]">Hosting </span> Plans &
          Pricing
        </h2>
      </div>
      {/* Additional Pricing Text */}
      <div className="text-center mt-4 md:text-md text-[14px] font-medium text-[#666D80]">
        <p>
          Make the most out of your hosting plans, all for a price that fits
          your budget.
        </p>
      </div>
      {/* Change Currency Section */}
      <div className="flex items-center md:justify-end justify-center mt-6 md:mr-56 mr-0">
        <button className="flex items-center border border-[#E0E2E6] rounded-full px-4 py-2 shadow-sm hover:bg-[#CB6686] hover:text-white transition duration-300">
          <span className="hover:text-white font-[400] text-sm">
            Change Currency
          </span>
          <span className="ml-2 text-md">💵</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 9l-7.5 7.5L4.5 9"
            />
          </svg>
        </button>
      </div>
      {/* Pricing Cards Section */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div className="border border-[#E0E2E6] rounded-[60px] shadow-md p-8 bg-white text-start w-[300px]">
            <h3 className="text-xl font-medium mb-2">Shared Hosting</h3>
            <p className="text-sm text-[#666D80] mb-4">
              Unbeatable speed. Shared hosting with top security. Low cost.
            </p>
            <p className="text-3xl font-bold text-[#161618] mt-8">
              $0 <span className="text-lg ml-[-5px]">.72</span>
            </p>
            <p className="text-sm text-[#666D80]">per month</p>
            <button className="bg-[#CB6686] text-white py-2 px-4 w-64 rounded-full mt-6 hover:bg-[#a04f6a] transition duration-300">
              Order Now
            </button>
            <div className="mt-6">
              <div className="flex mb-2">
                <img
                  src="/images/disk-space.svg"
                  alt="disk-space"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  {" "}
                  <span className="text-[#161618] mr-1">2gb</span>Disk Space
                </p>
              </div>
              <div className="flex mb-2">
                <img
                  src="/images/Bandwidth.svg"
                  alt="Bandwidth"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  <span className="text-[#161618] mr-1">10gb</span>Data Bandwidth
                </p>
              </div>
              <hr className="border-[#E0E2E6] mt-4" />
              <p className="text-md font-semibold mt-4">Also Includes:</p>
              <div className="flex mt-2 ml-[-4px]">
                <img src="/images/check.svg" alt="check" className="w-5 h-5" />
                <p className="text-sm text-[#666D80]">Unlimited Email Accounts</p>
              </div>
              <div className="flex mt-2 ml-[-6px]">
                <img
                  src="/images/check.svg"
                  alt="check"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80]">Free SSL Security</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border border-[#E0E2E6] rounded-[60px] shadow-md p-8 bg-white text-start w-[300px]">
            <h3 className="text-xl font-medium mb-2">Word-Press Hosting </h3>
            <p className="text-sm text-[#666D80] mb-4">
              Unbeatable speed. Word-Press hosting with top security. on budgets
            </p>
            <p className="text-3xl font-bold text-[#161618] mt-8">
              $2 <span className="text-lg ml-[-5px]">.28</span>
            </p>
            <p className="text-sm text-[#666D80]">per month</p>
            <button className="bg-[#CB6686] text-white py-2 px-4 w-64 rounded-full mt-6 hover:bg-[#a04f6a] transition duration-300">
              Order Now
            </button>
            <div className="mt-6">
              <div className="flex mb-2">
                <img
                  src="/images/disk-space.svg"
                  alt="disk-space"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  {" "}
                  <span className="text-[#161618] mr-1">10gb</span>Disk Space
                </p>
              </div>
              <div className="flex mb-2">
                <img
                  src="/images/Bandwidth.svg"
                  alt="Bandwidth"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  <span className="text-[#161618] mr-1">100gb</span>Data Bandwidth
                </p>
              </div>
              <hr className="border-[#E0E2E6] mt-4" />
              <p className="text-md font-semibold mt-4">Also Includes:</p>
              <div className="flex mt-2 ml-[-4px]">
                <img src="/images/check.svg" alt="check" className="w-5 h-5" />
                <p className="text-sm text-[#666D80]">Unlimited Email Accounts</p>
              </div>
              <div className="flex mt-2 ml-[-6px]">
                <img
                  src="/images/check.svg"
                  alt="check"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80]">Free SSL Security</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border border-[#E0E2E6] rounded-[60px] shadow-md p-8 bg-white text-start w-[300px]">
            <h3 className="text-xl font-medium mb-2">VPS Hosting</h3>
            <p className="text-sm text-[#666D80] mb-4">
              High performance VPS Hosting with cloud flexibility and scalability.
            </p>
            <p className="text-3xl font-bold text-[#161618] mt-8">
              $7 <span className="text-lg ml-[-5px]">.50</span>
            </p>
            <p className="text-sm text-[#666D80]">per month</p>
            <button className="bg-[#CB6686] text-white py-2 px-4 w-64 rounded-full mt-6 hover:bg-[#a04f6a] transition duration-300">
              Order Now
            </button>
            <div className="mt-6">
              <div className="flex mb-2">
                <img
                  src="/images/disk-space.svg"
                  alt="disk-space"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  {" "}
                  <span className="text-[#161618] mr-1">40gb</span>Disk Space
                </p>
              </div>
              <div className="flex mb-2">
                <img
                  src="/images/Bandwidth.svg"
                  alt="Bandwidth"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80] ml-2">
                  <span className="text-[#161618] mr-1">20Tb</span>Data Bandwidth
                </p>
              </div>
              <hr className="border-[#E0E2E6] mt-4" />
              <p className="text-md font-semibold mt-4">Also Includes:</p>
              <div className="flex mt-2 ml-[-4px]">
                <img src="/images/check.svg" alt="check" className="w-5 h-5" />
                <p className="text-sm text-[#666D80]">2gb of RAM</p>
              </div>
              <div className="flex mt-2 ml-[-6px]">
                <img
                  src="/images/check.svg"
                  alt="check"
                  className="w-5 h-5 ml-1"
                />
                <p className="text-sm text-[#666D80]">4V CPU Core</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our features button */}
      <div className="flex items-center justify-center mt-10 cursor-pointer">
        <div className="border border-[#E0E2E6] rounded-full w-[150px] p-1 shadow-sm flex items-center justify-center">
          <h1 className="text-[#666D80] ml-1 text-md font-[700]">
            Our Features
          </h1>
          <div className="ml-1 text-xl mb-1">🧑🏻‍💻</div>
        </div>
      </div>
      {/* Pricing Section Title */}
      <div className="text-center mt-4 md:mt-2 md:text-4xl text-2xl font-semibold text-[#000000]">
        <h2>
          Our Premium <span className="text-[#CB6686]">Hosting </span> Features
        </h2>
      </div>
      {/* Additional Pricing Text */}
      <div className="text-center mt-4 md:text-md text-[14px] font-medium text-[#666D80]">
        <p>
          Make the most out of your hosting plans, all for a price that fits
          your budget.
        </p>
      </div>
      {/* Border Section with Cards */}
      <div className="flex items-center justify-center px-4">
        <div className="border border-[#E0E2E6] rounded-lg shadow-md p-4 mt-6 bg-white md:w-[950px] w-[980px] flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-8 border border-[#E0E2E6] bg-[#F9FAFC] rounded-lg shadow-md md:[350px] w-[300px] h-[150px]">
              <div className="flex mb-4 justify-between">
                <h3 className="text-xl font-semibold mb-2 text-[#212325]">
                  Register New Domain
                </h3>
                <div className="bg-[#CB6686] rounded-full w-8 h-8 flex items-center justify-center">
                  <img
                    src="/images/arrowIcon.svg"
                    alt="Register Icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-[#98989A] text-sm mt-[-8px]">
                Own your online space! Register your domain name for a
                professional website.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-[#E0E2E6] bg-[#F9FAFC] rounded-lg shadow-md md:[350px] w-[300px] h-[150px]">
              <div className="flex mb-4 justify-between">
                <h3 className="text-xl font-semibold mb-2 text-[#212325]">
                  Transfer Your Domain
                </h3>
                <div className="bg-[#CB6686] rounded-full w-8 h-8 flex items-center justify-center">
                  <img
                    src="/images/arrowIcon.svg"
                    alt="Register Icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-[#98989A] text-sm mt-[-8px]">
                Upgrade Your Hosting, Extend Your Domain (Transfer Today!)
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 border border-[#E0E2E6] bg-[#F9FAFC] rounded-lg shadow-md md:[350px] w-[300px] h-[150px]">
              <div className="flex mb-4 justify-between">
                <h3 className="text-xl font-semibold mb-2 text-[#212325]">
                  Cloud Technology
                </h3>
                <div className="bg-[#CB6686] rounded-full w-8 h-8 flex items-center justify-center">
                  <img
                    src="/images/arrowIcon.svg"
                    alt="Register Icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-[#98989A] text-sm mt-[-8px]">
                Our Cloud computing allows your applications to be shared through
                our network over the Internet’s.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Reviews button */}
      <div className="flex items-center justify-center mt-16 cursor-pointer">
        <div className="border border-[#E0E2E6] rounded-full w-[150px] p-1 shadow-sm flex items-center justify-center">
          <h1 className="text-[#666D80] ml-1 text-md font-[700]">
            Our Reviews
          </h1>
          <div className="ml-1 text-xl mb-1">⭐</div>
        </div>
      </div>
      {/* Client Testimonials Section */}
      <div className="bg-[url('/images/map.png')] bg-cover bg-center py-16 shadow-3xl">
        {/* Section Title */}
        <div className="text-center text-[#212325] mt-[-50px]">
          <h2 className="md:text-4xl text-2xl font-bold">What Our Clients Says?</h2>
          <p className="md:text-medium text-sm mt-4 text-[#666D80]">
            1,000+ Customers Served. 3+ Years of Experience.
          </p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-6 md:px-96 items-center justify-center">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              {/* Profile Image */}
              <img
                src="/images/profile-one.svg"
                alt="profile-one"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-col">
                <h3 className="text-lg font-semibold text-gray-400">
                  Abdulazeez Mubarak
                </h3>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  📍Lagos State, Nigeria
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              {/* Comment Card */}
              <div className="bg-[#F9FAFC] rounded-lg shadow-md mt-4 p-6 w-[250px] relative">
                <div className="bg-[#F9FAFC] flex items-center justify-center gap-2 mb-2 text-yellow-500 absolute left-1/2 transform -translate-x-1/2 -top-3 p-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-center">
                  Their hosting is very affordable and their customer service is
                  the best.
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              {/* Profile Image */}
              <img
                src="/images/profile-two.svg"
                alt="profile-two"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-col">
                <h3 className="text-lg font-semibold text-gray-400">
                  Sayles Russell
                </h3>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  📍United State
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              {/* Comment Card */}
              <div className="bg-[#F9FAFC] rounded-lg shadow-md mt-4 p-6 w-[260px] relative">
                <div className="bg-[#F9FAFC] flex items-center justify-center gap-2 mb-2 text-yellow-500 absolute left-1/2 transform -translate-x-1/2 -top-3 p-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-center">
                  I recently started using Lytehosting and so far, my experience
                  has been positive
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              {/* Profile Image */}
              <img
                src="/images/profile-three.svg"
                alt="profile-three"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-col">
                <h3 className="text-lg font-semibold text-gray-400">
                  Code Naija Hub
                </h3>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  📍FCT, Abuja, Nigeria
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              {/* Comment Card */}
              <div className="bg-[#F9FAFC] rounded-lg shadow-md mt-4 p-6 w-[260px] relative">
                <div className="bg-[#F9FAFC] flex items-center justify-center gap-2 mb-2 text-yellow-500 absolute left-1/2 transform -translate-x-1/2 -top-3 p-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-center">
                  Trust worthy, one of the best reliable hosting company. Fast
                  response time, with 24/7 no downtime. Good services. I must
                  commend the company.
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              {/* Profile Image */}
              <img
                src="/images/profile-four.svg"
                alt="profile-four"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-col">
                <h3 className="text-lg font-semibold text-gray-400">
                  Victor Edet
                </h3>
                <div className="flex items-center text-sm text-[#666666] mt-1">
                  📍Jos State, Nigeria
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              {/* Comment Card */}
              <div className="bg-[#F9FAFC] rounded-lg shadow-md mt-4 p-6 w-[260px] relative">
                <div className="bg-[#F9FAFC] flex items-center justify-center gap-2 mb-2 text-yellow-500 absolute left-1/2 transform -translate-x-1/2 -top-3 p-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-center">
                  These guys are excellent. Excellent in customer service. I
                  have been using other host until i found them & they have been
                  on top of their game.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* see others review button */}
        <div className="flex items-center justify-center mt-4 cursor-pointer">
          <div className="border border-[#E0E2E6] rounded-full w-[250px] p-2 shadow-sm flex items-center justify-center">
            <h1 className="text-[#666D80] ml-1 text-sm font-[700]">
              See other customers reviews
            </h1>
            <div className="ml-1 mt-0.5">
              <img
                src="/images/arrow-right.svg"
                alt="arrow-right"
                className="h-2 w-2"
              />
            </div>
            <div className="ml-[-3px] mt-0.5">
              <img
                src="/images/arrow-right-sec.svg"
                alt="arrow-right"
                className="h-2 w-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* bottom card */}
      <div className="flex items-center justify-center relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-0 mt-0 px-6 md:px-16 md:mb-32 mb-10 w-[1000px]">
          {/* Card 1 */}
          <div className="border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center justify-center">
            {/* Icon */}
            <img
              src="/images/message.svg"
              alt="message.svg"
              className="h-12 w-12"
            />
            {/* Title */}
            <p className="text-md font-[500] text-gray-600 mt-4">
              Live Chat & Support Solution
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center justify-center">
            {/* Icon */}
            <img src="/images/mail.svg" alt="mail.svg" className="h-12 w-12" />
            {/* Title */}
            <p className="text-md font-[500] text-gray-600 mt-4">
              Send Us A Tickets You Created
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center justify-center">
            {/* Icon */}
            <img
              src="/images/file-bookmark.svg"
              alt="file-bookmark.svg"
              className="h-12 w-12"
            />
            {/* Title */}
            <p className="text-md font-[500] text-gray-600 mt-4">
              Build Knowledge Base System
            </p>
          </div>
        </div>
      </div>
      {/* Newsletter Section */} 
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 w-full max-w-[845px] md:max-h-[50px] max-h-[245px] bg-[#CB6686] border-4 border-white text-white flex flex-col md:flex-row items-center px-10 py-12 rounded-xl shadow-lg space-y-2 md:space-y-0 md:space-x-6 md:mt-2 mt-20">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-xl font-bold">SIGN UP TO OUR NEWS LETTER</h2>
          <p className="text-sm mt-1">
            Subscribe to our newsletter to receive news and updates
          </p>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex items-center border rounded-lg overflow-hidden bg-white ml-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow p-3 text-black placeholder-gray-300 focus:outline-none w-[300px] text-sm"
            />
            <button className="bg-black text-white flex items-center justify-center rounded-xl shadow-md hover:bg-gray-800 transition duration-300 ease-in-out mr-2">
              <img
                src="/images/newsletterSvg.svg"
                alt="Send"
                className="md:h-10 h-6 w-20 md:w-10 pt-1"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
