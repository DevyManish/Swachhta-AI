import { forwardRef, useId } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputDivProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const InputDiv = forwardRef<HTMLInputElement, InputDivProps>(function InputDiv(
  { label, className = "", type = "text", placeholder = "", ...props },
  ref,
) {
  const id = useId();
  return (
    <div className={`my-3 grid w-full items-center gap-1.5 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default InputDiv;
