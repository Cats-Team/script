// ==UserScript==
// @name         复制授权
// @namespace    none
// @version      1.4
// @description  ⚠️前排提示： 该脚本与复制限制解除类脚本不兼容！若需要该脚本请卸载解除限制类的脚本，该类脚本目前主要包括网页复制限制解除和复制限制解除(本地版)。脚本作用： 专防网页后台复制各种口令。脚本起效后网页右侧会出现半透明小红点：红色状态表示拦截所有复制行为，点击红点变成绿色时临时放行所有复制，再点击变回红色状态。
// @author       杏梢
// @match        *://*/*
// @match        *://*
// @icon         https://cdn.jsdelivr.net/gh/hacamer/hacamer.github.io@master/themes/butterfly/source/img/hacamer.jpg
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @license      GPL-3.0 License
// @run-at       document-start
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
  let red = true,
  lastCopyTime = 0;
  function copyHandle(e){
   function stopCopy(){e.preventDefault();e.stopImmediatePropagation();lastCopyTime = Date.now();}
   if(Date.now() - lastCopyTime < 100){stopCopy();return;}
   if(red && !(needc && confirm('网页正在尝试复制，是否允许？'))){stopCopy();}
  }
  document.addEventListener('copy',(e)=>copyHandle(e),{'passive':false, 'capture':true});
  Array.from(document.getElementsByTagName('iframe')).forEach((i)=>i.contentDocument.addEventListener('copy',(e)=>copyHandle(e),{'passive':false, 'capture':true}));
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
