// src/useToast.js
import { toast } from "react-toastify";

// Custom hook for easier toast usage
export function useToast() {

  const success = (message) => toast.success(message);
  const error = (message) => toast.error(message);
  const info = (message) => toast.info(message);
  const warning = (message) => toast.warning(message);

  return { success, error, info, warning };
}
