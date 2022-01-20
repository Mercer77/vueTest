<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
      <button type="button" onclick="printJS({printable:'/api', type:'pdf', showModal:true})">打印fine报表</button>
      <!-- <a @click="downloadFile('http://localhost:8075/webroot/decision/view/report?viewlet=GettingStarted.cpt', 'ss.pdf')">下载</a> -->
      <button @click="dy()">打印dy方法</button>
      <!-- <button type="button" onclick="printJS({ printable: '../../static/test-01.jpg', type: 'image', header: '这是标题内容' })">打印img</button> -->
      <button type="button" onclick="printJS({printable:require('../assets/pdf/test.pdf'),type: 'pdf'})">打印静态pdf</button>
      <button type="button" onclick="window.open(require('../../static/GettingStarted.xlsx'))">导出[Excel]</button>
      <button type="button" onclick="window.open('../../static/GettingStarted.doc')">导出[Word]</button>
      <!-- <button type="button" onclick="window.open('../../static/test-01.jpg')">导出[图片]</button> -->
      <button type="button" onclick="window.open('http://localhost:8075/webroot/decision/view/report?viewlet=GettingStarted.cpt&format=pdf&extype=simple')">导出[Pdf]</button>
    </ul>
    <!-- <div class="Print">
      <button class="print-btn" @click="btnClickPrint">
      <span>{{msg}}</span>
    </div> -->
    <!-- <div class="wrapper">
      <div class="wrapper_title">使用vue-qr生成二维码</div>
      <div class="wrapper_vueQr">
        <vue-qr  :text="message" :logoScale="50" :size="200" :margin="0"></vue-qr>
      </div>
    </div> -->
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  import print from 'print-js'

// import getLodop  from '../../static/LodopFuncs.js'
// import VueQr from 'vue-qr'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'zhangsan',
      // logoUrl: ''
    }
    
  },
  // components: { VueQr },
  methods:{
    // btnClickPrint () {
    //   let LODOP = getLodop()//调用getLodop获取LODOP对象
    //   LODOP.PRINT_INIT("")
    //   LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "打印内容")
    //   LODOP.PREVIEW()
    // },
    // downloadFile(url, fileName) {
    //     var x = new XMLHttpRequest();
    //     x.open("GET", url, true);
    //     x.responseType = 'blob';
    //     x.onload=function(e) {
    //         var url = window.URL.createObjectURL(x.response)
    //         var a = document.createElement('a');
    //         a.href = url
    //         a.download = fileName;
    //         a.click()
    //     }
    //     x.send();
    // },
    dy () {
      var  url="http://localhost:8075/webroot/decision/view/report?viewlet=";  
      url+=document.report.cpt.value;  
      var  isPopUp = true;  
      var  config = {url : url,isPopUp : isPopUp};
      FR.doURLPDFPrint(config)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
