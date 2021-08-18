/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';

export const useMountEffect = (func: () => void) => useEffect(func, []);
