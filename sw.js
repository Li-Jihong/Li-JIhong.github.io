/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Li-Jihong/2022/09/06/前端笔记/index.html","06f3cb61a1725168e237e1423d572ca1"],["/Li-Jihong/2022/09/07/PTA-天梯赛——L1-011-A-B/index.html","99f5a51e142c0d11789b4e756024217f"],["/Li-Jihong/2022/09/08/C-STL库中map的常见操作/index.html","daf8a569a12eca6e439414a23100e44f"],["/Li-Jihong/2022/09/08/PTA-天梯赛——L1-013-计算阶乘和/index.html","3ffa89ca4dfce5c01d96badfee24ba42"],["/Li-Jihong/2022/09/08/PTA-天梯赛——L1-015-跟奥巴马一起画方块/index.html","a93960359addd639d189c69b66d43e73"],["/Li-Jihong/2022/09/08/PTA-天梯赛——L1-016-查验身份证/index.html","dbe3a3ea0910abbea412f888092e0495"],["/Li-Jihong/2022/09/08/早知道暑假不留校了/index.html","54a4cbd8cdadfbd7a923ee07dd71b075"],["/Li-Jihong/2022/09/11/度学习之——卷积神经网络/index.html","6d56cfc5d783a28c1cf00fa7d443045a"],["/Li-Jihong/2022/09/11/日常感悟/index.html","b7b584fec0f817f529d4e2c8b267efec"],["/Li-Jihong/2022/09/12/我写了一首诗/index.html","c2037ab388a4505ca4a0da936c107d34"],["/Li-Jihong/2022/09/19/L1-017-到底有多二/index.html","847cde38bcb0146220bfc718463fc261"],["/Li-Jihong/2022/09/19/L1-018-大笨钟/index.html","ffa9dc9e125f97a81d6b51c3ecbd02b8"],["/Li-Jihong/2022/09/19/Vue3笔记/index.html","fb2653f61fc62fc10dbb5487ea24b01f"],["/Li-Jihong/2022/09/23/C-中STL用法超详细总结/index.html","f9854f44a20f386a3cc449522c646b63"],["/Li-Jihong/2022/09/25/PTA天体赛-简单题/index.html","65017abda454979dbe82e94a1230f7ca"],["/Li-Jihong/2022/10/10/PTA天梯赛2022-10-10刷题/index.html","b1a3fb23e8bb0f1d9ee456299ea2fc20"],["/Li-Jihong/2022/10/23/通知/index.html","674a7a7dcfdef0a0431aaed3eb33c4eb"],["/Li-Jihong/2022/10/31/LeetCode刷题/index.html","4c372fb54ea1f9f278be14b674d655ba"],["/Li-Jihong/2022/10/31/hello-world/index.html","90bd18c36a4be3ac3e237b03c0927f02"],["/Li-Jihong/2022/10/31/加入《Dev-cpp代码》代码库的操作手册/index.html","7d24b5706bfd8ab1286efc8a00b6afe2"],["/Li-Jihong/2023/01/13/感慨/index.html","f6127c731241bcea1e0c5a82a8fd939c"],["/Li-Jihong/2023/01/13/算法代码1-2/index.html","7c105c4f83dc62a5641dc8996aee531a"],["/Li-Jihong/2023/02/18/通知！/index.html","bb24dda32f525eddeb27bd548deb8488"],["/Li-Jihong/404.html","95ea257a6f719f35a914c0c9c8d74b9a"],["/Li-Jihong/about/index.html","f21e475fd1f9bc27c1438f0eae7aa8d7"],["/Li-Jihong/archives/2022/09/index.html","0022c7fb18766ebb83d82f94cc57da8c"],["/Li-Jihong/archives/2022/09/page/2/index.html","53f19320dd46ccfca83d05f2f8baafe9"],["/Li-Jihong/archives/2022/10/index.html","1d219ac88f88933631f6f38f706fe6f5"],["/Li-Jihong/archives/2022/index.html","25530e601ac51528629ff051a0f8225e"],["/Li-Jihong/archives/2022/page/2/index.html","015d9929c898129b3fd0c2a2413ef18f"],["/Li-Jihong/archives/2023/01/index.html","59ec4614343cbc7f825f1ed685cc4f51"],["/Li-Jihong/archives/2023/02/index.html","10b2c5e2c5e84e7ca9a1ebd8f7ae0691"],["/Li-Jihong/archives/2023/index.html","c400dfc21b0b2d7e809deaf8911b167d"],["/Li-Jihong/archives/index.html","079ea01c4d14b50c5b04d841df21d55c"],["/Li-Jihong/archives/page/2/index.html","efeede7cd46e9ae005ad6782916e9859"],["/Li-Jihong/archives/page/3/index.html","33e46a7aefcb51f111403e4b7bbbb580"],["/Li-Jihong/categories/C/index.html","10f24901b913bef50e9f350b63512736"],["/Li-Jihong/categories/C/刷题/index.html","9c9ae207f528314a0e1d2d4a4c9fd5b1"],["/Li-Jihong/categories/index.html","ec1af8a7df286c9f289500f4d57d94a3"],["/Li-Jihong/categories/人工智能/index.html","395576fe956cc19b7fa7ddabf76aaa4f"],["/Li-Jihong/categories/代码库/index.html","226803b7e26cec9180b0ca23561f9d0a"],["/Li-Jihong/categories/刷题/PTA/index.html","ec0dda4b6ac4c01430a9b93661fa699b"],["/Li-Jihong/categories/刷题/index.html","a4e78367ae6ed027871ab082997900ae"],["/Li-Jihong/categories/前端/index.html","9e3bbd5e1e7cec642bc5cb92fe4bd74f"],["/Li-Jihong/categories/李季鸿的日常随笔/index.html","ee5abf9e53f8aa7b9ff2ac94e0b317ac"],["/Li-Jihong/categories/算法模板/index.html","4e020711c3a25db8b040dd49cff61007"],["/Li-Jihong/categories/语法/index.html","5deabba9d79194b62276b737587ed91a"],["/Li-Jihong/categories/通知/index.html","c1cb024d17c573ba7c5ed8c16c7f5d84"],["/Li-Jihong/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/Li-Jihong/css/custom.css","b8cd8e7f74df6aa243969e63d698e778"],["/Li-Jihong/css/fonts/remixicon.css","ee7dda710dee5e369197669c74b844f8"],["/Li-Jihong/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/Li-Jihong/css/fonts/remixicon.svg","3abf31323a9e5747c7fb5b335b1f3d52"],["/Li-Jihong/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/Li-Jihong/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/Li-Jihong/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/Li-Jihong/dist/main.css","78d93a2d3714241aa7809391de2c8227"],["/Li-Jihong/dist/main.js","dd512cd7c6ecab7f5525a4b959e221da"],["/Li-Jihong/friends/index.html","41ddfa275fa28fea3a1a9c3ebc286866"],["/Li-Jihong/images/20180821215201799.png","b881135acaff3c5d66d7d16c17d4cd79"],["/Li-Jihong/images/20180821220247297-1663897702003.png","8581f821132226259baa851c831708e3"],["/Li-Jihong/images/20180821220247297.png","8581f821132226259baa851c831708e3"],["/Li-Jihong/images/20190728184155873.gif","8b8bd7503166b12058820ad407982781"],["/Li-Jihong/images/20190728184222892.gif","e9e497046e9a33ccad5b5a7fbf071e45"],["/Li-Jihong/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/Li-Jihong/images/IMG_20220907_154642.jpg","2be7dfdf7311f5d1ef68293685898735"],["/Li-Jihong/images/PTA.png","7d4de0bee267e2f03eb76c00259afa2a"],["/Li-Jihong/images/alipay.jpg","9888b1a032eba26b06c0d9932210acea"],["/Li-Jihong/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/Li-Jihong/images/ayer.png","44a252c2fb8457d5f964ff6103ea14d2"],["/Li-Jihong/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/Li-Jihong/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/Li-Jihong/images/bianchengdaohang.png","1e2c5be4f2b5d2f1e191e5d06c1a1684"],["/Li-Jihong/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/Li-Jihong/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/Li-Jihong/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/Li-Jihong/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/Li-Jihong/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/Li-Jihong/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/Li-Jihong/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/Li-Jihong/images/forkme.png","1602c2655c8405454e580e2e4c0ab4a0"],["/Li-Jihong/images/git_downloads-166714867967414.png","ab0944953a501541555dfc283be55c91"],["/Li-Jihong/images/git_downloads.png","ab0944953a501541555dfc283be55c91"],["/Li-Jihong/images/gitee.png","6b358815f7685c4f03cf93a01d9a5f4b"],["/Li-Jihong/images/github.png","01d69a8ca1802df9484b1d8c767c3ebe"],["/Li-Jihong/images/hexo-tag-chart.png","d2e9137216a7bd5f92f119687130edf7"],["/Li-Jihong/images/hexo.png","7dff06813781773fb9ec8611137b58c3"],["/Li-Jihong/images/image-20220910142609351.png","7d705c97b80016a52af6ac3e7b09d525"],["/Li-Jihong/images/image-20220910143018062.png","a374c35dbded7009652c1c81b9a2ef37"],["/Li-Jihong/images/image-20220910143031005.png","fe174dca23eb4127c6b3070bf4b93841"],["/Li-Jihong/images/image-20220910143612271.png","b1cb9fea96e365dbdc26917560afd830"],["/Li-Jihong/images/image-20220910143929206.png","6341a277114aee109ba64d1c2df68ee7"],["/Li-Jihong/images/image-20220910144134308.png","ad4c22b44ff29d634a3b16e94f0e5702"],["/Li-Jihong/images/image-20220910145232177.png","0abc1f59fa966f74dbaabf0fb4cb7217"],["/Li-Jihong/images/image-20220910145241804.png","8276d30606ba71ab537f275501040ab8"],["/Li-Jihong/images/image-20220910145531176.png","3f6bbbee716c4e23a3bd834705cb998f"],["/Li-Jihong/images/image-20220910145923673.png","acb317a4d3bc265f1fa3a1d7126e6b60"],["/Li-Jihong/images/image-20220910150108433.png","22cfb04dc38a909da90c74383bdbf5d0"],["/Li-Jihong/images/image-20220910150322421.png","c6a15be19fd4427bae5bf3b74d334a76"],["/Li-Jihong/images/image-20220911114410844.png","edab9beb65f10ae46c198b825261de8f"],["/Li-Jihong/images/image-20220911121624085.png","a9e7b1a10465b9124bda8f14e3e0a53a"],["/Li-Jihong/images/image-20220911122142445.png","67627f078ae259f78d26436cc5d9c1e1"],["/Li-Jihong/images/image-20220911122445784.png","f210ad085d7f013c443cb96cd37727b4"],["/Li-Jihong/images/image-20220911122733403.png","4e3ea364b42b52c0336ee410a8ccf2e2"],["/Li-Jihong/images/image-20220911122938543.png","903ec5c63174c00013dcca4156cb0bfb"],["/Li-Jihong/images/image-20220911123154171.png","629249b60f321825c6a21aa5fdc0f470"],["/Li-Jihong/images/image-20220911123436374.png","cc0e6234a934d43f8880e4ca9dbfe412"],["/Li-Jihong/images/image-20220911124010072.png","f73a383db06cb8c0a8c346157a381783"],["/Li-Jihong/images/image-20220911124154268.png","1ab3590c17029917c90f8fc7cec20176"],["/Li-Jihong/images/image-20220911124431218.png","c8f95a261eecab412d3cb8f8d145d84a"],["/Li-Jihong/images/image-20220911125159146.png","cbd5a210badd6ccc416b0c2626b4bf52"],["/Li-Jihong/images/image-20220911132254701.png","f2e123b64268ddf7b443f64552a0e144"],["/Li-Jihong/images/image-20220911132841327.png","74111365f53a82dda13f74805da667fb"],["/Li-Jihong/images/image-20220911133208675.png","93f2fa7ca565368701e440e7be7228a7"],["/Li-Jihong/images/image-20220911133838642.png","d206586a0cde69ddcaeb18c72a359518"],["/Li-Jihong/images/image-20220911134438302.png","c61eeecb1b794bf31f82c0abed4a459f"],["/Li-Jihong/images/image-20220911134500337.png","38b15743291e64fc8fa0153868276b43"],["/Li-Jihong/images/ljh.png","e0a7eae0f01430e9191f4a9bba79248d"],["/Li-Jihong/images/nbh.jpg","10cd13266307f56e6767b9413fbe8451"],["/Li-Jihong/images/sponsor.jpg","f7a191043a86121cbcc6d4f3b8b35af0"],["/Li-Jihong/images/wechat.jpg","344cd0acaf366685f896c2aeb2a1965b"],["/Li-Jihong/images/zhihu.png","804f083eac7fb7a918dc2d5aad7404af"],["/Li-Jihong/images/操作.html","074633a0c66b59b7f19bf0a48d127316"],["/Li-Jihong/index.html","6187144fdec658b0fe922ad81a935b13"],["/Li-Jihong/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/Li-Jihong/js/clickBoom1.js","9e938acb4d4f598b6040b302950de4c9"],["/Li-Jihong/js/clickBoom2.js","67c2bb126b359a4f7d2c832b3608de01"],["/Li-Jihong/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/Li-Jihong/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/Li-Jihong/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/Li-Jihong/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/Li-Jihong/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/Li-Jihong/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/Li-Jihong/page/2/index.html","4df8f5576ad8dcbe5bbd0d93d10880c1"],["/Li-Jihong/page/3/index.html","63693f459f0e21945e121b8124a8a6ed"],["/Li-Jihong/photos/index.html","e0a3ee7643e96c18d78c030cf552cc02"],["/Li-Jihong/sw-register.js","7f15d23b7ad8bf99a42f4223ed679b12"],["/Li-Jihong/tags/C/index.html","ea67d53119ccfd4bda8a3c1096bde774"],["/Li-Jihong/tags/PTA/index.html","f60f5fb9983e287a5c11365cf248d358"],["/Li-Jihong/tags/STL/index.html","f20081f6eae99f22299296aef6f777e7"],["/Li-Jihong/tags/Vue3/index.html","1224850d3625b3d4c1e34cba9cc4ac33"],["/Li-Jihong/tags/gitee/index.html","7e69d6315d21e5c990f32e4ecc1219db"],["/Li-Jihong/tags/index.html","1c3df421768b69fe0ddb15a2a15ad00f"],["/Li-Jihong/tags/java/index.html","b41a417a6a589736c87a7babc513ac32"],["/Li-Jihong/tags/leetcode/index.html","4ab02677a05cd92d69b195fd44f83fbf"],["/Li-Jihong/tags/map/index.html","7d086296da970c4e266b932a09d4cf6f"],["/Li-Jihong/tags/刷题/index.html","b2ada9a154c7f5c11545b3e5145070f2"],["/Li-Jihong/tags/天体赛/index.html","5f87fd9cdee6e3de0822ba365df4c158"],["/Li-Jihong/tags/天梯赛/index.html","218b87d98998b4e16d93e6b3b2aa7fda"],["/Li-Jihong/tags/更新/index.html","e886b6399ac23bb16b126c89e50e2a4c"],["/Li-Jihong/tags/深度学习/index.html","42b2c13002706eefd11f626e9d5d8f56"],["/Li-Jihong/tags/算法/index.html","6fca288ae03c409cbd8011360e9131e1"],["/Li-Jihong/tags/随笔/index.html","9afcc972db0d67dd706a73791693463a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
