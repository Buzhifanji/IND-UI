export type IconLibraryUrl = (name: string) => string;
export type IconLibrarySvg = (svg: SVGElement) => void;
export interface IconLibrary {
  name: string;
  handleUrl: IconLibraryUrl;
  handleSvg?: IconLibrarySvg;
}

let iconLib: IconLibrary[] = [];

/**
 * 加载 icon 图标资源
 * @param name icon 图标库名称
 * @param options
 */
export function registerIconLibrary(
  name: string,
  options: {
    handleUrl: IconLibraryUrl;
    handleSvg?: IconLibrarySvg;
  }
) {
  unregisterIconLibrary(name);
  iconLib.push({ name, ...options });
  console.log("iconLib", iconLib);
}

export function unregisterIconLibrary(name: string) {
  iconLib = iconLib.filter((item) => item.name !== name);
}

export function getIconLibrary(name?: string) {
  return iconLib.find((lib) => lib.name === name);
}
