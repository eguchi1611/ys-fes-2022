import axios from "axios";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import style from "../styles/chat.module.scss";

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (message: Message) => {
    setMessages((c) => c.concat(message));
  };

  const chatWindowRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, setFocus } = useForm<FormInputs>();

  const scroll = () => {
    // １番下にスクロール
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const onSubmit = (data: FormInputs) => {
    // 空白だったらキャンセル
    if (!data.text) {
      return;
    }

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

        scroll();
      })
      .catch(console.log);
  };

  useEffect(() => {
    const history = localStorage.getItem("chat_history");
    if (history) {
      setMessages(JSON.parse(history));
    } else {
      setMessages([{ content: "なんでも質問してね〜！", sender: "response" }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    var modal = document.getElementById("chatModal");
    if (modal) {
      modal.addEventListener("shown.bs.modal", function (event) {
        setFocus("text");
        scroll();
      });
    }
  }, [setFocus]);

  return (
    <div className="modal fade" id="chatModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body" ref={chatWindowRef}>
            <div style={{ height: 360, maxHeight: "80%" }}>
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
                      alt="青春ラビット"
                    />
                  )}
                  <p
                    className={classNames("rounded-3", style.message, {
                      ["text-end"]: sender === "request",
                      [style.request]: sender === "request",
                      [style.response]: sender === "response",
                    })}
                  >
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <form
              className="input-group input-group-sm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="form-control"
                placeholder="知りたいことを入力してください"
                autoComplete="off"
                {...register("text")}
              />
              <button className="btn btn-outline-secondary" type="submit">
                送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  /*
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
  */
}

export default Chat;
