import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const Input = forwardRef(({ label, error, className = "", id, ...props }, ref) => {
    return (_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: id, className: "mb-1 block text-sm font-medium", children: label }), _jsx("input", { ref: ref, id: id, ...props, className: `w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 ${className}` }), error && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: error }))] }));
});
Input.displayName = "Input";
export default Input;
