(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{598:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("我们不仅可以在服务器上运行一个nacos，还可以运行多个nacos，在服务器上搭建nacos集群环境，可以查看"),a("a",{attrs:{href:"https://nacos.io/zh-cn/docs/cluster-mode-quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218233051767.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中下面部分的Nacos比便是三个nacos集群，SLB这里是内网，我们可以想成是Nginx")]),t._v(" "),a("p",[t._v("默认Nacos使用嵌入式数据库实现数据的存储。所以，如果启动多个默认配置下的Nacos节点，数据存储是存在一致性问题的。")]),t._v(" "),a("p",[t._v("为了解决这个问题，Nacos采用了集中式存储的方式来支持集群化部署，目前只支持MySQL的存储。")]),t._v(" "),a("h2",{attrs:{id:"三种模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种模式"}},[t._v("#")]),t._v(" 三种模式")]),t._v(" "),a("p",[t._v("nacos支持三种模式，详细"),a("a",{attrs:{href:"https://nacos.io/zh-cn/docs/deployment.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("请看"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("单机模式 - 用于测试和单机试用。")]),t._v(" "),a("li",[t._v("集群模式 - 用于生产环境，确保高可用。")]),t._v(" "),a("li",[t._v("多集群模式 - 用于多数据中心场景。")])]),t._v(" "),a("h2",{attrs:{id:"演示集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#演示集群模式"}},[t._v("#")]),t._v(" 演示集群模式")]),t._v(" "),a("p",[t._v("这里使用一个Nginx，一个MySQL，三个nacos搭建一个nacos集群")]),t._v(" "),a("h3",{attrs:{id:"_1-执行sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行sql"}},[t._v("#")]),t._v(" 1.执行sql")]),t._v(" "),a("p",[t._v("因为这里我们的数据，存储在MySQL中的，所以我们需要在MySQL中，创建所需的库和表，但是sql语句官方已经提供了，默认在"),a("code",[t._v("nacos/conf/")]),t._v("目录中")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218233758803.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-编辑application-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编辑application-properties"}},[t._v("#")]),t._v(" 2.编辑application.properties")]),t._v(" "),a("p",[t._v("此文件也是在conf目录，在该文件中，加入下面内容")]),t._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("spring.datasource.platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.url.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("db.password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("123456")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-修改cluster-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改cluster-conf"}},[t._v("#")]),t._v(" 3.修改cluster.conf")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218234040484.png",alt:""}})]),t._v(" "),a("p",[t._v("在该文件中，增加以下内容，这里演示三台nacos")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218234149361.png",alt:""}})]),t._v(" "),a("p",[t._v("这个需要搭建几个nacos就写几个，注意这里得host不能使用localhost，上面的配置，也就是部署三台nacos机器，分别运行在3333,4444,5555这三个端口上")]),t._v(" "),a("h3",{attrs:{id:"_4-编辑startup-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编辑startup-sh"}},[t._v("#")]),t._v(" 4.编辑startup.sh")]),t._v(" "),a("p",[t._v("编辑Nacos的启动脚本startup.sh，使它能够接受不同的启动端口，我们编辑的目的就是为了在执行"),a("code",[t._v("startup.sh")]),t._v("的时候，我们能够传入额外的参数，从而在不同端口启动")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218234513113.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picture.xcye.xyz/image-20220218234535755.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置nginx"}},[t._v("#")]),t._v(" 5.配置Nginx")]),t._v(" "),a("p",[t._v("配置Nginx的话，自行解决，也就是配置负载均衡，然后就可以了，这个就是搭建nacos集群模式的步骤")])])}),[],!1,null,null,null);a.default=e.exports}}]);