import axios from "axios";
import {
  ChangeEvent,
  CSSProperties,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { AiOutlineReload } from "react-icons/ai";
import { Image as KonvaImage, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { useToggleState } from "../hooks/ToggleState";

function Rebbit() {
  const [state, toggle] = useToggleState();
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get(
        `https://shoin-cloud.net/cfes-qa/v1/send/?text=${encodeURIComponent(
          question
        )}`
      )
      .then((res) => {
        if (res.status === 200) {
          setResponse(res.data);
        } else {
          setResponse("わかんないよ〜！");
        }
      });
    setQuestion("");
    return false;
  };

  const reset = () => {
    setResponse("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const [image1] = useImage("/rabbits/walk1.png");
  const [image2] = useImage("/rabbits/walk2.png");
  const [image, setImage] = useState(image1);
  const [, setCount] = useState(0);

  useEffect(() => {
    const images = [image1, image2];
    console.log(images);

    const timer = setInterval(() => {
      setCount((current) => {
        setImage(images[current % images.length]);
        console.log(current % images.length);

        return current + 1;
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [image1, image2]);

  const [rabbitStyle, setRabbitStyle] = useState<CSSProperties>();

  const coord = [
    ["10%", "40%"],
    ["60%", "10%"],
  ];

  useEffect(() => {
    setRabbitStyle({ bottom: 0, right: 0, transform: "scale(-1, 1)" });
  }, []);

  return (
    <div className="fixed z-10 p-2" style={rabbitStyle}>
      <div className="w-64">
        {!(state && !response) || (
          <form onSubmit={onSubmit}>
            <input
              className="w-full rounded p-2 shadow"
              placeholder="なにが知りたいのー？"
              value={question}
              onChange={onChange}
            />
          </form>
        )}
        {!(state && response) || (
          <div className="flex rounded bg-white p-2">
            <div className="w-full">{response}</div>
            <div className="my-auto" onClick={reset}>
              <AiOutlineReload />
            </div>
          </div>
        )}
        <div className="flex cursor-pointer " onClick={toggle}>
          <Stage width={90} height={110}>
            <Layer>
              <KonvaImage image={image} width={90} height={110} />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}

export default Rebbit;
