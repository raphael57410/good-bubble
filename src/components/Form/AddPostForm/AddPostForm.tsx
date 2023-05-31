import { useAddStore } from '../../../store/addStore';
import Button from '../../Button/Button';
import FilterScreen from '../../FilterScreen/FilterScreen';
import styles from './addPostForm.module.scss'
import Input from '../../Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { postNewPost } from '../../../services/fetch/fetch';
import ImagePicker from '../../Input/ImagePicker/ImagePicker';

type Props = {
    refetchFn: () => void
}

function AddPostForm({ refetchFn }: Props) {
    const { t } = useTranslation();
    const [setIsOpen] = useAddStore((state) => [state.setIsOpen]);
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            title: "",
            email: "",
            image: "",
            description: "",
        }
    });
    const onSubmit = async (data: any) => {

        const isPosted = await postNewPost("http://127.0.0.1:3001/api/post/addPost", data);

        if (isPosted) {
            setIsOpen(false);
            refetchFn();
        }
    };

    return (
        <FilterScreen>
            <form className={styles.container} encType="multipart/form-data">
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} customStyle={styles.input} value={field.value} placeholder={t<string>("addFormPlaceholder.title")} onChange={field.onChange} />}
                />
                {errors.title && <span className={styles.errorMessage}>This is required.</span>}
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} customStyle={styles.input} value={field.value} placeholder={t<string>("addFormPlaceholder.email")} onChange={field.onChange} />}
                />
                {errors.email && <span className={styles.errorMessage}>This is required.</span>}
                <Controller
                    name="image"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <ImagePicker {...field} />}
                />
                {errors.image && <span className={styles.errorMessage}>This is required.</span>}
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} customStyle={styles.input} value={field.value} placeholder={t<string>("addFormPlaceholder.description")} onChange={field.onChange} />}
                />
                {errors.description && <span className={styles.errorMessage}>This is required.</span>}
                <div className={styles.addPostFormButtonContainer}>
                    <Button type='button' customStyles={styles.button} text={t<string>('button.send')} onClick={() => { handleSubmit(onSubmit)() }} />
                    <Button customStyles={styles.button} text={t<string>('button.back')} onClick={() => setIsOpen(false)} />
                </div>
            </form>
        </FilterScreen>
    )
}

export default AddPostForm

