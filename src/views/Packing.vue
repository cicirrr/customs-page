<template>
<div class="container">
  <!-- <h2>发票</h2> -->
   <el-row>
  <el-col :span="24">
    <div class="grid-content grid-position grid-invoice">
      <span class="inv">装箱单</span>
    </div>
    </el-col>
  <el-col :span="24">
    <div class="grid-content grid-position grid-inv">
      <span class="inv">PACKING LIST</span>
      </div>
    </el-col>
</el-row>
<div class="hr20"></div>
<el-row>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">发票号码</div></el-col>
  <el-col :span="6"><div class="grid-content grid-right">{{$store.state.form.date}}</div></el-col>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">Invoice No.</div></el-col>
  <el-col :span="6"><div class="grid-content">{{$store.state.form.invoice}}</div></el-col>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">日期</div></el-col>
  <el-col :span="6"><div class="grid-content">{{today}}</div></el-col>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">Date</div></el-col>
  <el-col :span="6"><div class="grid-content">{{today}}</div></el-col>
</el-row>
<div class="hr50"></div>
<el-row class="row-head">
  <el-col :span="4" class="mk-row1"><div class="grid-content">唛头及包/箱号</div></el-col>
  <el-col :span="7"><div class="grid-content grid-indent">品   名</div></el-col>
  <el-col :span="3"><div class="grid-content">件   数</div></el-col>
  <el-col :span="2"><div class="grid-content grid-center">体   积</div></el-col>
  <el-col :span="2"><div class="grid-content grid-center">毛 重</div></el-col>
  <el-col :span="2"><div class="grid-content grid-center">净 重</div></el-col>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">Gross Weight</div></el-col>
  <el-col :span="6"><div class="grid-content grid-indent-c">Net Weight</div></el-col>
  <el-col :span="4" class="mk-row2"><div class="grid-content">MARKS & No.s</div></el-col>
  <el-col :span="7"><div class="grid-content grid-indent-de">Description</div></el-col>
  <el-col :span="3"><div class="grid-content">Packages</div></el-col>
  <el-col :span="2"><div class="grid-content grid-center">Meas.(CBM)</div></el-col>
  <el-col :span="2"><div class="grid-content grid-indent-c gw">（公斤）Kgs</div></el-col>
  <el-col :span="4"><div class="grid-content nw">（公斤）Kgs</div></el-col>
</el-row>
<div class="hr50"></div>
<el-row>
  <el-col :span="3"><div class="grid-content grid-center">N/M</div></el-col>
  <el-col :span="5"><div class="grid-content grid-center">MAGNETS （磁钢）</div></el-col>
  <el-col :span="6"><div class="grid-content ">{{$store.state.form.pcs}} PCS</div></el-col>
  <el-col :span="2">
    <div class="grid-content grid-indent-c">{{$store.state.form.volume}}CBM</div>
    </el-col>
  <el-col :span="2">
    <div class="grid-content grid-usd grid-indent-c">{{$store.state.form.gw}}.00KGS</div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content grid-usd grid-indent-c">{{$store.state.form.nw}}.00KGS</div>
    </el-col>
</el-row>
<hr>
<el-row>
  <!-- <el-col :span="2"><div class="grid-content"></div></el-col> -->
  <el-col :span="4"><div class="grid-content"></div></el-col>
  <el-col :span="4"><div class="grid-content">TOTAL:</div></el-col>
  <el-col :span="6"><div class="grid-content">67200 PCS</div></el-col>
  <el-col :span="2">
    <div class="grid-content grid-indent-c">{{$store.state.form.volume}}CBM</div>
    </el-col>
  <el-col :span="2">
    <div class="grid-content grid-indent-c">{{$store.state.form.gw}}.00KGS</div>
    </el-col>
  <el-col :span="4">
    <div class="grid-content grid-indent-c">{{$store.state.form.nw}}.00KGS</div>
    </el-col>
</el-row>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
// import { formatDate } from '../utils/utils.js';

export default {
  name: 'Packing',
  // data() {
  //   return {
  //     today: '',
  //   };
  // },
  computed: {
    today() {
      const today = new Date();
      // formatDate.getToday();
      const year = today.getFullYear();
      const m = today.getMonth() + 1;
      const month = m >= 10 ? m : `0${m}`;
      const d = today.getDate();
      const day = d >= 10 ? d : `0${d}`;
      return `${year}-${month}-${day}`;
    },
  },
  // created() {
  //   const today = Date.now();
  //   console.log(today);
  // },
};
</script>

<style lang="scss">
@import url("../assets/css/common.css");
.container {
  margin: 20px auto;
  padding: 10px;
}
.row-head{
  margin-top: 20px;
}
.mk-row1{
  padding-left: 40px;
}
.mk-row2{
  padding-left: 38px;
}
.hr20{
  height: 20px;
}
.hr50{
  height: 50px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &.no-margin{
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.grid-position {
  // text-align: center;
  display: flex;
  justify-content: center;
  .inv{
    margin-left: -200px;
  }
}
.grid-decorate {
  text-decoration: underline;
}
.grid-invoice {
  font-size: 20px;
  letter-spacing: 6px;
  font-weight: bold;
}
.grid-indent{
  text-indent: 20px;
  letter-spacing: 6px;
}
.grid-indent-de{
  text-indent: 12px;
}
.grid-indent-c{
  text-indent: 20px;
  &.gw{
    text-indent: 10px;
  }
}
.nw{
  text-indent: 10px;
}
.grid-inv {
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: bold;
}
.grid-right{
  text-align: left;
}
.grid-center{
  text-align: center;
}
.grid-amount{
  text-indent: 66px;
}
.grid-qty{
  text-indent: 100px;
}

</style>
