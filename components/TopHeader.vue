<template>
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
</template>

<script>
// import menujs from '~/assets/js/menu.js'
</script>

<style lang="scss">
.topHeader {
  width: 100%;
  height: 70px;
  background-color: #000;
  color: #F2F2F2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-family: Verdana;
}

.topHeader-title {
  font-size: 20px;
  margin: auto 0;
  margin-left: 24px;
}

.topHeader-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 27px 20px 29px 20px;
  text-decoration: none;
  color: #F2F2F2;
  border-left: 1px solid #fff;
}

.topHeader-menu_bar {
  padding-right: 8px;
  font-size: 14px;
}

.topHeader-menu_text {
  font-size: 14px;
  font-weight: bold;
}

.topNav {
  display: none;
  position: absolute;
  width: 320px;
  right: 0;
  top: 0;
  background-color: #000;
  z-index: 100;
}

.topNav-close {
  display: block;
  padding: .1px;
  padding-bottom: 25px;
}

.topNav-close_icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 25px 25px 0 auto;
  color: #fff;
}

.topNav-listBox {
  font-family: Yu Gothic;
  font-size: 16px;
  padding-bottom: 6px;
}

.topNav-listBox_a {
  margin: auto;
  width: 253px;
  display: block;
  color: #fff;
  text-decoration: none;
  padding-top: 19px;
  padding-bottom: 19px;
  border-top: 1px solid #fff;
}

.open {
  display: block;
}
</style>
