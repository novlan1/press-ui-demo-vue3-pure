import TitleMap from '../utils/i18n/title-i18n.json';
import pages from '../pages/index/page-config.json';

const disableList = [
  'hor-swiper-light',
];


export function getPressUIPages() {
  const result = pages.pages.reduce((acc: any, item) => {
    const res = item.list.reduce((ac: any, it) => {
      const { url, navigationStyle } = it;
      let componentName = '';
      const reg = /[\w]+\/([^\\/]+)/;
      const match = url.match(reg);

      if (match?.[1]) {
        componentName = match[1];
        if (disableList.indexOf(componentName) > -1) {
          return ac;
        }

        ac.push({
          path: `${componentName}/${componentName}`,
          meta: {
            showBack: true,
            title: (TitleMap['zh-CN'] as any)?.[componentName],
            hideNavigator: navigationStyle === 'custom',
          },
          component: () => import(`src/pages/press/${componentName}/${componentName}.vue`),
        });
      }
      return ac;
    }, []);

    acc.push(...res);
    return acc;
  }, []);


  return result;
}


getPressUIPages();
