const svgBase64DataUrlPrefix = "data:image/svg+xml;base64";
const svgDataUrlPrefix = "data:image/svg+xml;utf8";
const svgDefaultColor = "#000000";

export function changeSvgColor(color, svgString) {
  return svgString.replace(svgDefaultColor, color);
}

export function svgStringToBase64DataUrl(svgString) {
  const svgData = window.btoa(svgString);

  return `${svgBase64DataUrlPrefix},${svgData}`;
}

export function svgStringToDataUrl(svgString) {
  return `${svgDataUrlPrefix},${svgString}`;
}
