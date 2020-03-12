<template>
  <div class="form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="发票号">
        <el-input v-model="form.invoice"></el-input>
      </el-form-item>
      <el-form-item label="日期号">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="箱数">
        <el-input v-model="form.ctns"></el-input>
      </el-form-item>
      <el-form-item label="毛重">
        <el-input v-model.number="form.gw"></el-input>
      </el-form-item>
      <el-form-item label="净重">
        <el-input v-model.number="form.nw"></el-input>
      </el-form-item>
      <el-form-item label="体积">
        <el-input v-model="form.volume"></el-input>
      </el-form-item>
      <el-form-item label="只数">
        <el-input v-model="form.pcs"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="form.unitPrice"></el-input>
      </el-form-item>
      <el-form-item label="总额">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btns">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <!-- <el-dropdown size="small" split-button type="primary">
            打印资料
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>报关单</el-dropdown-item>
              <el-dropdown-item @click="jumpInvoice">发票</el-dropdown-item>
              <el-dropdown-item>装箱</el-dropdown-item>
              <el-dropdown-item>申报要素</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </div>
        <!-- <el-button @click="saveData">储存</el-button> -->
      </el-form-item>
    </el-form>
    <el-row>
  <el-button type="info" size="mini" round @click="jumpInvoice">发票</el-button>
  <el-button type="info" size="mini" round @click="jumpPacking">装箱</el-button>
  <el-button type="info" size="mini" round @click="jumpHScode">申报要素</el-button>
  <el-button type="info" size="mini" round @click="jumpCustoms">报关单</el-button>
</el-row>

    <!-- <div>{{$store.state.form}}</div> -->
  </div>
</template>


<script>
// import FormView from '../components/form.vue';

export default {
  name: 'Home',
  // data() {
  //   return {
  //     links: ['发票号', '日期', '箱数', '毛重', '净重', '体积', '单价', '总金额'],
  //   };
  // },
  data() {
    return {
      form: {
        invoice: '',
        ctns: '',
        date: '',
        gw: null,
        nw: null,
        pcs: '',
        unitPrice: '',
        amount: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit('setCustomsData', this.form);
      console.log(this.form);
    },
    // goCustoms() {
    //   this.$router.push('/invoice');
    // },
    jumpInvoice() {
      this.$router.push('/invoice');
    },
    jumpPacking() {
      this.$router.push('/packing');
    },
    jumpHScode() {
      this.$router.push('/hscode');
    },
    jumpCustoms() {
      this.$router.push('/customs');
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 300px;
}

</style>
