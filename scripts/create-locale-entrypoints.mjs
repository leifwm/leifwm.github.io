import { mkdir, readFile, writeFile } from "node:fs/promises";

// GitHub Pages serves explicit language URLs without relying on its 404 fallback.
const html = await readFile("dist/index.html", "utf8");
const routes = ["", "about", "cv", "trato", "trato-v2", "pertinho", "ser", "ipadsurvey", "projects"];
for (const locale of ["en", "pt"]) {
  for (const route of routes) {
    const directory = `dist/${locale}/${route}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, html.replace('<html lang="en">', `<html lang="${locale === "pt" ? "pt-BR" : "en"}">`));
  }
}
