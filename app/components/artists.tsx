import React, { Component } from 'react';
import Section from '~/components/section';

export class Artists extends Component {
  getArtists() {
    return [
      "Franz Ackermann",
      "Etel Adnan",
      "Darren Almond",
      "Ellen Altfest",
      "Michael Armitage",
      "Miroslaw Balka",
      "Georg Baselitz",
      "Larry Bell",
      "Jake & Dinos Chapman",
      "Chuck Close",
      "Gregory Crewdson",
      "Tracey Emin",
      "Katharina Fritsch",
      "Theaster Gates",
      "Gilbert & George",
      "Antony Gormley",
      "Andreas Gursky",
      "David Hammons",
      "Mona Hatoum",
      "He Xiangyu",
      "Damien Hirst",
      "Robert Irwin",
      "Runa Islam",
      "Sergej Jensen",
      "Anselm Kiefer",
      "Rachel Kneebone",
      "Imi Knoebel",
      "Elad Lassry",
      "Liza Lou",
      "Jac Leirner",
      "Liu Wei",
      "Christian Marclay",
      "Josiah McElhenv",
      "Julie Mehretu",
      "Beatriz Milhazes",
      "Harland Miller",
      "Sarah Morris",
      "Gabriel Orozco",
      "Damián Ortega",
      "Virginia Overton",
      "Eddie Peake",
      "Magnus Plessen",
      "Jessica Rankin",
      "Christian Rosa",
      "Doris Salcedo",
      "Raqib Shaw",
      "Haim Steinbach",
      "Sam Tavlor-Johnson",
      "Fred Tomaselli",
      "Jeff Wall",
      "Cerith Wyn Evans",
    ];
  }

  render() {
    return (
      <Section id="artists" title="Artists" titleBar={false}>
         <div className="w-full flex flex-row items-start">
            <ul className="w-auto flex-grow flex-col flex-wrap columns-3">
              {this.getArtists().map((artistName, i) => (
                <li key={i}>{artistName}</li>
              ))}
            </ul>

            <div className="size-64 bg-no-repeat bg-cover bg-center bg-[url('https://source.unsplash.com/random?artists')]"></div>
          </div>
      </Section>
    );
  }
}

export default Artists;