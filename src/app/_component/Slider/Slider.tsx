// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Image from 'next/image';
// import { Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// type SliderType = {
//     spaceBetween:number 
//     slidesPerView:number 
//     pageList:string []
//     className:string
// }

// export default function Slider({spaceBetween, slidesPerView,pageList,className="hero-slider"}:SliderType) {
//   return (
//     <Swiper
//       loop={true}
//       modules={[Navigation, Pagination]}
//       spaceBetween={spaceBetween}
//       slidesPerView={slidesPerView}
//       navigation className={className}
//       pagination={{ clickable: true, renderBullet(index, className) {
//         return `<span class='${className} !w-3 !h-3 !bg-white !opacity-60 '></span>`
//       }, bulletActiveClass : '!bg-white !w-[35px] !h-[12px] !rounded-lg !opacity-100' }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
      
//       {pageList.map((src)=>{return <SwiperSlide>
//         <Image src={src} className='w-full h-100 object-cover' alt='' width={400} height={300}/>
//       </SwiperSlide> })}
      
//     </Swiper>
//   );
// };

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SliderType = {
    spaceBetween: number
    slidesPerView: number
    pageList: string[]
    className?: string
    hasOverlay?: boolean
    overlayColor?: string
}

export default function Slider({
  spaceBetween,
  slidesPerView,
  pageList,
  className,
  hasOverlay = false,
  overlayColor = 'rgba(0,0,0,0.4)',
}: SliderType) {
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      className={className}
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class='${className} !w-3 !h-3 !bg-white !opacity-60 '></span>`
        },
        bulletActiveClass: '!bg-white !w-[35px] !h-[12px] !rounded-lg !opacity-100',
      }}
    >
      {pageList.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-100">
            <Image src={src} className="w-full h-full object-cover" alt="" width={400} height={300} />
            {hasOverlay && (
              <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};