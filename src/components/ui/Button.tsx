import { ButtonHTMLAttributes, FC } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: 'headerButton'
}
const Button: FC<IButton> = ({ children, className, buttonType, ...rest }) => {
	const styles = buttonType === 'headerButton' ? 'btn-header' : ''
	return (
		<button className={styles + ' ' + className} {...rest}>
			{children}
		</button>
	)
}

export default Button
