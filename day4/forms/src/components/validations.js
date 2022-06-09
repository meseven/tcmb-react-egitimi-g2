import { object, string } from "yup";

const messages = {
  required: "Bu alan zorunludur.",
  valid_email: "Geçerli bir email adresi girin.",
};

const validations = object({
  name: string().required(messages.required),
  email: string().email(messages.valid_email).required(messages.required),
  message: string().min(3).max(10).required(messages.required),
});

export default validations;
