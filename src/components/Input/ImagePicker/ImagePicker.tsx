import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./imagePicker.module.scss";

type Props = {
    onChange: Dispatch<SetStateAction<string>>;
}

const ImagePicker = React.forwardRef(({ onChange }: Props, props: any) => {
    const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            onChange(e.target.files[0]);
        }
    };

    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage(undefined);
    };

    return (
        <>
            <div>
                <input
                    {...props}
                    accept="image/*"
                    type="file"
                    onChange={imageChange}
                />

                {selectedImage && (
                    <div className={styles.imgContainer}>
                        <img
                            className={styles.img}
                            src={URL.createObjectURL(selectedImage)}
                            alt="Thumb"
                        />
                        <button onClick={removeSelectedImage}>
                            Supprimer cette image
                        </button>
                    </div>
                )}
            </div>
        </>
    );
});

export default ImagePicker;