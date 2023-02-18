/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/06/前端笔记/index.html","a29d4834d51effff9e2dc05618efe6f2"],["/2022/09/07/PTA-天梯赛——L1-011-A-B/index.html","a5341aef7339896e91f0f11fbb9dd01f"],["/2022/09/08/C-STL库中map的常见操作/index.html","dc156e0251382b7815f4735d96ee5485"],["/2022/09/08/PTA-天梯赛——L1-013-计算阶乘和/index.html","eed314fc65b4f2696fcc27ff6ddfac79"],["/2022/09/08/PTA-天梯赛——L1-015-跟奥巴马一起画方块/index.html","d19290c74425faba8c3cac9cc0ad996c"],["/2022/09/08/PTA-天梯赛——L1-016-查验身份证/index.html","99e5fd2dcf184de595045c31ccc56db6"],["/2022/09/08/早知道暑假不留校了/index.html","7a3c9d55cb294a66547a26c6d37e8ee1"],["/2022/09/11/度学习之——卷积神经网络/index.html","ace561538ed0649dde90914951546b8d"],["/2022/09/11/日常感悟/index.html","f4ef1a7523ac4f99ec94b5474a2fcc8d"],["/2022/09/12/我写了一首诗/index.html","5c3a81a3cc59b68c5c01c77dbb1d8133"],["/2022/09/19/L1-017-到底有多二/index.html","34475c560f9d30ef2d556ac3eb3ddd2a"],["/2022/09/19/L1-018-大笨钟/index.html","c08c91c1ac276c54d0074d7aa1b5fa54"],["/2022/09/19/Vue3笔记/index.html","2fe1fe20bea3fa9a7d329e6ec38d3130"],["/2022/09/23/C-中STL用法超详细总结/index.html","8fc312e5944109f21468436ffaa50928"],["/2022/09/25/PTA天体赛-简单题/index.html","4552b99fe6230f84dce4daffbbbe46d0"],["/2022/10/10/PTA天梯赛2022-10-10刷题/index.html","e30860b4c0cdb792990eecaade833c61"],["/2022/10/23/通知/index.html","b12ccc5dd75fd585d901033b01bb7dfa"],["/2022/10/31/LeetCode刷题/index.html","8548fac484a065c809632f58973fb41f"],["/2022/10/31/hello-world/index.html","58a5384d36999864c0bc9d79c6729bcf"],["/2022/10/31/加入《Dev-cpp代码》代码库的操作手册/index.html","b2d3b5b6cfdc5f8fd7ee82f33c7f4fe1"],["/2023/01/13/感慨/index.html","9847dd22a4104e989a45f8948c36f744"],["/2023/01/13/算法代码1-2/index.html","3db7fd1112a51a2ba16486901353b77b"],["/2023/02/18/通知！/index.html","db32c83348f263c263322b5e1ac22174"],["/404.html","95ea257a6f719f35a914c0c9c8d74b9a"],["/about/index.html","36d6b2f237cd3e58634aecd67c29404c"],["/archives/2022/09/index.html","e71fe25bd5ce3138bee571a4d258dc31"],["/archives/2022/09/page/2/index.html","c5fdd8a6e03b74260683ec6cb4117bf2"],["/archives/2022/10/index.html","710def60137dd00306200974a376860a"],["/archives/2022/index.html","4da8667129c64b58e2ce7d54fa70e015"],["/archives/2022/page/2/index.html","6fce527d9fe9c3b80b8e6173a4ce458a"],["/archives/2023/01/index.html","63c35e09e5069de9a40d6dc84b279367"],["/archives/2023/02/index.html","78a3d045380a4788f030d513cb7eb075"],["/archives/2023/index.html","4dad565a5d927ef083403dca5546848b"],["/archives/index.html","8fa68a0e26ce6f1f9c42c05288ca7050"],["/archives/page/2/index.html","80d6f9142879ab936e88db4d6cc9a2eb"],["/archives/page/3/index.html","0cf6f23a109d2fbcae9b3dafe6dba295"],["/categories/C/index.html","8c666dc5d745b250d1d74b3e99b5e4d3"],["/categories/C/刷题/index.html","d8d1004c9f777fcebbe0994fe867ab8c"],["/categories/index.html","171f9f5611c75b2c0f78320fbacc4b57"],["/categories/人工智能/index.html","9a00c6a526f5fd86bb6b17572c150035"],["/categories/代码库/index.html","65f62e333b9ea3de1700325741c92d6b"],["/categories/刷题/PTA/index.html","5d541230fb76a10acf56f7abcf1f6006"],["/categories/刷题/index.html","c062fee6a5ae8511c04cf9bb6ad11958"],["/categories/前端/index.html","223d5333131a3ae5d9ed4e33bc351773"],["/categories/李季鸿的日常随笔/index.html","a694414f29732dad0e76755335af5e53"],["/categories/算法模板/index.html","be19ea3ec5debf50909feef8564fde65"],["/categories/语法/index.html","2aa5eb2f30532964fcde740867615d40"],["/categories/通知/index.html","1c8fd1a4926e5d3dda5909d2a6d8b8d8"],["/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/css/custom.css","b8cd8e7f74df6aa243969e63d698e778"],["/css/fonts/remixicon.css","ee7dda710dee5e369197669c74b844f8"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","3abf31323a9e5747c7fb5b335b1f3d52"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/dist/main.css","78d93a2d3714241aa7809391de2c8227"],["/dist/main.js","dd512cd7c6ecab7f5525a4b959e221da"],["/friends/index.html","6420aa5ce2d76ba5bdcf5c226bfd4efb"],["/images/20180821215201799.png","b881135acaff3c5d66d7d16c17d4cd79"],["/images/20180821220247297-1663897702003.png","8581f821132226259baa851c831708e3"],["/images/20180821220247297.png","8581f821132226259baa851c831708e3"],["/images/20190728184155873.gif","8b8bd7503166b12058820ad407982781"],["/images/20190728184222892.gif","e9e497046e9a33ccad5b5a7fbf071e45"],["/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/images/IMG_20220907_154642.jpg","2be7dfdf7311f5d1ef68293685898735"],["/images/PTA.png","7d4de0bee267e2f03eb76c00259afa2a"],["/images/alipay.jpg","9888b1a032eba26b06c0d9932210acea"],["/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/images/ayer.png","44a252c2fb8457d5f964ff6103ea14d2"],["/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/bianchengdaohang.png","1e2c5be4f2b5d2f1e191e5d06c1a1684"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/images/forkme.png","1602c2655c8405454e580e2e4c0ab4a0"],["/images/git_downloads-166714867967414.png","ab0944953a501541555dfc283be55c91"],["/images/git_downloads.png","ab0944953a501541555dfc283be55c91"],["/images/gitee.png","6b358815f7685c4f03cf93a01d9a5f4b"],["/images/github.png","01d69a8ca1802df9484b1d8c767c3ebe"],["/images/hexo-tag-chart.png","d2e9137216a7bd5f92f119687130edf7"],["/images/hexo.png","7dff06813781773fb9ec8611137b58c3"],["/images/image-20220910142609351.png","7d705c97b80016a52af6ac3e7b09d525"],["/images/image-20220910143018062.png","a374c35dbded7009652c1c81b9a2ef37"],["/images/image-20220910143031005.png","fe174dca23eb4127c6b3070bf4b93841"],["/images/image-20220910143612271.png","b1cb9fea96e365dbdc26917560afd830"],["/images/image-20220910143929206.png","6341a277114aee109ba64d1c2df68ee7"],["/images/image-20220910144134308.png","ad4c22b44ff29d634a3b16e94f0e5702"],["/images/image-20220910145232177.png","0abc1f59fa966f74dbaabf0fb4cb7217"],["/images/image-20220910145241804.png","8276d30606ba71ab537f275501040ab8"],["/images/image-20220910145531176.png","3f6bbbee716c4e23a3bd834705cb998f"],["/images/image-20220910145923673.png","acb317a4d3bc265f1fa3a1d7126e6b60"],["/images/image-20220910150108433.png","22cfb04dc38a909da90c74383bdbf5d0"],["/images/image-20220910150322421.png","c6a15be19fd4427bae5bf3b74d334a76"],["/images/image-20220911114410844.png","edab9beb65f10ae46c198b825261de8f"],["/images/image-20220911121624085.png","a9e7b1a10465b9124bda8f14e3e0a53a"],["/images/image-20220911122142445.png","67627f078ae259f78d26436cc5d9c1e1"],["/images/image-20220911122445784.png","f210ad085d7f013c443cb96cd37727b4"],["/images/image-20220911122733403.png","4e3ea364b42b52c0336ee410a8ccf2e2"],["/images/image-20220911122938543.png","903ec5c63174c00013dcca4156cb0bfb"],["/images/image-20220911123154171.png","629249b60f321825c6a21aa5fdc0f470"],["/images/image-20220911123436374.png","cc0e6234a934d43f8880e4ca9dbfe412"],["/images/image-20220911124010072.png","f73a383db06cb8c0a8c346157a381783"],["/images/image-20220911124154268.png","1ab3590c17029917c90f8fc7cec20176"],["/images/image-20220911124431218.png","c8f95a261eecab412d3cb8f8d145d84a"],["/images/image-20220911125159146.png","cbd5a210badd6ccc416b0c2626b4bf52"],["/images/image-20220911132254701.png","f2e123b64268ddf7b443f64552a0e144"],["/images/image-20220911132841327.png","74111365f53a82dda13f74805da667fb"],["/images/image-20220911133208675.png","93f2fa7ca565368701e440e7be7228a7"],["/images/image-20220911133838642.png","d206586a0cde69ddcaeb18c72a359518"],["/images/image-20220911134438302.png","c61eeecb1b794bf31f82c0abed4a459f"],["/images/image-20220911134500337.png","38b15743291e64fc8fa0153868276b43"],["/images/ljh.png","e0a7eae0f01430e9191f4a9bba79248d"],["/images/nbh.jpg","10cd13266307f56e6767b9413fbe8451"],["/images/sponsor.jpg","f7a191043a86121cbcc6d4f3b8b35af0"],["/images/wechat.jpg","344cd0acaf366685f896c2aeb2a1965b"],["/images/zhihu.png","804f083eac7fb7a918dc2d5aad7404af"],["/images/操作.html","ac5dfdf6d162093864435e4574f6815a"],["/index.html","cb05b1ea8737cfe9263f1a9739b74cc7"],["/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/clickBoom1.js","9e938acb4d4f598b6040b302950de4c9"],["/js/clickBoom2.js","67c2bb126b359a4f7d2c832b3608de01"],["/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/page/2/index.html","c6f67f3d542635be480ac9303613c5af"],["/page/3/index.html","62da017b7b351a7df4b76ff885406f59"],["/photos/index.html","b5a08e24a49f1d1204dd78c04ff64892"],["/sw-register.js","08b28646843da6aeadbd430504472a08"],["/tags/C/index.html","0790da29114527676ecb492e03cc35c4"],["/tags/PTA/index.html","8a69acf733e328dcd3dbc51afe15c099"],["/tags/STL/index.html","8b34be6ada174adf26eff97beceebcc1"],["/tags/Vue3/index.html","e4bf5a6b0fe8733ad3794f512e60ca8e"],["/tags/gitee/index.html","68ea7fcfeca74b3b7771a4cf2e1a6afb"],["/tags/index.html","3581bc558564858df99ad35935ee013b"],["/tags/java/index.html","6f97861d3e48fdeadbf07142f5aeb70e"],["/tags/leetcode/index.html","8552fca556a3b0037730c1694542df88"],["/tags/map/index.html","6a36570c229639c50e5d46f69907f736"],["/tags/刷题/index.html","ca7c99af481853b8c70416f7119b0a5b"],["/tags/天体赛/index.html","ef5cb499e293f2f31b858fdf6d7c3f34"],["/tags/天梯赛/index.html","cbce883270c0a610df26eccd81246fe8"],["/tags/更新/index.html","ceeb16245a8de0684e0441e3af8f9032"],["/tags/深度学习/index.html","fc55a98aa2414eb3f66d8acdf1ea8586"],["/tags/算法/index.html","92476cb9086963af33529c256bf15e42"],["/tags/随笔/index.html","67ea9d3587ea3fabed31fc468251bd5d"]];
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
