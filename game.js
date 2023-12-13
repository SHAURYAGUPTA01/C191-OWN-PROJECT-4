AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#bullet1" },    
    },
    update: function () {
      this.isCollided(this.data.elementId);
    },
    
    init: function () {
      var duration = 45;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
    
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
    
      var timer = setInterval(countDown, 1000);
    
      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
    
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
    
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
    
          duration -= 1;
        } 
        else {
          clearInterval(timer);  
          this.gameOver()      
        }
      }
    },
    isCollided: function (elemntId) {
      const element = document.querySelector(elemntId);
      element.addEventListener("collide", (e) => {
        if (elemntId.includes("#bullet")) {
          element.setAttribute("visible" , false)
          this.gameOver()
        }
      });
      element.addEventListener("collide", (e) => {
        if (elemntId.includes("#finish-line")) {
          element.setAttribute("visible" , false)
          this.win()
        }
      });
    },
    gameOver: function () {
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        planeEl.setAttribute("dynamic-body", {
        mass: 1
        });
    },
    win : function(){
        var element = document.querySelector("#win");
        element.setAttribute("visible", true);
        planeEl.setAttribute("dynamic-body", {
        mass: 1
        });

    }
    
    });