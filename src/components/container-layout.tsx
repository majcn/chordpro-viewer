import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";

type Props = {
  children: React.ReactElement<HTMLElement>[];
};

export default ({ children }: Props) => {
  const [left, right] = children;

  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement style={{ height: "100vh" }}>{left}</ReflexElement>

      <ReflexSplitter style={{ height: "100vh" }} />

      <ReflexElement style={{ height: "100vh" }} size={400}>
        {right}
      </ReflexElement>
    </ReflexContainer>
  );
};
