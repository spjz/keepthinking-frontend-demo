import React, { Component } from 'react';
import Section from '~/components/section';

export class Events extends Component {
  render() {
    return (
      <Section id="events" title="Events" titleBar={true} link="/news">
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="py-2">
              <div className="w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-1.png')]"></div>
              <p className="py-2 font-bold">Exhibition: He Xiangyu monograph released by Distanz</p>
              <p className="py-1">From March 2016</p>
              <p className="py-1">He Xiangyu and Liu Wei are among 74 international artists from 33 countries chosen to feature in the Yinchuan Biennale 2016</p>
            </div>
            <div className="py-2">
            <div className="w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-2.png')]"></div>
              <p className="py-2 font-bold">Exhibition: Runa islam at SFMOMA, San Francisco</p>
              <p className="py-1">From March 2016</p>
              <p className="py-1">'Verso', SFMOMA's solo presentation of Bangladeshi-born British artist Runa Islam, features the US premiere of Cabinet of Prototypes (2009-10)</p>
            </div>
            <div className="py-2">
            <div className="w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-3.png')]"></div>
              <p className="py-2 font-bold">Preview: White Cube Mason's Yard</p>
              <p className="py-1">19 January 2017, 6 to 8pm</p>
              <p className="py-1">Join us at Mason's Yard, London flr the preview of the new Park Seo-Bo exhibition curated by Katherine Kostyal.</p>
            </div>
          </div>
      </Section>
    );
  }
}

export default Events;