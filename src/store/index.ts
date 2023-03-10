import { create } from "zustand";
import { IMove } from 'src/interfaces/app.interfaces';

interface InfoState {
    modal: boolean;
    currentMovie: IMove;
    setModal: (bool: boolean) => void;
    setCurrentMovie: (movie: IMove) => void;
}

export const useInfoStore = create<InfoState>()(set => ({
    modal: false,
    currentMovie: {} as IMove,
    setModal: (bool: boolean) => set(state => ({...state, modal: bool})),
    setCurrentMovie: (currentMovie: IMove) => set(state => ({ ...state, currentMovie: currentMovie}))
}))