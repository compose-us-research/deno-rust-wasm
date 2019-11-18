import init, {
  returns_js_value_directly,
  returns_ok_js_value,
  returns_err_js_value
} from "./pkg/deno_rust_wasm.js";
import * as wasm from "./pkg/deno_rust_wasm_bg.wasm";

(async () => {
  console.log("before init");
  await init(wasm);
  console.log("after init");

  try {
    console.log("try stuff!");
    // JsValue::from_str("")
    console.log("why is this returning 36?", wasm.returns_js_value_directly());

    // Err(JsValue::from_str("this is actually working"))
    try {
      const result = returns_ok_js_value();
      console.log("why is this 37?", result);
    } catch (error) {
      console.log("there should not be an error", error);
    }

    // Err(JsValue::from_str("this is actually working"))
    try {
      const result = returns_err_js_value();
      console.log("this is never called and seen:", result);
    } catch (error) {
      console.log("why is this working?", error);
    }
  } catch (error) {
    console.log("some issue!", error);
  }
})();
