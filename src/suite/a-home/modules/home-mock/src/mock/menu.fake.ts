import { defineFakeRoute } from '@zhennann/vite-plugin-fake-server/client';

const __MenuData = [
  {
    title: 'Home',
    caption: '',
    icon: '::home',
    to: '/a/home/home',
  },
  {
    title: 'Counter',
    caption: 'Counter',
    icon: '',
    to: '/a/demo/counter',
  },
  {
    title: 'Counter(Local Bean)',
    caption: 'Counter(Local Bean)',
    icon: '',
    to: '/a/demo/counter2',
  },
  {
    title: 'Github',
    caption: 'github.com/cabloy',
    icon: ':social:github',
    href: 'https://github.com/cabloy',
  },
];

export default defineFakeRoute([
  {
    url: '/home/mock/getMenu',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'Success',
        data: __MenuData,
      };
    },
  },
]);
