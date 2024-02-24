//Dependicies
import { Link } from "react-router-dom";
import "./Whychoseus.css";

const WhyChooseUs = () => {
  return (
    <div className="mg flex lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] bg-[#56ab91] gap-10">
      <div className="flex flex-col justify-center items-start gap-[2rem]">
        <h1 className=" font-bold text-5xl text-white font-['Kanit']">
          Who Are <span className="text-white">We ?</span>
        </h1>
        <p className="text-white  text-[0.9rem] font-normal text-justify max-w-[160rem] bg-no-repeat bg-center bg-cover">
          "Kawality.com is your premier destination for seamless travel experiences. Discover a world of adventure with
          our curated selection of top destinations, personalized itineraries, and handpicked accommodations. Whether
          you're planning a relaxing getaway, a thrilling adventure, or a cultural exploration, Kawality.com is your
          trusted companion every step of the way. With our commitment to quality, convenience, and exceptional service,
          we ensure your journey is nothing short of extraordinary."
        </p>
        <Link to="../About">
          <button className="py-[0.5rem] px-[1.7rem] text-black bg-white  text-[0.9rem]">Read More</button>
        </Link>
      </div>

      <div
        className="border-[0.5rem] w-[100rem] h-[20rem] flex-grow lg:inline-block hidden"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/beautiful-girl-standing-airport_1157-22071.jpg?t=st=1708767296~exp=1708770896~hmac=109030261453cd83c22c889457b8682fcd253571b57424bad6c85dad6db84308&w=740')",
        }}
      ></div>
    </div>
  );
};

export default WhyChooseUs;
