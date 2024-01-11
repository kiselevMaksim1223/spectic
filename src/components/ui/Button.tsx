import { ButtonHTMLAttributes, FC, memo } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: 'headerButton'
}
const Button: FC<IButton> = memo(
	({ children, className, buttonType, ...rest }) => {
		const styles = buttonType === 'headerButton' ? 'btn-header' : ''
		return (
			<button className={styles + ' ' + className} {...rest}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export default Button
