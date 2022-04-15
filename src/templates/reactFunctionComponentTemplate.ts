import * as vscode from 'vscode';
import { StyleLanguage } from '../types';

export function reactFunctionComponentTemplate(
  componentName: string,
  stylesLanguage: StyleLanguage = StyleLanguage.scss,
) {
  return `
import React from 'react';

import styles from './${componentName}.module.${stylesLanguage}';
import { ${componentName}Props } from './${componentName}Types'

export const ${componentName} = ({}: ${componentName}Props) => {
  return <div className={styles.${componentName}}>${componentName}</div>;
}
`.trimLeft();
}
