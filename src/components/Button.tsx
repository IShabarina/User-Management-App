interface IButtonProps {
    text: string;
    onClick?: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
    return (
        <button className="button" onClick={onClick}>{text}</button>
    )
}