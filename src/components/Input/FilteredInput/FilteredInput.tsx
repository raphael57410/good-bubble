import { Dispatch, SetStateAction } from 'react';
import styles from '../input.module.scss'
import { usePostStore } from '../../../store/postStore';
import { shallow } from 'zustand/shallow';
import classNames from 'classnames';
import React from 'react';


type Props = {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    customStyle?: string;

}

const FilteredInput = React.forwardRef(({ value, onChange, placeholder, customStyle }: Props, props: any) => {
    const [postsArray, _, setFilteredPostArray, initialPostArray] = usePostStore((state) => [state.posts, state.filteredPosts, state.setPostArray, state.initialPostArray], shallow);


    return (
        <div className={classNames(styles.container)}>
            <input {...props} value={value} onChange={(e) => {
                onChange(e.target.value);

                if (postsArray.length) {
                    const filteredArray = postsArray.filter(post => post.title.toLowerCase().startsWith(e.target.value.toLowerCase()));


                    if (filteredArray.length) { setFilteredPostArray(filteredArray) }
                    if (!filteredArray.length || value.length === 1) { initialPostArray() }
                }

            }}
                className={classNames(styles.input, customStyle)}
                placeholder={placeholder}>
            </input>
        </div>
    )
});

export default FilteredInput;