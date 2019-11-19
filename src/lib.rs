extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn returns_js_value_directly() -> JsValue {
    JsValue::from_str("this is a directly returned JsValue")
}

#[wasm_bindgen]
pub fn returns_ok_js_value() -> Result<JsValue, JsValue> {
    Ok(JsValue::from_str("this is a JsValue returned inside an Ok()"))
}

#[wasm_bindgen]
pub fn returns_err_js_value() -> Result<JsValue, JsValue> {
    Err(JsValue::from_str("this is a JsValue returned inside an Err()"))
}
