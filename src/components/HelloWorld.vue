<template>
  <div class="hello">
    <div class="container">
      <h1>{{ name }}</h1>
      <img class="random" src="https://picsum.photos/200" />
      <ul>
        <li>不知道主页该放什么了，就随便放一点吧。</li>
        <li>德顺的个人网站，欢迎访问~</li>
      </ul>
      <ul>
        <h3>我的网站</h3>
        <li><a href="https://www.w3h5.com">前端资源分享</a></li>
        <li><a href="https://www.idblog.cn">德顺博客</a></li>
        <li><a href="https://www.52deshun.com">德顺网络</a></li>
      </ul>
      <ul>
        <h3>我的社交媒体</h3>
        <li>微博：<a href="https://weibo.com/2493372337">@无码表情包</a></li>
        <li>GitHub：<a href="https://github.com/ideshun">@ideshun</a></li>
        <li>
          百家号：<a
            href="https://baijiahao.baidu.com/u?app_id=1582878168111795"
            >德顺哥</a
          >
        </li>
        <li>
          联系QQ：<a href="tencent://Message/?Uin=1209278955">1209278955</a>
        </li>
        <li>
          前端交流群：<a href="https://jq.qq.com/?_wv=1027&amp;k=5fIUoFe"
            >133413450</a
          >
        </li>
        <li>扫一扫下方二维码关注我的微信&amp;公众号</li>
        <p class="qrcode">
          <img src="../assets/wxQRCode.webp" alt="" />
          <img src="../assets/mpQRCode.webp" alt="" />
        </p>
      </ul>
      <p class="footer">
        Copyright&nbsp;©&nbsp;{{ time }}&nbsp;<a
          href="//w3h5.com"
          target="_blank"
          >Deshun!</a
        ><span v-if="code">
          &nbsp;<a
            href="https://beian.miit.gov.cn/"
            rel="nofollow"
            target="_blank"
            v-html="`鲁ICP备15019922-${code}号`"
          ></a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
const website = [
  {
    name: "德顺网络传媒",
    title: "爱秒赞(德顺网络传媒)",
    code: "2",
    typeName: "网站",
    regex: /(http(s)?:\/\/)?([\w-]+.)?52deshun.com/,
  },
  {
    name: "小顺说",
    title: "小顺说",
    code: 4,
    typeName: "博客",
    regex: /(http(s)?:\/\/)?([\w-]+.)?ideshun.cn/,
  },
  {
    name: "德顺博客",
    title: "德顺博客",
    code: 6,
    typeName: "网站",
    regex: /(http(s)?:\/\/)?([\w-]+.)?idblog.cn/,
  },
  {
    name: "下载站欢迎页",
    title: "下载站欢迎页",
    code: undefined,
    typeName: "网站",
    regex: /(http(s)?:\/\/)?([\w-]+.)?w3to.dev/,
  },
];
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "Deshun's website",
      time: new Date().getFullYear(),
      code: undefined,
    };
  },
  mounted() {
    let url = window.location.host;
    for (let i of website) {
      if (i.regex.test(url)) {
        this.name = i.name;
        this.code = i.code;
        document.title = `${i.title} - 德顺的个人${i.typeName} (${url})`;
        break;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto 60px;
}

h3 {
  margin: 40px 0 0;
}
.random {
  position: relative;
  border: 1px dashed #888888;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 15px;
  margin-left: 20px;
}
.random::after {
  content: "加载中...";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  color: #000;
  display: block;
  line-height: 36px;
  font-size: 16px;
}
a {
  color: #42b983;
}

ul {
  margin-left: -1em;
  line-height: 2;
  margin-top: 2em;
}

.qrcode {
  margin: 0;
}

.qrcode img {
  width: 150px;
}

.footer {
  width: 60%;
  line-height: 36px;
  position: fixed;
  bottom: 0;
  margin: 0;
  background: #fff;
  border-top: 1px solid #f2f2f2;
  color: #999999;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1280px) {
  .container {
    padding: 0 5%;
  }
}
@media (max-width: 600px) {
  .footer {
    width: 90%;
  }
}
</style>
