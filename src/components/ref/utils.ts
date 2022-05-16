import React, {
  ReactElement,
  ReactFragment,
  ReactPortal,
  ReactNode,
} from 'react';
import { isPortal, isFragment, isElement } from 'react-is';

const isReactElement = (node: ReactNode): node is ReactElement => {
  return isElement(node);
};

const isReactFragment = (node: ReactNode): node is ReactFragment => {
  return isFragment(node);
};

const isReactPortal = (node: ReactNode): node is ReactPortal => {
  return isPortal(node);
};

const isBoolean = (node: ReactNode): node is boolean =>
  typeof node === `boolean`;

const isNumber = (node: ReactNode): node is number => typeof node === `number`;

const isString = (node: ReactNode): node is string => typeof node === `string`;

const isNullish = (node: null | undefined): node is null | undefined =>
  typeof node === `undefined` || node === null;

export const getTextFromTree = (node: ReactNode) => {
  let text = ``;
  if (isString(node)) {
    text += node;
  } else if (Array.isArray(node)) {
    text += node.map(getTextFromTree).join(``);
  } else if (isElement(node)) {
    text += getTextFromTree(node.props.children);
  }

  return text;
};

export function getIdFromTree(node: ReactNode) {
  return (
    getTextFromTree(node)
      .toLowerCase()
      // Remove any character that is not a letter, a number, an hyphen or an
      // underscore, regardless of casing
      .replace(/[^a-z0-9-_\s]/g, ``)
      // Replace all spaces with hyphens
      .replace(/\s+/g, `-`)
  );
}
