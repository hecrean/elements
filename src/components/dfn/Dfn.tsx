import { createCtx } from '@/utils/context';
/**
 * Use rust speedy web compiler to parse our pages .tsx files, and add <Def></Def> around any word which is one of our word lists
 */

/**
 * Dfn is a supercharfed dfn element, which t
 */
import { Definition, WordOrAbbreviation, Dictionary } from './dfn.types';

const [useDictionary, DictionaryProvider, DictionaryConsumer] =
  createCtx<Dictionary>();

interface DictionaryProps {
  abbr: WordOrAbbreviation;
  def: Definition;
}
const Dfn = ({ abbr, def }: DictionaryProps) => {
  return (
    <span>
      <abbr>{abbr}</abbr>
      <dfn>{def}</dfn>
    </span>
  );
};
