(function(e){function t(t){for(var i,n,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,r=1;r<o.length;r++){var l=o[r];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var i={},s={app:0},a=[];function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1:function(e,t){},1671:function(e,t,o){},2063:function(e,t,o){"use strict";o("1671")},"2a67":function(e,t,o){e.exports=o.p+"assets/img/video_upload.80565a43.jpg"},"32e6":function(e,t,o){"use strict";o("6cbe")},3691:function(e,t,o){"use strict";o("7390")},"45f8":function(e,t,o){},4947:function(e,t,o){e.exports=o.p+"assets/img/logo-pe-white.441883f5.png"},"545f":function(e,t,o){"use strict";o("cf1d")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("PageHeader"),t("router-view"),t("PageFooter")],1)},a=[],n=function(){var e=this,t=e._self._c;return t("div",{class:[{"no-scroll":0==e.scrollTop&&"/home"==e.nowPath},{"fix-header":"/home"==e.nowPath}],attrs:{id:"pageHeader"}},[t("ul",{staticClass:"nav-link"},["/home"==e.nowPath?t("li",{staticClass:"nav-link-item header-logo"},[t("div",[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:0==e.scrollTop,expression:"scrollTop == 0"}],attrs:{src:o("4947")}})]),t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:0!=e.scrollTop,expression:"scrollTop != 0"}],attrs:{src:o("befe")}})])],1),t("span",[e._v("叶静爱运动")])]):t("li",{staticClass:"nav-link-item header-logo"},[e._m(0),t("span",[e._v("叶静爱运动")])]),t("li",{staticClass:"nav-link-item"},[t("span",{on:{click:function(t){return e.routerPush("/home")}}},[e._v("主页")])])]),t("ul",{staticClass:"nav-user"},[t("li",{staticClass:"nav-link-item",on:{click:function(t){return e.routerPush("/video_upload")}}},[t("img",{staticClass:"user-head",attrs:{src:o("2a67")}})]),e._m(1),t("li",{staticClass:"nav-link-item"},[t("span",{on:{click:function(t){return e.routerPush("/login/login")}}},[e._v("登陆")])]),t("li",{staticClass:"nav-link-item"},[t("span",{on:{click:function(t){return e.routerPush("/login/register_tel")}}},[e._v("注册")])]),t("li",{staticClass:"nav-user"},[t("el-button",{staticClass:"contribute",attrs:{type:"primary"},on:{click:function(t){return e.routerPush("/video_upload")}}},[e._v("投稿")])],1)])])},r=[function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{src:o("befe")}})])},function(){var e=this,t=e._self._c;return t("li",{staticClass:"nav-link-item"},[t("img",{staticClass:"user-head",attrs:{src:o("c78b")}})])}],l=(o("14d9"),o("8c4f")),c=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[e._m(0),t("div",{attrs:{id:"homeContent"}},[t("div",{attrs:{id:"menu"}},[t("el-row",{staticClass:"column-wrapper"},[t("el-col",{attrs:{span:4}},[t("el-row",{staticClass:"menu-left"},[t("el-col",{staticClass:"menu-left-left-column",attrs:{span:8}},[t("div",{staticClass:"ml-item-wrapper"},[t("div",{staticClass:"menu-left-item home-wrapper"},[t("font-awesome-icon",{staticClass:"menu-home",attrs:{icon:"home"}})],1),t("span",[e._v("首页")])])]),t("el-col",{staticClass:"menu-left-middle-column",attrs:{span:8}},[t("div",{staticClass:"ml-item-wrapper"},[t("div",{staticClass:"menu-left-item comment-dots-wrapper"},[t("font-awesome-icon",{staticClass:"menu-comment-dots",attrs:{icon:"comment-dots"}})],1),t("span",[e._v("动态")])])]),t("el-col",{staticClass:"menu-left-item-wrapper menu-left-right-column",attrs:{span:8}},[t("div",{staticClass:"ml-item-wrapper"},[t("div",{staticClass:"menu-left-item trophy-wrapper"},[t("font-awesome-icon",{staticClass:"menu-trophy",attrs:{icon:"trophy"}})],1),t("span",[e._v("排行榜")])])])],1)],1),t("span",{staticClass:"break-column"}),t("el-col",{staticClass:"program-wrapper",attrs:{span:20}},e._l(e.program,(function(o){return t("div",{key:o.id,staticClass:"program-list"},[t("el-row",e._l(o,(function(o){return t("el-col",{key:o.id,staticClass:"program-item",attrs:{span:3}},[t("span",[e._v(e._s(o.text))])])})),1)],1)})),0)],1)],1),t("div",{attrs:{id:"popular"}},[t("el-row",{staticClass:"popular-title-wrapper"},[t("el-col",{attrs:{span:4}},[t("el-row",{staticClass:"popular-title"},[t("el-col",{attrs:{span:1}},[e._v(" ")]),t("el-col",{staticClass:"popular-icon-wrapper",attrs:{span:7}},[t("font-awesome-icon",{staticClass:"popular-icon",attrs:{icon:["fab","hotjar"]}})],1),t("el-col",{staticClass:"popular-title-text",attrs:{span:16}},[t("span",[e._v("热门内容")])])],1)],1)],1),t("el-row",[e._l(999,(function(i){return t("el-col",{key:i,attrs:{span:4}},[t("div",{staticClass:"video-item"},[t("img",{attrs:{src:o("7b46")},on:{click:function(t){return e.routerPush("/video/video-id")}}}),t("div",{staticClass:"video-info"},[t("span",{staticClass:"video-title",on:{click:function(t){return e.routerPush("/video/video-id")}}},[e._v("三十天精通篮球")]),t("span",{staticClass:"video-publisher"},[e._v("叶静")])])])])})),t("el-col",{attrs:{span:4}})],2)],1)])])},u=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:o("5b50")}})])}],d={name:"Home",methods:{routerPush:function(e){ue.call(this,e)}},data:function(){return{program:[[{text:"足球"},{text:"篮球"},{text:"网球"},{text:"羽毛球"},{text:"乒乓球"},{text:"象棋"},{text:"围棋"},{text:"军棋"}],[{text:"游泳"},{text:"拳击"},{text:"体操"},{text:"田径"},{text:"赛马"},{text:"射击"},{text:"射箭"},{text:"速滑"}]]}}},p=d,m=(o("ef2a"),o("2877")),f=Object(m["a"])(p,c,u,!1,null,"21c915e4",null),v=f.exports,h=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:e.ruleForm2,rules:e.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title",staticStyle:{"margin-bottom":"20px"}},[e._v("用户登录1")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"用户名"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),t("el-checkbox",{staticClass:"rememberme",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("登录")])],1),t("el-row",{staticStyle:{"text-align":"center","margin-top":"-10px"}},[t("el-link",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary"}},[e._v("忘记密码")]),t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.register_tel()}}},[e._v("用户注册")])],1)],1)],1)},g=[],b={name:"Login",data:function(){return{logining:!1,ruleForm2:{username:"",password:""},rules2:{username:[{required:!0,message:"请输入账号！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}]},checked:!1}},components:{},created:function(){},methods:{register_tel:function(){this.$router.push({path:"/login/register_tel"})},handleSubmit:function(){var e=this;this.$message({type:"success",message:"还在坚强的写中，你先别着急！先3秒后给你返回首页学会篮球哈!"}),setTimeout((function(){e.$router.push({path:"/home"})}),3e3)}}},y=b,w=(o("545f"),Object(m["a"])(y,h,g,!1,null,"edc94b48",null)),x=w.exports,_=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:e.ruleForm2,rules:e.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title",staticStyle:{"margin-bottom":"20px"}},[e._v("手机号注册")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"用户名"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),t("el-form-item",{attrs:{prop:"tel"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"手机号"},model:{value:e.ruleForm2.tel,callback:function(t){e.$set(e.ruleForm2,"tel",t)},expression:"ruleForm2.tel"}})],1),t("el-form-item",{attrs:{prop:"verification"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{type:"verification","auto-complete":"off",placeholder:"验证码"},model:{value:e.ruleForm2.verification,callback:function(t){e.$set(e.ruleForm2,"verification",t)},expression:"ruleForm2.verification"}}),t("el-button",{staticStyle:{width:"30%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("点击获取")])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),t("el-form-item",{attrs:{prop:"password1"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"确认密码"},model:{value:e.ruleForm2.password1,callback:function(t){e.$set(e.ruleForm2,"password1",t)},expression:"ruleForm2.password1"}})],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("注册")])],1),t("el-row",{staticStyle:{"text-align":"center","margin-top":"-10px"}},[t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.register_mail()}}},[e._v("邮箱注册")])],1)],1)],1)},C=[],k={name:"Login",data:function(){return{logining:!1,ruleForm2:{username:"",tel:"",verification:"",password:"",password1:""},rules2:{email:[{required:!0,message:"请输入邮箱地址！",trigger:"blur"}],verification:[{required:!0,message:"请输入验证码！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}],password1:[{required:!0,message:"请输入确认密码！",trigger:"blur"}]}}},components:{},created:function(){},methods:{register_mail:function(){this.$router.push({path:"/login/register_mail"})},handleSubmit:function(){var e=this;this.$message({type:"success",message:"还在坚强的写中，你先别着急！先3秒后给你返回首页学会篮球哈!"}),setTimeout((function(){e.$router.push({path:"/home"})}),3e3)}}},S=k,F=(o("3691"),Object(m["a"])(S,_,C,!1,null,"62409484",null)),P=F.exports,L=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm login-page",attrs:{model:e.ruleForm2,rules:e.rules2,"status-icon":"","label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"title",staticStyle:{"margin-bottom":"20px"}},[e._v("邮箱注册")]),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"邮箱地址"},model:{value:e.ruleForm2.email,callback:function(t){e.$set(e.ruleForm2,"email",t)},expression:"ruleForm2.email"}})],1),t("el-form-item",{attrs:{prop:"verification"}},[t("el-input",{staticStyle:{width:"70%"},attrs:{type:"verification","auto-complete":"off",placeholder:"验证码"},model:{value:e.ruleForm2.verification,callback:function(t){e.$set(e.ruleForm2,"verification",t)},expression:"ruleForm2.verification"}}),t("el-button",{staticStyle:{width:"30%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("点击获取")])],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),t("el-form-item",{attrs:{prop:"password1"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"确认密码"},model:{value:e.ruleForm2.password1,callback:function(t){e.$set(e.ruleForm2,"password1",t)},expression:"ruleForm2.password1"}})],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("注册")])],1),t("el-row",{staticStyle:{"text-align":"center","margin-top":"-10px"}},[t("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.register_tel()}}},[e._v("手机号注册")])],1)],1)],1)},$=[],E={name:"Login",data:function(){return{logining:!1,ruleForm2:{email:"",verification:"",password:"",password1:""},rules2:{email:[{required:!0,message:"请输入邮箱地址！",trigger:"blur"}],verification:[{required:!0,message:"请输入验证码！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}],password1:[{required:!0,message:"请输入确认密码！",trigger:"blur"}]}}},components:{},created:function(){},methods:{register_tel:function(){this.$router.push({path:"/login/register_tel"})},handleSubmit:function(){var e=this;this.$message({type:"success",message:"还在坚强的写中，你先别着急！先3秒后给你返回首页学会篮球哈!"}),setTimeout((function(){e.$router.push({path:"/home"})}),3e3)}}},I=E,M=(o("a885"),Object(m["a"])(I,L,$,!1,null,"be72e262",null)),j=M.exports,O=(o("b0c0"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"video"}},[t("div",{staticStyle:{width:"85%","max-width":"500px",margin:"0 30px"}},[t("br"),t("h3",{staticStyle:{"word-break":"break-all"}},[e._v(e._s(e.videoInfo.name))]),t("br"),t("video-player",{ref:"videoPlayer",staticClass:"video-player-box",staticStyle:{width:"100%"},attrs:{options:e.playerOptions,playsinline:!0},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)}}}),t("br"),t("div",[t("svg",{staticClass:"icon",staticStyle:{"margin-right":"50px"},attrs:{"aria-hidden":"true"},on:{click:e.videoLike}},[e.videoInfo.isLiked?t("use",{attrs:{"xlink:href":"#icon-like2"}}):t("use",{attrs:{"xlink:href":"#icon-like1"}})]),t("svg",{staticClass:"icon",staticStyle:{"margin-right":"50px"},attrs:{"aria-hidden":"true"},on:{click:e.videoMark}},[e.videoInfo.isMarked?t("use",{attrs:{"xlink:href":"#icon-mark2"}}):t("use",{attrs:{"xlink:href":"#icon-mark1"}})]),t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.page.url,expression:"page.url",arg:"copy"}]},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:e.videoShare}},[t("use",{attrs:{"xlink:href":"#icon-share"}})])])]),t("br"),t("p",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.videoInfo.introduction))]),t("br")],1),t("div",{staticStyle:{width:"85%","max-width":"500px"}},[t("br"),t("div",{staticStyle:{"font-size":"20px"}},[e._v("评论")]),t("el-input",{staticStyle:{width:"80%",resize:"none","font-size":"15px"},attrs:{type:"textarea",resize:"none",autosize:{minRows:1,maxRows:3}},model:{value:e.comment.content,callback:function(t){e.$set(e.comment,"content",t)},expression:"comment.content"}}),t("el-button",{attrs:{type:"primary",size:"medium",round:""},on:{click:e.videoComment}},[e._v("发表")]),t("el-divider"),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.videoCommentGetMore,expression:"videoCommentGetMore"}],staticClass:"infinite-list",staticStyle:{overflow:"auto",height:"400px",padding:"0 2px"}},[e._l(e.videoInfo.comments,(function(i,s){return t("div",{key:"comment"+s},[t("el-row",[t("el-col",{staticStyle:{"font-size":"18px"},attrs:{span:12}},[t("div",{staticClass:"nav-user"},[t("img",{staticClass:"user-head",attrs:{src:o("c78b")}}),e._v(" "+e._s(i.userName)+" ")])]),t("el-col",{staticStyle:{"text-align":"right","font-size":"14px","font-style":"italic"},attrs:{span:12}},[e._v(e._s(i.time))])],1),t("br"),t("el-row",{staticStyle:{"font-size":"15px"}},[e._v(" "+e._s(i.content)+" ")]),t("el-divider")],1)})),t("div",[e._v(" "+e._s(e.isVideoCommentEnd?"到底啦～":"下拉加载更多")+" ")]),t("br")],2),t("br")],1)])}),V=[],U=(o("fda2"),o("d6d3")),H=(o("edd8"),{components:{videoPlayer:U["videoPlayer"]},data:function(){return{page:{url:window.location.href},isVideoCommentEnd:!1,playerOptions:{muted:!0,language:"zh-CN",playbackRates:[.25,.5,1,1.25,2],fluid:!0,sources:[{type:"video/mp4",src:"https://e22c0f7fe3741058.jomoxc.com:9082/fs3c4a7504.a.bdydns.com/2513265565/mda-khtu0x93sb3bzdne/hd/mda-khtu0x93sb3bzdne.mp4?bcevod_channel=searchbox_feed&pt=3&klogid=0969055534&max_age=2592000&xauzkey=mngx_82fcd1f6f0326a9d4201dff21d5f02ff_1679980596&v_from_s=hkapp-haokan-nanjing&abtest=107354_2-107353_1&r=K0xGOwlWVUYVIk0bGA47ECJMWyhUDxUETCseVFcBIBA2CEpySR8YWgE8HlsfRSAAbFVWKlcHEh0WdgIMSRkqVyFCViUfQhcZV3kMahwYJwkcSw8jEQ0KGU4uG1oRCyZJLVlcIRMCHU8CMw5dJQEtHX4JBHxDVENcWnBDGEpHeEl2DlcuTlocXAZwQgBJCSxTIlwHe08KQl4BdB4ESFt4BmVaUS4MAx42AC4bWxQPJFkwXVM5GQQYBhsZHFAfDm4UJwUDbRkIR1lFNg4ISUwkCyRRVnZKVUxQU3NPAElebhIqXA99SFhIX1ZyQgxOXn9TdAADck5dXAgBMh9GDld5VHQLB38lXldYU3FJAEk1eUIoVF0sEwhHWVpwQwVPX31Xdx5BLxEzAgoHKEcELEhXJRkIFFgMNh9bGQ4mVQ%3D%3D&cd=0&pd=1&xcid=35019bc69bde4e61b12e59c92c58bb24&sdk_xcdn=1&xcsched=1365488758&xclogid=11770177152772086497&vid=6242654894477781941&f_ver=v1&auth_key=1679895969-0-0-56ee46f5e6853cd7ad505f87b2d1210b&limit_rate=3670016&logid=0969055534"}]},videoInfo:{id:null,name:"test video",introduction:"打篮球打篮球",isLiked:!1,isMarked:!1,comments:[{userName:"运动员1",userHead:"",time:"2020-01-01",content:"6666"},{userName:"运动员2",userHead:"",time:"2020-02-01",content:"6"}]},comment:{userName:"a",userHead:"",time:"2020-01-01",content:"32131"}}},created:function(){this.videoInfo.id=this.$route.path.substring(this.$route.path.lastIndexOf("/")+1),this.initPlayer()},mounted:function(){console.log("player: mounted",this.player)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{initPlayer:function(){},videoLike:function(){this.videoInfo.isLiked=!this.videoInfo.isLiked},videoMark:function(){this.videoInfo.isMarked=!this.videoInfo.isMarked},videoShare:function(){this.$message.success({message:"已复制链接",duration:1500})},videoComment:function(){0!==this.comment.content.length?this.comment.content="":this.$message.warning({message:"评论不能为空",duration:1500})},videoCommentGetMore:function(){this.videoInfo.comments.length>10?this.isVideoCommentEnd=!0:this.videoInfo.comments.push({userName:"篮球哥",time:"2023-02-05",content:"adsa"})},onPlayerPlay:function(e){console.log("player: play",e)},onPlayerPause:function(e){console.log("player: pause",e)}}}),T=H,z=(o("e89d"),Object(m["a"])(T,O,V,!1,null,"1c74d835",null)),B=z.exports,A=function(){var e=this,t=e._self._c;return t("div",[e._v("这里是列表页面，比如足球类节目")])},N=[],q={name:"VideoList"},R=q,Q=Object(m["a"])(R,A,N,!1,null,"5c1ac332",null),D=Q.exports,J=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"video-upload"}},[t("br"),t("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{drag:"",action:"http://47.99.44.124:8088/upload","auto-upload":!1,limit:1,"on-exceed":e.uploadExceed,data:e.videoInfo,"before-upload":e.uploadBefore,"on-progress":e.uploadProcess,"on-success":e.uploadSuccess}},[e.isVideoUploading?e._e():t("div",[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持mp4、avi、mkv等常用格式")])]),e.isVideoUploading?t("el-progress",{staticStyle:{"margin-top":"7px"},attrs:{type:"circle",percentage:e.videoUploadPercent}}):e._e()],1),t("el-form",{staticStyle:{margin:"0 10%"}},[t("el-form-item",{attrs:{label:"标题"}},[t("el-input",{model:{value:e.videoInfo.name,callback:function(t){e.$set(e.videoInfo,"name",t)},expression:"videoInfo.name"}})],1),t("el-form-item",{attrs:{label:"简介"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.videoInfo.introduction,callback:function(t){e.$set(e.videoInfo,"introduction",t)},expression:"videoInfo.introduction"}})],1),t("el-form-item",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.submitUpload}},[e._v("上传视频")])],1)],1),t("br")],1)},G=[],X=(o("b680"),{data:function(){return{isVideoUploading:!1,videoUploadPercent:"",videoInfo:{name:"test video",introduction:"简介简介简介"}}},methods:{submitUpload:function(){this.$message({type:"success",message:"传不上去的放心，我压根没写这个功能，那我给你假装上传一下吧"})},uploadExceed:function(e,t){this.$message.warning(" ".concat(e.length+t.length," 个视频超出了上限，只能上传1个"))},uploadBefore:function(e){if(-1===["video/mp4","video/ogg","video/flv","video/avi","video/wmv","video/rmvb","video/mov"].indexOf(e.type))return this.$message.warning("视频格式不支持"),!1;var t=e.size/1024/1024<100;if(!t)return this.$message.warning("视频不能超过100MB"),!1;this.isVideoUploading=!0},uploadProcess:function(e,t){this.videoUploadPercent=1*t.percentage.toFixed(0)},uploadSuccess:function(e,t){this.videoUploadPercent=0,console.log(e,t),this.isVideoUploading=!1}}}),Z=X,W=(o("32e6"),Object(m["a"])(Z,J,G,!1,null,"3822d19c",null)),K=W.exports;i["default"].use(l["a"]);var Y={path:"/",redirect:"/home"},ee={path:"/home",component:v},te={path:"/login/login",component:x},oe={path:"/login/register_tel",component:P},ie={path:"/login/register_mail",component:j},se={path:"/video/",component:B},ae={path:"/video_list",component:D},ne={path:"/video_upload",component:K},re=[Y,ee,te,oe,ie,se,ae,ne],le=new l["a"]({routes:re,mode:"history"}),ce=le;function ue(e){console.log(e),console.log(this.$route.path),this.$route.path!=e?ce.push(e):location.reload()}var de={name:"PageHeader",data:function(){return{scrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{fetchAllData:function(){},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop},routerPush:function(e){ue.call(this,e)}},computed:{nowPath:function(){return this.$route.path}}},pe=de,me=(o("73c0"),Object(m["a"])(pe,n,r,!1,null,"0514bd5a",null)),fe=me.exports,ve=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"pageFooter"}},[t("div",{staticClass:"page-footer-content"},[t("el-row",{staticClass:"website-info"},[t("el-col",{attrs:{span:16}},[t("div",{staticClass:"footer-item1"},[t("div",{staticClass:"item-header"},[e._v("叶静爱运动")]),t("div",{staticClass:"item-content"},[t("div",[e._v("大家好，我是写代码两年半的思域哥")])])])]),t("el-col",{attrs:{span:4}},[t("div",{staticClass:"footer-item1"},[t("div",{staticClass:"item-header"},[e._v("帮助")]),t("div",{staticClass:"item-content"},[t("div",{on:{click:function(t){return e.helpU()}}},[e._v("这里帮助信息？")])])])]),t("el-col",{attrs:{span:4}},[t("div",{staticClass:"footer-item1"},[t("div",{staticClass:"item-header"},[e._v("关于我们")]),t("div",{staticClass:"item-content"},[t("ul",[t("li",[e._v("篮球小组长：思域哥哥")])])])])])],1),t("el-row",{staticClass:"other-info"},[t("el-col",{attrs:{span:6}},[t("div",{staticClass:"footer-item2"},[t("div",[t("font-awesome-icon",{staticClass:"brand-logo",attrs:{icon:["fab","qq"]},on:{click:function(t){return e.shareLink("qq：2624902083")}}}),t("font-awesome-icon",{staticClass:"brand-logo",attrs:{icon:["fab","weixin"]},on:{click:function(t){return e.shareLink("wx:Poundba_Yuu")}}})],1)])]),t("el-col",{staticClass:"footer-icp",attrs:{span:12}},[e._v("这里是icp备案")]),t("el-col",{attrs:{span:6}})],1)],1)])},he=[],ge={name:"PageFooter",methods:{shareLink:function(e){this.$message({type:"success",message:"小组长".concat(e)})},helpU:function(){this.$message({type:"success",message:"多大人了还要帮助？"})}}},be=ge,ye=(o("2063"),Object(m["a"])(be,ve,he,!1,null,"53cdd83c",null)),we=ye.exports,xe={name:"App",components:{PageHeader:fe,PageFooter:we}},_e=xe,Ce=(o("73b6"),Object(m["a"])(_e,s,a,!1,null,null,null)),ke=Ce.exports,Se=o("2f62"),Fe=o("a7fe"),Pe=o.n(Fe),Le={},$e={};o("54ba");i["default"].use(Se["a"],Pe.a);var Ee={},Ie=new Se["a"].Store({state:Ee,actions:$e,mutations:Le,getters:$e}),Me=o("bc3a"),je=o.n(Me),Oe=(o("aede"),o("5c96")),Ve=o.n(Oe),Ue=(o("0fae"),o("ad3d")),He=o("ecee"),Te=o("42b9"),ze=o("da3e"),Be=o("4eb5"),Ae=o.n(Be);He["c"].add(Te["a"]),He["c"].add(ze["a"]),i["default"].use(Pe.a,je.a),i["default"].use(Ve.a),i["default"].use(Ae.a),i["default"].component("font-awesome-icon",Ue["a"]),i["default"].config.productionTip=!1,new i["default"]({el:"#app",store:Ie,router:ce,render:function(e){return e(ke)}})},5799:function(e,t,o){},"59d4":function(e,t,o){},"5b50":function(e,t,o){e.exports=o.p+"assets/img/sports6.c0759d5d.jpg"},"6cbe":function(e,t,o){},7390:function(e,t,o){},"73b6":function(e,t,o){"use strict";o("e764")},"73c0":function(e,t,o){"use strict";o("5799")},"7b46":function(e,t,o){e.exports=o.p+"assets/img/basketball.25bd07fe.jpg"},"7b5d":function(e,t,o){},a885:function(e,t,o){"use strict";o("7b5d")},aede:function(e,t,o){},befe:function(e,t,o){e.exports=o.p+"assets/img/logo-pe-blue.08ce2445.png"},c78b:function(e,t,o){e.exports=o.p+"assets/img/default_head.08a0fd47.jpg"},cf1d:function(e,t,o){},e764:function(e,t,o){},e89d:function(e,t,o){"use strict";o("45f8")},edd8:function(e,t){!function(e){var t,o='<svg><symbol id="icon-mark1" viewBox="0 0 1024 1024"><path d="M772.390474 1023.841975c-14.415681 0-30.622659-4.307644-45.635439-12.112584l-214.401266-111.359002-215.723413 111.188402c-13.647982 7.54904-29.300511 11.515485-45.25159 11.515485a93.829875 93.829875 0 0 1-57.577423-19.576324c-30.19616-23.500119-45.635439-64.273465-38.512899-101.378915l44.100041-237.688134-169.064375-163.690483a110.932503 110.932503 0 0 1-26.315015-104.577661l0.341199-1.194199c12.283184-38.256999 42.777893-65.083814 79.755394-70.244456l234.958538-44.355941 105.47331-222.419455c16.932028-35.228853 51.393182-57.833323 87.816233-57.833323 38.0011 0 73.357903 23.457469 88.200083 58.473072l105.089461 221.737056 235.001188 42.649943c37.27605 5.629793 67.94136 33.437556 78.305296 71.054806 11.600785 36.977501 2.132497 77.580247-24.523718 104.91886l-0.554449 0.5971-168.637876 164.92733 42.649943 238.114634a104.364411 104.364411 0 0 1-38.086399 100.525917c-16.292278 13.562682-36.551001 20.898472-57.406824 20.727872z m-259.994055-225.5329l211.671669 109.908904c6.226892 3.284046 13.349432 5.288593 18.254176 5.288593a29.684361 29.684361 0 0 0 19.704274-6.866641l0.980949-0.810349a40.346846 40.346846 0 0 0 15.268679-38.854098l-42.607293-238.242584 168.467276-164.756731a40.986596 40.986596 0 0 0 9.255038-40.815996l-0.4265-1.535398a35.186203 35.186203 0 0 0-28.788711-26.059115l-0.980949-0.1706-233.12459-42.308744-104.876211-221.310556a36.508352 36.508352 0 0 0-32.883106-21.324972c-13.733282 0-26.826814 8.913838-33.480206 22.68977L374.594452 353.001016 140.275664 397.186358c-14.245081 1.876598-25.291416 11.686084-30.40941 26.997414-3.625245 13.989181 0.682399 30.835909 10.577186 41.370445l168.680526 163.178683-44.270641 238.413183c-2.644296 13.775932 3.625245 29.641711 15.22603 38.726149a34.887654 34.887654 0 0 0 21.324971 7.037241c6.098942 0 11.941984-1.450098 16.974678-4.307645l0.767699-0.426499 213.249716-109.866254z"  ></path></symbol><symbol id="icon-like2" viewBox="0 0 1071 1024"><path d="M1041.441824 418.173769C1017.545784 379.457987 976.978907 357.655147 934.856203 355.990951 932.672662 355.651924 930.455865 355.426732 928.182457 355.426732L681.491077 355.156994C698.221007 307.082112 707.361417 255.423948 707.361417 201.600472 707.361417 166.693164 703.416492 132.726219 696.177769 100.007732L695.526642 100.09187C682.3613 42.777911 631.382524 0 570.359886 0 499.341382 0 441.78117 57.86828 441.78117 129.246872 441.78117 133.195164 442.028573 137.076641 442.364598 140.942034 438.548914 278.142407 331.614976 389.360269 196.661604 399.069528L196.661604 399.904721 49.99039 400.248696C48.21671 400.029691 46.431955 399.882449 44.609042 399.882449 20.192356 399.882449 0.39757 419.774863 0.39757 444.313419L0 977.678089C0 1002.211696 19.782477 1022.104111 44.199165 1022.104111 46.59566 1022.104111 48.930613 1021.861596 51.223717 1021.494111L214.393457 1021.562164C216.553627 1021.888817 218.732259 1022.104111 220.969974 1022.104111 223.210149 1022.104111 225.381396 1021.888817 227.525566 1021.56835L840.966989 1021.82695 840.966989 1022.092974C864.997185 1022.137518 889.32402 1015.639107 911.109115 1001.722954 931.788904 988.498463 947.345814 970.345723 957.569383 949.811138 960.374515 945.715604 962.586401 941.106583 963.928028 936.029854L1059.429687 512.279478C1060.754092 507.254717 1061.113516 502.206443 1060.720858 497.29428 1062.705021 470.461729 1056.644245 442.797699 1041.441824 418.173769L1041.441824 418.173769ZM265.44116 938.490887 177.048986 938.469853 177.38132 494.580834C177.38132 494.580834 231.384331 494.238097 265.862117 483.495673L265.44116 938.490887 265.44116 938.490887Z"  ></path></symbol><symbol id="icon-mark2" viewBox="0 0 1025 1024"><path d="M512.824885 39.121c-12.944 0-23.188 3.834-30.594 11.67-7.543 7.669-13.38 17.057-17.354 27.728L347.367885 349.82 31.960885 378.135c-7.406 1.419-14.228 4.699-20.344 10.085-6.123 5.42-9.975 12.809-11.253 22.342-1.418 9.388 0.866 18.648 6.558 27.755 5.839 9.088 12.799 17.34 20.898 24.899l11.253 9.533 26.039 22.339c10.67 9.085 22.476 19.199 35.845 30.289l40.259 33.868c32.012 27.009 67.995 57.739 108.262 92.164l-34.706 141.708c-4.833 18.199-9.393 35.982-13.798 53.631-4.403 17.503-8.406 33.56-11.811 48.094-3.416 14.506-6.403 26.87-9.098 37.4l-5.124 19.781c-1.434 5.979-0.709 11.949 1.987 17.643 2.707 5.698 6.971 10.673 12.809 14.646 5.694 4.139 12.224 6.558 19.337 7.695 1.584 0.224 3.154 0.307 4.72 0.307 5.476 0 10.886-1.334 16.204-3.861 3.416-1.444 10.103-4.832 19.922-10.113 9.951-5.39 21.617-12.228 35.276-20.337 13.518-8.116 28.75-16.784 45.396-26.316 16.637-9.389 33.561-18.922 50.485-28.315 39.566-22.197 83.377-47.514 131.754-75.824l266.461 153.792 14.813 5.53c6.394 2.416 11.364 3.555 14.782 3.555 10.254 0 19.351-2.278 27.606-6.529 8.098-4.415 11.245-13.361 9.1-26.896-0.71-2.699-1.985-9.248-3.976-19.781l-7.695-37.814c-3.129-14.954-6.39-31.458-9.668-49.659-3.416-18.223-7.25-36.425-11.241-54.624-8.961-43.263-19.061-91.502-30.716-144.679l211.407-188.228c8.818-10.253 16.074-18.787 21.908-25.897 5.833-7.112 8.682-15.367 8.682-24.759 0-10.085-2.705-17.504-8.116-22.338-5.555-4.7-15.083-8.668-28.592-12.09l-315.546-29.312-114.261-271.3c-1.418-2.697-3.265-5.973-5.684-10.085-2.415-3.974-5.262-8.116-8.684-12.089-3.415-4.137-7.668-7.692-12.652-10.667C525.624885 40.678 519.649885 39.121 512.824885 39.121"  ></path></symbol><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M73.323761 584.963624C32.80553 584.963624 0 617.613542 0 657.889258L0 950.895133C0 991.10712 32.828167 1023.820767 73.323761 1023.820767L950.676239 1023.820767C991.19447 1023.820767 1024 991.170849 1024 950.895133L1024 657.889258C1024 617.677268 991.171833 584.963624 950.676239 584.963624 910.380464 584.963624 877.714286 617.39174 877.714286 658.037043L877.714286 841.072234C877.714286 861.210094 861.063109 877.535053 841.442629 877.535053L182.557371 877.535053C162.525089 877.535053 146.285714 860.966868 146.285714 841.072234L146.285714 658.037043C146.285714 617.679707 113.220378 584.963624 73.323761 584.963624ZM694.857143 405.014565 694.857143 514.478124C694.857143 554.945712 718.615186 565.441393 748.209931 537.650714L1017.953481 284.350444C1025.939463 275.898277 1026.069317 261.659626 1018.018406 253.077426L749.677045 14.729402C719.40085-12.162732 694.857143-1.242789 694.857143 39.423605L694.857143 149.056976C319.383998 142.691259 146.285714 346.223358 146.285714 551.179743 146.285714 551.179743 202.152554 405.014579 694.857143 405.014565Z"  ></path></symbol><symbol id="icon-like1" viewBox="0 0 1024 1024"><path d="M300 415.136V936h477.916c25.815 0 41.979-5.525 51.808-14.617 6.238-6.125 9.602-13.574 10.735-20.38l0.438-2.633 92.314-402.165 0.176-0.712c5.816-23.53 1.843-43.53-10.447-59.143-9.517-11.702-32.017-21.182-59.61-21.182H546.349l72.213-130.586c7.856-14.206 15.912-31.605 23.947-53.053 10.618-28.344 20.148-61.09 28.115-98.645 0.036-0.32-0.053-0.518-0.461-1.612-1.324-3.544-4.218-8.523-9.47-15.814C644.654 97.161 623.467 88 594.813 88c-18.135 0-28.537 4.288-37.618 12.874-8.405 7.946-14.718 17.855-25.561 39.254l-5.634 11.118-5.344 5.732c-0.433 0.72-0.918 1.551-1.444 2.474-1.787 3.135-7.986 14.904-10.1 18.652l0.01 0.006c-25.204 43.028-36.934 62.463-52.366 85.841-21.447 32.49-42.12 59.384-64.482 82.682-28.251 29.434-58.872 52.508-92.273 68.503z m-88 24.668c-9.61 0.98-19.418 1.476-29.43 1.476H97.667c-6.617 0-8.667 2.052-8.667 8.768v477.696c0 6.207 2.054 8.256 8.667 8.256H212V439.804z m483.57-112.636h167.76c53.193 0 101.27 20.48 128.379 54.272 29.665 37.376 39.382 85.504 27.107 135.168l-91.552 398.848c-2.557 15.36-10.74 44.544-36.826 69.632-27.107 25.6-64.956 38.912-112.522 38.912H97.667C42.429 1024 1 982.528 1 927.744V450.048c0-55.296 41.429-96.768 96.667-96.768h84.903c121.729 0 184.64-107.008 250.618-219.648 1.535-2.56 12.787-25.6 19.947-33.28C471.037 65.024 504.282 0 594.811 0c55.239 0 101.782 20.992 135.027 60.928 17.39 23.552 34.268 52.224 27.108 89.088-7.304 34.634-15.547 64.206-23.833 89.152l-37.543 88z"  ></path></symbol></svg>',i=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(i&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var o=function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()};document.addEventListener("DOMContentLoaded",o,!1)}else document.attachEvent&&(s=t,a=e.document,n=!1,(r=function(){try{a.documentElement.doScroll("left")}catch(t){return void setTimeout(r,50)}i()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,i())});function i(){n||(n=!0,s())}var s,a,n,r}((function(){var e,t,i,s,a,n;(e=document.createElement("div")).innerHTML=o,o=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",i=t,(s=document.body).firstChild?(a=i,(n=s.firstChild).parentNode.insertBefore(a,n)):s.appendChild(i))}))}(window)},ef2a:function(e,t,o){"use strict";o("59d4")}});
//# sourceMappingURL=app.63f79557.js.map