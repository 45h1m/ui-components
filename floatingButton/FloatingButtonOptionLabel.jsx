
const FloatingButtonOptionLabel = ({children, className, ariaLabel}) => {
  return (
    <p aria-label={ariaLabel} className={`text-sm  ${className}`}>{children}</p>
  )
}

export default FloatingButtonOptionLabel