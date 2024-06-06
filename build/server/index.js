import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Component } from "react";
import { register } from "swiper/element/bundle";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/tailwind-DVp5aFzu.css";
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "h-full w-full", children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const links = () => [
  { rel: "stylesheet", href: styles }
];
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true
    };
  }
  handleToggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hideMenu: !this.state.hideMenu });
  }
  render() {
    return /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
      /* @__PURE__ */ jsx("header", { id: "header", className: "w-full px-8 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "bold uppercase font-display text-4xl", children: this.props.title }) }),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-row", children: [
          /* @__PURE__ */ jsx("a", { className: "pl-4", href: "#", children: /* @__PURE__ */ jsx("img", { className: "size-8", src: "/icons/search-outline.svg" }) }),
          /* @__PURE__ */ jsx("a", { className: "pl-4", href: "#", onClick: this.handleToggleMenu.bind(this), children: /* @__PURE__ */ jsx("img", { className: "size-8", src: "/icons/menu-outline.svg" }) })
        ] })
      ] }) }),
      this.state.hideMenu === false && /* @__PURE__ */ jsxs("nav", { className: "absolute top-0 right-0 left-0 z-50 px-8 bg-white shadow-xl", children: [
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col w-full", children: [
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-2 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-2 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Art & Artists" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-2 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Exhibitions" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-2 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "News" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-2 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-4 border-b-gray-400 text-3xl", children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Private area" }) })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            onClick: this.handleToggleMenu.bind(this),
            className: "absolute top-0 right-0 py-6 px-8",
            children: /* @__PURE__ */ jsx("img", { src: "/public/icons/close.svg" })
          }
        )
      ] })
    ] });
  }
}
class Footer extends Component {
  render() {
    return /* @__PURE__ */ jsx("footer", { id: "footer", className: "w-full flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full px-8", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-row justify-between text-white text-2xl font-bold py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row", children: [
          /* @__PURE__ */ jsx("a", { className: "sm:pr-4 py-2 hover:underline", href: "#", children: "Newsletter" }),
          /* @__PURE__ */ jsx("a", { className: "sm:pr-4 py-2 hover:underline", href: "#", children: "Contact" }),
          /* @__PURE__ */ jsx("a", { className: "sm:pr-4 py-2 hover:underline", href: "#", children: "Press room" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
          /* @__PURE__ */ jsx("a", { className: "sm:pl-4 py-2", href: "#", children: /* @__PURE__ */ jsx("img", { className: "size-8", src: "/icons/facebook-outline.svg" }) }),
          /* @__PURE__ */ jsx("a", { className: "sm:pl-4 py-2", href: "#", children: /* @__PURE__ */ jsx("img", { className: "size-8", src: "/icons/twitter-outline.svg" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-t-2 border-t-gray-300 text-gray-300 text-2xl py-4", children: [
        /* @__PURE__ */ jsx("span", { className: "py-1 uppercase", children: "Art Gallery" }),
        /* @__PURE__ */ jsx("span", { className: "py-1", children: "38-40 Southwark Street" }),
        /* @__PURE__ */ jsx("span", { className: "py-1", children: "London SE1 1UN" }),
        /* @__PURE__ */ jsxs("span", { className: "py-1", children: [
          "Telephone ",
          /* @__PURE__ */ jsx("a", { href: "tel:+442074905337", children: "+44 20 74905337" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col border-t-2 border-t-gray-300 text-gray-400 py-2", children: /* @__PURE__ */ jsx("span", { className: "py-1", children: "© 2022 EC1 Gallery" }) })
    ] }) });
  }
}
class Section extends Component {
  render() {
    return /* @__PURE__ */ jsxs("section", { id: this.props.id, className: this.props.titleBar ? "my-3 sm:my-12 py-6 border-t-2 border-t-gray-400" : "my-3 sm:my-12 py-6", children: [
      this.props.titleBar && /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-center justify-between pb-4", children: [
        this.props.title && /* @__PURE__ */ jsx("h3", { className: "font-bold text-2xl", children: this.props.title }),
        this.props.link && /* @__PURE__ */ jsxs("a", { href: "#", title: "View all", className: "flex flex-row items-center hover:underline", children: [
          /* @__PURE__ */ jsx("span", { className: "pr-1", children: "View all" }),
          /* @__PURE__ */ jsx("img", { className: "size-4", src: "/icons/arrow-forward-outline.svg" })
        ] })
      ] }),
      this.props.children
    ] });
  }
}
class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCover: false,
      style: {}
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
      "Cerith Wyn Evans"
    ];
  }
  handleMouseEnter(e) {
    this.setState({ showCover: true, style: { "backgroundImage": "url('" + e.currentTarget.dataset.cover + "')" } });
    return e;
  }
  handleMouseLeave(e) {
    this.setState({ showCover: false, style: { "backgroundImage": "none" } });
    return e;
  }
  render() {
    return /* @__PURE__ */ jsx(Section, { id: "artists", title: "Artists", titleBar: true, children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row items-start relative", children: [
      /* @__PURE__ */ jsx("ul", { className: "w-auto flex-grow flex-col flex-wrap columns-1 sm:columns-3", children: this.getArtists().map((artistName, i) => /* @__PURE__ */ jsx(
        "li",
        {
          "data-cover": "https://source.unsplash.com/random/?" + artistName,
          onMouseEnter: this.handleMouseEnter.bind(this),
          onMouseLeave: this.handleMouseLeave.bind(this),
          children: /* @__PURE__ */ jsx("a", { href: "#", title: artistName, className: "hover:underlne", children: artistName })
        },
        i
      )) }),
      /* @__PURE__ */ jsx("div", { className: "size-64 bg-no-repeat bg-cover bg-center sticky top-2", style: this.state.style })
    ] }) });
  }
}
class Gallery extends Component {
  render() {
    register();
    return /* @__PURE__ */ jsx(Section, { id: "gallery", titleBar: false, children: /* @__PURE__ */ jsxs(
      "swiper-container",
      {
        autoplay: "true",
        speed: "300",
        loop: "true",
        "css-mode": "true",
        pagination: "true",
        paginationClickable: "true",
        style: {
          "--swiper-pagination-color": "#ff5c5c",
          "--swiper-pagination-bullet-inactive-color": "#dfdfdd",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom": "46px"
        },
        children: [
          /* @__PURE__ */ jsxs("swiper-slide", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:underline", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Anselm Kiefer: Walhalla" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Until 12 February 2017, London" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("swiper-slide", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:underline", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Anselm Kiefer: Walhalla" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Until 12 February 2017, London" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("swiper-slide", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:underline", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Anselm Kiefer: Walhalla" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Until 12 February 2017, London" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("swiper-slide", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:underline", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Anselm Kiefer: Walhalla" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Until 12 February 2017, London" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("swiper-slide", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-96 w-full bg-cover bg-center bg-[url('/images/banner.png')]" }),
            /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:underline", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-xl", children: "Anselm Kiefer: Walhalla" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Until 12 February 2017, London" })
            ] }) })
          ] })
        ]
      }
    ) });
  }
}
class Events extends Component {
  render() {
    return /* @__PURE__ */ jsx(Section, { id: "events", title: "Events", titleBar: true, link: "/news", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:opacity-50 hover:underline", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-1.png')]" }),
          /* @__PURE__ */ jsx("p", { className: "py-2 font-bold", children: "Exhibition: He Xiangyu monograph released by Distanz" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "From March 2016" }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "He Xiangyu and Liu Wei are among 74 international artists from 33 countries chosen to feature in the Yinchuan Biennale 2016" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:opacity-50 hover:underline", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-2.png')]" }),
          /* @__PURE__ */ jsx("p", { className: "py-2 font-bold", children: "Exhibition: Runa islam at SFMOMA, San Francisco" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "From March 2016" }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "'Verso', SFMOMA's solo presentation of Bangladeshi-born British artist Runa Islam, features the US premiere of Cabinet of Prototypes (2009-10)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:opacity-50 hover:underline", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full size-64 bg-no-repeat bg-cover bg-center bg-[url('/images/news-3.png')]" }),
          /* @__PURE__ */ jsx("p", { className: "py-2 font-bold", children: "Preview: White Cube Mason's Yard" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "19 January 2017, 6 to 8pm" }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "Join us at Mason's Yard, London flr the preview of the new Park Seo-Bo exhibition curated by Katherine Kostyal." })
      ] })
    ] }) });
  }
}
class Channel extends Component {
  render() {
    return /* @__PURE__ */ jsx(Section, { id: "channel", titleBar: true, title: "Channel", link: "/channel", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "iframe",
        {
          className: "w-full",
          height: "400",
          src: "https://www.youtube.com/embed/vlm5tgistqA?si=PDvVe5XsP6z5sN-w",
          title: "YouTube video player",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerPolicy: "strict-origin-when-cross-origin",
          allowFullScreen: true
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "py-2 grid sm:grid-cols-2 grid-cols-1 gap-3", children: [
        /* @__PURE__ */ jsx("p", { className: "py-1 font-bold", children: "Anselm Kiefer in conversation with Tim Marlow in the Auditorium" }),
        /* @__PURE__ */ jsx("p", { className: "py-1", children: "In this film Anselm Kiefer discusses his work and his exhibition 'Walhalla' at White Cube Bermondsey with Tim Marlow." })
      ] })
    ] }) });
  }
}
const meta = () => {
  return [
    { title: "Keepthinking Front-end Demo" },
    { name: "description", content: "Keepthinking front-end demo, using Remix, Tailwindcss" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx(Header, { title: "Art Gallery" }),
    /* @__PURE__ */ jsxs("main", { className: "w-full px-8", children: [
      /* @__PURE__ */ jsx(Gallery, {}),
      /* @__PURE__ */ jsx(Events, {}),
      /* @__PURE__ */ jsx(Channel, {}),
      /* @__PURE__ */ jsx(Artists, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-jPehgn16.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-BAmE7OwT.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CQU6WK5k.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-BAmE7OwT.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BgxgRn4U.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-90063cce.js", "version": "90063cce" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
