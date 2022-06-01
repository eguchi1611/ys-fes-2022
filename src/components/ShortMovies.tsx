import axios from "axios";
import { useState } from "react";

type Props = {
  dataset: Dataset[];
};
function ShortMovies({ dataset }: Props) {
  const [index, setIndex] = useState(1);

  const add = (num: number) => {
    setIndex((i) => (i += num));
  };

  console.log((index % (dataset.length - 1)) - 1);

  return (
    <div className="mb-16 bg-gray-100 px-2 py-8">
      <h1 className="py-3 font-serif text-3xl">Short Movies</h1>
      <div className="justify-around md:flex">
        <section className="mt-4">
          <p>高校の各クラブの文化祭の内容が１５秒でわかります！</p>
          <p>どのクラブを見るか決めるときに役立ててください</p>
        </section>
        <div className="aspect-[9/16]">
          <div>{dataset[(index % (dataset.length - 1)) + 1].name}</div>
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${
              dataset[(index % (dataset.length - 1)) + 1].url
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-4 flex justify-center">
            <button
              className="mr-4 rounded-full bg-gray-400 p-4 font-bold text-white hover:bg-gray-500"
              onClick={() => {
                add(-1);
              }}
            >
              ＜
            </button>
            <button
              className="rounded-full bg-gray-400 p-4 font-bold text-white hover:bg-gray-500"
              onClick={() => {
                add(1);
              }}
            >
              ＞
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortMovies;
