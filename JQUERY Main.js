$(document).ready(function(){
    $(".frame").css("width","50%");

    $(".main").mousemove(function(){
        $val = event.clientX;
        $width = $(window).width();
        $max = ($width/2)+100;
        $min = ($width/2)-100;

        if($val<=$max && $val>=$min)
        {
            $(".separator").css("left",$val);
            if($val < $width/2)
            {
                $(".dev").css("letter-spacing",($width/2)/30);
                $(".des").css("letter-spacing",($width/2)/20);
            }
            if($val > $width/2)
            {
                $(".dev").css("letter-spacing",($width/2)/20);
                $(".des").css("letter-spacing",($width/2)/30);
            }
            $(".frame").css("width",$width-$val);
        }
    });
});