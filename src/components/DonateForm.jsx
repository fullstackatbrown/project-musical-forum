"use client";

import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Snackbar,
} from "@mui/joy";
// Inline SVG icons
const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
             10-4.48 10-10S17.52 2 12 2zm0 18
             c-4.41 0-8-3.59-8-8s3.59-8 8-8
             8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M11 17h2v-6h-2v6zm0-8h2V7h-2v2z"/>
  </svg>
);

const CheckCircleIconInline = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
             10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5
             1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
  </svg>
);

function DonateForm() {
  const formRows = [
    { name: "name", label: "Name", type: "text" },
    { name: "amount", label: "Amount", type: "number" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (field, value) => {
    switch (field) {
      case "name":
        if (!value.trim()) {
          return "Name is required.";
        }
        break;
      case "amount":
        if (!value || isNaN(value) || Number(value) <= 0) {
          return "Please input a positive number.";
        }
        break;
      case "email":
        if (!value.trim()) {
          return "Email is required.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please input a valid email.";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    setTouched({
      name: true,
      amount: true,
      email: true,
      message: true,
    });

    if (Object.keys(newErrors).length === 0) {
      console.log("Donation info: ", formData);
      setFormData({
        name: "",
        amount: "",
        email: "",
        message: "",
      });
      setTouched({});
      setErrors({});
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-[350px] max-w-md space-y-1">
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        color="success"
        variant="soft"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="top-28"
      >
        <CheckCircleIconInline className="inline-block mr-1 align-middle w-5 h-5 text-green-500" /> Thank you! Your donation has been submitted.
      </Snackbar>

      {formRows.map(({ name, label, type }) => (
        <FormControl
          key={name}
          error={Boolean(errors[name]) && touched[name]}
          size="sm"
          sx={{ marginTop: "0!important" }}
        >
          <FormLabel className="text-sm">{label}</FormLabel>
          {type === "textarea" ? (
            <Textarea
              name={name}
              placeholder="Value"
              value={formData[name]}
              onChange={handleChange}
              minRows={2}
              className="bg-white text-sm"
            />
          ) : (
            <>
              <Input
                name={name}
                placeholder="Value"
                value={formData[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-white text-sm"
              />
              <FormHelperText className="min-h-5 text-xs mt-[2px]">
                {errors[name] && touched[name] ? (
                  <>
                    <InfoIcon className="inline-block mr-1 align-middle w-4 h-4" />
                    {errors[name]}
                  </>
                ) : (
                  <span className="invisible" />
                )}
              </FormHelperText>
            </>
          )}
        </FormControl>
      ))}
      <button
        type="submit"
        className="w-full bg-black text-white rounded-lg p-1 text-sm !mt-3"
      >
        Continue
      </button>
    </form>
  );
}

export default DonateForm;
