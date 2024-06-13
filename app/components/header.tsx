import React, { Component } from 'react'
import MenuIcon from '~/icons/menu-outline.svg';
import SearchIcon from '~/icons/search-outline.svg';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true,
    };
  }

  handleToggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({hideMenu: !this.state.hideMenu});
  }

  render() {
    return (
      <div className="w-full relative">
        <header id="header" className="w-full px-8 pt-6">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="bold uppercase font-display text-4xl">{this.props.title}</h1>
            </div>
            <nav className="flex flex-row">
              <a className="pl-4" href="#">
                <img className="size-8" src="/icons/search-outline.svg" />
              </a>
              <a className="pl-4" href="#" onClick={this.handleToggleMenu.bind(this)}>
                <img className="size-8" src="/icons/menu-outline.svg" />
              </a>
            </nav>
          </div>
        </header>
        {this.state.hideMenu === false && <nav className="absolute top-0 right-0 left-0 z-50 px-8 bg-white shadow-xl">
          <ul className="flex flex-col w-full">
            <li className="py-4 border-b-2 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="py-4 border-b-2 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">Art & Artists</a>
            </li>
            <li className="py-4 border-b-2 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">Exhibitions</a>
            </li>
            <li className="py-4 border-b-2 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">News</a>
            </li>
            <li className="py-4 border-b-2 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="py-4 border-b-gray-400 text-3xl">
              <a href="#" className="hover:underline">Private area</a>
            </li>
          </ul>
          <a href="#"
            onClick={this.handleToggleMenu.bind(this)}
            className="absolute top-0 right-0 py-6 px-8">
              <img src="/icons/close.svg" />
          </a>
        </nav>}
      </div>
    );
  }
}

export default Header;