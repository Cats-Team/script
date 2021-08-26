// ==UserScript==
// @name         Pure百度美化
// @namespace    none
// @version       2.0
// @description   一个非常漂亮的百度质感美化皮肤
// @author       杏梢
// @match        *://*.baidu.com/*
// @icon         https://cdn.jsdelivr.net/gh/hacamer/hacamer.github.io@master/themes/butterfly/source/img/hacamer.jpg
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  const whiteList = ["m.baidu.com", "www.baidu.com", "wapbaike.baidu.com", "baike.baidu.com", "http://m.baidu.com/?tn=simple", "https://m.baidu.com/?tn=simple", "mbd.baidu.com", "pae.baidu.com", "baijiahao.baidu.com", "haokan.baidu.com", "mobile.baidu.com", "zhidao.baidu.com", "wk.baidu.com", "fanyi.baidu.com", "jingyan.baidu.com"];
  const hostname = window.location.hostname;
  const key = encodeURIComponent('酷安搜CWorld:Pure百度美化:执行判断');
  const canLoad = whiteList.some(url => {
    if (url.match(hostname)) {
      return true;
    };
    return false;
  });

  if (!canLoad || window[key]) {
    return;
  };
  window[key] = true;

  if (["m.baidu.com", "www.baidu.com", "wapbaike.baidu.com", "baike.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /**广告**/

/*------以下内容为可选，选择文字后按 Ctrl+SHift+/ 即可更改------*/

/*首页实时热点*/

/* #hotwordlist{display: none !important;} */

/*搜索页小视频*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="xsp"] {
  display: none !important;
}

/*搜索页热议（集成微博）*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="realtime_ugc"] {
  display: none !important;
}

/*搜索页采购*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="b2b"] {
  display: none !important;
}

/*搜索页招聘*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="baipin"] {
  display: none !important;
}

/*搜索页小程序*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="mini_program"] {
  display: none !important;
}

/*搜索页小程序*/

.se-tablink-scroll-wrapper a.se-tabitem[data-log="notes"] {
  display: none !important;
}

/*百度百科 猜你关注*/

.baike-app-view .theme-container {
  display: none !important;
}

/*百度百科 TA说*/

.baike-app-view .tashuo-list {
  display: none !important;
}

/*------以下内容请勿改动------*/

#header > div:last-child {
  padding-bottom: 0 !important;
  opacity: 0 !important;
  height: 0 !important;
}

.ns-square-point,
.ts-image-uploader-icon-point,
a.index-banner.square-banner-bgicon,
.news-container,
.banners a[href="https://m.baidu.com/l=1/tc?logid=2598984798&from=0&ref=index_iphone&nsrc=IlPT2AEptyoA_yixCFOxCGZb8c3JV3T5AB3ORS5K1De8mVjte4viZQRAUj0sNTrIBTLS5GOChAJ-iyubKk2t7gV1mv5wgjN6jiHwdsjqea&bdenc=1&ct=10&cst=2&logFrom=operatebanner&logInfo=1"],
.square-hot-container,
.se-ft-promlink,
.hudong-btn,
.sfc-image-content-mediacy-slider-toolbar-download-tips,
._1k19YN3-qdVhoYpBLDMjYV,
.commentEmbed-backHomeCard,
.ec_wise_ad_card div,
.hint-fold-results-box .hint-text,
.banner-item a {
  display: none !important;
}

/**配色**/

.menu-container .menu-item.current {
  color: #5892e3;
}

.mui-switch.mui-switch-animbg:checked,
.menu-container .menu-item.current span,
.ivk-button.ivk-button-popup {
  background-color: #5892e3;
}

/**动画**/

.menu-item a:hover {
  transition: 0.3s;
}

/**细节调整**/

/*卡片*/

.c-result.result,
.rec-item,
.user-listview .panel,
.c-result,
.sfc-image-content-waterfall-vertical .sfc-image-content-waterfall-item,
.sfc-realtime .c-infinite-scroll > div,
.new-pagenav,
.se-relativewords,
.video-cell {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

.icard:active {
  background-color: #f4f4f4;
  box-shadow: 0 2px 4px #0000003d;
}

.c-container {
  margin: 0;
}

.sfc-image-content-waterfall-vertical .sfc-image-content-waterfall-item {
  margin: 3px 0 0;
  border-radius: 2px;
}

.new-pagenav,
.se-relativewords {
  margin: 6px 5px !important;
}

.video-cell {
  padding: 0 0.17rem 0.1rem 0.17rem !important;
}

/*首页*/

.tab_news .tab-news-content {
  background-color: #00000005;
}

.menu-container.showtabs {
  box-shadow: 0 2px 10px #0000001f;
}

.sf-container .sf-header {
  background: #fff;
  border-bottom: 0;
}

.searchbox-exp #index-form,
.his-wrap-new #index-form .index-fix,
.se-form,
.his-wrap-new .index-fix {
  transition: 0.3s;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  border: none;
  overflow: visible;
  background: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.searchbox-exp #index-form:focus,
.his-wrap-new #index-form .index-fix:focus,
.se-form:focus {
  box-shadow: 0 2px 5px #0000003b;
}

.searchbox-exp #index-bn {
  transition: 0.3s;
  color: #fff;
  border-radius: 0 5px 5px 0;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.searchbox-exp #index-bn:active {
  background: #4879bd !important;
}

.newHisBtn {
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  border: none;
}

.rn-three-pic-wrap {
  margin-right: 3px;
}

.rn-three-pic-wrap img {
  transition: 0.3s;
  border-radius: 3px;
}

#hotwordlist,
#hotwordlist .hotword-container {
  background: #fff0;
}

.his-wrap-new #index-form .his,
.his-wrap-new #index-form .sug {
  border-bottom: 1px solid #00000005;
}

