import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
const Review = () => {

    const [review, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-20'>
            <SectionTitle subHeading="what our client Say"
                heading="Review">

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide key={review._id}
                    >
                <div className='flex flex-col items-center my-16 mx-20'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />

                    <p className='py-8'> {review.details} </p>
                    {/* <div className="h3 text-2xl text-orange-500"> {review.name} </div> */}
                <h3 className="text-orange">{review.name}</h3>
                </div> 
                
            </SwiperSlide>)
                }
                
            </Swiper>

        </section>
    );
};

export default Review;