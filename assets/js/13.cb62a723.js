(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(s,a,t){s.exports=t.p+"assets/img/Util-内网穿透 (2).4b003acd.png"},369:function(s,a,t){s.exports=t.p+"assets/img/Util-内网穿透 (3).030248ab.png"},370:function(s,a,t){s.exports=t.p+"assets/img/Util-内网穿透 (4).d8ba6e0a.png"},371:function(s,a,t){s.exports=t.p+"assets/img/Util-内网穿透 (5).a5a81755.png"},372:function(s,a,t){s.exports=t.p+"assets/img/Util-内网穿透 (1).fe458987.png"},559:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"内网穿透技术初探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透技术初探"}},[s._v("#")]),s._v(" 内网穿透技术初探")]),s._v(" "),a("h3",{attrs:{id:"需求场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求场景"}},[s._v("#")]),s._v(" 需求场景：")]),s._v(" "),a("p",[s._v("因为个人vue和springboot开发过程中经常会遇到一些百度无法解决的问题，向”大佬“请教的时候经常需要大费周章的描述，有时候无法准确进行描述。如果将项目打包到服务器又非常的耗费时间，于是想着利用内网穿透技术来方便问题描述和解决。")]),s._v(" "),a("p",[s._v("（项目甲方乙方对接）")]),s._v(" "),a("h3",{attrs:{id:"内网和外网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网和外网"}},[s._v("#")]),s._v(" 内网和外网")]),s._v(" "),a("h4",{attrs:{id:"内网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网"}},[s._v("#")]),s._v(" 内网：")]),s._v(" "),a("p",[s._v("即所说的局域网，比如学校的局域网，局域网内每台计算机的IP地址在本局域网内具有互异性，是不可重复的。但两个局域网内的内网IP可以有相同的。")]),s._v(" "),a("h4",{attrs:{id:"外网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外网"}},[s._v("#")]),s._v(" 外网：")]),s._v(" "),a("p",[s._v("即互联网，局域网通过一台服务器或是一个路由器对外连接的网络，这个IP地址是唯一的。也就是说内网里所有的计算机都是连接到这一个外网IP上，通过这一个外网IP对外进行交换数据的。也就是说，一个局域网里所有电脑的内网IP是互不相同的,但共用一个外网IP。")]),s._v(" "),a("h4",{attrs:{id:"公有地址-public-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公有地址-public-address"}},[s._v("#")]),s._v(" 公有地址(Public address)：")]),s._v(" "),a("p",[s._v("由 Inter NIC(Internet Network Information Center 因特网信息中心)负责。这些 IP 地址分配给注册并向Inter NIC提出申请的组织机构，公有 IP 全球唯一，通过它直接访问因特网(直接能上网)。")]),s._v(" "),a("h4",{attrs:{id:"私有地址-private-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有地址-private-address"}},[s._v("#")]),s._v(" 私有地址(Private address)：")]),s._v(" "),a("p",[s._v("属于非注册地址，专门为组织机构内部使用，说白了，私有 IP 不能直接上网。")]),s._v(" "),a("p",[s._v("而我们平时通过运营商(电信、移动、联通宽带等)上网，家里面通过路由器分出来的 IP 都是私有 IP(局域网 IP)，大家可能会疑问，我们可以上网啊，怎么会是私有 IP 呢?租用(申请)公有 IP 是需要钱的。 运营商买了一些公有 IP，然后通过这些公有 IP 分出来，再分给一个一个的用户使用。这个过程有点类似于，我们去安装了宽度，通过路由器分出几个 IP，让好几个人都能上网，当然运营商通过公有 IP 分出来的过程肯定比这个复杂多了。所以，我们平时上网用的 IP 是私有 IP，真正拥有公有 IP 的是运营商(当然，我们可以租用一个公有 IP )。所以，A 家庭的局域网 IP 和 B 家庭的局域网 IP 相同很正常，但是，最终 A 和 B 能上网(数据走出去)还是通过运营商的公有 IP，毕竟，公有 IP 的资源有限，这一片区域的用户使用的很有可能(实际上就是这样的)是同一个公有 IP.")]),s._v(" "),a("h3",{attrs:{id:"内网穿透原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透原理"}},[s._v("#")]),s._v(" "),a("strong",[s._v("内网穿透原理")])]),s._v(" "),a("p",[s._v("对于内网来说，其不是不能主动访问公网端口，而是不能反过来有效的被公网访问。内网穿透的主要思路就是利用这一点，让在内网的节点主动访问一个拥有公网IP地址的服务器，并由中间服务器搭桥，打通经过该服务器从其他主机到NAT之后节点的隧道。")]),s._v(" "),a("h3",{attrs:{id:"使用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用工具"}},[s._v("#")]),s._v(" 使用工具")]),s._v(" "),a("p",[a("code",[s._v("natapp")])]),s._v(" "),a("p",[s._v("（"),a("code",[s._v("ngrok")]),s._v("因为需要2块钱的实名认证费没有用）")]),s._v(" "),a("h3",{attrs:{id:"个人配置过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人配置过程"}},[s._v("#")]),s._v(" 个人配置过程：")]),s._v(" "),a("h4",{attrs:{id:"技术栈-vue-springboot-natapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术栈-vue-springboot-natapp"}},[s._v("#")]),s._v(" 技术栈：vue+springboot+natapp")]),s._v(" "),a("h4",{attrs:{id:"natapp配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#natapp配置"}},[s._v("#")]),s._v(" natapp配置:")]),s._v(" "),a("p",[s._v("natapp官网进行注册，然后进行实名认证")]),s._v(" "),a("img",{attrs:{src:t(368)}}),s._v(" "),a("p",[s._v("点击进入免费隧道")]),s._v(" "),a("img",{attrs:{src:t(369)}}),s._v(" "),a("p",[s._v("免费版不支持绑定自己的域名，本地端口即为自己需要映射的本地端口。")]),s._v(" "),a("p",[s._v("免费购买成功后得到authtoken为后面内网穿透所需要的凭证。")]),s._v(" "),a("img",{attrs:{src:t(370)}}),s._v(" "),a("p",[s._v("下载natapp的客户端")]),s._v(" "),a("p",[s._v("启动方法有两种：")]),s._v(" "),a("p",[s._v("一种是运行natapp.exe文件")]),s._v(" "),a("img",{attrs:{src:t(371)}}),s._v(" "),a("p",[s._v("在命令框输入natapp -authtoken=刚刚复制的authtoken")]),s._v(" "),a("p",[s._v("另一种是在同级目录下创建config.ini文件")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\nauthtoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 刚刚复制的authtoken                 #对应一条隧道的\nclienttoken"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                    #对应客户端的clienttoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("将会忽略authtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("若无请留空"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none                        #log 日志文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("可指定本地文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("不做记录"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("直接屏幕输出 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("默认为none\nloglevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERROR")]),s._v("                  #日志等级 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WARNING")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERROR")]),s._v(" 默认为 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEBUG")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("配置上面选项，后面直接运行exe文件即可自动链接")]),s._v(" "),a("img",{attrs:{src:t(372)}}),s._v(" "),a("p",[s._v("Online即为穿透成功")]),s._v(" "),a("p",[a("code",[s._v("Forwarding http://byiki3.natappfree.cc -> 127.0.0.1:8080")])]),s._v(" "),a("p",[s._v("随机分配的公网ip->映射的本地端口")]),s._v(" "),a("p",[s._v("natapp能够免费注册两个authtoken，意味着只能内网穿透两个端口，能够满足一般的前后端分离项目。")]),s._v(" "),a("p",[s._v("多开内网穿透需要将exe和config.ini复制到与第一个穿透非同级的目录，将config里面的token修改即可")]),s._v(" "),a("h4",{attrs:{id:"vue配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue配置"}},[s._v("#")]),s._v(" vue配置:")]),s._v(" "),a("p",[s._v("在vue.config.js中配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = dfenefineConfig({\n  devServer: { \n    allowedHosts:'all',\n    port: 8080,\n    host:\"127.0.0.1\",\n    proxy: {\n           '/api':{  \n                       //设置代理，必须填\n             target: 'http://server.natappfree.cc:37792/',     //运行springboot端口内网穿透得到的公安ip\n             changeOrigin: true,              //是否设置同源，输入是的\n             pathRewrite: {                   //路径重写\n               // '^/api': '/api'\n                '/api': ''                     //选择忽略拦截器里面的单词\n            }\n        }\n    },\n  }\n})\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[a("code",[s._v("webpack")]),s._v("和"),a("code",[s._v("vue-cli")]),s._v("出于安全考虑，默认检查"),a("code",[s._v("hostname")]),s._v("，需要配置一下，否则dev命令后会出现报错。")]),s._v(" "),a("p",[s._v("因为我的项目使用的是"),a("code",[s._v("vue-cli")]),s._v("所以需要在"),a("code",[s._v("vue.config.js")]),s._v("里面"),a("code",[s._v("devserve")]),s._v("添加一项配置："),a("code",[s._v("allowedHosts:'all',")]),s._v("这样就可以跳过hostname检查。")]),s._v(" "),a("p",[s._v("对于使用webpack的项目需要在build目录下的"),a("code",[s._v("webpack.dev.conf.js")]),s._v("文件，"),a("code",[s._v("devServer")]),s._v("下添加"),a("code",[s._v("disableHostCheck: true")]),s._v("，跳过检查；")]),s._v(" "),a("p",[s._v("也可以在"),a("code",[s._v("package.json")]),s._v("文件修改scripts命令"),a("code",[s._v("dev:webpack-dev-server --disableHostCheck=true")])]),s._v(" "),a("p",[s._v("注意项目使用的打包方式，使用错误的话打包会一直出错")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("main.js")]),s._v("配置axios")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("axios.defaults.baseURL = 'http://server.natappfree.cc:37792/'P\n//baseurl为springboot端口穿透获取的随机公网IP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我因为另外封装axios,所以在"),a("code",[s._v("requestrequest.js")]),s._v("里面修改：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v('const request = axios.create({\n    baseURL: "http://server.natappfree.cc:37792/",\n    //baseurl为springboot端口穿透获取的随机公网IP\n    timeout: 5000\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("至此配置完成，因为每次启动natapp获得的都是随机分配的公网ip，所以先获取springboot项目的ip，进而修改前端代理ip。")]),s._v(" "),a("h4",{attrs:{id:"springboot配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot配置"}},[s._v("#")]),s._v(" springboot配置：")]),s._v(" "),a("p",[s._v("暂时用到的技术不需要修改。")]),s._v(" "),a("h3",{attrs:{id:"内网穿透数据库同理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透数据库同理。"}},[s._v("#")]),s._v(" 内网穿透数据库同理。")])])}),[],!1,null,null,null);a.default=n.exports}}]);