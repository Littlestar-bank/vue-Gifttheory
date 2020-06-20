<template>
  <div>
 <!-- <top :datalsit="list"></top> -->
 <top @aa="getll($event)"></top>
    <el-table :data="datalist" style="width: 100%">
      <el-table-column prop="updatetime" label="日期" width="180">
        <template slot-scope="scope">
         <div>
            <h1>{{scope.row.updatetime}}</h1>
         </div>
       </template>
      </el-table-column>
      <el-table-column prop="unixtime" label="姓名" width="180"></el-table-column>
      <el-table-column prop="content" label="地址"></el-table-column>
      
    </el-table>
 
 <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>
<script>
import top from './top'
export default {
  components:{
         top
  },
  data() {
    return {
      datalist: [],
      currentPage: 1,
      pagesize:10,
      total:100,
       list:[
          {
              name:"lisi"
          },
           {
              name:"lisi"
          },
           {
              name:"lisi"
          }
      ]
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
   getll(el) {
        console.log(el) 
   }
    ,
    getdata() {
      this.$axios
        .get("/juhe/joke/content/list.php", {
          params: {
            // key: "6e7e3e6f79db371b726648d8b8f99651",
            sort: "asc",
            page: this.currentPage,
            pagesize: this.pagesize,
            time: "1418745237"
          }
        })
        .then(res => {
          console.log(res);
          this.datalist = res.data.result.data;
        });
    },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        //  this.$axios
        // .get("/juhe/joke/content/list.php", {
        //   params: {
        //     key: "6e7e3e6f79db371b726648d8b8f99651",
        //     sort: "asc",
        //     page: this.currentPage,
        //     pagesize: this.pagesize,
        //     time: "1418745237"
        //   }
        // })
        // .then(res => {
        //   console.log(res);
        //   this.datalist = res.data.result.data;
        // });
        if(this.currentPage!=null || this.currentPage!=undefined) {
                     this.getdata()
        }
      }
  }
};
</script>