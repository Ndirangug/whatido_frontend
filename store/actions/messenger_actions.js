export const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
};
