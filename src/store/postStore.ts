import { create } from 'zustand'
import { Post } from '../App'

type State = {
    posts: Post[]
    filteredPosts: Post[]
}

type Action = {
    setPostArray: (posts: State['filteredPosts']) => void
    initialPostArray: () => void
    storeArrayPosts: (arrayPosts: Post[]) => void

}

export const usePostStore = create<State & Action>((set) => ({
    posts: [],
    filteredPosts: [],
    setPostArray: (newArray) => set(() => ({ filteredPosts: newArray })),
    initialPostArray: () => set((state) => ({ posts: state.posts })),
    storeArrayPosts: (arrayPosts: Post[]) => set(() => ({ posts: arrayPosts }))
}))
