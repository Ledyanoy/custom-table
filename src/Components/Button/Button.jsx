import React from 'react';
import clsx from "clsx";

import styles from './Button.module.scss';

const Button = ({children, type, className, onClick}) => {

    return (
        <button type={type} className={clsx(className, styles.container)} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
