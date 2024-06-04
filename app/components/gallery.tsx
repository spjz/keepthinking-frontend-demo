import { register } from 'swiper/element/bundle';
import React, { useRef, useEffect, Component } from 'react';
import { Section } from '~/components/section';

export class Gallery extends Component {
  
  render() {
    register();

    return (
      <Section id="gallery" titleBar={false}>
        <swiper-container
          autoplay="true"
          speed="300"
          loop="true"
          css-mode="true"
          pagination="true"
          paginationClickable="true"
          style={{
            "--swiper-pagination-color": "#ff5c5c",
            "--swiper-pagination-bullet-inactive-color": "#dfdfdd",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "46px",
          }}
        >

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]"></div>
            <div className="py-4">
              <a href="#" className="hover:underline">
                <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
                <p className="text-lg">Until 12 February 2017, London</p>
              </a>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]"></div>
            <div className="py-4">
              <a href="#" className="hover:underline">
                <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
                <p className="text-lg">Until 12 February 2017, London</p>
              </a>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]"></div>
            <div className="py-4">
              <a href="#" className="hover:underline">
                <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
                <p className="text-lg">Until 12 February 2017, London</p>
              </a>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]"></div>
            <div className="py-4">
              <a href="#" className="hover:underline">
                <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
                <p className="text-lg">Until 12 February 2017, London</p>
              </a>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]"></div>
            <div className="py-4">
              <a href="#" className="hover:underline">
                <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
                <p className="text-lg">Until 12 February 2017, London</p>
              </a>
            </div>
          </swiper-slide>

        </swiper-container>
      </Section>
    );
  }

}

export default Gallery;