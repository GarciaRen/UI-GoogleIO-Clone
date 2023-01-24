import { React, useState } from "react";
import googleLogo from "../src/image/google.png";
import Example from "./components/Button";
import keynote from "../src/image/keynote.webp";
import keynotedev from "../src/image/keynotedev.webp";
import android from "../src/image/android.webp";
import cloud from "../src/image/cloud.webp";
import firebase from "../src/image/firebase.webp";
import flutter from "../src/image/flutter.webp";
import codelab from "../src/image/codelabs-logo.svg";
import accessibility from "../src/image/accessibility-logo.svg";
import androidLogo from "../src/image/android-logo.svg";
import arcore from "../src/image/arcore-logo.svg";
import chrome from "../src/image/chrome-logo.svg";
import firebaseLogo from "../src/image/firebase-logo.svg";
import flutterLogo from "../src/image/flutter-logo.svg";
import facebook from "../src/image/facebook.svg";
import twitter from "../src/image/twitter.svg";
import medium from "../src/image/medium.svg";
import youtube from "../src/image/youtube.svg";
import googledev from "../src/image/googledev.svg";

const App = () => {
  const [open, setOpen] = useState(false);

  const selectButton = () => {
    return setOpen(!open);
  };

  return (
    <div className="bg-[#202124] min-h-screen">
      <nav className="mx-auto py-6 ">
        <div className="flex flex-row">
          <div className="basis-1/5 flex items-center justify-center">
            <img
              src={googleLogo}
              alt="googleLogo"
              className="h-8 cursor-pointer"
            ></img>
          </div>
          <div className="basis-1/2 flex items-center">
            <ul className="text-slate-200 flex justify-items-center items-center gap-8 text-md font-sans font-medium">
              <li onClick={selectButton}>
                <Example
                  title="Program"
                  val1="Overview"
                  val2="Speakers"
                  button={open}
                />
              </li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Community</li>
              <li className="cursor-pointer">Learning Lab</li>
              <li onClick={selectButton}>
                <Example
                  title="About"
                  val1="Overview"
                  val2="FAQ"
                  button={open}
                />
              </li>
            </ul>
          </div>
          <div className="basis-1/2 flex justify-end text-white">
            <select
              disabled
              id="countries_disabled"
              class="bg-[#202124] p-4 text-lg mx-16 font-medium"
            >
              <option selected>English</option>
            </select>
          </div>
        </div>
      </nav>
      <div className=" h-[460px] w-full text-black flex flex-row">
        <div className="basis-2/3 flex justify-center items-center p-2 w-full ">
          <div className="bg-[#fcd56c] flex-grow h-full rounded-xl"></div>
        </div>
        <div className="basis-2/4 flex justify-center items-center p-2 w-full">
          <div className="bg-[#93c5fd] flex-grow h-full rounded-xl p-8">
            <div className=" flex flex-col h-full justify-between">
              <h2 className="text-5xl text-gray-900 font-medium">
                And that's a wrap! <br />
                Thanks for joining <br />
                Google I/O 2022.
              </h2>
              <a
                href="https://www.youtube.com/watch?v=CWTm0ccfZe4&amp;list=TLGGLYR0fesogp0xMjA1MjAyMg"
                className="underline text-xl tracking-wide font-sans font-medium text-gray-700"
              >
                Watch the I/O 2022 recap
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] p-8 mx-5">
        <div className="p-6 mt-10 h-full flex flex-col">
          <h1 className="text-white text-5xl font-semibold tracking-tighter mb-8">
            Watch the keynotes
          </h1>
          <div className="flex flex-row h-full gap-5">
            <div className="basis-1/2 p-6 text-white hover:border-white border-transparent border-[3px] rounded-xl cursor-pointer">
              <div className="flex flex-col gap-3">
                <img
                  src={keynote}
                  alt="keynote i/o"
                  className="rounded-2xl"
                ></img>
                <h3 className="text-2xl font-sans font-medium">
                  Google I/O keynote
                </h3>
                <span className="text-lg tracking-tighter">Keynote</span>
              </div>
            </div>
            <div className="basis-1/2 p-6 text-white hover:border-white border-transparent border-[3px] rounded-xl cursor-pointer">
              <div className="flex flex-col gap-3">
                <img
                  src={keynotedev}
                  alt="keynote i/o"
                  className="rounded-2xl"
                ></img>
                <h3 className="text-2xl font-sans font-medium">
                  Developer keynote
                </h3>
                <span className="text-lg tracking-tighter">Keynote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] p-8 mx-5">
        <div className="p-6  h-full flex flex-col">
          <div className="flex mb-8 justify-between items-end mr-4">
            <h1 className="text-white text-5xl font-semibold tracking-tighter">
              Featured sessions
            </h1>
            <h3 className="text-2xl font-semibold text-blue-300 cursor-pointer hover:border-b-2 border-blue-300">
              See full program
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-1 h-full text-white">
            <div className="hover:border-white border-transparent border-[3px] rounded-xl p-5 flex flex-col gap-4 cursor-pointer">
              <img src={android} alt="android"></img>
              <h3 className="text-2xl">What's new in Android</h3>
              <p className="text-lg">
                Hear the latest news on everything happening in the world of
                Android development: Android 13, Jetpack, tooling, perfo...
              </p>
              <div className="flex gap-4 text-lg">
                <span>Beginner</span>
                <span>Android</span>
                <span>Keynote</span>
              </div>
            </div>
            <div className="hover:border-white border-transparent border-[3px] rounded-xl p-5 flex flex-col gap-4 cursor-pointer">
              <img src={cloud} alt="cloud"></img>
              <h3 className="text-2xl">The cloud built for developers</h3>
              <p className="text-lg">
                Learn how Google Cloud and Workspace teams are building cloud
                services to help developers and technologists create tr...
              </p>
              <div className="flex gap-4 text-lg">
                <span>Intermediate</span>
                <span>Cloud</span>
                <span>Keynote</span>
              </div>
            </div>
            <div className="hover:border-white border-transparent border-[3px] rounded-xl p-5 flex flex-col gap-4 cursor-pointer">
              <img src={firebase} alt="firebase"></img>
              <h3 className="text-2xl">What's new in Firebase</h3>
              <p className="text-lg">
                Learn how to build and run apps users love with Firebase, a
                platform designed to help throughout your business’ journey.
              </p>
              <div className="flex gap-4 text-lg">
                <span>Beginner</span>
                <span>Firebase</span>
                <span>Keynote</span>
              </div>
            </div>
            <div className="hover:border-white border-transparent border-[3px] rounded-xl p-5 flex flex-col gap-4 cursor-pointer">
              <img src={flutter} alt="flutter"></img>
              <h3 className="text-2xl">What's new in Flutter</h3>
              <p className="text-lg">
                Learn the latest from Flutter including how to build beautiful
                native apps for six platforms from a single codebase.
              </p>
              <div className="flex gap-4 text-lg">
                <span>Beginner</span>
                <span>Flutter</span>
                <span>Keynote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] p-8 mx-5">
        <div className="p-6 h-full flex flex-col ">
          <div className="flex mb-8 justify-between items-center mr-4">
            <h1 className="text-white text-5xl font-semibold tracking-tighter mb-8">
              Grow your skills
            </h1>
            <h3 className="text-2xl font-semibold text-blue-300 cursor-pointer hover:border-b-2 border-blue-300 border-transparent">
              See more
            </h3>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-8 text-white">
            <div className="p-4 flex gap-4 items-center hover:border-white border-transparent border-[3px] cursor-pointer rounded-3xl">
              <img src={codelab} alt="codelab-logo" className="h-36 " />
              <div className="w-full flex flex-col gap-3 justify-between">
                <span className="font-medium mt-6">CODELAB</span>
                <h3 className="text-4xl font-medium tracking-tighter">
                  ARCore Augmented Images
                </h3>
                <span className="mt-2 text-lg">Augmented Reality</span>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-center hover:border-white border-transparent border-[3px] cursor-pointer rounded-3xl">
              <img src={codelab} alt="codelab-logo" className="h-36 " />
              <div className="w-full flex flex-col gap-1 justify-between">
                <span className="font-medium ">CODELAB</span>
                <h3 className="text-4xl font-medium tracking-tighter">
                  ARCore Cloud Anchors with Cloud Anchors
                </h3>
                <span className=" text-lg">Augmented Reality</span>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-center hover:border-white border-transparent border-[3px] cursor-pointer rounded-3xl">
              <img src={codelab} alt="codelab-logo" className="h-36 " />
              <div className="w-full flex flex-col gap-3 justify-between">
                <span className="font-medium mt-6">CODELAB</span>
                <h3 className="text-4xl font-medium tracking-tighter">
                  ARCore Raw Depth API
                </h3>
                <span className="mt-2 text-lg">Augmented Reality</span>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-center hover:border-white border-transparent border-[3px] cursor-pointer rounded-3xl">
              <img src={codelab} alt="codelab-logo" className="h-36 " />
              <div className="w-full flex flex-col gap-1   justify-between">
                <span className="font-medium ">CODELAB</span>
                <h3 className="text-4xl font-medium tracking-tighter">
                  Add a map to your Android app (Kotlin)
                </h3>
                <span className="text-lg">Augmented Reality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[450px] p-8 mx-5">
        <div className="p-6 h-full flex flex-col ">
          <div className="flex mb-8 justify-between items-center mr-4">
            <h1 className="text-white text-5xl font-semibold tracking-tighter mb-8">
              Learn more about our products
            </h1>
            <h3 className="text-2xl font-semibold text-blue-300 cursor-pointer hover:border-b-2 border-blue-300 mb-2 border-transparent">
              See all products
            </h3>
          </div>
          <div className="grid grid-cols-6 h-full gap-3 mx-4">
            <div className="flex flex-col items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={accessibility} alt="accessibility" className="h-32" />
              <h3>Accessibility</h3>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={androidLogo} alt="androidLogo" className="h-32" />
              <h3>Android</h3>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={arcore} alt="arcore" className="h-32" />
              <h3>ARCore</h3>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={chrome} alt="chrome" className="h-32" />
              <h3>Chrome OS</h3>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={firebaseLogo} alt="firebaseLogo" className="h-32" />
              <h3>Firebase</h3>
            </div>
            <div className="flex flex-col   items-center gap-3 justify-center p-4 cursor-pointer hover:border-white border-transparent border-[3px] rounded-xl text-lg font-medium text-white">
              <img src={flutterLogo} alt="flutterLogo" className="h-32" />
              <h3>Flutter</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] mx-10">
        <div className="p-10 h-full flex flex-row bg-[#fcd56c] rounded-xl text-black">
          <div className="basis-1/2 flex flex-col">
            <h1 className=" text-5xl font-semibold tracking-tighter mb-8">
              I/O '22 recap
            </h1>
            <p className="text-xl font-medium text-left mr-40 pb-16">
              From announcements and technology deep-dives to bringing the
              developer community together, I/O is a unique experience for
              everyone who attends. Watch this year's recap to catch up on
              anything you might have missed.
            </p>
            <a
              href="https://www.youtube.com/watch?v=CWTm0ccfZe4&amp;list=TLGGLYR0fesogp0xMjA1MjAyMg"
              className="text-2xl font-medium cursor-pointer"
            >
              Watch the I/O 2022 recap
            </a>
          </div>
          <div className="basis-1/2 h-full">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
              className="h-full w-full rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-[200px] mx-5">
        <div className="p-14 h-full flex">
          <div className="flex gap-5 items-center text-xl font-medium p-5 ml-5">
            <a className="text-3xl font-bold mb-2">Google</a>
            <a className="">I/O 2021</a>
            <a>I/O Playground</a>
            <a>Privacy & Terms</a>
            <a>Community guidelines</a>
            <a>FAQ</a>
            <div className="flex justify-end text-white">
              <select
                disabled
                id="countries_disabled"
                class="bg-[#202124] p-4 text-lg font-medium"
              >
                <option selected>English</option>
              </select>
            </div>
          </div>
          <div className="flex p-4 h-full gap-8 ml-10 items-center grow justify-center">
            <img src={twitter} alt="twitter" className="h-8"></img>
            <img src={facebook} alt="facebook" className="h-8"></img>
            <img src={googledev} alt="googledev" className="h-8"></img>
            <img src={youtube} alt="youtube" className="h-8"></img>
            <img src={medium} alt="medium" className="h-8"></img>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
