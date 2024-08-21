export const slugFormatter = (value: string | undefined) => {
  if (!value) {
    return 'undefined';
  }

  if (value.split(' ').length === 1) {
    return value.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  }

  return value.toLowerCase().split(' ').join('-');
};
