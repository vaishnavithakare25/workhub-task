import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Pagination({ page, totalPages, onPrevious, onNext, }) {
    return (_jsxs("div", { className: "mt-6 flex items-center justify-between", children: [_jsx("button", { onClick: onPrevious, disabled: page === 1, className: "rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50", children: "Previous" }), _jsxs("span", { className: "text-sm font-medium", children: ["Page ", page, " of ", totalPages] }), _jsx("button", { onClick: onNext, disabled: page === totalPages, className: "rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50", children: "Next" })] }));
}
export default Pagination;
