/**
 * @description vscode 내의 .svelte 템플릿안에 SCSS 사용시에 lint의 오류들을 잡기위해 파일 생성함
 * vscode setting.json에 설정 추가 필요
 * 1. "svelte.plugin.css.diagnostics.enable": false,
 * 2. "svelte.language-server.runtime": "/usr/local/bin/node",  (이부분은 개인마다 차이가 있을수 있으니 터미널에 which node 커맨드로 경로 확인필요)
 */

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess(),
};