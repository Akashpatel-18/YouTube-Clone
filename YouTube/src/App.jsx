import React from "react";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      label: "home",
      icon: "home",
    },
    {
      label: "music",
      icon: "music_note",
    },
    {
      label: "subscriptions",
      icon: "subscriptions",
    },
    {
      label: "library",
      icon: "video_library",
    },
    {
      label: "watch later",
      icon: "watch_later",
    },
    {
      label: "download",
      icon: "download",
    },
    {
      label: "like videos",
      icon: "thumb_up",
    },
  ];

  const videoDetails = [
    {
      videoThumbnail:
        "https://img.youtube.com/vi/cAneupeH2gU/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/baZMlG6RzQyTpnCWFDUu4-Beie1TVH4p_IIgJ0yiB61qxCmzbXOV6N1mKSA3pQdw4JL9ZuFOmQ=s48-c-k-c0x00ffffff-no-rj",
      videoName:
        "woo × i was never there (slowed + reverb) | i was never there × woo slowed down to perfection",
      channelName: "hemotones",
      views: "4M views",
      uploadTime: "9 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/z0UiLeSWELs/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/JyCX9JCfXe2pa7Hubs2FcnXHkWCRUftJonNXgrOJ8gI3DotfEBL3b1BbC-VhPqoHAidrTs3YkQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Xcho - Ты и Я (Tiktok Remix) (slowed + reverb)",
      channelName: "Dragon - Music",
      views: "7.3M views",
      uploadTime: "7 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zEysLR8X9Ko/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/_BXysg5A1hKH2ViTEy0RiS-CBRuXOfNbevxyt4D2w2Bm6UGmtL_4D0IzStF6WWPIidiz286xTQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Яд (𝗬𝗔𝗗) - Эрика Лундмоен (𝘀𝗹𝗼𝘄𝗲𝗱 + 𝗿𝗲𝘃𝗲𝗿𝗯)",
      channelName: "Coveragee ♡︎",
      views: "4.1M views",
      uploadTime: "6 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zOIE3Ot0qhg/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/40oTMaWOfsgAmukjsSEgE--D3JCsZ7vVBiiuSF-OBRYnXusqgEWLWpyG06fgEfE-NSZCNs02qX0=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Darci ー On My Own (Tik tok Remix Neutrino)",
      channelName: "Tsukiyomi",
      views: "21M views",
      uploadTime: "9 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/cAneupeH2gU/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/baZMlG6RzQyTpnCWFDUu4-Beie1TVH4p_IIgJ0yiB61qxCmzbXOV6N1mKSA3pQdw4JL9ZuFOmQ=s48-c-k-c0x00ffffff-no-rj",
      videoName:
        "woo × i was never there (slowed + reverb) | i was never there × woo slowed down to perfection",
      channelName: "hemotones",
      views: "4M views",
      uploadTime: "9 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/z0UiLeSWELs/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/JyCX9JCfXe2pa7Hubs2FcnXHkWCRUftJonNXgrOJ8gI3DotfEBL3b1BbC-VhPqoHAidrTs3YkQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Xcho - Ты и Я (Tiktok Remix) (slowed + reverb)",
      channelName: "Dragon - Music",
      views: "7.3M views",
      uploadTime: "7 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zEysLR8X9Ko/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/_BXysg5A1hKH2ViTEy0RiS-CBRuXOfNbevxyt4D2w2Bm6UGmtL_4D0IzStF6WWPIidiz286xTQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Яд (𝗬𝗔𝗗) - Эрика Лундмоен (𝘀𝗹𝗼𝘄𝗲𝗱 + 𝗿𝗲𝘃𝗲𝗿𝗯)",
      channelName: "Coveragee ♡︎",
      views: "4.1M views",
      uploadTime: "6 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zOIE3Ot0qhg/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/40oTMaWOfsgAmukjsSEgE--D3JCsZ7vVBiiuSF-OBRYnXusqgEWLWpyG06fgEfE-NSZCNs02qX0=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Darci ー On My Own (Tik tok Remix Neutrino)",
      channelName: "Tsukiyomi",
      views: "21M views",
      uploadTime: "9 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/cAneupeH2gU/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/baZMlG6RzQyTpnCWFDUu4-Beie1TVH4p_IIgJ0yiB61qxCmzbXOV6N1mKSA3pQdw4JL9ZuFOmQ=s48-c-k-c0x00ffffff-no-rj",
      videoName:
        "woo × i was never there (slowed + reverb) | i was never there × woo slowed down to perfection",
      channelName: "hemotones",
      views: "4M views",
      uploadTime: "9 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/z0UiLeSWELs/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/JyCX9JCfXe2pa7Hubs2FcnXHkWCRUftJonNXgrOJ8gI3DotfEBL3b1BbC-VhPqoHAidrTs3YkQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Xcho - Ты и Я (Tiktok Remix) (slowed + reverb)",
      channelName: "Dragon - Music",
      views: "7.3M views",
      uploadTime: "7 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zEysLR8X9Ko/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/_BXysg5A1hKH2ViTEy0RiS-CBRuXOfNbevxyt4D2w2Bm6UGmtL_4D0IzStF6WWPIidiz286xTQ=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Яд (𝗬𝗔𝗗) - Эрика Лундмоен (𝘀𝗹𝗼𝘄𝗲𝗱 + 𝗿𝗲𝘃𝗲𝗿𝗯)",
      channelName: "Coveragee ♡︎",
      views: "4.1M views",
      uploadTime: "6 months ago",
    },
    {
      videoThumbnail:
        "https://img.youtube.com/vi/zOIE3Ot0qhg/maxresdefault.jpg",
      channelThumbnail:
        "https://yt3.ggpht.com/40oTMaWOfsgAmukjsSEgE--D3JCsZ7vVBiiuSF-OBRYnXusqgEWLWpyG06fgEfE-NSZCNs02qX0=s48-c-k-c0x00ffffff-no-rj",
      videoName: "Darci ー On My Own (Tik tok Remix Neutrino)",
      channelName: "Tsukiyomi",
      views: "21M views",
      uploadTime: "9 months ago",
    },
  ];

  return (
    <>
      {/* nav bar */}
      <div className=" w-full h-14 fixed top-0 left-0 bg-white pl-1 md:pl-5 pr-2 md:pr-5 flex justify-between items-center gap-x-2 border-b">
        <div className="flex items-center w-[25%] md:w-auto gap-x-1 md:gap-x-3">
          <button
            onClick={() => setOpen(!open)}
            className="w-5 h-5 p-3 md:w-8 md:h-8 flex justify-center items-center md:p-5 rounded-full hover:bg-gray-100"
          >
            <span className="material-icons-outlined text-xl md:text-2xl text-slate-600 font-normal">
              menu
            </span>
          </button>
          <img
            className="w-12 md:w-16"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2013-2015.png"
            alt=""
          />
        </div>

        <div className="w-[75%] md:w-5/12">
          <form className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-l-full h-8 md:h-10 pl-3 text-xs md:text-sm md:pl-4 outline-none flex-1"
            />
            <button className="flex justify-center items-center h-8 md:h-10 border rounded-r-full w-10 md:w-14 bg-gray-50 hover:bg-gray-100 border-l-0">
              <span className="material-icons-outlined text-slate-500 font-light">
                search
              </span>
            </button>
          </form>
        </div>

        <div className="hidden  md:flex items-center gap-x-3">
          <button className="w-8 h-8 flex justify-center items-center p-5 rounded-full hover:bg-gray-100">
            <span className="material-icons-outlined text-3xl text-slate-600 font-extralight">
              notifications
            </span>
          </button>
          <button className="w-8 h-8 flex justify-center items-center p-5 rounded-full hover:bg-gray-100">
            <span className="material-icons-outlined text-3xl text-slate-600 font-sm">
              videocam
            </span>
          </button>
          <div>
            <img
              className="w-10 object-cover rounded-full shrink-0 cursor-pointer mr-2"
              src="https://yt3.ggpht.com/hZDUwjoeQqigphL4A1tkg9c6hVp5yXmbboBR7PYFUSFj5PIJSA483NB5v7b0XVoTN9GCku3tqQ=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* side bar */}
      <div
        className={`h-full ${
          open
            ? "md:w-[250px] md:block hidden w-0"
            : "md:w-0 md:hidden w-[200px] block"
        } fixed top-0 left-0 mt-14 duration-[0.2s] flex flex-col px-4 py-3  z-50 bg-white`}
      >
        {menus.map((item, index) => (
          <button
            key={index}
            className=" flex items-center gap-x-3 py-2 px-2 md:mb-2 rounded-xl hover:bg-gray-100 w-full"
          >
            <span className="material-icons-outlined text-2xl text-slate-600 font-extralight">
              {item.icon}
            </span>
            <span className="text-sm capitalize text-slate-800 font-semibold">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* video content */}
      <div
        className={`${
          open ? "md:ml-[250px] ml-0" : "md:ml-0 ml-0"
        }  mt-14 p-0 sm:p-5 duration-[0.2s]
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-4 sm:gap-y-10 gap-x-0 gap-y-6 `}
      >
        {videoDetails.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-2 sm:gap-y-3">
            <img
              className="shrink-0 w-full sm:rounded-xl"
              src={item.videoThumbnail}
              alt=""
            />
            <div className="flex gap-x-3 sm:gap-x-4">
              <img
                className="rounded-full w-10 h-10 shrink-0 ml-1 sm:ml-0"
                src={item.channelThumbnail}
                alt=""
              />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-semibold text-sm sm:text-[15px]  text-slate-900 leading-tight sm:leading-1">
                  {item.videoName}
                </h1>
                <p className=" text-xs sm:text-sm text-gray-600 mt-0.5">
                  {item.channelName}
                </p>
                <div className="flex items-center -mt-1">
                  <p className=" text-[11px] sm:text-sm text-gray-600">
                    {item.views} -
                  </p>
                  <p className="text-[11px] sm:text-sm text-gray-600">
                    {" " + item.uploadTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
