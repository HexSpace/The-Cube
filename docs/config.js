window.$docsify = {
  name: 'The Cube',
  nameLink: {
    '/zh-cn/': '#/zh-cn/',
    '/': '#/'
  },
  alias: {
   },
  themeColor: '#0467C8',
  auto2top: true,
  autoHeader: true,
  coverpage: ['/', '/zh-cn/'],
  executeScript: true,
  loadNavbar: true,
  loadSidebar: true,
  maxLevel: 6,
  subMaxLevel: 6,
  onlyCover: false,
  formatUpdated: '{MM}/{DD} {HH}:{mm}',
  notFoundPage: {
    '/':'_404.md',
    '/zh-cn':'zh-cn/_404.md'
  },

  plugins: [],

  languages: [
  { label: 'English', code: 'uk', lang: 'en', default: true }
  ],

  fallbackLanguages: ['en'],

  search: {
  maxAge: 86400000,
  paths: 'auto',
  placeholder: 'Type to search',
  placeholder: {
  '/zh-cn/': '搜索',
  '/': 'Type to search'
  },
  noData: 'No Results!',
  noData: {
  '/zh-cn/': '找不到结果',
  '/': 'No Results'
  },
  depth: 6
  }
};
