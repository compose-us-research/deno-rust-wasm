# deno-rust-wasm

Test project for Rust and deno interop via WebAssembly.

Run it by building the WebAssembly module and use deno to import / test it:

```
wasm-pack build && deno main.ts
```

## The problem

Returning a `JsValue` or a successful result `Ok(JsValue)` yields a pointer instead of the `JsValue`?

See [returns_js_value_directly](./src/lib.rs#L5-L8) and [returns_ok_js_value](./src/lib.rs#L10-L13) for the Rust implementations and [the deno usage](./main.ts#L7-L16).

Strangely, using `Err(JsValue)` works as you can see in [returns_err_js_value](./src/lib.rs#L15-L18) and its [usage in deno](./main.ts#L18-L24)

## Another try

```
wasm-pack build --target web
```

When initializing through the `.js` file, the browser stuff seems to work. Deno is still not really happy with it for now...
