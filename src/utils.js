export const classes = (...vs) => vs.filter(v => v).join(' ');

export const formatTime = time => {
  const h = x => x % 12 === 0 ? 12 : x % 12;
  const m = x => x < 10 ? `0${x}` : x;
  if (time === (time | 0)) {
    return `${h(time)}`;
  } else {
    return `${h(time | 0)}:${m(Math.round(time * 60 % 60))}`;
  }
};
