import axios from "axios";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import style from "../styles/chat.module.scss";

type Props = {
  handleClose: () => void;
};

function Chat({ handleClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (message: Message) => {
    setMessages((c) => c.concat(message));
  };

  const chatWindowRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    // 入力を削除
    reset();

    addMessage({ content: data.text, sender: "request" });

    axios
      .get(
        `https://shoin-cloud.net/cfes-qa/v1/send/?text=${encodeURIComponent(
          data.text
        )}`
      )
      .then((res) => {
        const reply = res.status === 200 ? res.data : "わかんないよ〜！";
        addMessage({ content: reply, sender: "response" });

        // １番下にスクロール
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMessages([{ content: "なんでも質問してね〜！", sender: "response" }]);
  }, []);

  return (
    <div className="card shadow-sm m-3" style={{ width: 360 }}>
      <div className="card-header d-flex">
        <div className="me-auto"></div>
        <button
          type="button"
          className="btn-close"
          onClick={handleClose}
        ></button>
      </div>
      <div
        className="card-body overflow-scroll"
        ref={chatWindowRef}
        style={{ height: 480 }}
      >
        {messages.map(({ content, sender }, index) => (
          <div
            key={index}
            className={classNames("d-flex align-items-center", {
              "flex-row-reverse": sender === "request",
            })}
          >
            {sender === "request" || (
              <img
                style={{ transform: "scale(-1, 1)" }}
                src="/images/rabbits/walking1.png"
                height={42}
              />
            )}
            <p
              className={classNames(style.message, {
                ["text-end"]: sender === "request",
              })}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
      <form
        className="card-footer bg-white input-group input-group-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="form-control"
          placeholder="知りたいことを入力してください"
          autoComplete="off"
          autoFocus
          {...register("text")}
        />
        <button className="btn btn-outline-secondary" type="submit">
          送信
        </button>
      </form>
    </div>
  );
}

export default Chat;
