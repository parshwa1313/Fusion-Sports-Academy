import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const testimonials = [
    {
      name: "Riya Mehta",
      text: "Fusion Sport Academy has completely changed my fitness journey. The badminton coaching is top-notch, and the trainers really focus on technique and stamina. Highly recommend!",
      image:
        "https://images.pexels.com/photos/30929008/pexels-photo-30929008/free-photo-of-traditional-indian-woman-in-ornate-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Aarav Desai",
      text: "As a football lover, Fusion Sport Academy gave me the perfect platform to level up. The turf is amazing and coaches push you to your limits in the best way.",
      image:
        "https://english.cdn.zeenews.com/sites/default/files/2017/11/17/639329-indian-men.jpg?im=Resize=(1200,900)",
    },
    {
      name: "Saanvi Shah",
      text: "Started with basic tennis lessons here and within months I could feel real improvement. Friendly environment and energetic coaches — I absolutely love coming here!",
      image:
        "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=",
    },
    {
      name: "Vivaan Shah",
      text: "Fusion’s cricket coaching is 🔥! Every session is intense and super fun. Great team spirit and professional mentoring by the coaches.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwf0LT1ts58csSCr5N05qmTHMYStVvWmOXQ&s",
    },
    {
      name: "Kavya Patel",
      text: "Joined Fusion for badminton and fitness and I'm hooked! The facility is clean, sessions are energetic, and trainers give personal attention.",
      image:
        "https://t3.ftcdn.net/jpg/02/20/98/16/360_F_220981696_WDxow3nElyH1Ny84PuMAOFuXCWiXT69q.jpg",
    },
    {
      name: "Anicka Sharma",
      text: "Hands down the best football training ground in town. Excellent drills, great guidance, and a very motivating team vibe. Love it!",
      image:
        "https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ishita Trivedi",
      text: "The gym and fitness programs at Fusion are seriously impressive. My stamina and strength have improved drastically thanks to the focused training.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaTNt_aqU5hi7NJ_FyypTDu2oCzEHWcCGDw&s",
    },
    {
      name: "Zeeshan Shaikh",
      text: "Wasn't into fitness before but Fusion got me hooked. I started with cricket and now I also do gym sessions. Trainers are encouraging and professional.",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKKM_YBsHUZRbOv8BgMSUSUAW79eLcdcHaRlbzYzCZN4IEzUg=w68-h68-p-rp-mo-br100",
    },
  ];
  

export default function Testimonials() {
  return (
    <div className="py-14 bg-green-500/80">
      <div className="space-y-6 px-6 text-center max-w-xl mx-auto mb-5">
        <h1 className="uppercase font-semibold text-orange-600 text-lg md:text-2xl">
          OUR TESTIMONIALS
        </h1>
        <p className="font-semibold text-2xl md:text-3xl ">
          What People Are Saying
        </p>
      </div>

      <div className="container mx-auto px-10 relative">
        {/* Navigation buttons */}
        <button className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/318/318275.png" alt="" className="w-6 h-6 rotate-180"/>
        </button>
        <button className="swiper-button-next-custom absolute top-1/2 right-2 z-10 transform -translate-y-1/2 p-2 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/318/318275.png" alt="" className="w-6 h-6"/>
        </button>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mb-4">
              <div className="my-6 flex flex-col p-6 md:p-8 shadow-lg rounded-xl mx-2 md:mx-4 bg-white relative transition-transform duration-300 hover:scale-105 h-80">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-14 h-14 md:w-16 md:h-16 object-cover"
                  />
                  <p className="text-lg md:text-xl font-bold text-black/80">
                    {testimonial.name}
                  </p>
                </div>
                <div className="py-4 space-y-4 flex flex-1 flex-col justify-between">
                  <p className="text-sm text-gray-500">{testimonial.text}</p>
                  <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Quote"
                  className="w-8 h-8 md:w-8 md:h-8 absolute top-4 right-4 bg-[#f5dfcd] p-1 md:p-2 rounded-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}