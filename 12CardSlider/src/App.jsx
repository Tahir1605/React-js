import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }


  return (
    <div className="w-3/4 m-auto">
     <div className="mt-20">
     <Slider {...settings}>
      {data.map((d) => (
        <div className="bg-white h-[450px] text-black rounded-xl">
          <div className="rounded-t-xl h-56 bg-indigo-500 flex justify-center items-center">
            <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <p className="text-xl font-semibold">{d.name}</p>
            <p>{d.review}</p>
            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
          </div>
        </div>
      ))}
      </Slider>
     </div>
    </div>
  )
}

const data = [
  {
    name:`River`,
    img:`https://images.pexels.com/photos/2131654/pexels-photo-2131654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    review:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus obcaecati.`
  },
  {
    name:`Forest`,
    img:`https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    review:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus obcaecati.`
  },
  {
    name:`Mountain`,
    img:`https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    review:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus obcaecati. `
  },
  {
    name:`Animal`,
    img:`https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus obcaecati.`
  },
  {
    name:`Flower`,
    img:`https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloribus obcaecati.`
  }

]

export default App
