import * as vscode from 'vscode';
import { StyleLanguage } from '../types';

export function reactFunctionComponentTypesTemplate(
  componentName: string,
  stylesLanguage: StyleLanguage = StyleLanguage.scss
) {
  return `
export interface ${componentName}Props {
}

`.trimLeft();
}
