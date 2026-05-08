import { Link } from "react-router-dom";

const PrimaryButton = ({ children, className = "", ...props }) => {
  const Component = props.to ? Link : props.href ? "a" : "button";

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-md bg-secondary1 px-8 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#d92e68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary1 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default PrimaryButton;
