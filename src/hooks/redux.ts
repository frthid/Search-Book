import { AppDispatch, RootState } from './../../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>(); // возвращает объект (возвращает объект типизированный dispatch), который позволяет отправлять действия (actions)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //  типизированный useSelector, предоставляет удобный способ выборки данных из Redux store 
