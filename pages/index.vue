<template>
  <div class="container">
    <TopHeader />
    <main class="topMain">
        <div class="topMainTopVisual">
            <div class="topMainTopVisual-imgBox parallax1"></div>
            <div class="topMainTopVisual-textBox">
                <h1 class="topMainTopVisual-textBox_h1">Freude am Fahren</h1>
                <h2 class="topMainTopVisual-textBox_h2">駆けぬける歓び</h2>
                <nuxt-link to="#BMW" class="topMainTopVisual-textBox_link">Continue</nuxt-link>
            </div>
        </div>

        <div class="topMainDetail" id="BMW">
            <div class="topMainDetail-textBox">
                <h1 class="topMainDetail-textBox_h1">BMW</h1>
                <h2 class="topMainDetail-textBox_h2">Bayerische Motoren WerkeAG</h2>
                <p class="topMainDetail-textBox_legend">BMW（ビーエムダブリュー、ドイツ語: Bayerische Motoren WerkeAG、バイエルン発動機製造株式会社）は、ドイツのバイエルン州ミュンヘンを拠点とする自動車および自動二輪車、エンジンメーカーである。</p>
                <nuxt-link to="/01" class="topMainDetail-textBox_link">Read More</nuxt-link>
            </div>
        </div>

        <div class="topMainArt1" id="art1">
            <div class="topMainArt1-img">
                <img class="topMainArt1-img_data parallax2" src="" alt="">
            </div>
            <div class="topMainArt1-outerBox">
                <div class="topMainArt1-textBox">
                    <h1 class="topMainArt1-textBox_h1">エンブレムの由来</h1>
                    <h2 class="topMainArt1-textBox_h2">Origin of the emblem</h2>
                    <p class="topMainArt1-textBox_legend">1917年10月5日にBMWのロゴマークが商標登録された。1929年の広報広告により、現在の黒く縁取った円の中央を十字によって4等分し、 点対称に青と白に塗り分けたデザインである。</p>
                    <nuxt-link to="02.html" class="topMainArt1-textBox_link">Read More</nuxt-link>
                </div>
                <div class="topMainArt1-pagetoggle">
                    <nuxt-link to="#" class="topMainArt1-pagetoggle_this scrolly prev"><span class="fa fa-chevron-up"></span></nuxt-link>
                    <nuxt-link to="#art2" class="topMainArt1-pagetoggle_this scrolly next disabled"><span class="fa fa-chevron-down"></span></nuxt-link>
                </div>
            </div>
        </div>
        <div class="topMainArt2" id="art2">
            <div class="topMainArt2-img">
                <img class="topMainArt2-img_data parallax3" src="" alt="">
            </div>
            <div class="topMainArt2-outerBox">
                <div class="topMainArt2-textBox">
                    <h1 class="topMainArt2-textBox_h1">製品の特徴</h1>
                    <h2 class="topMainArt2-textBox_h2">Product features</h2>
                    <p class="topMainArt2-textBox_legend">フル4シーターの4ドアセダン車をメインに据えつつもスポーティーな作りを心掛けているのが特徴である。駆動方式についてもフロントエンジン・リアドライブ方式（FR）の後輪駆動（もしくはFRベースの4WD）にこだわり、最近までBMWブランドでの前輪駆動（FF）車はなかったが、2シリーズアクティブツアラーがBMW初のFF車としてラインナップに加わった。</p>
                    <nuxt-link to="03.html" class="topMainArt2-textBox_link">Read More</nuxt-link>
                </div>
                <div class="topMainArt2-pagetoggle">
                    <nuxt-link to="#art1" class="topMainArt2-pagetoggle_this scrolly prev"><span class="fa fa-chevron-up"></span></nuxt-link>
                    <nuxt-link to="#art3" class="topMainArt2-pagetoggle_this scrolly next disabled"><span class="fa fa-chevron-down"></span></nuxt-link>
                </div>
            </div>
        </div>
        <div class="topMainArt3" id="art3">
            <div class="topMainArt3-img">
                <img class="topMainArt3-img_data parallax4" src="" alt="">
            </div>
            <div class="topMainArt3-outerBox">
                <div class="topMainArt3-textBox">
                    <h1 class="topMainArt3-textBox_h1">二輪車</h1>
                    <h2 class="topMainArt3-textBox_h2">Motorcycle</h2>
                    <p class="topMainArt3-textBox_legend">BMWは第一次世界大戦後にオートバイ用エンジンの生産を始め、続いてオートバイ自体の生産を始めた。同社のオートバイブランドは現在日本では「BMWモトラッド（ドイツ語読みではモトアラート、モトラート）」として知られる。</p>
                    <nuxt-link to="04.html" class="topMainArt3-textBox_link">Read More</nuxt-link>
                </div>
                <div class="topMainArt3-pagetoggle">
                    <nuxt-link to="#art2" class="topMainArt3-pagetoggle_this scrolly prev"><span class="fa fa-chevron-up"></span></nuxt-link>
                    <nuxt-link to="#art4" class="topMainArt3-pagetoggle_this scrolly next disabled"><span class="fa fa-chevron-down"></span></nuxt-link>
                </div>
            </div>
        </div>
        <div class="topMainArt4" id="art4">
            <div class="topMainArt4-img">
                <img class="topMainArt4-img_data parallax5" src="" alt="">
            </div>
            <div class="topMainArt4-outerBox">
                <div class="topMainArt4-textBox">
                    <h1 class="topMainArt4-textBox_h1">モータースポーツ</h1>
                    <h2 class="topMainArt4-textBox_h2">Motor sports</h2>
                    <p class="topMainArt4-textBox_legend">モータースポーツには古くから比較的積極的な姿勢を見せている。 特に活動が目立つのがツーリングカーレースで、シュニッツァー・モータースポーツやハーマンモータースポーツなどのセミワークスチームを多数抱え、世界ツーリングカー選手権（WTCC）やニュルブルクリンク24時間レースなどのレースに積極的に参戦している。</p>
                    <nuxt-link to="05.html" class="topMainArt4-textBox_link">Read More</nuxt-link>
                </div>
                <div class="topMainArt4-pagetoggle">
                    <nuxt-link to="#art3" class="topMainArt4-pagetoggle_this scrolly prev"><span class="fa fa-chevron-up"></span></nuxt-link>
                    <nuxt-link to="#art5" class="topMainArt4-pagetoggle_this scrolly next disabled"><span class="fa fa-chevron-down"></span></nuxt-link>
                </div>
            </div>
        </div>
        <div class="topMainArt5" id="art5">
            <div class="topMainArt5-img">
                <img class="topMainArt5-img_data parallax6" src="" alt="">
            </div>
            <div class="topMainArt5-outerBox">
                <div class="topMainArt5-textBox">
                    <h1 class="topMainArt5-textBox_h1">経営状況</h1>
                    <h2 class="topMainArt5-textBox_h2">Business conditions</h2>
                    <p class="topMainArt5-textBox_legend">2011年通期の世界市場での販売実績はBMWグループ全体として166万8982台、内訳はBMW138万384台、MINI28万5060台、ロールスロイス3538台、売上高は688億2100万ユーロ（2003年通期の世界市場での販売実績はBMWグループ全体として110万4916台、売上高は415億2500万ユーロ）。</p>
                    <nuxt-link to="06.html" class="topMainArt5-textBox_link">Read More</nuxt-link>
                </div>
                <div class="topMainArt5-pagetoggle">
                    <nuxt-link to="#art4" class="topMainArt5-pagetoggle_this scrolly prev"><span class="fa fa-chevron-up"></span></nuxt-link>
                    <nuxt-link to="#footer" class="topMainArt5-pagetoggle_this scrolly next disabled"><span class="fa fa-chevron-down"></span></nuxt-link>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
