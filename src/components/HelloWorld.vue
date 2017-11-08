<template>
  <div class="container">
    <!-- Nav Section -->
    <section>
      <header class="top_bar">
        <nav class="nav_bar">
          <div class="nav_bar_left">
            <div class="svg">
              <img src="" alt="MOVIE">
          <!--    <svg xmlns="http://www.w3.org/2000/svg" viewBox="4095.5 47.533 100.04 42.267">
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                      stroke: #95989a;
                    }
                  </style>
                </defs>
                <path id="path-10" class="cls-1" d="M26.063,41.267H0V25.375a5.041,5.041,0,0,0,4.691-4.938A5.041,5.041,0,0,0,0,15.5V0H26.116a2.606,2.606,0,0,0,2.554,2.064A2.606,2.606,0,0,0,31.224,0H99.04V15.475a5.315,5.315,0,0,0-3.684,1.455,4.812,4.812,0,0,0-1.528,3.507A5.1,5.1,0,0,0,99.04,25.4V41.266H31.276a2.548,2.548,0,0,0-.765-1.823,2.611,2.611,0,0,0-4.448,1.823Zm2.607-10.833a1.548,1.548,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,30.434Zm0-7.738a1.548,1.548,0,1,0,1.564,1.548A1.558,1.558,0,0,0,28.669,22.7Zm0-7.737a1.547,1.547,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,14.959Zm0-7.738a1.548,1.548,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,7.222Z" transform="translate(4096 48.033)"/>
              </svg> -->
            </div>
          </div>
          <div class="nav_bar_right">
            <ul class="list_movie">
              <li><a href="/trending">Top Rated</a></li>
              <li><a href="/popular">Popular</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </section>

    <!-- Section Call-out -->
    <section>
      <div class="call-out">
        <div class="overlay">
          <h2>  Movie Triggers</h2>
          <p>Welcome to  the Official Movie Triggers App. This app allows you to browse and search through datails of any movie and Tv series.</p>        
        </div>
      </div>
    </section>
    <section>
      <div class="search_bar" >
        <div class="input-item">
          <input type="text" placeholder="Search Item" name="item">
          <input type="text" placeholder="Categories" name="categories">
          <input type="text" placeholder="Ratings" name="ratings">
          <input type="text" placeholder="Genre" name="genre">
          <button  class="btn">Search Movies</button>
        </div>
      </div>
    </section>

    <!-- Movies-->


    <!-- Footer Section -->
    <section>
      <div class="footer">
        <p>Copyright @bitgenics.io made with <i class="fa fa-heart"></i> by <a href="twitter.com/lauragift21"> Gift</a></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');

body {
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
}
.container {
  width: auto;
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

/*Call out section*/
.overlay {
  position: relative;
  width: auto;
  height: 300px;
  background-color: #000;
  color: #fff;
  text-align: center;
}
.overlay h2 {
  font-size: 4em;
  padding-top: 70px;
}
.overlay p {
  font-size: 1.3em;
  padding-top: 30px;
}

/* Search Bar Section*/
.search_bar {
  background-color: #1D1D1D;
  height: 70px;
  padding: 3px;
  width: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;

}
.input-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;  
  margin-right: 12px;
}

.btn {
  background-color: #6AC045;
    border: none;
    color: #FFFFFF;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}

/* Footer Sectiom*/
.footer {
  background-color: #1D1D1D;
  margin-top: 45px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 1rem; 
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>