export const copyToClipboard = (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy") ? res(undefined) : rej();
        textArea.remove();
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
