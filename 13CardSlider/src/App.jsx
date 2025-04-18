import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";


function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return (
    <div className="w-full m-auto">
      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="relative bg-white h-[500px] overflow-hidden">
                <img src={d.img} className="h-full w-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: `https://images.pexels.com/photos/2131654/pexels-photo-2131654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  },
  {
    img: `https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  },
  {
    img: `https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  },
  {
    img: `https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  },
  {
    img: `https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  }
];

export default App;
