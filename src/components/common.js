import { isBrowser } from "umi"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// 后端地址定义

export function getBackendApiPrefix() {
  console.log("isBrowser:", isBrowser, isBrowser())
  if (!isBrowser()) {
    return "http://localhost:8080" //本机测试
  } else {
    return window.location.protocol + "//" + window.location.host
  }
}
