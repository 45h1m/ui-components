// 45h1m Nov 2024

import React, { createContext, useContext } from "react";

export { default as FloatingButtonIcon } from "./FloatingButtonIcon";
export { default as FloatingButtonOptionContainer } from "./FloatingButtonOptionContainer";
export { default as FloatingButtonOption } from "./FloatingButtonOption";
export { default as FloatingButtonOptionIcon } from "./FloatingButtonOptionIcon";
export { default as FloatingButtonOptionLabel } from "./FloatingButtonOptionLabel";
export { default as FloatingButton } from "./FloatingButton";

import "./ady-floating-btn.css";

// Create a Context for Floating Button
const FloatingButtonContext = createContext();

export const useFloatingButton = () => useContext(FloatingButtonContext);

const FloatingButton = ({ children, open, setFloatBtnOpen, className }) => {
    return (
        <FloatingButtonContext.Provider value={{ open, setFloatBtnOpen }}>
            <div className={`ady-floating-btn ${open && "active"}`}>
                <div className={`fixed z-20 bottom-10 right-4 size-16 rounded-full flex items-center justify-end text-2xl shadow-lg ${className}`}>
                    {children}
                </div>
                <div
                    onClick={() => setFloatBtnOpen(false)}
                    className="ady-floating-btn-backdrop fixed bottom-0 right-0 w-full h-screen z-10"
                >
                    <div className={`absolute right-0 bottom-0 w-80 h-full bg-gradient-to-tl to-transparent to-50% from-white transition duration-500 ${open ? "opacity-1" : "opacity-0"}`}></div>
                </div>
            </div>
        </FloatingButtonContext.Provider>
    );
};

export default FloatingButton;
