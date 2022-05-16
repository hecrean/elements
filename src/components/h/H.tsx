import { ComponentProps } from 'react';
import { Box } from '@/components/Polymorphic';
import styles from './H.module.scss';

type HeadingProps = {
  as: `h${1 | 2 | 3 | 4 | 5 | 6}`;
} & ComponentProps<'h1'>;

const H = ({ as, children }: HeadingProps) => {
  return (
    <Box as={as} className={styles.heading} data-kind={as}>
      {children}
    </Box>
  );
};

const H1 = ({ children, ...props }: ComponentProps<'h1'>) => (
  <h1 {...props}>{children}</h1>
);
const H2 = ({ children, ...props }: ComponentProps<'h1'>) => (
  <h2 {...props}>{children}</h2>
);
const H3 = ({ children, ...props }: ComponentProps<'h2'>) => (
  <h3 {...props}>{children}</h3>
);
const H4 = ({ children, ...props }: ComponentProps<'h3'>) => (
  <h4 {...props}>{children}</h4>
);
const H5 = ({ children, ...props }: ComponentProps<'h4'>) => (
  <h5 {...props}>{children}</h5>
);
const H6 = ({ children, ...props }: ComponentProps<'h5'>) => (
  <h6 {...props}>{children}</h6>
);
export { H, H1, H2, H3, H4, H5, H6 };
