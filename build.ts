// build.ts
import { copy } from "https://deno.land/std@0.224.0/fs/copy.ts";

const bundleCommand = new Deno.Command(
    "deno", {
    args: ["bundle", "src/index.ts", "--outdir", "docs"],
});
const { code } = await bundleCommand.output();
if (code !== 0) {
  console.error("Failed to bundle TypeScript");
  Deno.exit(code);
}

await copy("src/index.html", "docs/index.html", { overwrite: true });
await copy("src/style.css", "docs/style.css", { overwrite: true });
await copy("assets", "docs/assets", { overwrite: true });

console.log("Build complete!");
