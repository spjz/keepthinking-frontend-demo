import React, { Component } from 'react';
import Section from '~/components/section';

export class Channel extends Component {
  render() {
    return (
      <Section id="channel" titleBar={true} title="Channel" link="/channel">
        <div>
          {/* <div className="w-full h-64 bg-no-repeat bg-cover bg-center bg-[url('/images/youtube.png')]"></div> */}
          <iframe className="w-full"
            // width="560"
            height="400"
            src="https://www.youtube.com/embed/vlm5tgistqA?si=PDvVe5XsP6z5sN-w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="py-2 grid sm:grid-cols-2 grid-cols-1 gap-3">
            <p className="py-1 font-bold">Anselm Kiefer in conversation with Tim Marlow in the Auditorium</p>
            <p className="py-1">In this film Anselm Kiefer discusses his work and his exhibition 'Walhalla' at White Cube Bermondsey with Tim Marlow.</p>
          </div>
        </div>
      </Section>
    );
  }
}

export default Channel;