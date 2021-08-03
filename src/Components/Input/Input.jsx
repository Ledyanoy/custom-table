import React from 'react';
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
        disabled,
        error,
        maxLength,
        minLength,
        onChange,
        onBlur,
        autocomplete,
    } = props;

    return (
        <label
            className={clsx(styles.container,
                className,
                error && styles.invalid)
            }>
            {title && <span className={styles.title}>{title}</span>}
            <input type={type}
                   id={id}
                   title={title}
                   name={name}
                   placeholder={placeholder}
                   className={styles.inputField}
                   value={value}
                   maxLength={maxLength}
                   minLength={minLength}
                   onChange={onChange}
                   onBlur={onBlur}
                   disabled={disabled}
                   autoComplete={autocomplete}
            />
            {error && <span className={styles.error}>{error}</span>}
        </label>
    );
};


export default Input;
