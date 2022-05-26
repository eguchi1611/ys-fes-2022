import axios from "axios";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useToggleState } from "../hooks/ToggleState";
import { AiOutlineReload } from "react-icons/ai";

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

  return (
    <div>
      <div className="w-64">
        {!(state && !response) || (
          <form onSubmit={onSubmit}>
            <input
              className="w-full rounded p-2"
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
        <div className="flex flex-row-reverse">
          <Image
            src="/rabbit1.png"
            width={96}
            height={96}
            className="cursor-pointer"
            onClick={toggle}
          />
        </div>
      </div>
    </div>
  );
}

export default Rebbit;
