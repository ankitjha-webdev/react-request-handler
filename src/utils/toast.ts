import { toast, ToastOptions } from "react-toastify";

type ToastType = "error" | "success";

export const showToast = (text: string, type: ToastType, options?: Partial<ToastOptions>) => {
    const toastFn = type === "error" ? toast.error : toast.success;
    const toastOptions: ToastOptions = {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };

    toastFn(text, {
        ...toastOptions,
        ...options
    });
}