wasm-pack build &&
  sed -i.bak "s/^import "'\*'" as wasm from '.*';$/let wasm = null; export default function init(w) { wasm = w; };/" "pkg/deno_rust_wasm.js" &&
  deno main.ts
