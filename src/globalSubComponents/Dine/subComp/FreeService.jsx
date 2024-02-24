import React from "react";
import { Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FreeService = () => {
  return (
    <div className="flex flex-col p-5 px-[1rem] lg:px-[6rem] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
        <div className="md:mt-[5rem]">
          <h1 className=" text-3xl font-bold mb-5 md:mb-8">
            AT THE <span className="  text-[#56ab91] ">AIRPORT</span>
          </h1>
          <p className=" text-md md:text-lg">
            Access to separate check-in counters or expedited check-in processes to minimize wait times.Entry to airport
            lounges equipped with comfortable seating, complimentary food and beverages, Wi-Fi, and other amenities to
            relax or work before your flight.
          </p>
          {/* <Link to="../Recipes" className="flex items-center gap-2 md:gap-4 hover:gap-6 duration-100 text-white mt-8">
            <p className="font-bold text-lg md:text-xl">SEE ALL RECIPES</p>
            <FaArrowRightLong className="w-12 md:w-16 mt-1" />
          </Link> */}
        </div>
        <div className="flex flex-col relative top-[3rem]">
          <div className="flex flex-row ">
            <Image
              width={220}
              src="https://img.freepik.com/free-photo/beautiful-girl-standing-airport_1157-22049.jpg?w=360&t=st=1708765315~exp=1708765915~hmac=aa36aced208236e2ae0cb3fda39917e92f6c58c5ff2bbda86895978da1340e82"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={190}
              src="https://img.freepik.com/free-photo/medium-shot-happy-family-airport_23-2149272153.jpg?w=740&t=st=1708765308~exp=1708765908~hmac=4194a602da8011244b93be17a3d328fd0d1e97ba55e468cd3099c69d6e0bfb0f"
              className="relative top-5 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/young-handsome-man-with-bag-his-shoulder-hurry-airport_146671-17993.jpg?w=740&t=st=1708765332~exp=1708765932~hmac=79374723c7255dd05d3970889c9eeed7cc59d0e18dcb44cfab1d6324f27c4d14"
              className="relative left-10  bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895697.jpg?t=st=1708765336~exp=1708768936~hmac=22392c88932ac782e3364155f98c0ababb559077d11e2b4f363fcb563d6613de&w=826"
              className="relative left-12 bottom-20 md:left-24 md:bottom-40"
              radius="none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mt-[7rem] md:mt-[3rem] ">
        <div className=" flex-col relative top-[3rem] lg:inline-block hidden">
          <div className="flex flex-row">
            <Image
              width={260}
              src="https://img.freepik.com/free-photo/man-looking-through-menu-restaurant_23-2150520061.jpg?w=360&t=st=1708765627~exp=1708766227~hmac=82b470e1fae104b2eea2fed57578080de0fe57fc93e5e53be9e64d15e5195318"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={180}
              src="https://img.freepik.com/free-photo/self-service-restaurant_93675-132273.jpg?w=740&t=st=1708765662~exp=1708766262~hmac=b202a887a7db2bf0c9f1db0fc01dd1419b702ab59f8a38162e0c9776a0e73348"
              className="relative top-3 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/close-up-woman-eating-healthy-food_23-2149151659.jpg?w=740&t=st=1708766450~exp=1708767050~hmac=c1526dca6f9452dc76ca6ceae397bb74a94b00750ddabc09a2494c742a2ba45e"
              className="relative left-10 bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://img.freepik.com/free-photo/smiling-girl-eating-ice-cream-waffle-cup-cafe_1153-8266.jpg?t=st=1708766615~exp=1708770215~hmac=b8c98d1bb7811234d8858bd73ba3a192b2596cbbe215251d74d78090ecc6b54f&w=740"
              className="relative left-12 bottom-20 md:left-24 md:bottom-40"
              radius="none"
            />
          </div>
        </div>
        <div className="md:mt-[5rem]">
          <h1 className=" text-3xl font-bold mb-5 md:mb-8">
            FINE <span className="  text-[#56ab91] ">DINING</span> SERVICE
          </h1>
          <p className=" text-md md:text-lg">
            In-flight dining service on airplanes typically involves meals and beverages served to passengers during
            their journey. Depending on the airline and flight duration, dining options can vary from light snacks to
            multi-course meals
          </p>
          {/* <Link to="../Products" className="flex items-center gap-2 md:gap-4 hover:gap-6 duration-100 text-white mt-8">
            <p className="font-bold text-lg md:text-xl">SEE ALL PRODUCTS</p>
            <FaArrowRightLong className="w-12 md:w-16 mt-1" />
          </Link> */}
        </div>
        <div className=" flex-col relative top-[3rem] inline-block lg:hidden">
          <div className="flex flex-row">
            <Image
              width={260}
              src="https://img.freepik.com/free-photo/man-looking-through-menu-restaurant_23-2150520061.jpg?w=360&t=st=1708765627~exp=1708766227~hmac=82b470e1fae104b2eea2fed57578080de0fe57fc93e5e53be9e64d15e5195318"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={180}
              src="https://img.freepik.com/free-photo/self-service-restaurant_93675-132273.jpg?w=740&t=st=1708765662~exp=1708766262~hmac=b202a887a7db2bf0c9f1db0fc01dd1419b702ab59f8a38162e0c9776a0e73348"
              className="relative top-3 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/close-up-woman-eating-healthy-food_23-2149151659.jpg?w=740&t=st=1708766450~exp=1708767050~hmac=c1526dca6f9452dc76ca6ceae397bb74a94b00750ddabc09a2494c742a2ba45e"
              className="relative left-10 bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://img.freepik.com/free-photo/smiling-girl-eating-ice-cream-waffle-cup-cafe_1153-8266.jpg?t=st=1708766615~exp=1708770215~hmac=b8c98d1bb7811234d8858bd73ba3a192b2596cbbe215251d74d78090ecc6b54f&w=740"
              className="relative left-12 bottom-20 md:left-24 md:bottom-40"
              radius="none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeService;
