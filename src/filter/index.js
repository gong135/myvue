function pad(num, size) {
  let s = `${num}`;
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
}

export default function toDateString(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}`;
}
