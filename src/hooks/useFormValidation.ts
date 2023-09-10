import { FormikConfig, FormikValues, useFormik } from 'formik';
import { useMemo } from 'react';

export const useFormValidation = <T extends FormikValues>(
  formConfig: FormikConfig<T>,
) => {
  const formik = useFormik(formConfig);

  const isAllInputsValid = useMemo(() => {
    return Object.keys(formik.errors).length === 0 && formik.dirty;
  }, [formik.errors, formik.dirty]);

  return { ...formik, isAllInputsValid };
};
