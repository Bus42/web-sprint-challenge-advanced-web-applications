import { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
};

const useForm = (state = initialFormValues) => {
  const [formValues, setFormValues] = useState(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => {
    setFormValues(initialFormValues);
  };

  return { formValues, handleChange, clearForm };
};

export default useForm;
