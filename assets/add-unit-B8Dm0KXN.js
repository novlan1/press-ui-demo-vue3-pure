function r(){let n;return n=typeof window>"u",n}const o=r();function c(n){return n!=null}function e(n){return typeof n=="function"}function f(n){return n!==null&&typeof n=="object"}function i(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function p(n){return i(n)&&e(n.then)&&e(n.catch)}function d(n){const t=typeof n;return n!==null&&(t==="object"||t==="function")}function s(n){return/^\d+(\.\d+)?$/.test(n)}function x(n){return/^\d+(\.\d+)?$/.test(n)}function b(n){return/^[\u4e00-\u9fa5]+$/gi.test(n)}const u=/^-?\d+(\.\d+)?$/;function $(n){if(n!=null)return u.test(`${n}`)?`${n}px`:n}function y(n,t=!1){return s(n)?t?`${n}px`:Number(n):/(rpx|upx)$/.test(n)?t?`${uni.upx2px(parseInt(n,10))}px`:Number(uni.upx2px(parseInt(n,10))):t?`${parseInt(n,10)}px`:parseInt(n,10)}export{o as I,$ as a,b,p as c,f as d,c as e,x as f,y as g,d as i};