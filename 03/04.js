function userProgress(time) {
    var start = 0;
    var time = Math.round(time*1000/100);
    var progressElement = document.getElementById('user-progress');
    var intervalid=setInterval(function () {
        if(start>100){
            clearInterval(intervalid);
            userProgressCallback();
        }
        else{
            progressElement.value = start;
        }
        start++;
    }, time);
  }

  function userProgressCallback() {
    document.querySelector('.hidden-block').style.display = 'block';
  }

  userProgress(5);