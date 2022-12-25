/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/06/前端笔记/index.html","e948eeb0a8ac7fbb2829bbce884f70ca"],["/2022/09/07/PTA-天梯赛——L1-011-A-B/index.html","57ba2ea357d5baf1dadddb53b9cf8fe3"],["/2022/09/08/C-STL库中map的常见操作/index.html","564cba69bfac50e47007fe796ae8a629"],["/2022/09/08/PTA-天梯赛——L1-013-计算阶乘和/index.html","d79a5290d900f74ada000ef0a5af8fab"],["/2022/09/08/PTA-天梯赛——L1-015-跟奥巴马一起画方块/index.html","e1d72e1055baf25e67c3df0d2af07776"],["/2022/09/08/PTA-天梯赛——L1-016-查验身份证/index.html","f51edb12e8376337a3d27083af678189"],["/2022/09/08/早知道暑假不留校了/index.html","15812e74a16385660df55f8beffafba8"],["/2022/09/11/度学习之——卷积神经网络/index.html","97d14e5ec6e0e08ecfc0cf80255ed769"],["/2022/09/11/日常感悟/index.html","35dbe112e75abb6642aa90d641ebc030"],["/2022/09/12/我写了一首诗/index.html","464acd701cd769f8090ec3e9cb07ff93"],["/2022/09/19/L1-017-到底有多二/index.html","c6202aea9827514eab9bb2ab05fc4473"],["/2022/09/19/L1-018-大笨钟/index.html","5d2056e1c7ad7461418f011f9bbce641"],["/2022/09/19/Vue3笔记/index.html","5c67836c0c5e30223e990c75afff826e"],["/2022/09/23/C-中STL用法超详细总结/index.html","fdaeab7cd6f34728161c20aef7e09135"],["/2022/09/25/PTA天体赛-简单题/index.html","cee66752035179f9da865866c58ad338"],["/2022/10/10/PTA天梯赛2022-10-10刷题/index.html","88fee5c949a97789ae3e1e6e9ac26cb3"],["/2022/10/23/通知/index.html","c37cf9f3ec3471abfa7bb47080d9ffa1"],["/2022/10/31/LeetCode刷题/index.html","e3f9a6d2b6ea8d36126e0e1024ace37e"],["/2022/10/31/hello-world/index.html","b77e6cfa434760c29822d498e21f2f8e"],["/2022/10/31/加入《Dev-cpp代码》代码库的操作手册/index.html","8c04d5136764b7c7dc9cc4695bc28f5d"],["/2022/12/24/感慨/index.html","1f1f50efd8edeaad7be180c161b9fd7c"],["/2022/12/24/算法模板1-2/index.html","ab5c4369eaaf349040cb1ef355fb21bc"],["/404.html","95ea257a6f719f35a914c0c9c8d74b9a"],["/about/index.html","da2de39302fce2875e28af3f2849a902"],["/archives/2022/09/index.html","326d20eaf9f01fda79133bbf3daf00e0"],["/archives/2022/09/page/2/index.html","c75df13d50b32d37812f7e04b29206b8"],["/archives/2022/10/index.html","2d2c151e514d5c61b59708f8a5dfcaff"],["/archives/2022/12/index.html","c6e333fdd194593c2ccc66e96bb3e852"],["/archives/2022/index.html","d3bb36ee34ca35ef351ee6b243091bae"],["/archives/2022/page/2/index.html","c449b3ec2888c26a25d98d9561d071eb"],["/archives/2022/page/3/index.html","e04adf1f70cc960c3d5e2e77889f2c75"],["/archives/index.html","e43bf1ab67f80fd61d92d402b5fc9941"],["/archives/page/2/index.html","79b7cfc0b184271ad9b7dae5ca0dbf9d"],["/archives/page/3/index.html","6f3dbc94a0b7839038ff394abd04d7ec"],["/categories/C/index.html","14e158ae5537fc558e791e259e28a75a"],["/categories/C/刷题/index.html","27bfb7005b50003f7dba0483d323e596"],["/categories/index.html","a70916a441ca026b179afe3bbe856f6d"],["/categories/人工智能/index.html","03f8b5e0e965d061dee58b9b6ef057d3"],["/categories/代码库/index.html","994684ed5252540aeb9b26ea47624a4f"],["/categories/刷题/PTA/index.html","e209ae245066899c14ec49b63b7cd776"],["/categories/刷题/index.html","e6b4adc222ec34fd7c14b7652d79ed20"],["/categories/前端/index.html","cc1a5eb74d01102db0b1eeede6c31c04"],["/categories/李季鸿的日常随笔/index.html","ca8e039178c578405241e53818628670"],["/categories/算法模板/index.html","ef27287c3606eb828766dfc2b7288eae"],["/categories/语法/index.html","f55d610ed5b81ae86ce68f9190d5b797"],["/css/clipboard.css","2c2589bab50d0e5ecf63dc14ae7d6ab6"],["/css/custom.css","b8cd8e7f74df6aa243969e63d698e778"],["/css/fonts/remixicon.css","ee7dda710dee5e369197669c74b844f8"],["/css/fonts/remixicon.eot","e4e1729baa2a0fedccd57007b0191711"],["/css/fonts/remixicon.svg","3abf31323a9e5747c7fb5b335b1f3d52"],["/css/fonts/remixicon.ttf","d53d618eb492c6007beb3507b14010e8"],["/css/fonts/remixicon.woff","9ae2ab3fc48826241f04f254b877c6dd"],["/css/fonts/remixicon.woff2","454eaccf06aeb6c6a9d3cb828461cc54"],["/dist/main.css","78d93a2d3714241aa7809391de2c8227"],["/dist/main.js","dd512cd7c6ecab7f5525a4b959e221da"],["/friends/index.html","e0cbe0647273cb5f98563cb7befde837"],["/images/20180821215201799.png","b881135acaff3c5d66d7d16c17d4cd79"],["/images/20180821220247297-1663897702003.png","8581f821132226259baa851c831708e3"],["/images/20180821220247297.png","8581f821132226259baa851c831708e3"],["/images/20190728184155873.gif","8b8bd7503166b12058820ad407982781"],["/images/20190728184222892.gif","e9e497046e9a33ccad5b5a7fbf071e45"],["/images/404.jpg","e7696112aabfca9ce195460cb4aea575"],["/images/IMG_20220907_154642.jpg","2be7dfdf7311f5d1ef68293685898735"],["/images/PTA.png","7d4de0bee267e2f03eb76c00259afa2a"],["/images/alipay.jpg","9888b1a032eba26b06c0d9932210acea"],["/images/ayer-side.svg","39cc3c7b38c44aa1e684669ed293ba2f"],["/images/ayer.png","44a252c2fb8457d5f964ff6103ea14d2"],["/images/ayer.svg","e3048361cbdfc5f6c63c20cec06194f4"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/bianchengdaohang.png","1e2c5be4f2b5d2f1e191e5d06c1a1684"],["/images/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/images/cover2.jpg","135c931e786d1e1fe59ab1343cf910fa"],["/images/cover3.jpg","7c084b950a063b068e63c683ce010108"],["/images/cover4.jpg","cb0e1f1d738c3f5ae35c8b88417dc489"],["/images/cover5.jpg","b576b03ae35fa56bb36d260a6263a356"],["/images/cover6.jpg","8a1e50868dd4b77bfcd57c4c1425ec39"],["/images/cover7.jpg","93e1effda9ad8fa54d0af6d50d2bc7a1"],["/images/forkme.png","1602c2655c8405454e580e2e4c0ab4a0"],["/images/git_downloads-166714867967414.png","ab0944953a501541555dfc283be55c91"],["/images/git_downloads.png","ab0944953a501541555dfc283be55c91"],["/images/gitee.png","6b358815f7685c4f03cf93a01d9a5f4b"],["/images/github.png","01d69a8ca1802df9484b1d8c767c3ebe"],["/images/hexo-tag-chart.png","d2e9137216a7bd5f92f119687130edf7"],["/images/hexo.png","7dff06813781773fb9ec8611137b58c3"],["/images/image-20220910142609351.png","7d705c97b80016a52af6ac3e7b09d525"],["/images/image-20220910143018062.png","a374c35dbded7009652c1c81b9a2ef37"],["/images/image-20220910143031005.png","fe174dca23eb4127c6b3070bf4b93841"],["/images/image-20220910143612271.png","b1cb9fea96e365dbdc26917560afd830"],["/images/image-20220910143929206.png","6341a277114aee109ba64d1c2df68ee7"],["/images/image-20220910144134308.png","ad4c22b44ff29d634a3b16e94f0e5702"],["/images/image-20220910145232177.png","0abc1f59fa966f74dbaabf0fb4cb7217"],["/images/image-20220910145241804.png","8276d30606ba71ab537f275501040ab8"],["/images/image-20220910145531176.png","3f6bbbee716c4e23a3bd834705cb998f"],["/images/image-20220910145923673.png","acb317a4d3bc265f1fa3a1d7126e6b60"],["/images/image-20220910150108433.png","22cfb04dc38a909da90c74383bdbf5d0"],["/images/image-20220910150322421.png","c6a15be19fd4427bae5bf3b74d334a76"],["/images/image-20220911114410844.png","edab9beb65f10ae46c198b825261de8f"],["/images/image-20220911121624085.png","a9e7b1a10465b9124bda8f14e3e0a53a"],["/images/image-20220911122142445.png","67627f078ae259f78d26436cc5d9c1e1"],["/images/image-20220911122445784.png","f210ad085d7f013c443cb96cd37727b4"],["/images/image-20220911122733403.png","4e3ea364b42b52c0336ee410a8ccf2e2"],["/images/image-20220911122938543.png","903ec5c63174c00013dcca4156cb0bfb"],["/images/image-20220911123154171.png","629249b60f321825c6a21aa5fdc0f470"],["/images/image-20220911123436374.png","cc0e6234a934d43f8880e4ca9dbfe412"],["/images/image-20220911124010072.png","f73a383db06cb8c0a8c346157a381783"],["/images/image-20220911124154268.png","1ab3590c17029917c90f8fc7cec20176"],["/images/image-20220911124431218.png","c8f95a261eecab412d3cb8f8d145d84a"],["/images/image-20220911125159146.png","cbd5a210badd6ccc416b0c2626b4bf52"],["/images/image-20220911132254701.png","f2e123b64268ddf7b443f64552a0e144"],["/images/image-20220911132841327.png","74111365f53a82dda13f74805da667fb"],["/images/image-20220911133208675.png","93f2fa7ca565368701e440e7be7228a7"],["/images/image-20220911133838642.png","d206586a0cde69ddcaeb18c72a359518"],["/images/image-20220911134438302.png","c61eeecb1b794bf31f82c0abed4a459f"],["/images/image-20220911134500337.png","38b15743291e64fc8fa0153868276b43"],["/images/ljh.png","e0a7eae0f01430e9191f4a9bba79248d"],["/images/nbh.jpg","10cd13266307f56e6767b9413fbe8451"],["/images/sponsor.jpg","f7a191043a86121cbcc6d4f3b8b35af0"],["/images/wechat.jpg","344cd0acaf366685f896c2aeb2a1965b"],["/images/zhihu.png","804f083eac7fb7a918dc2d5aad7404af"],["/images/操作.html","fa3af9e2e4aed2c15da687d83a1a4ab4"],["/index.html","b1863eef3d1f854f667970a6a989fcb0"],["/js/busuanzi-2.3.pure.min.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/clickBoom1.js","9e938acb4d4f598b6040b302950de4c9"],["/js/clickBoom2.js","67c2bb126b359a4f7d2c832b3608de01"],["/js/clickLove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/dz.js","d05b50b79133042302661bfb69f745a7"],["/js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/lazyload.min.js","16b486c05843a4dc4e9cd4295ca699c2"],["/js/search.js","e3e624b549ce5c7c7498a6f95c34692e"],["/js/tocbot.min.js","c4536ea3bf2e39818cfd27b73bfe397f"],["/page/2/index.html","c8889325be3544739246da6c991e66e6"],["/page/3/index.html","0cceedc2add9c94e89e18a57bb18c701"],["/photos/index.html","e918a7a0b9a7e51f1e9af17cc2c75de7"],["/sw-register.js","4764d7a3e022daeebd029e3426e3adff"],["/tags/C/index.html","1bf2b95d9afc276abafa20df47d5fabc"],["/tags/PTA/index.html","610e09b1bca2c54d7d96e4362ddde7cf"],["/tags/STL/index.html","8fe5b93b94ef54de0877cb595bfe7d08"],["/tags/Vue3/index.html","be2eabbc0b33dcb3aa49790426d4f554"],["/tags/gitee/index.html","88a8b07529ddc84cf34f64e25ac6e8d9"],["/tags/index.html","13798472c69f2ee09b1c67a019715c98"],["/tags/java/index.html","3a10b4494c02148e8f1c75fde63d8603"],["/tags/leetcode/index.html","c14209cf2b29c7f4b99716e62816052d"],["/tags/map/index.html","6d9c106f5db2b89f27cb0069a4cbb089"],["/tags/刷题/index.html","7eb5a2a948161b60699dd4462ff7a112"],["/tags/天体赛/index.html","078552368f2dc3e53a7a0f6650b414d8"],["/tags/天梯赛/index.html","0f2e2f2e6c9039cd7d68fbfdb99f95c1"],["/tags/深度学习/index.html","4beb2d7fc6602ef0ad0c9673d9546134"],["/tags/算法/index.html","44a3efc70b56490ce862892b10f4f759"],["/tags/编程/index.html","2c877784f46e4b34aa8b801503a14ce5"],["/tags/随笔/index.html","3e86d045d8afcfa9dc98385cb85dd95d"]];
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
