export interface InputProps {
    id: string
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export interface ButtonProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor?: string;
    textColor?: string;
}

export interface UserData {
    email: string;
    password: string;
}

export interface AuthStatus {
    loading: boolean;
    error: string | null;
}