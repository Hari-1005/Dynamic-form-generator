import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FieldError,
} from "react-hook-form";

const FormPreview: React.FC<{ schema: any }> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  if (!schema || !schema.fields || schema.fields.length === 0) {
    return <p className="text-xl font-semibold">No schema provided</p>;
  }

  const isFieldError = (error: any): error is FieldError => {
    return error?.message !== undefined;
  };

  const getErrorMessage = (fieldError: any) => {
    if (isFieldError(fieldError)) {
      return fieldError.message || "Invalid value";
    }

    if (fieldError?.message) {
      return fieldError.message || "Invalid value";
    }

    return "Invalid value";
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-lg font-bold mb-2">
        {schema.formTitle || "Form Preview"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field: any) => (
          <div key={field.id}>
            <label className="block font-bold mb-1">{field.label}</label>

            <input
              {...register(field.id || `default-${Math.random()}`, {
                required: field.required && `${field.label} is required`,
                pattern: field.validation?.pattern
                  ? {
                      value: new RegExp(field.validation.pattern),
                      message: field.validation.message || "Invalid format",
                    }
                  : undefined,
              })}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded"
            />
            {errors[field.id] && (
              <p className="text-red-500">
                {getErrorMessage(errors[field.id])}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;
