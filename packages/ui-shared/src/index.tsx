import { Fragment, ReactNode } from 'react';
import './index.css';

interface StyleProviderProps {
  children: ReactNode;
}

export default function StyleProvider(props: StyleProviderProps) {
  return <Fragment>{props.children}</Fragment>;
}
