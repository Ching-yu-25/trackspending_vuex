<template>
  <div id="app">
    <div class="fixed-btns">
      <router-link class="staticBtn" to="/Statistics/" v-if="nowPage!='Statistics'"> <font-awesome-icon icon="chart-bar" /></router-link>
      <router-link class="planBtn" to="/Plan/" v-if="nowPage!='Plan'"><font-awesome-icon icon="file-invoice-dollar" /></router-link>
      <router-link class="HomeBtn" to="/"  v-if="nowPage!='Home'"> <font-awesome-icon icon="home" /></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default{
  name:"Home",
  data(){
    return{
      nowPage:'Home',
    }
  },
  mounted() {
    this.nowPage = this.$route.name;
  },
  watch:{
    '$route.name'(newName){
      this.nowPage = newName
    }
  }
}
</script>

<style lang="scss">
/*全局共用放這*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/*-------------------*/
* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
li {
  padding: 0;
  margin: 0;
}

ul,
ol,
li {
  list-style: none;
}

body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, '微軟正黑體';
  background: $mlgrn url('./assets/images/bg_line.png');
  color: $mblack;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
}

.row {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width:767px){
    flex-direction: column;
  }
}

.top-row,
.bottom-row {
  display: flex;
  justify-content: space-between;
  margin: .5rem auto;
}

.btn {
  border: none;
  padding: .25rem .5rem;
  border-radius: .25rem;
  margin: 0 .25rem;
  color: white;
  cursor: pointer;
}
.bg-black {
  background: $mblack;
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    transition: all .5s;
    background: rgb(27, 27, 27);
  }
  &.active{
    color: $mblack;
    background-color:transparent;
    border:1px solid $mblack;
    transition: all .5s;
  }
}
.bg-blue {
  background: rgb(53, 142, 214);
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    transition: all .5s;
    background: rgb(32, 99, 155);
  }
  &.active{
    color: rgb(53, 142, 214);
    background-color:transparent;
    border:1px solid rgb(53, 142, 214);
    transition: all .5s;
  }
}

.bg-red {
  background: $mred;
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    background:#bb1b3e;
    transition: all .5s;
  }
  &.active{
    color: $mred;
    background-color:transparent;
    border:1px solid $mred;
    transition: all .5s;
  }
}

.bg-grn {
  background: $mgrn;
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    background:#117e6f;
    transition: all .5s;
  }
  &.active{
    color: $mgrn;
    background-color:transparent;
    border:1px solid $mgrn;
    transition: all .5s;
  }
}

.bg-yel {
  background: $myel;
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    background:#c7923d;
    transition: all .5s;
  }
  &.active{
    color: $myel;
    background-color:transparent;
    border:1px solid $myel;
    transition: all .5s;
  }
}

.bg-pink {
  background: rgb(236, 133, 150);
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    background:rgb(190, 96, 112);
    transition: all .5s;
  }
  &.active{
    color: rgb(236, 133, 150);
    background-color:transparent;
    border:1px solid rgb(236, 133, 150);
    transition: all .5s;
  }
}

.bg-gray {
  background: $mgray;
  transition: all .5s;
  border:1px solid transparent;
  &:hover{
    background:#517077;
    transition: all .5s;
  }
  &.active{
    color: $mgray;
    background-color:transparent;
    border:1px solid $mgray;
    transition: all .5s;
  }
}

.text-center {
  text-align: center;
}

.text-start {
  text-align: left;
}

.text-end {
  text-align: right;
}

input,textarea {
  padding: .25rem .5rem;
  border: none;
  border-bottom: 1px solid $mgray;

  &[type="radio"] {
    display: none !important;
  }
}

.lightbox-wrapper {
  background: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.lightbox {
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1rem;
  padding: 0 0 1rem;
  
  .lightbox-header {
    background: $mblack;
    color: white;
    border-radius: 1rem 1rem 0 0;
    padding: .5rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .btn-close {
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background: transparent;
    border: none;
    transition: transform .5s;
    &:hover{
      transform:scale(.9);
      transition: transform .5s;
    }
  }

  >.row {
    width: 70%;
    margin: 1rem auto;
    text-align: left;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    label {
      display: inline-block;
      flex-grow: 0;
      margin-right: 1rem;
      @media screen and (max-width:767px){
        margin-bottom: .25rem;
      }
    }

    input,textarea {
      display: block;
      flex-grow: 2;
    }
  }
}
.img-fluid{
  max-width: 100%;
}
.type-row{
  >div{
    display: inline-block;
  }
}
.type-btn{
  display:inline-block;
  padding:.25rem .5rem;
  margin:0 .25rem;
  border-radius: 2rem;
  color:white;
  cursor: pointer;
}

.fixed-btns{
  position:fixed;
  bottom: 5%;
  right:5%;
  max-width:50px;
  z-index:99;
  >a{
    display: inline-block;
    width:50px;
    height:50px;
    background: $mblack;
    color:$mlgray;
    border-radius: 5rem;
    font-size: 2rem;
    line-height: 50px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.25);
    transition: background .5s;
    cursor: pointer;
    margin-bottom:.5rem;
    &:hover{
      background: $mred;
      transition: background .5s;
    }
  }
}
.alert-text{
  color:$mred;
}
.required-item{
  &::before{
    content:'*';
    color: $mred;
    margin-left:-.5rem;
  }
}
</style>