$engFont : Verdana;
$jpnFont : Yu Gothic;

.topMain {
    display: block;
}

.topMainTopVisual {
    &-imgBox {
        display: block;
        width: 100%;
        height: 720px;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-position-y: 0;
        background-image: url(~assets/images/pic1.jpg);
        z-index: -10;
    }
    &-textBox {
        position: relative;
        color: #F2F2F2;
        // background-color: #3F95D8;
        // max-width: 500px;
        text-align: center;
        // margin-top: -120px;
        margin: auto;
        z-index: 10;
        &_h1 {
            font-size: 40px;
            font-family: $engFont;
            padding-bottom: 44px;
        }
        &_h2 {
            font-size: 28px;
            font-family: $jpnFont;
            padding-bottom: 27px;
        }
        &_link {
            width: 180px;
            display: block;
            font-size: 20px;
            padding: 17px 0;
            margin: 0 auto;
            color: #fff;
            text-decoration: none;
            border: #fff solid 2px;
        }
    }
    &-textBox:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 410px;
        top: -120px;
        left: 0;
        background-color: #3F95D8;
        transform: skewY(-4.5deg);
        z-index: -1;
    }
}

$topDetailColor : #2DBC9C;

.topMainDetail {
    margin-top: 160px;
    text-align: center;
    padding-bottom: 100px;
    &-textBox {
        &_h1 {
            font-size: 36px;
            color: $topDetailColor;
            font-family: $jpnFont;
            padding-bottom: 22px;
        }
        &_h2 {
            // margin: 0 auto;
            width: 100%;
            font-size: 14px;
            font-family: $engFont;
            font-style: italic;
            color: #CCC;
            padding: 15px 0;
            border-top: #CCC 1px solid;
            border-bottom: #CCC 1px solid;
        }
        &_legend {
            width: 520px;
            margin: 0 auto;
            padding-top: 22px;
            padding-bottom: 41px;
            font-size: 14px;
            line-height: 22px;
            font-family: $jpnFont;
        }
        &_link {
            display: block;
            width: 160px;
            padding: 16px 0;
            margin: 0 auto;
            border: #CCC solid 2px;
            text-decoration: none;
            color: $topDetailColor;
        }
    }
}

