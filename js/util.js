const get_random_value = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const get_random_element = (array) => {
  return array[get_random_value
  (0, array.length - 1)];
};

const get_unick_value = (array, min, max) => {
  const id = get_random_value
(min, max);
  if (array.some((item) => item === id)) {
    get_unick_value
  (array, min, max);
  }
  return id;
};

const max_length_check = (text, count) => {
  return text.length <= count;
};

export { get_random_value, get_random_element, get_unick_value, max_length_check };
