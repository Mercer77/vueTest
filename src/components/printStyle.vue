<template>
  <div class="main-content">
    <div ref="printImgContent" class="printImg-content">
      <div ref="printImgTable" class="print-table">
        <div class="code-content">
          <img :src="qrcodeSrc" alt="" class="qrcode">
          <img  id="barcode" class="barcode">
        </div>
        <h3>浙江七星纺织有限公司</h3>
        <table border="1">
          <tr>
            <td colspan="5">织轴传票</td>
          </tr>
          <tr>
            <td>品名</td>
            <td colspan="2">SA41436Q</td>
            <td>完成日期</td>
            <td>2020-08-21</td>
          </tr>
          <tr >
            <td rowspan="3">浆纱</td>
            <td>班别</td>
            <td>A班</td>
            <td>纱支</td>
            <td>天虹023</td>
          </tr>
          <tr >
            <td>轴号</td>
            <td>2303</td>
            <td>落轴次数</td>
            <td></td>
          </tr>
          <tr >
            <td>轴号</td>
            <td>2303</td>
            <td>落轴次数</td>
            <td></td>
          </tr>
        </table>
      </div>
      <el-button @click="printImg">打印</el-button>
    </div>
    <div class="print-content">
      <div ref="" ID="printTable" class="print-table">
        <h3 style="text-align: center">浙江七星纺织有限公司</h3>
        <table border="1" style="text-align: center;width: 100%;height: auto">
          <tr>
            <td colspan="5">织轴传票</td>
          </tr>
          <tr>
            <td>品名</td>
            <td colspan="2">SA41436Q</td>
            <td>完成日期</td>
            <td>2020-08-21</td>
          </tr>
          <tr >
            <td rowspan="3">浆纱</td>
            <td>班别</td>
            <td>A班</td>
            <td>纱支</td>
            <td>天虹023</td>
          </tr>
          <tr >
            <td>轴号</td>
            <td>2303</td>
            <td>落轴次数</td>
            <td></td>
          </tr>
          <tr >
            <td>轴号</td>
            <td>2303</td>
            <td>落轴次数</td>
            <td></td>
          </tr>
        </table>
      </div>
      <el-button @click="print">打印</el-button>
    </div>
  </div>
</template>

<script>
  // import JsBarcode from 'jsbarcode'
  // import jrQrcode from "jr-qrcode"
  // import {getLodop} from '../../static/js/LodopFuncs'
  // import html2canvas from "html2canvas"
   var LODOP;
    export default {
        name: "printStyle",

      data(){
          return{
            qrcodeSrc:'',
            dataURL:'',
          }
      },
      methods:{
          printImg(){
            LODOP=getLodop();
            let dataUrl;
            html2canvas(this.$refs.printImgContent).then(canvas => {
              this.dataURL = canvas.toDataURL("image/png");
              this.$nextTick(()=>{
                // dataUrl = this.dataURL;
                console.log(dataUrl);
                LODOP.PRINT_INIT("测试打印图片");
                // LODOP.PRINT_SETUP();
                LODOP.ADD_PRINT_IMAGE(0,0,"100%","100%",this.dataURL);
                // LODOP.SET_PRINT_STYLEA(0,"Horient",2);
                LODOP.SET_PRINT_STYLEA(0,"Stretch",1);//(可变形)扩展缩放模式
                // LODOP.PRINT_DESIGN();
                // LODOP.PREVIEW();
                LODOP.PRINT_SETUP();
              });
            });

          },
        print(){
          LODOP = getLodop();
          LODOP.PRINT_INITA(0,0,800,1024,"测试打印");
          // LODOP.SET_PRINT_PAGESIZE(0, 800, 630, '');
          LODOP.ADD_PRINT_HTM(0, 0, 500, 600, document.getElementById('printTable').innerHTML);
          //打印二维码
          LODOP.ADD_PRINT_BARCODE(5, 10, 60, 60, "QRCode", "FJP232340204302303");
          //打印条形码
          LODOP.ADD_PRINT_BARCODE(5, 70, 223, 35, "128Auto", "FJP232340204302303");
          //打印表格
          // LODOP.PREVIEW();
          // LODOP.PRINT_DESIGN();
          LODOP.PRINT_SETUP();
        },
          jsBarcode(){
            JsBarcode("#barcode", "FJP232340204302303", {
              // format: "pharmacode",  //条形码的格式
              lineColor: "#3b3b3b",  //线条颜色
              width:4, //线宽
              fontSize:40,
              fontOptions:"bold",
              height:60,  //条码高度
              displayValue: true //是否显示文字信息
            });
          },
        jrCode(){
          let options = {
            padding       : 5,   // 二维码四边空白（默认为10px）
            width         : 256,  // 二维码图片宽度（默认为256px）
            height        : 256,  // 二维码图片高度（默认为256px）
            correctLevel  : QRErrorCorrectLevel.H,    // 二维码容错level（默认为高）
            reverse       : false,        // 反色二维码，二维码颜色为上层容器的背景颜色
            background    : "#ffffff",    // 二维码背景颜色（默认白色）
            foreground    : "#000000"     // 二维码颜色（默认黑色）
          };
          this.qrcodeSrc = jrQrcode.getQrBase64("FJP232340204302303", options);  //options为配置对象，支持以下配置参数：
        },

      },
      mounted() {
        this.jsBarcode();
        this.jrCode();
      }
    }
</script>

<style lang="scss" scoped>
  $border:1px solid green;
  .main-content{
    font-size: 0.2rem !important;
    display: flex;
    width: 100vw;
    height: 100vh;
    .printImg-content{
      text-align: center;
      border: $border;
      width: 50vw;
      padding: 10px 10px;
      flex: 1;
      .code-content{
        display: flex;
        height: 10vh;
        .barcode{
          flex: 1;
          background-size: 100% 100%;
          width: 10rem;

        }
        .qrcode{
          flex: 1;
          width: 1rem;
          height: 1rem;
          background-size: 100% 100%;
        }
      }
    }
    .print-table{
      text-align: center;
      table{
        width: 100%;
        text-align: center;
      }
      h3{
        text-align: center;
      }
    }
    .print-content{
      border: $border;
      flex: 1;
    }
  }

</style>
