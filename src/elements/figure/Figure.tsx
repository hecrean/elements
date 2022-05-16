import { ComponentProps } from 'react';

const Figure = (props: ComponentProps<'figure'>) => <figure {...props} />;

const Figcaption = (props: ComponentProps<'figcaption'>) => (
  <figcaption {...props} />
);

export { Figure, Figcaption };
