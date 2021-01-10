

    /*jquery的轮播图*/
        var index=0;
        var $icons=$(".icon ol li");
        var $imgs=$("#banner ul li");
        //右边按钮点击切换
        $(".right").click(function(){
            index++;
            if(index>5)index=0;
            play();
        });
    
        //左边按钮点击切换
        $(".left").click(function(){
            index--;
            if(index<0)index=5;
            play();
        });
    
        //页面联动封装
        function play(){
            //选择当前的index然后添加curr类，然后选择同级的元素，移出curr,下面的一句也是一样的道理
            $imgs.eq(index).addClass('curr').siblings().removeClass('curr');
            $icons.eq(index).addClass('first').siblings().removeClass('first');
        }
        //移动到谁的上面，就传入谁的index值
        $icons.hover(function(){
            index=$(this).index();
            play();
        });
    
        //鼠标移动实现页面停止效果
        $("#banner").hover(function(){
            $(".btn").show();
            clearTimeout(timer);
        },function(){
            $(".btn").hide();
            autoplay();
        });
        //开启自动轮播
        autoplay();
        function autoplay()
        {
            timer=setInterval(function(){
            index++;
            if(index>5)index=0;
                //开启播放
                play();
            },2000);
        }
    
    
    /*jquery的轮播图*/
    
   