<template>
<div class="container">
  <h2>申报要素</h2>
  <p>我司发票号CS2020030201报关委托书号为：00100483858</p>
  <table>
    <thead>
      <tr>
        <th>商品编码：85051110</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of list" :key="index">
        <td>{{item}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'HScode',
  data() {
    return {
      list: [
        '商品描述：稀土永磁体',
        '申报要素：',
        '1、品名：磁钢 ',
        '2、用途：仪表零件',
        '3、品牌类型：无品牌',
        '4、材质：钕铁硼',
        '5、型号：无',
        '6.具体成分：钕30%，铁65%，硼5%',
        '7、出口享惠情况：不确定',
        '8.NO Restricted',
        '  创胜磁业（杭州）有限公司',
        '2020-03-02',
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 20px auto;
  padding: 10px;
}
</style>
