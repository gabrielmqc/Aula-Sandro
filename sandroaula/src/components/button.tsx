
import "../styles/button.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    size?: 'small' | 'medium' | 'large';
  }
  
  export default function Button({ text, secondary, size = 'medium' }: IButtonProps) {
    return (
      <button className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'} btn-${size}`}>
        {text}
      </button>
    )
  }