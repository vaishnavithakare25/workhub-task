import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Card({ title, children }) {
    return (_jsxs("div", { className: "rounded-xl bg-white p-6 shadow", children: [_jsx("h3", { className: "mb-4 text-lg font-semibold", children: title }), children] }));
}
export default Card;
