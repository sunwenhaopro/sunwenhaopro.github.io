(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{300:function(t,a,s){t.exports=s.p+"assets/img/image-20231017190431419.0bf121eb.png"},301:function(t,a,s){t.exports=s.p+"assets/img/image-20231017191525014.675eb500.png"},302:function(t,a,s){t.exports=s.p+"assets/img/image-20231017191541945.194a8d12.png"},303:function(t,a,s){t.exports=s.p+"assets/img/image-20231017190829500.2e5b12d9.png"},304:function(t,a,s){t.exports=s.p+"assets/img/image-20231017192158144.67eef2eb.png"},545:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java对象内存布局和对象头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java对象内存布局和对象头"}},[t._v("#")]),t._v(" Java对象内存布局和对象头")]),t._v(" "),a("h2",{attrs:{id:"对象在堆内存中的布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象在堆内存中的布局"}},[t._v("#")]),t._v(" 对象在堆内存中的布局")]),t._v(" "),a("p",[t._v("在hotspot虚拟机中，对象在堆内存中的存储布局可以分为三个部分：对象头（Header），实例数据（Instance data），对齐填充（Padding）")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:s(300),alt:"image-20231017190431419"}}),t._v(" "),a("h2",{attrs:{id:"对象头header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象头header"}},[t._v("#")]),t._v(" 对象头Header")]),t._v(" "),a("h3",{attrs:{id:"对象标记mark-word-默认存储对象的哈希码-分代年龄和锁标志位等信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象标记mark-word-默认存储对象的哈希码-分代年龄和锁标志位等信息"}},[t._v("#")]),t._v(" 对象标记Mark Word：默认存储对象的哈希码，分代年龄和锁标志位等信息")]),t._v(" "),a("img",{attrs:{src:s(301),alt:"image-20231017191525014"}}),t._v(" "),a("img",{attrs:{src:s(302),alt:"image-20231017191541945"}}),t._v(" "),a("p",[t._v("分别定义在==oop.hpp==文件和==markOop.hpp==文件")]),t._v(" "),a("p",[t._v("==GC年龄采用4位bit存储，最大为15==，例如MaxTenuringThreshold参数默认值就是15")]),t._v(" "),a("p",[t._v("markword(64位)分布图，对象布局、GC回收和后面的锁升级就是对象标记MarkWord里面标志位的变化")]),t._v(" "),a("h3",{attrs:{id:"类型指针-类元信息-klass-pointer-对象指向它的类元数据的指针-虚拟机通过这个指针来确定这个对象是哪个类的实例。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型指针-类元信息-klass-pointer-对象指向它的类元数据的指针-虚拟机通过这个指针来确定这个对象是哪个类的实例。"}},[t._v("#")]),t._v(" 类型指针（类元信息）Klass Pointer：对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。")]),t._v(" "),a("img",{attrs:{src:s(303),alt:"image-20231017190829500"}}),t._v(" "),a("p",[t._v("在64位系统中，==Mark Word占了8个字节==，==类型指针占了8个字节==，==Header一共是16个字节==")]),t._v(" "),a("p",[t._v("==如果对象是数组，那么对象头中还有数组长度==")]),t._v(" "),a("h2",{attrs:{id:"实例数据-instance-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例数据-instance-data"}},[t._v("#")]),t._v(" 实例数据：Instance Data")]),t._v(" "),a("p",[t._v("实例数据存放类的属性(Field)数据信息，包括父类的属性信息，\n如果是数组的实例部分还包括数组的长度，这部分内存按4字节对齐。")]),t._v(" "),a("h2",{attrs:{id:"对齐填充-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对齐填充-padding"}},[t._v("#")]),t._v(" 对齐填充：Padding")]),t._v(" "),a("p",[t._v("虚拟机要求对象起始地址必须是8字节的整数倍。填充数据不是必须存在的，仅仅是为了字节对齐这部分内存按8字节补充对齐。")]),t._v(" "),a("h2",{attrs:{id:"new-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-object"}},[t._v("#")]),t._v(" new Object()")]),t._v(" "),a("p",[t._v("采用官网的jdk工具JOL可以获取对象的信息，分析出对象在jvm中的大小和分布")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openjdk.jol"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jol-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.9"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("编写一个demo")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JOLDemo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPrintable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("img",{attrs:{src:s(304),alt:"image-20231017192158144"}}),t._v(" "),a("p",[t._v("但是结果表明类型指针为4字节与前文定义不一致，这是因为默认开启了类型指针压缩，以节约空间，可以通过-XX:-UseCompressedClassPointers jvm参数来关闭指针压缩")]),t._v(" "),a("p",[t._v("因此可以得出==new Object（）对象占16个字节==")]),t._v(" "),a("p",[t._v("附："),a("a",{attrs:{href:"http://openjdk.java.net/groups/hotspot/docs/HotSpotGlossary.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hospot术语表"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("​      "),a("a",{attrs:{href:"http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/89fb452b3688/src/share/vm/oops/oop.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("C源文件"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("​    深入理解Java虚拟机 48-52页")])])}),[],!1,null,null,null);a.default=e.exports}}]);