.scrolly {
    text-decoration: none;
    display: block;
    border: 1px solid rgba(144, 144, 144, 0.25);
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
}

.scrolly:hover {
    background: #ccc;
}

.topMainArt1 {
    display: flex;
    &-img {
        width:50%;
        height: 680px;
        overflow: hidden;
        position: relative;
        &_data {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url(~assets/images/pic2.jpg);
            background-size: cover;
            background-position: center;
        }
    }
    &-outerBox {
        width: 50%;
        background-color: #2DBC9C;
        position: relative;
    }
    &-textBox {
        width: calc(100%-120px);
        margin-top: 195px;
        color: #fff;
        padding: 0 60px;
        &_h1 {
            font-size: 36px;
            font-family: $jpnFont;
            padding-bottom: 22px;
        }
        &_h2 {
            @extend .topMainDetail-textBox_h2;
            color: #fff;
            border-top: #fff 1px solid;
            border-bottom: #fff 1px solid;
        }
        &_legend {
            font-family: $jpnFont;
            font-size: 14px;
            line-height: 29px;
            padding-top: 22px;
            padding-bottom: 30px;
        }
        &_link {
            font-family: $engFont;
            font-size: 16px;
            font-weight: normal;
            display: block;
            width: 160px;
            text-align: center;
            padding: 14px 0;
            border: #fff solid 1px;
            text-decoration: none;
            color: #fff;
        }
    }
    &-pagetoggle {
        position: absolute;
        right: 14px;
        bottom: 20px;
        &_this {
            color: #fff;
            border: 1px solid #fff;
            &:hover {
                background: #fff;
                color: #000;
            }
        }
    }
}

$topMainArt2Color : #3F95D8;

.topMainArt2 {
    @extend .topMainArt1;
    flex-direction: row-reverse;
    &-img {
        @extend .topMainArt1-img;
        &_data {
            @extend .topMainArt1-img_data;
            background-image: url(~assets/images/pic3.jpg);
        }
    }
    &-outerBox {
        @extend .topMainArt1-outerBox;
        background-color: #fff;
    }
    &-textBox {
        @extend .topMainArt1-textBox;
        text-align: right;
        &_h1 {
            @extend .topMainArt1-textBox_h1;
            color: $topMainArt2Color;
        }
        &_h2 {
            @extend .topMainDetail-textBox_h2;
        }
        &_legend {
            @extend .topMainArt1-textBox_legend;
            color: #000;
            line-height: 22px;
        }
        &_link {
            @extend .topMainArt1-textBox_link;
            border: #ccc solid 2px;
            color: $topMainArt2Color;
            margin: 0 0 0 auto;
        }
    }
    &-pagetoggle {
        @extend .topMainArt1-pagetoggle;
        right: auto;
        left: 15.5px;
        &_this {
            color: $topMainArt2Color;
            border: 1px solid #CCC;
            &:hover {
                background: $topMainArt2Color;
                color: #fff;
            }
        }
    }
}

