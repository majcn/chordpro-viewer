import ChordSheetJS from "chordsheetjs";

type Props = {
  song: string;
};

const parser = new ChordSheetJS.ChordProParser();
const formatter = new ChordSheetJS.HtmlTableFormatter();

function applyHtmlWorkarounds(html: string) {
  const fixSpacesDivHtml = html.replace(/\ \<\/td\>/g, "&nbsp;</td>");

  return fixSpacesDivHtml;
}

export default function Preview({ song }: Props) {
  try {
    const parsedSong = parser.parse(song);
    const divHtml = formatter.format(parsedSong);
    return (
      <div
        dangerouslySetInnerHTML={{ __html: applyHtmlWorkarounds(divHtml) }}
      />
    );
  } catch (error) {
    return <div style={{ color: "red" }}>{(error as Error).message}</div>;
  }
}
