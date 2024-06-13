import React, { Component, MouseEventHandler, PropsWithChildren } from 'react';
import Section from '~/components/section';

export class Artists extends Component {

  constructor(props:PropsWithChildren) {
    super(props);
    this.state = {
      showCover: false,
      style: {},
      images: [],
      defaultCover: '/images/artist.png',
    };
  }

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

  handleMouseEnter(e:MouseEvent) {
    let src = this.state.images[e.currentTarget.dataset.key];

    this.setState({
      showCover: true,
      style: {"backgroundImage": "url('" + src + "')"}
    });
    if (!e.currentTarget.classList.contains('underline')) {
      e.currentTarget.classList.add('underline');
    }
    return e;
  }

  handleMouseLeave(e:MouseEvent) {
    this.setState({
      showCover: false,
      style: {"backgroundImage": "url('" + this.state.defaultCover + "')"}
    });
    if (e.currentTarget.classList.contains('underline')) {
      e.currentTarget.classList.remove('underline');
    }
    return e;
  }

  // Preload artist images
  componentDidMount() {
    let images:Array<HTMLImageElement> = [];
    this.getArtists().map(
      (artistName, i) => {
        images[i] = new Image();
        images[i].src = 'https://source.unsplash.com/random/?' + encodeURI(artistName);
      }
    );
    this.setState({images: images});
  }

  render() {
    return (
      <Section id="artists" title="Artists" titleBar={true}>
         <div className="w-full flex flex-row items-start relative">
            <ul className="w-auto flex-grow flex-col flex-wrap columns-1 sm:columns-3">
              {this.getArtists().map((artistName, i) => (
                <li key={i}
                  data-key={i}
                  onMouseEnter={this.handleMouseEnter.bind(this)}
                  onMouseLeave={this.handleMouseLeave.bind(this)}> 
                  <a href="#" title={artistName}>
                    {artistName}
                  </a>
                </li>
              ))}
            </ul>

            <div className="transition-[background-image] size-64 bg-no-repeat bg-cover bg-center sticky top-2" style={this.state.style}></div>
        </div>
      </Section>
    );
  }
}

export default Artists;