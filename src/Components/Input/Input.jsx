import React, {useState} from 'react';
import clsx from "clsx";

import styles from './Input.module.scss';

const Input = (props) => {
    const {
        id,
        placeholder,
        value,
        name,
        title,
        type = 'text',
        className,
        wrapperClassName,
        disabled,
        focused = false,
        error,
        maxLength,
        minLength,
        onChange,
        onBlur,
        autocomplete,
    } = props;

    const [activeInput, setActiveInput] = useState(focused);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <label
            className={clsx(styles.content,
                className,
                disabled && styles.disabled,
                activeInput && styles.active,
                error && styles.invalid)
            }
            onClick={() => {
                setActiveInput(true);
                setIsFocused(false);
            }}
            onBlur={() => {
                setActiveInput(false);
                setIsFocused(false);
            }}>
            {title && <span className={styles.title}>{title}</span>}
            <div
                className={clsx(
                    styles.inputWrapper,
                    wrapperClassName,
                    isFocused && styles.focused)}
            >
                <input type={type}
                       id={id}
                       title={title}
                       name={name}
                       placeholder={placeholder}
                       className={styles.inputField}
                       value={value}
                       maxLength={maxLength}
                       minLength={minLength}
                       autoFocus={activeInput}
                       onChange={onChange}
                       onBlur={onBlur}
                       disabled={disabled}
                       autoComplete={autocomplete}
                       onKeyUp={(evt) => {
                           if (evt.key !== "Tab") return;
                           setIsFocused(true)
                       }}
                />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </label>
    );
};


export default Input;
