const OurServices = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-white px-[2rem] py-[4rem] ">
        <h1 className="text-center text-4xl sm:text-5xl text-black font-bold font-['Kanit']">
          Our <span className="text-[#56ab91]">Products</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[4rem] bg-white h-auto p-[4rem]  lg:px-[6rem] lg:py-[2rem]">
        <div className="flex flex-col justify-start items-start">
          <div className="py-[0.5rem]">
            <img
              className="w-[32rem]"
              src="https://img.freepik.com/free-photo/flying-commercial-airplane-sunset-business-travel-mode-generated-by-ai_188544-151694.jpg?t=st=1708763395~exp=1708766995~hmac=de02fa03437c0e013b15048a520debdcb3196d345b2e5c75d6f6e07e17af2a92&w=826"
              alt=""
            />
          </div>
          <div className="py-[0.5rem]">
            <h1 className="text-start  text-[#56ab91] font-bold text-3xl">Flight Booking Service</h1>
          </div>
          <div className="py-[0.5rem]">
            <p>
              Welcome to Kwality.com – Your Premier Destination for Hassle-Free Flight Bookings! At Kwality.com, we
              understand that travel is more than just reaching a destination; it's about the journey itself. That's why
              we're dedicated to providing you with a seamless and enjoyable flight booking experience every time you
              plan your next adventure.
            </p>
          </div>
          <div className="py-[0.5rem] text-2xl font-bold">
            <h2>Why Choose Kwality.com for Your Flight Bookings?</h2>
          </div>
          <div className="p-[1rem]">
            <ul className="list-disc ">
              <li>
                Wide Range of Options: Whether you're planning a quick business trip or a leisurely vacation,
                Kwality.com offers an extensive selection of flights to suit your needs.
              </li>
              <li>
                User-Friendly Interface: Our intuitive website interface makes it easy for you to search, compare, and
                book flights with just a few clicks
              </li>
              <li>
                Competitive Pricing: At Kwality.com, we believe in offering competitive pricing without compromising on
                quality.
              </li>
              <li>Secure Booking Process: Your security and privacy are our top priorities.</li>
              <li>
                24/7 Customer Support: Need assistance or have questions about your booking? Our dedicated customer
                support team is available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <div className="py-[0.5rem]">
            <img
              className="w-[32rem]"
              src="https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683481.jpg?t=st=1708763541~exp=1708767141~hmac=febae1d3c5091fa979c05e5be298134b9e84b9dfa42e5a35ca18fd10abdd5f14&w=826"
              alt=""
            />
          </div>
          <div className="py-[0.5rem]">
            <h1 className="text-start  text-[#56ab91] font-bold text-3xl">Hotel Booking Service</h1>
          </div>

          <div className="py-[0.5rem]">
            <p>
              Welcome to Kwality.com – Your Ultimate Destination for Seamless Hotel Bookings! At Kwality.com, we
              understand that where you stay plays a crucial role in shaping your travel experience. That's why we're
              dedicated to providing you with a comprehensive and hassle-free platform to book the perfect accommodation
              for your next journey.
            </p>
          </div>
          <div className="py-[0.5rem] text-2xl font-bold">
            <h2>Why Choose Kwality.com for Your Hotet Bookings?</h2>
          </div>
          <div className="p-[1rem]">
            <ul className="list-disc ">
              <li>
                Extensive Selection: Whether you're planning a luxurious getaway, a budget-friendly stay, or a cozy bed
                and breakfast
              </li>
              <li>
                User-Friendly Interface: Our intuitive website interface makes it effortless for you to search, compare,
                and book hotels with ease.
              </li>
              <li>Best Price Guarantee: At Kwality.com, we believe in offering the best value for your money.</li>
              <li>
                Verified Reviews and Ratings: Make informed decisions with the help of our verified reviews and ratings
                from fellow travelers
              </li>
              <li>Secure Booking Process: Your security and privacy are our top priorities. </li>
              <li>
                24/7 Customer Support: Need assistance or have questions about your booking? Our dedicated customer
                support team is available 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
