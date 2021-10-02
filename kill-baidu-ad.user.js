// ==UserScript==
// @name         百度优化+百家号自动展开
// @namespace    none
// @version      0.1
// @description  优化=去广告+去重定向
// @author       杏梢
// @match        *://*.baidu.com/*
// @icon         https://cdn.jsdelivr.net/gh/hacamer/hacamer.github.io@master/themes/butterfly/source/img/hacamer.jpg
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function(){const key=encodeURIComponent('百家号自动展开:执行判断');if(window[key]){return;}try{window[key]=true;function setTurnPage(cssStr){for(let n of document.querySelectorAll(cssStr)){n.addEventListener('click',(e)=>{e.stopPropagation();},{'passive':true,'capture':true})}}document.addEventListener('readystatechange',()=>{const css=document.createElement('style');css.innerText='#content_wrapper .mainContent{height:auto!important;}#content_wrapper .oPadding,.contentMedia .openImg, #content_wrapper .bottomMargin, .wrap#page_wrapper>div>:not(#content_wrapper), #content_wrapper .headDeflectorContainer{display:none;}';if(location.hostname=='m.baidu.com'||location.hostname=='www.baidu.com'){css.innerText+='.na-ec-item,.ec_ad_results{height:0;padding:0;overflow:hidden;}#header>:last-child,.blank-frame{display:none;}';for(let n of document.querySelectorAll('#page #page-bd #results .result')){try{const realUrl=JSON.parse(n.dataset.log.replace(/'/gm,'"')).mu,article=n.querySelector('article');if(realUrl&&article.getAttribute('rl-link-href')){article.setAttribute('rl-link-href',realUrl);n.querySelectorAll('a').forEach((a)=>{a.href=realUrl;});}}catch(e){}}setTurnPage('.new-nextpage-only,.new-pagenav-left,.new-pagenav-right');for(let a of document.querySelectorAll('.search-link')){a.classList.remove('search-link');}setTimeout(()=>{for(let a of document.querySelectorAll('.hint-rcmd-item-container>[data-url]')){a.removeAttribute('data-url');}},2500);}else if(location.hostname=='baijiahao.baidu.com'||location.href.indexOf('mbd.baidu.com/newspage/data/')>0){let checkCount=0;var checkTimer=setInterval(function(){if(++checkCount>10){clearInterval(checkTimer);}let BJHbtn=document.querySelector("div.layer-itemBtn.normal");if(BJHbtn){BJHbtn.dispatchEvent(new Event('click',{'bubbles':true,'cancelable':true}));clearInterval(checkTimer);}},666);}document.head.appendChild(css);},{'passive':true,'once':true});}catch(err){console.log('百家号自动展开：',err);('.validation_ticker').remove();}})();


