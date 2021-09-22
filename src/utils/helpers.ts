import Swal from "sweetalert2";
import { defaultTheme } from "assets/styles/defaultTheme";
import { AxiosError } from "axios";

export const createApiAction = (type: string) => ({
  request: (payload?: unknown) => ({ type, payload }),
  success: (payload?: unknown) => ({ type: `${type}_SUCCESS`, payload }),
  failure: (error?: unknown) => ({ type: `${type}_FAILURE`, error }),
});

export const setDataKeysToLocalStorage = (data: Record<string, any>) => {
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
};

export const getFromLocalStorage = <T>(key: string, field?: keyof T) => {
  const object = localStorage.getItem(key);
  if (!object && field) return null;
  if (!object) return {};
  if (field) return JSON.parse(object)[field];
  return JSON.parse(object);
};

export const handleError = (error: any) => {
  if (!error.response || error.response.status === 500) {
    showError({ text: "Error on server! Please try again!" });
  } else if (error.response.status === 401) {
    return;
  } else if (isBetweenOrEqual(error.response.status, 400, 500)) {
    if (error.response.data.message) {
      showError({ text: error.response.data.message });
    } else {
      showError({ text: "Incorrect data!" });
    }
  } else {
    showError({ text: "Something went wrong! Please try again!" });
  }
};

export const isBetweenOrEqual = (
  value: number,
  startNumber: number,
  endNumber: number
) => {
  return value >= startNumber && value <= endNumber;
};

export const isLoggedIn = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return true;
  } else {
    return false;
  }
};

export const isMobile = (width: number | undefined) => {
  const mobile = +defaultTheme.breakpoints[0].replace("px", "");
  if (width) {
    return mobile > width;
  }
  return false;
};
export const isTablet = (width: number | undefined) => {
  const mobile = +defaultTheme.breakpoints[0].replace("px", "");
  const tablet = +defaultTheme.breakpoints[2].replace("px", "");
  if (width) {
    return mobile < width && tablet > width;
  }
  return false;
};

interface showMessageProps {
  text: string;
  title?: string;
}

export const showSuccess = ({ text, title }: showMessageProps) => {
  Swal.fire({ title, text, icon: "success" });
};
export const showError = ({ text, title }: showMessageProps) => {
  Swal.fire({ title, text, icon: "error" });
};
export const showInfo = ({ text, title }: showMessageProps) => {
  Swal.fire({ title, text, icon: "info" });
};
export const showWarning = ({ text, title }: showMessageProps) => {
  Swal.fire({ title, text, icon: "warning" });
};
