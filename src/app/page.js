"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { useState,useEffect } from "react";

export default function Home() {
  const [url, seturl] = useState("");
  const [show, setShow] = useState(false);
  const [id, setid] = useState(null);
  
  useEffect(() => {
    // Initialize Google Tag Manager dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());

    // Replace 'G-VZQRFRCY3D' with your actual GTM container ID
    gtag('config', 'G-VZQRFRCY3D');
  }, []);

  const handlechange = (e) => {
    e.preventDefault();
    seturl(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (url) {
      if (url.startsWith("https://you") || url.startsWith("https://www.you")) {
        var nurl = new URL(url);
        var videoId = nurl.searchParams.get("v");
        setid(videoId);
        setShow(true);
      } else {
        seturl("");
        toast.error("Invalid URL. Try Again", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setdisabled("");
      seturl("");
      toast.error("Enter URL", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="w-[95vw] md:w-[80vw] mx-auto flex min-h-screen h-fit  flex-col  px-6  lg:px-8 items-center">
        <div className="sm:mx-auto w-fit">
          <div className="flex justify-center items-center flex-col my-3">
            <h1 className="text-center text-3xl font-bold text-orange-400">
              Free Youtube Thumbnail Downloader
            </h1>
          </div>
          <form className="space-y-6 mb-2" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                URL
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handlechange(e)}
                  value={url}
                  id="url"
                  name="url"
                  type="text"
                  autoComplete="url"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 text-xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => handlesubmit(e)}
                type="submit"
                className=" flex disabled:bg-gray-400 cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download
              </button>
            </div>
            <div
              className="text-center text-xl rounded-lg text-white underline border p-4"
              role="alert"
            >
              💡💡{" "}
              <Link  href={"/how-to-download-youtube-thumbnail"}>
                How Download Youtube Thumbnail
              </Link>
            </div>
          </form>
        </div>

        {show && (
          <div className="grid grid-cols-1 md:grid-cols-2  space-x-2 flex-col justify-center items-center">
            <div className="flex flex-col justify-end items-center h-full">
              <img
                className="w-full my-auto"
                src={"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"}
              />
              <a
                href={"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"}
                target="_blank"
                download="preview_image.jpg"
              >
                <button className="my-2 flex cursor-pointer w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  HD Image (1280x720) Download Image
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-end items-center h-full">
              <img
                className="w-full my-auto"
                src={"https://img.youtube.com/vi/" + id + "/sddefault.jpg"}
              />
              <a
                href={"https://img.youtube.com/vi/" + id + "/sddefault.jpg"}
                target="_blank"
                download="preview_image.jpg"
              >
                <button className="my-2 flex disabled:bg-gray-400 cursor-pointer w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  SD Image (640x480) Download Image
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-end items-center h-full">
              <img
                className="w-full my-auto"
                src={"https://img.youtube.com/vi/" + id + "/hqdefault.jpg"}
              />
              <a
                href={"https://img.youtube.com/vi/" + id + "/hqdefault.jpg"}
                target="_blank"
                download="preview_image.jpg"
              >
                <button className="my-2 w-fit flex disabled:bg-gray-400 cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Normal Image (480x360) Download Image
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-end items-center h-full">
              <img
                src={"https://img.youtube.com/vi/" + id + "/mqdefault.jpg"}
                className="w-full my-auto"
              />
              <a
                href={"https://img.youtube.com/vi/" + id + "/mqdefault.jpg"}
                target="_blank"
                download="preview_image.jpg"
              >
                <button className="my-2 w-fit  flex disabled:bg-gray-400 cursor-pointer  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Normal Image (320x180) Download Image
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-end items-center h-full">
              <img
                src={"https://img.youtube.com/vi/" + id + "/default.jpg"}
                className="w-full my-auto"
              />
              <a
                href={"https://img.youtube.com/vi/" + id + "/default.jpg"}
                target="_blank"
                download="preview_image.jpg"
              >
                <button className="my-2 w-fit flex disabled:bg-gray-400 cursor-pointer  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs md:text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Normal Image (120x90) Download Image
                </button>
              </a>
            </div>
          </div>
        )}
        <div class="container mx-auto px-4 py-8">

<h1 class="text-3xl font-bold mb-4">YouTube Thumbnail Downloader | Youtube Thumbnail Image
</h1>

<p class="mb-4">Save YouTube Video Thumbnails</p>
<p class="mb-4">Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>

<h2 class="text-xl font-semibold mb-2">What is the use of this YouTube Thumbnail Downloader website?</h2>
<p class="mb-4">People use this YouTube thumbnail downloader website for getting thumbnail from any YouTube videos. That can be used in presentation, animation work or many other activities.</p>

<h2 class="text-xl font-semibold mb-2">How to use this YouTube thumbnail downloader website?</h2>
<p class="mb-4">I have shared some of screenshot in which i have guided you how you can use this YouTube downloader website. It's quite easy first step is you just copy any YouTube link | Youtube video url whom thumbnail you want. youtube cover download Easily you can download you tube cover</p>
<p class="mb-4">Now paste that URL in input box, the moment you paste that link it's automatically going to generate different size of thumbnails for you. Now click on thumbnail download button and it's going to automatically downloaded in your system. If you are using Android phone then you have to saved that images and if you are using iPhone then i don't know how you can do it?</p>

<h2 class="text-xl font-semibold mb-2">Is it legal to download YouTube thumbnails?</h2>
<p class="mb-4">Of course it's 100% legal you can download any YouTube videos thumbnails but as you know thumbnail and video are copyrighted product you should take author permissions 1st in order to reuse that.</p>

<h2 class="text-xl font-semibold mb-2">Compatibility of this YouTube thumbnail Donwloader website</h2>
<p class="mb-4">This YouTube thumbnail downloader website is going to work well in all devices except iPhone, because iPhone doesn't allow images to be saved in iPhone. But if you using jailbroken iPhone then there is no any problem. on the other hand is going to work fine in almost all kinds Android devices and laptop or desktop system.</p>

<h2 class="text-xl font-semibold mb-2">Is there any Copyright risk on YouTube Thumbnails?</h2>
<p class="mb-4">Whatever YouTube screenshot you are downloading a copyright of respective on owner of that videos. If you want to use it in your work then you should ask for permission.</p>
<p class="mb-4">Especially if you are reusing on YouTube then it's can create problem but if your plan is outside of YouTube. like use on website for creating logos or any Photoshop types of stuff then there is no any problem. You hardly receive any DMCA complaint about related to that particular YouTube thumbnail.</p>

<h2 class="text-xl font-semibold mb-2">Is reusing YouTube thumbnails are SEO friendly?</h2>
<p class="mb-4">Nope it's not, in short answer it's not SEO friendly because almost all thumbnails which are on YouTube are indexed by Google. So which one is unique and which one is duplicate google know it. So it's not SEO friendly as you know. But you can do some stuff on that thumbnail I mean getting some unique effects using Photoshop or any other software that can make your thumbnail unique again so that can be reused and make that SEO friendly again.</p>


</div>
      </div>
    </>
  );
}
