type InputUniqueValidation = <Type extends { [key: string]: any }>(args: {
  value: string | null;
  data: Type[];
  existingValue: string | null;
  fieldName: string;
  caseSensitive?: boolean;
}) => boolean;

export const inputUniqueValidation: InputUniqueValidation = ({
  value,
  data,
  existingValue,
  fieldName,
  caseSensitive = false,
}) => {
  if (!value || !fieldName) {
    return true;
  }

  return data.every((item) => {
    if (existingValue === value) {
      return true;
    }

    if (!caseSensitive) {
      return item[fieldName]?.toLowerCase() !== value?.toLowerCase();
    }

    return item[fieldName] !== value;
  });
};
