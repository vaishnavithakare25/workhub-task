import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ErrorState({ title = "Something went wrong", description = "Please try again later.", }) {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 p-10 text-center", children: [_jsx("div", { className: "mb-4 text-6xl", children: "\u26A0\uFE0F" }), _jsx("h2", { className: "text-xl font-semibold text-red-600", children: title }), _jsx("p", { className: "mt-2 text-red-500", children: description })] }));
}
export default ErrorState;
