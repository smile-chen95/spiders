## https://www.52pojie.cn/thread-1371291-1-1.html


function slide (id) {
        var slider    = document.getElementById(id),
            container = slider.parentNode;
     
        var rect = slider.getBoundingClientRect(),
            x0          = rect.x || rect.left,
            y0          = rect.y || rect.top,
            w           = container.getBoundingClientRect().width,
            x1          = x0 + w,
            y1          = y0;
     
        var mousedown = document.createEvent("MouseEvents");
        mousedown.initMouseEvent("mousedown", true, true, window, 0,
            x0, y0, x0, y0, false, false, false, false, 0, null);
        slider.dispatchEvent(mousedown);
     
        var mousemove = document.createEvent("MouseEvents");
        mousemove.initMouseEvent("mousemove", true, true, window, 0,
            x1, y1, x1, y1, false, false, false, false, 0, null);
        slider.dispatchEvent(mousemove);
     
        /*var mouseup = document.createEvent("MouseEvents");
        mouseup.initMouseEvent("mouseup", true, true, window, 0,
            x1, y1, x1, y1, false, false, false, false, 0, null);
        slider.dispatchEvent(mouseup);*/
    }
    
    slide('nc_1_n1z');