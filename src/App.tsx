import './App.css'
import Title from './components/Title/Title'
import styles from './app.module.scss'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard/PostCard';
import { usePostStore } from './store/postStore';
import { shallow } from 'zustand/shallow';
import Footer from './components/Footer/Footer';
import ButtonContainer from './components/Button/ButtonContainer/ButtonContainer';
import Button from './components/Button/Button';
import { useAddStore } from './store/addStore';
import AddPostForm from './components/Form/AddPostForm/AddPostForm';
import FilteredInput from './components/Input/FilteredInput/FilteredInput';
import { useQueryGetAllPosts } from './services/post.query';

export type Post = {
  title: string;
  email: string;
  image: string;
  description: string;
}

function App() {
  const queryAllPosts = useQueryGetAllPosts();
  const { data, refetch } = queryAllPosts
  const [filteredPost, setFilteredPost] = useState<string>('');
  const [filteredPostArray, storeArrayPosts, posts] = usePostStore((state) => [state.filteredPosts, state.storeArrayPosts, state.posts], shallow);
  const [isOpen, setIsOpen] = useAddStore((state) => [state.isOpen, state.setIsOpen], shallow);

  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      storeArrayPosts(data)
    }
  }, [data])

  if (!data) return <div>...Loading</div>


  return (
    <>
      {isOpen && <AddPostForm refetchFn={refetch} />}
      <Title text={"Good Bubble"} />
      <div className={styles.inputContainer}>
        <FilteredInput
          customStyle={styles.input}
          value={filteredPost}
          onChange={setFilteredPost}
          placeholder={t<string>('home.input')}
        />
      </div>

      {!filteredPost && <div className={styles.presentation}>
        <p className={styles.text}>
          {t('home.homeText')}
        </p>
        <ButtonContainer>
          <Button onClick={() => setIsOpen(!isOpen)} text={t<string>('button.addPost')} />
        </ButtonContainer>
      </div>}

      <div className={styles.postContainer}>
        {posts.length > 0 && (filteredPostArray.length ? filteredPostArray : posts).map((post, index) => <PostCard key={index} title={post.title} email={post.email} img={post.image} description={post.description} />)}
      </div>

      <Footer />
    </>
  )
}

export default App
