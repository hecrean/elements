import { createCtx } from '@/utils/context';
import React, {
  ComponentProps,
  CSSProperties,
  forwardRef,
  ReactNode,
  Ref,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { getIdFromTree } from './utils';
import styles from './Ref.module.scss';

interface Footnote {
  idRef: string;
  idNote: string;
  description: ReactNode;
}

type State = {
  footnotes: Map<string, Footnote>;
  footnotesTitleId: string;
  getFootnoteRefId: (children: ReactNode, id?: string) => string;
  getFootnoteId: (children: ReactNode, id?: string) => string;
  register: (footnote: Footnote) => () => void;
};

// type Env = State & Update<State>;

const [useFootnotes, _FootnotesProvider, FootnotesConsumer] =
  createCtx<State>();

type FootnotesProviderProps = {
  footnotesTitleId?: string;
  children: ReactNode;
};
export const FootnotesProvider = ({
  children,
  footnotesTitleId = `footnotes-label`,
}: FootnotesProviderProps) => {
  const [footnotes, setFootnotes] = React.useState(new Map<string, Footnote>());

  const getBaseId = React.useCallback(
    (children: ReactNode, id?: string) => id || getIdFromTree(children),
    [],
  );

  const getFootnoteRefId = React.useCallback(
    (children: ReactNode, id?: string) => getBaseId(children, id) + `-ref`,
    [getBaseId],
  );
  const getFootnoteId = React.useCallback(
    (children: ReactNode, id?: string) => getBaseId(children, id) + `-note`,
    [getBaseId],
  );

  const register = React.useCallback((footnote: Footnote) => {
    setFootnotes((footnotes) => {
      const clone = new Map(footnotes);
      if (!clone.has(footnote.idRef)) clone.set(footnote.idRef, footnote);
      return clone;
    });

    // Return a function which can be used to unregister the footnote. This
    // makes it convenient to register a footnote reference on mount, and
    // unregister it on unmount.
    return () => {
      setFootnotes((footnotes) => {
        const clone = new Map(footnotes);
        clone.delete(footnote.idRef);
        return clone;
      });
    };
  }, []);

  // When JavaScript kicks in and the application mounts, reset the footnotes
  // store which was mutated by every reference.
  React.useEffect(() => setFootnotes(new Map()), []);

  return (
    <_FootnotesProvider
      value={{
        footnotes,
        footnotesTitleId,
        getFootnoteRefId,
        getFootnoteId,
        register,
      }}
    >
      <div className={styles.footnotesProvider}>{children}</div>
    </_FootnotesProvider>
  );
};

type FootnotesProps = ComponentProps<'footer'>;
export const Footnotes = ({ className, ...restProps }: FootnotesProps) => {
  const { footnotes, footnotesTitleId } = useFootnotes();

  if (footnotes.size === 0) return null;

  const references = Array.from(footnotes.values());

  return (
    <footer
      className={`${styles.footnotesFooter} ${className}`}
      role="doc-endnotes"
      {...restProps}
    >
      <h2 className={styles.footnotesTitle} id={footnotesTitleId} />
      <ol className={styles.footnotesList}>
        {references.map(({ idNote, idRef, description }, index) => (
          <li
            className={styles.footnotesListItem}
            id={idNote}
            key={idNote}
            role="doc-endnote"
          >
            {description}&nbsp;
            <a
              className={styles.footnotesBackLink}
              href={`#` + idRef}
              aria-label={`Back to reference ${index + 1}`}
              role="doc-backlink"
            >
              ↩
            </a>
          </li>
        ))}
      </ol>
    </footer>
  );
};

interface FootnoteReferenceProps {
  description: ReactNode;
  children: ReactNode;
  id?: string;
}

type FootnoteReferenceApi = {
  getPosition: () => any;
};

export const FootnoteRef = ({
  description,
  children,
  id,
}: FootnoteReferenceProps) => {
  const {
    footnotes,
    footnotesTitleId,
    getFootnoteRefId,
    getFootnoteId,
    register,
  } = useFootnotes();

  const [verticalOffset, setVerticalOffset] = useState<number>(0);

  const idRef = React.useMemo(
    () => getFootnoteRefId(children, id),
    [getFootnoteRefId, description, children, id],
  );
  const idNote = React.useMemo(
    () => getFootnoteId(children, id),
    [getFootnoteId, description, children, id],
  );
  const footnote = React.useMemo(
    () => ({ idRef, idNote, description }),
    [idRef, idNote, description],
  );

  // It is not possible to update the React state on the server, still the
  // footnote references need to be registered so the footnotes can be rendered.
  // In that case, we mutate the state directly so the footnotes work with SSR.
  if (!footnotes.has(footnote.idRef)) {
    footnotes.set(footnote.idRef, footnote);
  }

  // Once the application mounts, the footnotes state has been emptied and we
  // can properly register the current footnote in it, and unregister it if it
  // was to unmount.
  React.useEffect(() => {
    const unregister = register(footnote);

    return () => unregister();
  }, [register, footnote]);

  const footnoteReferenceRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (footnoteReferenceRef && footnoteReferenceRef.current) {
      const { x, y, top, bottom, left, right } =
        footnoteReferenceRef.current.getBoundingClientRect();
      setVerticalOffset(y / top);
    }
  }, []);

  return (
    <a
      ref={footnoteReferenceRef}
      className={styles.footnotesRef}
      id={idRef}
      href={`#${idNote}`}
      role="doc-noteref"
      aria-describedby={footnotesTitleId}
    >
      {children}
    </a>
  );
};
