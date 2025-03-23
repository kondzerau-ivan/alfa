"use client";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import IProduct from '../../store/features/products/IProduct';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addProduct } from '../../store/features/products/productsSlice';
import { selectLastProductId } from '../../store/features/products/productsSelectors';

const ProductCreate = () => {
  const dispatch = useAppDispatch();
  const lastProductId = useAppSelector(selectLastProductId);
  const id = lastProductId ? lastProductId + 1 : 1;
  return (<Formik
    initialValues={{id, title: '', description: '', image: '', category: '', rate: '', count: '' }}

    validationSchema={Yup.object({
      title: Yup.string()
        .min(3, 'The username must be at least 3 characters long')
        .required('The "title" field is required'),
      description: Yup.string()
        .required('The "description" field is required'),
      image: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter correct url!'
        )
        .required('The "image" field is required'),
      category: Yup.string(),
      rate: Yup.number()
        .typeError('The "rate" field must be a number')
        .nullable(),
      count: Yup.number()
        .typeError('The "count" field must be a number')
        .nullable(),
    })}

    onSubmit={(values, { setSubmitting }) => {
      dispatch(addProduct(values as IProduct));
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form action="" className="flex flex-col items-center">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Product fields:</legend>

          <label className="fieldset-label">Title <span className="color text-secondary">*</span></label>
          <Field name="title" type="text" className="input" placeholder="Product title..." />
          <ErrorMessage name="title" component="div" className="text-error" />

          <label className="fieldset-label">Description <span className="color text-secondary">*</span></label>
          <Field name="description" type="text" className="input" placeholder="Product description..." />
          <ErrorMessage name="description" component="div" className="text-error" />

          <label className="fieldset-label">Image URL <span className="color text-secondary">*</span></label>
          <Field name="image" type="text" className="input" placeholder="https://..." />
          <ErrorMessage name="image" component="div" className="text-error" />

          <label className="fieldset-label">Category</label>
          <Field name="category" type="text" className="input" />
          <ErrorMessage name="category" component="div" className="text-error" />

          <label className="fieldset-label">Rate</label>
          <Field name="rate" type="text" className="input" />
          <ErrorMessage name="rate" component="div" className="text-error" />

          <label className="fieldset-label">Count</label>
          <Field name="count" type="text" className="input" />
          <ErrorMessage name="count" component="div" className="text-error" />
        </fieldset>
        <button className="btn btn-secondary btn-wide mt-7" type="submit">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </Form>
    )}
  </Formik>
  )
}

export default ProductCreate;
