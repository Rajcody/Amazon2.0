import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function Banner() {
    return (
        <div className=" relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            
            >
                <div>
                    <img loading="lazy" src = 'https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT' alt=''/>

                </div>
                {/* <div>
                    <img  loading="lazy" src = 'https://lh3.googleusercontent.com/uaLBo04TDoaDq30M6iAyYlULFl_3kaNAVDR2M8sCSjECX1TGvXcHfnXiJN57BXApgo6hHNhrTomqbcc7Ni5jRgG4zu0=w800?s=300'  alt=''/>
                    
                </div> */}
                <div>
                    <img loading="lazy" src = 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/3000x1200_Hero-Tall_NP._CB657360537_.jpg" ' alt=''/>
                    
                </div>

            </Carousel>
            
        </div>
    )
}

export default Banner
