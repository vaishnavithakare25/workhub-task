import { jsx as _jsx } from "react/jsx-runtime";
function Button({ children, isLoading = false, ...props }) {
    return (_jsx("button", { ...props, disabled: isLoading || props.disabled, className: "w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50", children: isLoading ? "Loading..." : children }));
}
export default Button;
