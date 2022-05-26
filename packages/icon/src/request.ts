import { requestFile } from "@ind/utils";

type IconFile =
  | {
      ok: true;
      svg: string;
    }
  | {
      ok: false;
      svg: null;
    };

interface IconFileUnknown {
  ok: boolean;
  svg: string | null;
}

const iconFiles = new Map<string, IconFile>();

export async function requestIcon(url: string): Promise<IconFile> {
  if (iconFiles.has(url)) {
    return iconFiles.get(url)!;
  }

  const icon = await requestFile(url);
  const result: IconFileUnknown = { ok: icon.ok, svg: icon.text };
  if (icon?.ok) {
    const div = document.createElement("div");
    div.innerHTML = icon.text;
    const svg = div.firstElementChild;
    result.svg = svg?.tagName.toLowerCase() === "svg" ? svg.outerHTML : "";
    iconFiles.set(url, result as IconFile);
  }

  return result as IconFile;
}
