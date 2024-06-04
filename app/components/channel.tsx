import React, { Component } from 'react';
import Section from '~/components/section';

export class Channel extends Component {
  render() {
    return (
      <Section id="channel" titleBar={true} title="Channel" link="/channel">
        <div>
          <div className="w-full h-64 bg-no-repeat bg-cover bg-center bg-[url('https://source.unsplash.com/random?auditorium')]"></div>
          <div className="py-2 grid grid-cols-2 gap-3">
            <p className="py-1 font-bold">Anselm Kiefer in conversation with Tim Marlow in the Auditorium</p>
            <p className="py-1">In this film Anselm Kiefer discusses his work and his exhibition 'Walhalla' at White Cube Bermondsey with Tim Marlow.</p>
          </div>
        </div>
      </Section>
    );
  }
}

export default Channel;