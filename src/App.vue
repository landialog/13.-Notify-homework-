<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">vue-router</div>
            <ul class="navbar-list">
              <li class="navbar-item"  v-for="elem in links" :key="elem.title">
                <router-link class="navbar-link" :to="elem.url">{{elem.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  data(){
    return{
      links:
      [
        {
          title:'Home', url:"/"
        },
        {
          title:'Notify', url:"/notify"
        }
      ]
    }
  }
}


</script>

<style lang="scss">

   .navbar-link{
       &.router-link-exact-active{
          color:#1517cc;
       }
   } 

  
    
</style>

