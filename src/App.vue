<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  position: fixed;
  top: 0; left: 0;
}
.m-notify{background: rgba(244, 67,54, .9); font-size: 0.28rem;}
.m-notify:after{
  content: '';
  position:absolute;
  bottom:0.08rem;
  display: block;
  left:50%;
  transform:translate3d(-50%,0,0);
  width:0.7rem;height:0.08rem;border-radius:0.1rem;background:#fff;opacity:.9;
}
.cell-right{text-align: left; padding-left:0.24rem;}
.m-cell:after{display: none;}
.cell-item:not(:last-child):after{display: none;}
.cell-left{width: 1.2rem;text-align: right; overflow: hidden;}
.cell-left .cell-icon{display: none;}
.cell-left span{width: 100%; display:block;text-align: right;}
.cell-right input[type=date], .cell-right input[type=datetime-local], .cell-right input[type=email], .cell-right input[type=number], .cell-right input[type=password], .cell-right input[type=tel], .cell-right input[type=text]:not(.spinner-input), .cell-right input[type=time], .cell-right input[type=url],.cell-arrow select{
  height: 0.8rem;
  line-height: 0.76rem;
  margin-top: 0.1rem;
  background: #F9F9F9;
  border: 0.02rem solid #E9E9E9;
  border-radius: 2px;
  text-indent: 0.16rem;
}
.cell-arrow{ position: relative;}
.cell-arrow select{
  width: 4rem;
  margin:0;
  box-sizing: border-box;
  top:0;
  left: 0;
}
.cell-arrow:after{
  margin: 0;
  position: absolute;
  right: 0.4rem;
  transform:rotate(90deg);
}
</style>
