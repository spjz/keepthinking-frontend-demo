import { register } from 'swiper/element/bundle';
import React, { Component } from 'react';
import { Section } from '~/components/section';

export class Gallery extends Component {

  render() {
    register();

    return (
      <Section id="gallery" titleBar={false}>
        <swiper-container speed="500" loop="true" css-mode="true">

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
      </Section>
    );
  }

}

export default Gallery;