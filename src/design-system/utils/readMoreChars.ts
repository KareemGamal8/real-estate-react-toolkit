export function readMoreChars(text: string, length: number) {
  const newArray: string[] = [];
  text
    .split(" ")
    .map((char, index) => (index < length ? newArray.push(char) : ""));

  return newArray.join(" ") + "...";
}
