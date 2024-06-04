import { register } from 'swiper/element/bundle';
import React, { useRef, useEffect, Component } from 'react';
import { Section } from '~/components/section';


export class Gallery extends Component {

  render() {
    register();

    return (
      <Section id="gallery" titleBar={false}>
        <swiper-container
          speed="500"
          loop="true"
          css-mode="true"
          pagination="true"
          style={{
            "--swiper-pagination-color": "#ff5c5c",
            "--swiper-pagination-bullet-inactive-color": "#dfdfdd",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "46px",
            "--swiper-pagination-width": "auto",
          }}
        >

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/public/images/banner.png')]"></div>
            <div className="py-4">
              <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
              <p className="text-lg">Until 12 February 2017, London</p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/public/images/banner.png')]"></div>
            <div className="py-4">
              <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
              <p className="text-lg">Until 12 February 2017, London</p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/public/images/banner.png')]"></div>
            <div className="py-4">
              <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
              <p className="text-lg">Until 12 February 2017, London</p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/public/images/banner.png')]"></div>
            <div className="py-4">
              <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
              <p className="text-lg">Until 12 February 2017, London</p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="h-96 w-full bg-cover bg-center bg-[url('/public/images/banner.png')]"></div>
            <div className="py-4">
              <p className="font-bold text-xl">Anselm Kiefer: Walhalla</p>
              <p className="text-lg">Until 12 February 2017, London</p>
            </div>
          </swiper-slide>

        </swiper-container>

        {/* <div id="pagination" className="grid grid-flow-col gap-2">
          <span data-slide="1" className="page active size-3"></span>
          <span data-slide="2" className="page size-3"></span>
        </div> */}
      </Section>
    );
  }

}

export default Gallery;