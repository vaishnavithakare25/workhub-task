import { jsx as _jsx } from "react/jsx-runtime";
function Skeleton({ className = "", }) {
    return (_jsx("div", { className: `animate-pulse rounded bg-gray-200 ${className}` }));
}
export default Skeleton;