$topMainArt3Color : #3F95D8;

.topMainArt3 {
    @extend .topMainArt1;

    &-img {
        @extend .topMainArt1-img;

        &_data {
            @extend .topMainArt1-img_data;
            background-image: url(~assets/images/pic4.jpg);
        }
    }

    &-outerBox {
        @extend .topMainArt1-outerBox;
        background-color: $topMainArt3Color;
    }

    &-textBox {
        @extend .topMainArt1-textBox;

        &_h1 {
            @extend .topMainArt1-textBox_h1;
        }

        &_h2 {
            @extend .topMainDetail-textBox_h2;
            color: #fff;
            border-top: #fff 1px solid;
            border-bottom: #fff 1px solid;
        }

        &_legend {
            @extend .topMainArt1-textBox_legend;
            line-height: 22px;
        }

        &_link {
            @extend .topMainArt1-textBox_link;
        }
    }

    &-pagetoggle {
        @extend .topMainArt1-pagetoggle;

        &_this {
            @extend .topMainArt1-pagetoggle_this;
            &:hover {
                @extend .topMainArt1-pagetoggle_this:hover;
            }
        }
    }
}

$topMainArt4Color : #9956B2;

.topMainArt4 {
    @extend .topMainArt1;
    flex-direction: row-reverse;

    &-img {
        @extend .topMainArt1-img;

        &_data {
            @extend .topMainArt1-img_data;
            background-image: url(~assets/images/pic5.jpg);
        }
    }

    &-outerBox {
        @extend .topMainArt1-outerBox;
        background-color: #fff;
    }

    &-textBox {
        @extend .topMainArt1-textBox;
        text-align: right;

        &_h1 {
            @extend .topMainArt1-textBox_h1;
            color: $topMainArt4Color;
        }

        &_h2 {
            @extend .topMainDetail-textBox_h2;
        }

        &_legend {
            @extend .topMainArt1-textBox_legend;
            color: #000;
            line-height: 22px;
        }

        &_link {
            @extend .topMainArt1-textBox_link;
            border: #ccc solid 2px;
            color: $topMainArt4Color;
            margin: 0 0 0 auto;
        }
    }

    &-pagetoggle {
        @extend .topMainArt1-pagetoggle;
        right: auto;
        left: 15.5px;

        &_this {
            color: $topMainArt4Color;
            border: 1px solid #CCC;

            &:hover {
                background: $topMainArt4Color;
                color: #fff;
            }
        }
    }
}

$topMainArt5Color : #9956B2;

.topMainArt5 {
    @extend .topMainArt1;

    &-img {
        @extend .topMainArt1-img;
        &_data {
            @extend .topMainArt1-img_data;
            background-image: url(~assets/images/pic6.jpg);
        }
    }

    &-outerBox {
        @extend .topMainArt1-outerBox;
        background-color: $topMainArt5Color;
    }

    &-textBox {
        @extend .topMainArt1-textBox;

        &_h1 {
            @extend .topMainArt1-textBox_h1;
        }

        &_h2 {
            @extend .topMainDetail-textBox_h2;
            color: #fff;
            border-top: #fff 1px solid;
            border-bottom: #fff 1px solid;
        }

        &_legend {
            @extend .topMainArt1-textBox_legend;
            line-height: 22px;
        }

        &_link {
            @extend .topMainArt1-textBox_link;
        }
    }

    &-pagetoggle {
        @extend .topMainArt1-pagetoggle;

        &_this {
            @extend .topMainArt1-pagetoggle_this;

            &:hover {
                @extend .topMainArt1-pagetoggle_this:hover;
            }
        }
    }
}

// Fooooooter

.topFooter {
    height: 240px;
    background-color: #333333;
    &-iconBox {
        display: flex;
        list-style: none;
        justify-content: center;
        margin: auto;
        padding-top: 73px;
        li+li {
            margin-left: 20px;
        }
        &_icons {
            font-size: 27px;
            color: #fff;
            text-decoration: none;
        }
    }
    &-copyRight {
        font-family: $engFont;
        display: block;
        font-size: 12px;
        text-align: center;
        color: #fff;
        padding-top: 46px;
    }
}
</style>
