import React, { Component } from 'react'

export class Section extends Component {
  render() {
    return (
      <section id={this.props.id} className={this.props.titleBar ? "my-3 sm:my-12 py-6 border-t-2 border-t-gray-400":"my-3 sm:my-12 py-6"}>

        {this.props.titleBar && (
          <div className="w-full flex flex-row items-center justify-between pb-4">

            {this.props.title && (<h3 className="font-bold text-2xl">{this.props.title}</h3>)}
            {this.props.link && (<a href="#" title="View all" className="flex flex-row items-center hover:underline">
              <span className="pr-1">View all</span>
              <img className="size-4" src="/icons/arrow-forward-outline.svg" />
            </a>)}

          </div>
        )}

        {this.props.children}
      </section>
    );
  }
}

export default Section;