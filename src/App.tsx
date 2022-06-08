import { useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import debounce from "lodash.debounce";

import Editor from "./components/editor";
import Preview from "./components/preview";
import SaveButton from "./components/save-button";
import ContainerLayout from "./components/container-layout";
import { writeSongToUrl, copyToClipboard } from "./util";

type Props = {
  initSong: string;
};

function onSave(song: string) {
  writeSongToUrl(song);

  copyToClipboard(location.href);

  toast("Povezava je skopirana v odložišče", {
    pauseOnHover: false,
    autoClose: 2000,
    type: "success",
    hideProgressBar: true,
  });
}

function App({ initSong }: Props) {
  const [chordProSong, setChordProSong] = useState(initSong);

  return (
    <>
      <ToastContainer />
      <SaveButton onClick={() => onSave(chordProSong)} />

      <ContainerLayout>
        <Editor
          defaultValue={chordProSong}
          onChange={debounce((value) => setChordProSong(value ?? ""), 500)}
          onSave={onSave}
        />
        <Preview song={chordProSong} />
      </ContainerLayout>
    </>
  );
}

export default App;
