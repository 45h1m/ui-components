const FloatingButtonOption = ({ children, onClick, ariaLabel }) => {
    return (
        <button
            type="button"
            role="menuitem"
            className="ady-floating-btn-option flex flex-row-reverse items-center gap-1 pr-3 active:brightness-150"
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default FloatingButtonOption;
