
const FloatingButtonOptionContainer = ({children, ariaLabel}) => {
  return (
    <div aria-label={ariaLabel} role="menu" className="ady-floating-btn-option-container absolute flex flex-col gap-4 bottom-20 origin-bottom-right">{children}</div>
  )
}

export default FloatingButtonOptionContainer