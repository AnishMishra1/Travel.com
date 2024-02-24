import { Card, CardFooter, Image } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import dubai from "../globalAssets/images/dubai.jpg";
import maldives from "../globalAssets/images/maldives.jpg";
import malasia from "../globalAssets/images/malasia.jpg";
import bali from "../globalAssets/images/bali.jpg";
import paris from "../globalAssets/images/paris.jpg";

const content = [
  {
    place: "TOKYO",
    pic: "https://img.freepik.com/free-photo/famous-shiodome-area-evening-time-minato-tokyo-japan_181624-9599.jpg?t=st=1708767679~exp=1708771279~hmac=eb91faf439e97359218fa213b639573e8da6932be79606af9c358f5b9e61b748&w=360",
    title: "Explore Tokyo",
    des: "Immerse yourself in the bustling metropolis of Tokyo. From traditional shrines to modern skyscrapers...",
  },
  {
    place: "NEW YORK CITY",
    pic: "https://img.freepik.com/free-photo/vertical-distant-shot-brooklyn-bridge-body-water-near-skyscrapers-new-york_181624-2286.jpg?t=st=1708767736~exp=1708771336~hmac=aff538125302ae75791f47b6cb8b22d357b6a653ce9e975551643a6df1eeb863&w=360",
    title: "Explore New York City",
    des: "Experience the energy of the Big Apple, from the bright lights of Times Square to the tranquility of Central Park...",
  },
  {
    place: "LONDON",
    pic: "https://img.freepik.com/free-photo/vertical-view-victoria-tower-located-palace-westminster-london-downtown-united-kingdom-blue-sky-with-flying-plane-background_1268-24432.jpg?t=st=1708767786~exp=1708771386~hmac=08f20d4dd8897b3c654f1b61b446be85df9cdb3cb26e8d496577fd665bf66fc6&w=360",
    title: "Explore London",
    des: "Discover the rich history and vibrant culture of London. From iconic landmarks to hidden gems...",
  },
  {
    place: "ROME",
    pic: "https://img.freepik.com/free-photo/vertical-shot-buildings-florence-italy-from-hill_181624-44214.jpg?t=st=1708767823~exp=1708771423~hmac=11454c4844f7a9649702add6870b3e44afcac5d75bc17ffa9aaae0c8d427a6aa&w=360",
    title: "Explore Rome",
    des: "Step back in time and explore the ancient wonders of Rome. From the Colosseum to the Vatican...",
  },
  {
    place: "DUBAI",
    pic: "https://img.freepik.com/free-photo/burj-khalifa-tower-this-skyscraper-is-tallest-man-made-structure-world-measuring-828-m-completed-2009_231208-7574.jpg?t=st=1708767921~exp=1708771521~hmac=a75fa2e798284100c073ed08cc02828e91266816fbbfe5b885b85cb1bb9e5801&w=360",
    title: "Explore Dubai",
    des: "Discover the luxury and opulence of Dubai. From towering skyscrapers to desert adventures...",
  },
  {
    place: "TOKYO",
    pic: "https://img.freepik.com/free-photo/famous-shiodome-area-evening-time-minato-tokyo-japan_181624-9599.jpg?t=st=1708767679~exp=1708771279~hmac=eb91faf439e97359218fa213b639573e8da6932be79606af9c358f5b9e61b748&w=360",
    title: "Explore Tokyo",
    des: "Immerse yourself in the bustling metropolis of Tokyo. From traditional shrines to modern skyscrapers...",
  },
  {
    place: "NEW YORK CITY",
    pic: "https://img.freepik.com/free-photo/vertical-distant-shot-brooklyn-bridge-body-water-near-skyscrapers-new-york_181624-2286.jpg?t=st=1708767736~exp=1708771336~hmac=aff538125302ae75791f47b6cb8b22d357b6a653ce9e975551643a6df1eeb863&w=360",
    title: "Explore New York City",
    des: "Experience the energy of the Big Apple, from the bright lights of Times Square to the tranquility of Central Park...",
  },
  {
    place: "LONDON",
    pic: "https://img.freepik.com/free-photo/vertical-view-victoria-tower-located-palace-westminster-london-downtown-united-kingdom-blue-sky-with-flying-plane-background_1268-24432.jpg?t=st=1708767786~exp=1708771386~hmac=08f20d4dd8897b3c654f1b61b446be85df9cdb3cb26e8d496577fd665bf66fc6&w=360",
    title: "Explore London",
    des: "Discover the rich history and vibrant culture of London. From iconic landmarks to hidden gems...",
  },
  {
    place: "ROME",
    pic: "https://img.freepik.com/free-photo/vertical-shot-buildings-florence-italy-from-hill_181624-44214.jpg?t=st=1708767823~exp=1708771423~hmac=11454c4844f7a9649702add6870b3e44afcac5d75bc17ffa9aaae0c8d427a6aa&w=360",
    title: "Explore Rome",
    des: "Step back in time and explore the ancient wonders of Rome. From the Colosseum to the Vatican...",
  },
  {
    place: "DUBAI",
    pic: "https://img.freepik.com/free-photo/burj-khalifa-tower-this-skyscraper-is-tallest-man-made-structure-world-measuring-828-m-completed-2009_231208-7574.jpg?t=st=1708767921~exp=1708771521~hmac=a75fa2e798284100c073ed08cc02828e91266816fbbfe5b885b85cb1bb9e5801&w=360",
    title: "Explore Dubai",
    des: "Discover the luxury and opulence of Dubai. From towering skyscrapers to desert adventures...",
  },
];

const DestinationCard = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[80rem] mx-auto ",
    focusOnSelect: true,
    centerMode: true,
    arrows: undefined,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "max-w-[65rem] mx-auto",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          className: "max-w-[50rem] mx-auto",
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          className: "max-w-[35rem] mx-auto",
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          className: "max-w-[22rem] mx-auto",
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col py-[3rem] md:py-[5rem] bg-white gap-[2rem]">
      <div className="flex flex-col sm:gap-[0.5rem]">
        <h1 className="text-4xl sm:text-5xl font-bold  text-black text-center font-['Kanit']">
          Popular <span className="text-[#56ab91]">Destinations</span>
        </h1>
        <h2 className="text-center font-bold  text-black">
          Enjoy Your <span className="text-[#56ab91]">Destination</span>{" "}
        </h2>
      </div>
      <div className="slider-container max-h-[53vh]">
        <Slider {...settings}>
          {content.map((e, index) => (
            <div key={index} className="w-auto">
              <Card isFooterBlurred radius="lg" className="border-none w-[14rem] h-[20rem]">
                <Image alt={e.place} className="object-cover w-[15rem] h-[20rem]" src={e.pic} />
                <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <div className="flex flex-col">
                    <p className="text-white">{e.place}</p>
                    <p className="text-md text-white font-semibold">{e.title}</p>
                    <p className="text-tiny text-white">{e.des}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DestinationCard;
