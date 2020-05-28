//import { BackendApiAddress } from "../../apollo/client"

// 即使不像下面这样，在model中直接使用isBrowser，打开上面的import注释，产生间接引用，貌似会导致webpack做些事情
// 这时哪怕不调用import的内容（如loginUser2.js），也会报同样的错误：TypeError: Object(...) is not a function

import { isBrowser } from "umi"

function getBackendApiPrefix() {
  console.log("isBrowser:", isBrowser, isBrowser())
  if (!isBrowser()) {
    return "http://localhost:8080" //本机测试
  } else {
    return window.location.protocol + "//" + window.location.host
  }
}

const apiUrl = getBackendApiPrefix() + "/api"

export default {
  namespace: "mn_login",
  state: {
    loginUser: { userName: "testUser", url: apiUrl },
  },
  reducers: {},
}
