import { useEffect, useState } from "react";

export const ReturnToButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 10;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
    outline: "none",
  };

  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
    outline: "none",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button className="fixed right-40 bottom-32 rounded " style={style} onClick={returnTop}>
      TOPへ
    </button>
  );
};
