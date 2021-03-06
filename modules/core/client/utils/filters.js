export const limitTo = (text, length) => {
  return text.substring(0, length);
};

export const plainTextLength = (text) => {
  return text && typeof(text) === 'string'
    ? String(text).replace(/&nbsp;/g, ' ').replace(/<[^>]+>/gm, '').trim().length
    : 0;
};
