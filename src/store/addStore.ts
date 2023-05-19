import { create } from 'zustand'

type State = {
    isOpen: boolean
}

type Action = {
    setIsOpen: (bool: State['isOpen']) => void
}

export const useAddStore = create<State & Action>((set) => ({
    isOpen: false,
    setIsOpen: (bool) => set(() => ({ isOpen: bool })),
}))
