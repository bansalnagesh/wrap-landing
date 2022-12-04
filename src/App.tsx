import { memo } from 'react';
import { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Frame26 } from './components/Frame26/Frame26';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame26 />
    </div>
  );
});
