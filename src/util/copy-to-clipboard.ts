// source https://gist.githubusercontent.com/wilsonpage/6f15d9b173584195eaa5dee42215bd81/raw/cbfb5539edea99ebca447e7d842b95cbcb37d753/copyToClipboard.js

const fallback = (text: string) => {
  const isIos = navigator.userAgent.match(/ipad|iphone/i);
  const textarea = document.createElement("textarea");

  // create textarea
  textarea.value = text;

  // ios will zoom in on the input if the font-size is < 16px
  textarea.style.fontSize = "20px";
  document.body.appendChild(textarea);

  // select text
  if (isIos) {
    const range = document.createRange();
    range.selectNodeContents(textarea);

    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {
    textarea.select();
  }

  // copy selection
  document.execCommand("copy");

  // cleanup
  document.body.removeChild(textarea);
};

export default (text: string) => {
  if (!navigator.clipboard) {
    fallback(text);
    return;
  }

  navigator.clipboard.writeText(text);
};
