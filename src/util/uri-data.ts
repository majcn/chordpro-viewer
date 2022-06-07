import queryString from "query-string";

import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

export function readSongFromUrl(fallback: () => string) {
  if (!location.hash) {
    return fallback();
  }

  const { data } = queryString.parse(location.hash) as { data: string };

  return decompressFromEncodedURIComponent(data) ?? fallback();
}

export function writeSongToUrl(song: string) {
  const hashData = compressToEncodedURIComponent(song);

  window.location.hash = `#data=${hashData}`;
}
