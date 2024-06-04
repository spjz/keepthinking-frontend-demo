import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="w-full flex justify-center">
        <div className="w-full px-8">
          <nav className="flex flex-row justify-between text-white text-2xl font-bold py-4">
            <div className="">
              <a className="pr-4" href="#">Newsletter</a>
              <a className="pr-4" href="#">Contact</a>
              <a className="pr-4" href="#">Press room</a>
            </div>
            <div className="flex flex-row">
              <a className="pl-4" href="#">
                <img className="size-8" src="/icons/facebook-outline.svg" />
              </a>
              <a className="pl-4" href="#">
                <img className="size-8" src="/icons/twitter-outline.svg" />
              </a>
            </div>
          </nav>
          <div className="flex flex-col border-t-2 border-t-gray-300 text-gray-300 text-2xl py-4">
            <span className="py-1">Art Gallery</span>
            <span className="py-1">38-40 Southwark Street</span>
            <span className="py-1">London SE1 1UN</span>
            <span className="py-1">Telephone <a href="tel:+442074905337">+44 20 74905337</a></span>
          </div>
          <div className="flex flex-col border-t-2 border-t-gray-300 text-gray-400 py-2">
            <span className="py-1">&copy; EC1 Gallery</span>
          </div>
        </div>
      </footer>
    );
  }
}