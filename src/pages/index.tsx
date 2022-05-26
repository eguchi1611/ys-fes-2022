import type { NextPage } from "next";
import WelcomeCover from "../components/WelcomeCover";

const Home: NextPage = () => {
  return (
    <div className="-mt-16">
      <WelcomeCover />
      <div>
        <div className="justify-around1 flex border-r bg-white p-4">
          <h1>生徒会長の挨拶</h1>
          <div className="relative max-w-lg flex-1 before:block before:pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/yg8BIotkbTs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
