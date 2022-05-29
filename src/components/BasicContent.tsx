import Image from "next/image";
import ContentTemplate from "./ContentTemplate";

type PropsThumbnail = {
  url?: string;
  title?: string;
};
function Thumbnail({ url, title }: PropsThumbnail) {
  if (!url) {
    return (
      <div className="aspect-[9/16] bg-white p-4 shadow">
        画像が見つかりません
      </div>
    );
  }
  return (
    <div className="rounded-lg shadow">
      <Image
        alt={title}
        src={url}
        width={1080}
        height={1920}
        layout="responsive"
        className="rounded-lg"
      />
    </div>
  );
}

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  links: {
    url: string;
    text: string;
  }[];
};

function BasicContent({ title, subtitle, desc, img, links }: Props) {
  return (
    <ContentTemplate
      title={
        <div className="font-serif">
          <h2 className="text-md pt-8">{subtitle}</h2>
          <h1 className="pb-8 text-2xl font-bold sm:text-3xl">{title}</h1>
        </div>
      }
      media={<Thumbnail url={img} title={title} />}
      content={
        <>
          <p className="text-md sm:max-w-xs">{desc}</p>
          <ul className="mt-2 text-lg text-blue-500 underline">
            {links.map(({ url, text }) => (
              <li key={text}>
                <a href={url} rel="noopener noreferrer" target="_blank">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}

export default BasicContent;
