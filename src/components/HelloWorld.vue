<template>
    <div>
     <!-- <vxe-table
        ref="xTable"
        border
        resizable
        show-overflow
        :loading="loading"
        :data="tableData"
        :edit-config="{trigger: 'manual', mode: 'row'}">
        <vxe-table-column field="role" title="Role" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
        <vxe-table-column field="name" title="Name" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
        <vxe-table-column title="操作" width="160">
          <template slot-scope="scope">
            <template v-if="$refs.xTable.isActiveByRow(scope.row)">
              <vxe-button @click="saveRowEvent(scope.row)">保存</vxe-button>
              <vxe-button @click="cancelRowEvent(scope.row)">取消</vxe-button>
            </template>
            <template v-else>
              <vxe-button @click="editRowEvent(scope.row)">编辑</vxe-button>
            </template>
          </template>
        </vxe-table-column>
      </vxe-table>-->
      <div class="main">
        <div class="header"></div>
        <div class="content">
        <!--  <el-row :gutter="10">
            <el-col :span="8" class="container"><span>麻前程</span></el-col>
            <el-col :span="8" class="container"><span>麻前程</span></el-col>
            <el-col :span="8" class="container"><span>麻前程</span></el-col>
          </el-row>-->
          <div class="container">Mercer</div>
          <div class="container">Mercer</div>
          <div class="container">Mercer</div>
          <div class="flow-container">
            <transition-group tag="div" class="flow-bar" name="uls">
              <div v-for="(item,index) in listData"  v-bind:key="item.date">
                {{item.title}}
              </div>
            </transition-group>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false,
      num:0,
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '1'
      }, {
        'title': '无缝滚动第二行无缝滚动第二行',
        'date': '2'
      }, {
        'title': '无缝滚动第三行无缝滚动第三行',
        'date': '3'
      }, {
        'title': '无缝滚动第四行无缝滚动第四行',
        'date': '4'
      }, {
        'title': '无缝滚动第五行无缝滚动第五行',
        'date': '5'
      }, {
        'title': '无缝滚动第六行无缝滚动第六行',
        'date': '6'
      }, {
        'title': '无缝滚动第七行无缝滚动第七行',
        'date': '7'
      }, {
        'title': '无缝滚动第八行无缝滚动第八行',
        'date': '8'
      }, {
        'title': '无缝滚动第九行无缝滚动第九行',
        'date': '2017-12-16'
      }],
    tableData: [
        {
          "role":"3",
          "name":"4",
        }],
      sexList: []
    }
    },
  created(){

  },
  methods:{

    play(){
      this.listData.push(this.listData.shift());
    },
    editRowEvent (row) {
      alert("sd ");
      this.$refs.xTable.setActiveRow(row);
    },
    saveRowEvent (row) {
      this.$refs.xTable.clearActived().then(() => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$XModal.message({ message: '保存成功！', status: 'success' })
        }, 300)
      })
    },
    cancelRowEvent (row) {
      const xTable = this.$refs.xTable;
      xTable.clearActived().then(() => {
        // 还原行数据
        xTable.revertData(row)
      })
    },
    refreshList: function () {
      const timer = setInterval(()=>{
        this.play();
      },3000);
      this.$once('hook:beforeDestroy',()=>{
        clearInterval(timer);
      })
    },

    async getTest(){
      let ids = ['10000022','10000020','10000021'];
      let results = [];
      for (let i = 0;i<ids.length;i++){
       await this.axios({
          url: "http://106.12.219.66:8227/report/getSimpleReport",
          method:'post',
          headers: {
            'Content-Type': 'application/json',
            'companyId': '0'
          },
          data:{
            tableName:'company',
            query:{id:ids[i]}
          }
        }).then(response=>{
            results.push(response.data.data);
        })
      }
      console.log(results[0]);


    },

  },
  mounted(){
    this.getTest();
    this.refreshList();
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css" lang="scss">
  $font-size:0.5rem;

  .main{
    width: 100vw;
    height: 100vh;
    text-align: center;
    .header{
      background-color: red;
      height: 20vh;
    }
    .content{
      display: flex;
      flex-wrap: wrap;
      width: 90vw;
      margin: 0 auto;
      padding: auto 0;
      background-color: gray;
      height: 60vh;
      .container{
        font-family: 'let';
        flex: 1;
        border: 1px solid lightgreen;
        span{
          color: white;
          font-size: 0.5rem;
        }
      }
      .flow-container{
        width: 100%;
        border: 1px solid lightgreen;
        overflow-y: scroll;
        height: 40vh;
        .flow-bar{
          height: 10vh;
        }
      }
    }
    .footer{
      height: 20vh;
      background-color: green;
    }
    .font{
      font-size: $font-size;
    }
    .uls-move {
      transition: transform 3s;

    }
    .uls-enter, .uls-leave-to
    {
      opacity: 0;
      transform: translateY(30px);
    }
    .uls-enter-active,
    .uls-leave-active{
      transition: all 0.6s ease;
    }
    .uls-leave-active {
      /* 主要是这段，不加绝对定位就不会触发enter\leave的动画效果 */
      position: absolute;
    }



  }
</style>
