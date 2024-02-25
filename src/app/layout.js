import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Thumbnail Download",
  description:
    "Youtube Thumbnail Download | Download YouTube Thumbnails for Free, Youtube Thumbnail Image",
  icon: "/logo.jpg",
};

export default function RootLayout({ children }) {
  let schemadata = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "Youtube Thumbnail Download",
    url: "https://www.youtube-thumbnail-download-er.vercel.app",
  };
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta name="google-adsense-account" content="ca-pub-8683978034260199"></meta>
      <script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "YouTube Thumbnail Download",
      "alternateName" : "EC",
      "url" : "https://youtube-thumbnail-download-er.vercel.app/",
       description:"Youtube Thumbnail Download | Download YouTube Thumbnails for Free, Youtube Thumbnail Image",
      }
  </script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8683978034260199"
     crossorigin="anonymous"></script>
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
