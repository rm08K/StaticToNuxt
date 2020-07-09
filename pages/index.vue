<template>
  <div class="container">
    <header class="topHeader">
        <h1 class="topHeader-title">BMW Fan!!!!!</h1>
        <div class="topHeader-outer">
            <a href="#" class="topHeader-menu" id="openNav">
              <span class="topHeader-menu_bar fa fa-bars"></span>
              <p class="topHeader-menu_text">Menu</p>
            </a>
            <nav id="topNav" class="topNav">
                <a href="#" class="topNav-close" id="closeNav">
                  <CloseIcon />
                </a>
                <ul class="topNav-listBox">
                  <li class="topNav-listBox_li"><a href="index.html" class="topNav-listBox_a">Home</a></li>
                  <li class="topNav-listBox_li"><a href="01.html" class="topNav-listBox_a">BMW</a></li>
                  <li class="topNav-listBox_li"><a href="02.html" class="topNav-listBox_a">エンブレムの由来</a></li>
                  <li class="topNav-listBox_li"><a href="03.html" class="topNav-listBox_a">製品の特徴</a></li>
                  <li class="topNav-listBox_li"><a href="04.html" class="topNav-listBox_a">二輪車</a></li>
                  <li class="topNav-listBox_li"><a href="05.html" class="topNav-listBox_a">モータースポーツ</a></li>
                  <li class="topNav-listBox_li"><a href="06.html" class="topNav-listBox_a">経営状況</a></li>
                </ul>
            </nav>
        </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
