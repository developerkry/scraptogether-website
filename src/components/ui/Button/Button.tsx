import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}