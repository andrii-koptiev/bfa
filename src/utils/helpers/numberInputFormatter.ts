export const numberInputFormatter = (inputData: string): string => {
  const stringWithDot = inputData.replace(',', '.');
  const floatValue = parseFloat(stringWithDot);

  return String(floatValue.toFixed(2));
};
