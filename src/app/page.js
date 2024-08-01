
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import CardTwo from "./components/cardTwo";
import CarouselImg from "./components/carousel";
import CarouselPrimary from "./components/carouselPrimary";
import CustomSearch from "./components/customSearch";
import TextWithImages from "./components/TextWithImages";

const CardTwoData=[
  {
    img:'https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg',
    heading:'Buy a home',
    text:'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    buttonText:'Find a home'
},
{
  img:'https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg',
  heading:'Rent a home',
  text:`With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.`,
  buttonText:'Find a Rental'
},
{
  img:'https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg',
  heading:'See neighborhoods',
  text:`With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.`,
  buttonText:'Learn more'
},
]

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="font-trulia font-bold">
    <Banner/>
    <div className="text-center flex flex-col justify-center items-center mt-14">
    <h1 className="text-[#3b4144] text-[39px]  md:text-[38px] font-bold">Explore homes on Trulia</h1>
     <p className="text-[#3b4144] text-[16px] font-normal w-[85%] md:w-[80%] lg:w-[60%] xl:w-[40%]">Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p> 
    </div>
    <CarouselPrimary/>
    <h1 className="text-[#3b4144] text-[30px] md:text-[38px] font-bold text-center">Newly listed homes in Atlanta</h1>
    <CarouselImg/>
    <h1 className="text-[#3b4144] text-[30px] md:text-[38px] font-bold text-center p-[18px] md:p-0">See how Trulia can help</h1>
    <div className="flex  flex-col md:flex-row justify-center items-center mb-3">
      {CardTwoData.map(data=><CardTwo key={data.buttonText} data={data}/>)}
    </div>
    <div className="text-center text-[#3b4144] flex flex-col justify-center items-center ">
      <h1 className="font-[700] text-[20px] mt-5">Check out a neighborhood</h1>
      <div className="lg:w-[24%]"><CustomSearch bgcolor='bg-[rgb(245,246,247)]' placeholder='Search for City, Neighborhood, Zip, County, School'/></div>
    </div>
    <TextWithImages/>
    </div>
    </>
  );
}
