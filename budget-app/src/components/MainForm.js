import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  options: yup.string().required("please select the type"),
  description: yup.string().required("please enter a description"),
  value: yup
    .number()
    .positive("number must be greater than 0")
    .required("please enter a value"),
});

const MainForm = ({ addData }) => {
  return (
    <div>
      <Formik
        initialValues={{ options: "", description: "", value: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const { options, description, value } = values;
          const obj = {
            id: uuidv4(),
            options,
            description,
            value,
          };
          addData(obj);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <div className="form-container">
            <Form>
              <div className="option-content">
                <Field name="options" component="select" className="option">
                  <option value="">choose type</option>
                  <option value="expense">-</option>
                  <option value="income">+</option>
                </Field>
                {touched.options && errors.options && (
                  <span className="error">{errors.options}</span>
                )}
              </div>
              <div className="description-content">
                <Field
                  type="text"
                  name="description"
                  placeholder="Add description"
                  className="description"
                />
                {errors.description && touched.description && (
                  <span className="error">{errors.description}</span>
                )}
              </div>
              <div className="value-content">
                <Field
                  type="number"
                  name="value"
                  placeholder="value"
                  className="value"
                />
                {errors.value && touched.value && (
                  <span className="error full">{errors.value}</span>
                )}
              </div>
              <button type="submit">Add</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default MainForm;
