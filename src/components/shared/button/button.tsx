import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      data-testid="button"
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
