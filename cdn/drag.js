ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
    
    moveAt(event.pageX, event.pageY);
    
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
    
    };
    
    ball.ondragstart = function() {
    return false;
    };
    
    //Second function
    
    
    ball2.onmousedown = function(event) {
    
    let shiftX = event.clientX - ball2.getBoundingClientRect().left;
    let shiftY = event.clientY - ball2.getBoundingClientRect().top;
    
    ball2.style.position = 'absolute';
    ball2.style.zIndex = 1000;
    document.body.append(ball2);
    
    moveAt(event.pageX, event.pageY);
    
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
    ball2.style.left = pageX - shiftX + 'px';
    ball2.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    }
    
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // drop the ball, remove unneeded handlers
    ball2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball2.onmouseup = null;
    };
    
    };
    
    ball2.ondragstart = function() {
    return false;
    };