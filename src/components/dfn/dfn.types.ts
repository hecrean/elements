type WordOrAbbreviation = string;
type Definition = string;
type Dictionary = {
  definitions: Map<WordOrAbbreviation, Definition>;
};

export type { WordOrAbbreviation, Definition, Dictionary };
