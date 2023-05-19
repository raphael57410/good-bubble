import { Dispatch, SetStateAction, useState } from 'react';
import styles from './input.module.scss'
import classNames from 'classnames';
import React from 'react';


type Props = {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    customStyle?: string;
    type?: string;
}

const Input = React.forwardRef(({ value, onChange, placeholder, customStyle, type }: Props, props: any) => {
    const [focusInput, setFocusInput] = useState(true);


    return (
        <div className={classNames(styles.container)}>
            <input type={type} {...props} value={value} onChange={(e) => {
                onChange(e.target.value);

            }}
                className={classNames(styles.input, customStyle)}
                placeholder={placeholder}
                onFocus={() => setFocusInput(true)}
                onBlur={() => setFocusInput(false)}>
            </input>
        </div>
    )
});

export default Input;