import { forwardRef } from 'react'
import styles from './Input.module.css'
import clsx from 'clsx'
const Input = (props, ref) => {
    const {
        value,
        name,
        errors,
        type,
        placeholder,
        onHandlerChange,
        disabled
    } = props ||  null
    const { inputBoxes, inputs, errorMessage, file } = styles
    const styleClasses = clsx(
        inputs,
        { [file]: type === 'file' },
    )


    return (
        <div className={inputBoxes}>
            <input
                value={value}
                ref={ref}
                autoFocus={true}
                name={name}
                className={styleClasses}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onHandlerChange(e)}
                disabled={disabled}
            />
            <span className={errorMessage}>{errors}</span>
        </div>
    )
}

export default forwardRef(Input)