.menu-container .menu-item span {
  width: 40px;
  height: 4px;
  border-radius: 3px 3px 0 0;
}

.se-tablink-scroll-wrapper .se-tab-cur:after {
  border-bottom: 0;
  background-color: #5892e3;
  height: 3px;
  border-radius: 2px 2px 0 0;
}

.news-item-div {
  background: #fff0;
  padding-top: 0;
}

.rn-channelMgr#channel_mgrview .channel-content .channel-item .name,
.rn-channelMgr#channel_offline .channel-content .channel-item .name {
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.user-listview .panel li:nth-child(1),
.user-listview .panel li:nth-child(2),
.user-listview .panel li:nth-child(3),
.user-listview .panel h2,
.user-listview .panel li {
  border: none;
}

.user-listview .panel ul {
  background-color: #00000005;
  margin-bottom: 0;
}

.filter-panel-confirm {
  background: #5892e3;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 10px #5892e354;
}

.filter-panel-reset {
  background: #0000000f;
  border: none;
  border-radius: 5px;
  height: 0.38rem;
  line-height: 0.38rem;
  margin-right: 0.08rem;
}

.se-tab-lists.c-flexbox {
  width: 200% !important;
}

.se-head-tablink {
  background: #fff0;
}

.his-wrap-new {
  background: #eee;
}

.suggest-div {
  top: 15px !important;
  right: 0;
  left: -0.14rem;
  padding: 0 0.1rem;
  border: 0;
  border-top: none;
}

.his-wrap-new .suggest-feedback {
  border-top: none;
  background-color: #fff0;
}

/*百度搜索 展开全部内容*/

.hint-fold-results-box {
  display: none;
}

div#page-relative,
div#page-controller {
  display: block;
}

#results,
.se-page-bd,
section.hint-fold-results-wrapper.hint-no-fold {
  height: 100%;
}

/*设置*/

.user-setting li {
  border-bottom: 0;
}

.mui-switch {
  width: 40px;
  height: 15px;
  border: none;
  box-shadow: none;
  border-radius: 20px;
  right: 16px;
  top: 28px;
  background-color: rgba(0, 0, 0, 0.1);
}

.mui-switch:before {
  content: "";
  width: 24px;
  height: 24px;
  top: -5px;
  left: -5px;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.23);
}

/*文章*/

.packupButton,
.bottomMargin {
  display: none;
}

.mainContent {
  height: 100% !important;
}

/*------百度百科------*/

/*广告*/

.baike-app-view .declare,
.baike-app-view .topbar .top-icon.spark-icon,
.JiyxvaTlnAg0,
ul#VpwCdqhH5,
.baike-app-view .catalog-tip.show,
.baike-app-view .button-fixed.tashuo-button-fixed,
.YWgIycS0,
ul#yjgRTqXU9,
div#nOrlCV6,
ul#ksAabJ7 {
  display: none !important;
}

/*颜色*/

/*卡片*/

.baike-app-view .qtqy-container,
.baike-app-view .movie-actor,
.baike-app-view .movie-video,
.baike-app-view .movie-photo,
.baike-app-view .movie-comment {
  transition: 0.3s;
  overflow: hidden;
  width: auto;
  margin: 6px 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

.baike-app-view .qtqy-container {
  position: relative;
  top: 5px;
  left: -7px;
  width: 100%;
  padding: 7px;
  margin: 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 4px #dfdfdf;
  border-radius: 5px;
}

/*细节优化*/

.baike-app-view .button-fixed {
  border: none;
  background: #fff0;
  box-shadow: none;
  color: #000;
  width: 0.44rem;
  height: 0.44rem;
  line-height: 0.38rem;
  font-size: 0.24rem;
  border-radius: 50%;
  bottom: auto;
  right: 100px;
}

.baike-app-view .yx-load-more-flow .yx-load-more-inner {
  background: #fff;
  border: none;
  border-radius: 19px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.23);
}

.baike-app-view .ui-suggestion ul li {
  border-bottom: 1px solid #00000008;
  padding: 0;
}

.baike-app-view .ui-suggestion .ui-suggestion-button {
  border-bottom: none;
  background: #f8f8f8;
  height: 0.45rem;
  overflow: hidden;
}

.baike-app-view .extra-info-n .extra-list-item.extra-polysemant .more-means {
  border: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px #0000003b;
  color: #5892e3;
  padding: 8px 15px;
}

.baike-app-view
    .extra-info-n
    .extra-list-item.extra-polysemant
    .more-means-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
          </style>
        `;
  };

  if (["http://m.baidu.com/?tn=simple", "https://m.baidu.com/?tn=simple"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .tab_news .tab-news-content,
.s-loading-frame.bottom .bottom-load-before {
  display: none !important;
}

#logo {
  padding-bottom: 200px !important;
}

.searchbox-exp #index-form {
  margin-bottom: 200px !important;
}
          </style>
        `;
  };

  if (["mbd.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*广告*/

.icard .icard-float-point .icard-point-img {
  display: none !important;
}

/*配色*/

.ccard-nav .selected:before,
.follow-no {
  background-color: #5892e3;
}

/*动画*/

.icard-ttcont,
.c