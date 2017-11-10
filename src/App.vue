<template>
  <div id="app">
  <div class="container">
    <!-- Navigation -->
    <section class="nav">
      <header class="top_bar">
        <nav class="nav_bar">
          <div class="nav_bar_left">
            <div class="svg">
              <img src="" alt="MOVIE TRIGGERS">
            </div>
          </div>
          <div class="nav_bar_right">
            <ul class="list_movie">
              <li><a href="/">Top Rated</a></li>
              <li><a href="/">Popular</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </section>

    <!-- Search Bar  -->
    <section>
        <input type="text" class="search">
        <button class="btn search_area" type="submit">Search</button>
      </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
}
.container {
  width: auto;
  font-family: 'Montserrat';

}

/*Navigation Menu*/
.nav_bar {
  background-color: #1D1D1D;
  padding: 30px;
  display: block;
}
.nav_bar_left {
  display: block;
  color: #fff;
  float: left;
}
.nav_bar_right {
  float: right;
}
ul {
  display: inline-block;
  list-style-type:  none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  float: right;
}

li a {
  display: inline;
  text-decoration: none;
  color: #fff;
  text-align: justify;
  padding: 14px 12px;
}

/*Search Area*/
.search {
  width: 60%;
  height: 45px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 20%;
  outline-color: green;

}
.search_area {
  position: absolute;
  top: 53%;
  left: 44%;
}

.btn {
  background: #333;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 12px;
  width: 12%;
  cursor: pointer;
  height: 6%;
  border: none;
  text-decoration: none;
  outline-style: none;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
</style>
