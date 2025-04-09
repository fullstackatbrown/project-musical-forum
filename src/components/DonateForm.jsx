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
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
    <form onSubmit={handleSubmit} className="min-w-[400px] max-w-xl">
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        color="success"
        variant="soft"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className="top-28"
      >
        <CheckCircleIcon /> Thank you! Your donation has been submitted.
      </Snackbar>

      {formRows.map(({ name, label, type }) => (
        <FormControl key={name} error={Boolean(errors[name]) && touched[name]}>
          <FormLabel className="text-base">{label}</FormLabel>
          {type === "textarea" ? (
            <Textarea
              name={name}
              placeholder="Value"
              value={formData[name]}
              onChange={handleChange}
              minRows={3}
              className="bg-white"
            />
          ) : (
            <Input
              name={name}
              placeholder="Value"
              value={formData[name]}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white"
            />
          )}
          <FormHelperText className="min-h-6">
            {errors[name] && touched[name] ? (
              <>
                <InfoOutlined
                  fontSize="small"
                  sx={{ mr: 1, verticalAlign: "middle" }}
                />
                {errors[name]}
              </>
            ) : (
              <span className="invisible" />
            )}
          </FormHelperText>
        </FormControl>
      ))}
      <button
        type="submit"
        className="w-full bg-black text-white rounded-lg p-2"
      >
        Continue
      </button>
    </form>
  );
}

export default DonateForm;
