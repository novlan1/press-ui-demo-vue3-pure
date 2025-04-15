// const { execCommand } = require('t-comm');
const { initWithPressUI } = require('../../src/press-ui/script/watch/init');
// const {replaceToVue3 } = require('../../src/press-ui/script/watch/vue3')

function main() {
  initWithPressUI();
  // execCommand('rm -rf src/packages/press-hor-swiper-light', process.cwd(), 'inherit');

  // replaceToVue3()
}


main();
