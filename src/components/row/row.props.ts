import { IMove } from './../../interfaces/app.interfaces';

export interface RowProps {
    title: string;
    movies: IMove[];
    isBig?: boolean;
}