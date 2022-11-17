import React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import data from '../data/data.json';

export type iventItem = {
  year: number;
  content: string;
};

type dataItems = {
  id: number;
  startDate: number;
  endDate: number;
  events: iventItem[];
  title: string;
};

interface iCustomContext {
  data: dataItems[];
  year: number;
  setYear: (arg: number) => void;
  rotate: number;
  setRotate: (idx: number) => void;
  rot: (idx: number) => void;
}

export const Context = createContext({} as iCustomContext);

export const CustomContext = ({ children }: { children: React.ReactNode }) => {
  const [year, setYear] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);

  const rot = useCallback((idx: number) => {
    setRotate(idx * 90);
    setYear(idx + 1);
  }, []);

  const value = useMemo(
    () => ({
      data,
      year,
      setYear,
      rotate,
      setRotate,
      rot,
    }),
    [year, setYear, rotate, setRotate, rot],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCustomContext = () => {
  return useContext(Context);
};
