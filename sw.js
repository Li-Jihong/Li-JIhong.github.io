/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/06/前端笔记/index.html","38f42d4c8c10039c45983c01ee029f85"],["/2022/09/07/LeetCode刷题/index.html","690f3155a54025ab2640a2b038825a62"],["/2022/09/07/PTA-天梯赛——L1-011-A-B/index.html","1195d5ead1722a430018e283aa057988"],["/2022/09/07/hello-world/index.html","de5e7da50777b89f058f148e2cab2f5c"],["/2022/09/08/C-STL库中map的常见操作/index.html","38c767a8ef5b6df8a842d942b175752a"],["/2022/09/08/PTA-天梯赛——L1-013-计算阶乘和/index.html","c7118cfa4a80875fa4a38ec2fc3b8370"],["/2022/09/08/PTA-天梯赛——L1-015-跟奥巴马一起画方块/index.html","2be742f38c86d21215bee1898155c0d3"],["/2022/09/08/PTA-天梯赛——L1-016-查验身份证/index.html","9c32230c31bf6ca575fefd7d5daa2fe0"],["/2022/09/08/早知道暑假不留校了/index.html","0f3e66ba3096a0b081eb01e752f55cfb"],["/2022/09/09/节前的核酸/index.html","c5d7e62b8a9677f46d10ba2eb9afc20a"],["/404.html","379d721a6712f09c8fbc6096f83433d5"],["/about/index.html","347e1db83230bdc37f1442e9a3bb02c6"],["/archives/2022/09/index.html","ba085788121db3ea8e040557f2e7b883"],["/archives/2022/index.html","cf6042a38e5233c48fc39886136e4f01"],["/archives/index.html","a49452e80990320b54e839613de0d3a1"],["/categories/index.html","69c057e122fcacb2f31e3d28634f2493"],["/categories/刷题/PTA/index.html","7d19b50ca799cadac93626669fb29513"],["/categories/刷题/index.html","457e4d99ff4126c4a5181c9738412500"],["/categories/李季鸿的日常随笔/index.html","9e66e5336c37abe01085a68cfe0a4979"],["/categories/语法/index.html","3954518309305f57f03e7e5d656a3e4a"],["/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/css/custom.css","b8cd8e7f74df6aa243969e63d698e778"],["/css/fonts/remixicon.css","ee7dda710dee5e369197669c74b844f8"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","3abf31323a9e5747c7fb5b335b1f3d52"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/dist/main.css","78d93a2d3714241aa7809391de2c8227"],["/dist/main.js","dd512cd7c6ecab7f5525a4b959e221da"],["/friends/index.html","08ab8c65cb4b2e96740689ed6fc18d0c"],["/images/1662456235311.png","23abb84d36a84cae35224987ee3f6e4e"],["/images/1662458434185.png","5b6a97950b7a36fe0b8624c151652736"],["/images/1662458561910.png","d5bb398ec834e73d14ee0528c5048252"],["/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/images/IMG_20220907_154642.jpg","2be7dfdf7311f5d1ef68293685898735"],["/images/PTA.png","7d4de0bee267e2f03eb76c00259afa2a"],["/images/alipay.jpg","9888b1a032eba26b06c0d9932210acea"],["/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/images/ayer.png","44a252c2fb8457d5f964ff6103ea14d2"],["/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/bianchengdaohang.png","1e2c5be4f2b5d2f1e191e5d06c1a1684"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/images/forkme.png","1602c2655c8405454e580e2e4c0ab4a0"],["/images/gitee.png","6b358815f7685c4f03cf93a01d9a5f4b"],["/images/github.png","01d69a8ca1802df9484b1d8c767c3ebe"],["/images/hesuan.jpg","a246ba3ca7e39183d3327131828fd80a"],["/images/hexo-tag-chart.png","d2e9137216a7bd5f92f119687130edf7"],["/images/hexo.png","7dff06813781773fb9ec8611137b58c3"],["/images/jiacan_1.jpg","7cec96710d20e35ea4db32bd4d261aa1"],["/images/jiacan_2.jpg","7a852a94d4266a662bf7e167453469f9"],["/images/ljh.png","e0a7eae0f01430e9191f4a9bba79248d"],["/images/nbh.jpg","10cd13266307f56e6767b9413fbe8451"],["/images/sponsor.jpg","f7a191043a86121cbcc6d4f3b8b35af0"],["/images/wechat.jpg","344cd0acaf366685f896c2aeb2a1965b"],["/images/zhihu.png","804f083eac7fb7a918dc2d5aad7404af"],["/index.html","924e266596588e6e98bf18a8534326bb"],["/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/clickBoom1.js","9e938acb4d4f598b6040b302950de4c9"],["/js/clickBoom2.js","67c2bb126b359a4f7d2c832b3608de01"],["/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/photos/index.html","55e5d8f87b3406400ee79c712868bcb9"],["/sw-register.js","e9d388f08a71c9f74382a61bed98dba3"],["/tags/C/index.html","edfa60d245ae7a4dbda8e39d1d732ed1"],["/tags/STL/index.html","0abf51b532aad16b4b2170f7dc52890c"],["/tags/index.html","61f563f336587fd144d008dc057e5eaa"],["/tags/java/index.html","636703807eec96d2c58f59532f24326e"],["/tags/leetcode/index.html","27043fdfc59b71e386030ba1040c236b"],["/tags/map/index.html","90f2e1ee012ee750b4f85b3d06c20f56"],["/tags/天梯赛/index.html","0fd63c47ca466ed424b0030c014c5903"],["/tags/随笔/index.html","fdf9416bfd7a3cf0682bf1178f134ef0"]];
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
