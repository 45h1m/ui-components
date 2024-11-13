import { Plus } from "lucide-react";
import { useFloatingButton } from "../floatingButton/FloatingButton";

const FloatingButtonIcon = ({ children, className }) => {
    const { setFloatBtnOpen, open } = useFloatingButton();

    const style = { transform: "scale(1) rotate(0deg)", opacity: "1", transition: "400ms ease" };

    return (
        <button aria-label="Toggle floating button" onClick={(e) => setFloatBtnOpen(!open)} className="relative flex items-center justify-center w-full h-full " style={style}>
            <span className={`fixed ady-floating-btn-main-icon text-3xl ${className}`}>{children}</span>
            <span className={`fixed ady-floating-btn-close-icon text-3xl ${className}`}>
                <Plus />
            </span>
        </button>
    );
};


export default FloatingButtonIcon;
