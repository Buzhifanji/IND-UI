interface File {
  ok: boolean;
  status: number;
  text: string;
}

const files = new Map<string, Promise<File>>();

export function requestFile(
  url: string,
  mode: RequestMode = "cors"
): Promise<File> {
  if (files.has(url)) {
    return files.get(url)!;
  }

  const result = fetch(url, { mode }).then(async (res) => {
    return {
      ok: res.ok,
      status: res.status,
      text: await res.text(),
    };
  });

  files.set(url, result);
  return result;
}
