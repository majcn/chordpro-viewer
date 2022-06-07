import App from "./App";
import { readSongFromUrl } from "./util/uri-data";

const demoSong = `{title: Aleluja - Dal si čisto mi srce}

{start_of_verse}
Dal si [D]čisto mi srce,
dal od[G]prte mi ro[g6]ke,
dal si [D]čustva mi in dal si mi ra[A7]zum,
dal svo[D7]bodo, da lahko
sam o [G]vsem odločam [g6]se,
za[D]sadil vame v[A7]ero in pog[D]um.
{end_of_verse}

{start_of_chorus}
Zato bom v[D]edno h[G]odil za Teb[D]oj,
zato bom vedno hodil za Te[A7]bo-o-oj,
Evang[D]elij bom živ[D7]el, Alel[G]ujo Ti bom [g6]pel
in [D]vedno [A7]hodil za Teb[D]oj.    (2x)
{end_of_chorus}`;

const demoSongProvider = () => demoSong;

export default function MyRouter() {
  const song = readSongFromUrl(demoSongProvider);

  return <App initSong={song} />;
}
