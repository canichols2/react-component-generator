import { ExportStringType } from './../types/ExportStringType';
export function exportLineTemplate(
  componentName: string,
  exportType: ExportStringType,
) {
  switch (exportType) {
    case ExportStringType.BarrelFileDefaultExportAs:
      return `export {default as ${componentName}} from './${componentName}';\n`;

    case ExportStringType.BarrelFileNamedExportFrom:
      return `export {${componentName}} from './${componentName}';\n`;

    case ExportStringType.BarrelFileNamedExportFrom:
    default:
      return `export * from './${componentName}';\n`;
  }
}
