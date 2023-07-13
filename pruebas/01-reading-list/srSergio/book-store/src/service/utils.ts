export function generateIdFromString(inputString: string) {
  let id = 0;
  for (let i = 0; i < inputString.length; i++) {
    id = (id * 31 + inputString.charCodeAt(i)) % 100000000;
  }
  return id.toString().padStart(8, "0");
}
