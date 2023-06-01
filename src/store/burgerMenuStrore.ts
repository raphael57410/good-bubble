import { create } from 'zustand'

type State = {
    burgerIsOpen: boolean
}

type Action = {
    setBurgerIsOpen: (bool: State['burgerIsOpen']) => void
}

export const useBurgerMenuStore = create<State & Action>((set) => ({
    burgerIsOpen: false,
    setBurgerIsOpen: (bool) => set(() => ({ burgerIsOpen: bool })),
}))
