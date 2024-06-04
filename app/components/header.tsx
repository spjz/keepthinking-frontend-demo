import React, { Component } from 'react'
import MenuIcon from '~/icons/menu-outline.svg';
import SearchIcon from '~/icons/search-outline.svg';

// type NavProps = {
//   title: string
// }

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
        {this.state.hideMenu === false && <nav className="absolute top-0 right-0 left-0 p-8 bg-white">
          <h1 onClick={this.handleToggleMenu.bind(this)}>x</h1>
        </nav>}
      </div>
    );
  }
}

export default Header;