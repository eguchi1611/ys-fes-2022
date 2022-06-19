import { useEffect, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

type Props = {
  handleClick: () => void;
};

const useAnimationTimer = () => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setScore((c) => c + 1);
      console.log("run");
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return score;
};

function SeishunRabbit({ handleClick }: Props) {
  const [walking1] = useImage("/images/rabbits/walking1.png");
  const [walking2] = useImage("/images/rabbits/walking2.png");

  const animationFrame = useAnimationTimer();

  return (
    <Stage width={110} height={130} className="cursor-pointer">
      <Layer>
        <Image
          x={10}
          y={10}
          image={animationFrame % 2 === 0 ? walking1 : walking2}
          width={90}
          height={110}
          onClick={handleClick}
          onTouchEnd={handleClick}
          shadowColor="black"
          shadowBlur={5}
          shadowOffset={{ x: 3, y: 3 }}
          shadowOpacity={0.3}
        />
      </Layer>
    </Stage>
  );
}

export default SeishunRabbit;
