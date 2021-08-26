// ==UserScript==
// @name         复制授权
// @namespace    none
// @version      1.1
// @description  复制授权
// @author       杏灵
// @match        *://*/*
// @match        *://*
// @icon         https://i.loli.net/2021/03/30/ULV9XunaHesqGIR.png
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @license      GPL-3.0 License
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function(){const
/* 等号后的数可供修改
 1为是 0为否 */
needc = 1, /* 拦截复制时是否弹窗确认 */
shows = 1, /* 是否显示小红点开关 */
/*－－－－以下勿改－－－－*/
 key = encodeURIComponent('复制授权:执行判断');
 if(window[key]){return;}
 try {
  window[key] = true;
  let red = true;
  function pc(e){if(red && !(needc && confirm('网页正在尝试复制，是否允许？'))){e.preventDefault();e.stopPropagation();}}
  document.addEventListener('copy',(e)=>pc(e),{'passive':false, 'capture':true});
  Array.from(document.getElementsByTagName('iframe')).forEach((i)=>i.contentDocument.addEventListener('copy',(e)=>pc(e),{'passive':false, 'capture':true}));
  if(shows){
   const sw = document.createElement("div");
   sw.style = 'position:fixed!important;bottom:45%;right:10px;z-index:999999;width:14px;height:14px;opacity:0.4;border-radius:7px;background:red';
   document.body.appendChild(sw);
   sw.addEventListener('touchmove', function(e){
    sw.style.right = sw.style.bottom = '';
    sw.style.left = (e.touches[0].clientX - 7) + 'px';
    sw.style.top = (e.touches[0].clientY - 7) + 'px';
   }, {'passive':true});
   sw.addEventListener('click', function(e){
    sw.style.background = red ? 'green' : 'red'
    red = !red;
   }, {'passive':true});
  }
 } catch(err){console.log('复制授权：', err);}
})();
