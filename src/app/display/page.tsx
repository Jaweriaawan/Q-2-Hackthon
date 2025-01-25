import Carousel from "../component/carousel"

export default function Display(){
  const Slides = [
    "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Beautiful sunrise landscape
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Calm mountain lake
    "https://images.unsplash.com/photo-1506748686214-9c7b5d992f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Forest pathway
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Sunset beach waves
  ];
  

  return <div className="w-[60%] m-auto pt-11">
   <Carousel Slides={Slides} />
</div>
}
