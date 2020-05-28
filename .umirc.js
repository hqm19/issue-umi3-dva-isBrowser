export default {
  //title: "umi-dva",
  //base: '/ep',
  //publicPath:'/ep/',
  ssr: {
    //disableExternal: true,  //"disableExternal" is not allowed
    devServerRender: true,
  },
  dynamicImport: {},
  // exportStatic: {
  //   extraRoutePaths: async () => {
  //     // const result = await request('https://your-api/news/list');
  //     return Promise.resolve(["/tree", "/tree/1", "/tree/2", "/tree/3", "/tree/4", "/tree/5", "/tree/6", "/tree/7", "/tree/8", "/tree/9", "/tree/a", "/tree/b", "/tree/c", "/tree/A"])
  //   },
  // },
  routes: [
    {
      path: '/',
      component: './index',
      exact: true,
    },
  ],
  antd: {
    dark: false,
    compact: true,
  },
  dva: {
    immer: true,
  },
};
