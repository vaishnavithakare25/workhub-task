import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
function BackButton() {
    const navigate = useNavigate();
    return (_jsx(Button, { type: "button", onClick: () => navigate(-1), className: "bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded cursor-pointer", children: "\u2190 Back" }));
}
export default BackButton;
