<template>
  <div class="slider" ref="slider">
    <div class="slider-item-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dot-list">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    data() {
      return {
        dots: [],
        currentPageIndex: 0,
      }
    },
    methods: {
      _setSliderWidth() {
        this.children = this.$refs.sliderGroup.children;
        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for(let i = 0; i < this.children.length; i++) {
          let child = this.children[i];

          child.style.width = sliderWidth + 'px';
          width += sliderWidth;
        }

        width = width + 2 * sliderWidth;
        this.$refs.sliderGroup.style.width = width + 'px';
      },
      _initScroll() {
        this.scrollSlider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: true,
            threshold: 0.3,
            speed: 400
          },

        });
        this.scrollSlider.on('scrollEnd',() => {
          let pageIndex = this.scrollSlider.getCurrentPage().pageX;
          pageIndex -= 1;
          console.log(pageIndex);

          this.currentPageIndex = pageIndex;
          //clearTimeout(this.timer);
          this._play();
        });
        this.scrollSlider.on('beforeScrollStart', () => {
          console.log('run');
          clearTimeout(this.timer);
        });
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1;
        pageIndex += 1;

        this.timer = setTimeout(() => {
          this.scrollSlider.goToPage(pageIndex, 0, 400)
        }, 2000);
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
    },
    activated() {
      this._play();
    },
    deactivated() {
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
    mounted() {
      this.$nextTick(() => {
        this._setSliderWidth();
        this._initDots();
        this._initScroll();
        this._play();
      });
    }
  }
</script>

<style type="text/less" lang="less" rel="stylesheet/less">
.slider{
  .slider-item-group{ position: relative; overflow: hidden; white-space: nowrap;
    .slider-item{ float: left; overflow: hidden;
       a{ width: 100%; display: block; overflow: hidden;
         img{ width: 100%; height: auto; display: block;}
       }
    }
  }
  .dot-list{position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
    .dot{display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active{width: 20px;
        border-radius: 5px; background: #bbb}
      }


  }
}
</style>
