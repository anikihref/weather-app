const names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatMonth(id) {
  return names[id];
}

export const getLocaleDate = (time) => {
  const date = new Date(time * 1000);
  let localeDate = date.toLocaleDateString().split('/');
  localeDate.splice(2, 0, formatMonth(date.getMonth()))
  localeDate.shift()

  return localeDate.join(' ')
};

export const getLocaleTime = (time) => {
  const date = new Date(time * 1000);

  let localeTime = date.toLocaleTimeString().split(':');
  localeTime[localeTime.length - 1] = [...localeTime.at(-1).split(' ')]
  localeTime = localeTime.flat(1)


  localeTime[0] =
    localeTime.at(-1) === 'PM'
      ? +localeTime[0] + 12
      : localeTime[0];

  localeTime.pop();

  return localeTime.join(':')
};
