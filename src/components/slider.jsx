
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

function Slider({ randomCards }) {


    return (
        <>

            <div className="w-full mt-20 m-auto flex items-center flex-col select-none  " >
                <div className="text-3xl text-green-500"><h1> <FontAwesomeIcon icon={faShuffle} /> اكتشف</h1></div>
                <div id="sliderBg" className="wood-bg w-full rounded-md  m-2 overflow-hidden drop-shadow-2xl  "  >
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        pagination={{ clickable: true, currentClass: "swiper-pagination-bullet" }}
                        autoplay={true}
                        breakpoints={{
                            992: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation
                        grabCursor={true}
                        className="w-full text-green-500"

                    >

                        {randomCards.map(c => {
                            return (
                                <SwiperSlide key={c.key} className="flex items-center justify-center ">
                                    {c.content}
                                </SwiperSlide>
                            )
                        })}



                    </Swiper>
                </div>
            </div>
        </>
    )




}

export default Slider;
