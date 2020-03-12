<template>
<div class="container">
  <!-- <h2>发票</h2> -->
   <el-row>
  <el-col :span="24">
    <div class="grid-content grid-invoice grid-position"><span class="inv">发票</span></div>
    </el-col>
  <el-col :span="24">
    <div class="grid-content grid-decorate grid-position grid-inv">
      <span class="inv">INVOICE</span>
    </div>
    </el-col>
</el-row>
<el-row>
  <el-col :span="16"><div class="grid-content">ChuangSheng Magnet(HangZhou)Co.,Ltd</div></el-col>
  <el-col :span="2"><div class="grid-content">Invoice No.</div></el-col>
  <el-col :span="6"><div class="grid-content grid-right">{{$store.state.form.date}}</div></el-col>
  <el-col :span="16"><div class="grid-content">No.489 Jianduan Road,Tonglu county</div></el-col>
  <el-col :span="2"><div class="grid-content">Sales No.</div></el-col>
  <el-col :span="6"><div class="grid-content">{{$store.state.form.invoice}}</div></el-col>
</el-row>
<el-row>
 <el-col :span="2"><div class="grid-content ">To:</div></el-col>
 <el-col :span="22"><div class="grid-content ">CIBAS S.R.L</div></el-col>
 <el-col :span="2"><div class="grid-content "></div></el-col>
 <el-col :span="22"><div class="grid-content ">VIA BISCEGLIE 91/7 </div></el-col>
 <el-col :span="2"><div class="grid-content "></div></el-col>
 <el-col :span="22"><div class="grid-content "> 20152 MILANO   ITALY</div></el-col>
</el-row>
<el-row class="no-margin">
  <el-col :span="4"><div class="grid-content">承运轮名</div></el-col>
  <el-col :span="20"><div class="grid-content">至</div></el-col>
  <el-col :span="4"><div class="grid-content">Shipped Pers.s</div></el-col>
  <el-col :span="4"><div class="grid-content">SHANGHAI</div></el-col>
  <el-col :span="8"><div class="grid-content">to</div></el-col>
  <el-col :span="8"><div class="grid-content">MILANO</div></el-col>
  <el-col :span="24"><div class="grid-content">开证银行</div></el-col>
  <el-col :span="24"><div class="grid-content">Drawn Under</div></el-col>
  <el-col :span="24"><div class="grid-content">信用证号码</div></el-col>
  <el-col :span="24"><div class="grid-content">L/C No.</div></el-col>
</el-row>
<hr>
<!-- <div class="hr-header"></div> -->
<el-row class="row-head">
  <el-col :span="8" class="mk-row1"><div class="grid-content">唛头及包/箱号</div></el-col>
  <el-col :span="4"><div class="grid-content grid-body-right">数  量  与  货  品  名  称</div></el-col>
  <el-col :span="12"><div class="grid-content grid-body-right">金 额</div></el-col>
  <el-col :span="6" class="mk-row2"><div class="grid-content">MARKS & NUMBERS</div></el-col>
  <el-col :span="10">
    <div class="grid-content grid-qty">QUANTITY AND DESCRIPTIONS</div>
    </el-col>
  <el-col :span="8"><div class="grid-content grid-amount">AMOUNT</div></el-col>
</el-row>
<hr>
<el-row>
  <el-col :span="16"><div class="grid-content"></div></el-col>
  <el-col :span="8"><div class="grid-content">FOB SHANGHAI</div></el-col>
</el-row>
<el-row>
  <el-col :span="2"><div class="grid-content">N/M</div></el-col>
  <el-col :span="2"><div class="grid-content">MAGNETS</div></el-col>
  <el-col :span="2"><div class="grid-content">（磁钢）</div></el-col>
  <el-col :span="6">
    <div class="grid-content grid-body-right">{{$store.state.form.pcs}} PCS</div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content grid-body-right">USD{{$store.state.form.unitPrice}}/PC</div>
    </el-col>
  <el-col :span="6">
    <div class="grid-content grid-usd">USD{{$store.state.form.amount}}</div>
    </el-col>
</el-row>
<hr>
<el-row>
  <!-- <el-col :span="2"><div class="grid-content"></div></el-col> -->
  <el-col :span="4"><div class="grid-content"></div></el-col>
  <el-col :span="2"><div class="grid-content">TOTAL:</div></el-col>
  <el-col :span="6">
    <div class="grid-content grid-body-right">{{$store.state.form.pcs}} PCS</div>
    </el-col>
  <el-col :span="6"><div class="grid-content grid-body-right"></div></el-col>
  <el-col :span="6"><div class="grid-content ">USD{{$store.state.form.amount}}</div></el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: 'Invoice',
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
  font-size: 26px;
  letter-spacing: 6px;
  font-weight: bold;
}
.grid-inv {
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: bold;
}
.grid-right{
  text-align: left;
}
.grid-body-right{
  text-align: center;
}
.grid-amount{
  text-indent: 66px;
}
.grid-qty{
  text-indent: 100px;
}

</style>
