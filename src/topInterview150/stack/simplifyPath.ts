export function simplifyPath(path: string): string {
  let dir: string[] = [];
  let newPath = path.split("/");

  newPath.forEach((item) => {
    if (dir && item === "..") dir.pop();
    else if (![".", "", ".."].includes(item)) dir.push(item);
  });

  return "/" + dir.join("/");
}
