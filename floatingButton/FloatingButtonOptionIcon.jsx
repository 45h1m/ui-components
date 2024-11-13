
const FloatingButtonOptionIcon = ({children, className, ariaLabel = "Floating button icon"}) => {
  return (
    <div aria-label={ariaLabel} className={`rounded-full flex justify-center items-center shadow-xl ${className}`}>{children || "+"}</div>
  )
}

export default FloatingButtonOptionIcon