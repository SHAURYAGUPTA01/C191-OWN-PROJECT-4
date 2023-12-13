AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
      var posX = Math.random() * 30 + -10;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 30 + -10;

      var position = { x: posX, y: posY, z: posZ };
      this.shootBullet(id, position);

    },
    shootBullet: function () {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            color : "white",
            radius: 1,

          });
  
          bullet.setAttribute("position", position);
          bullet.setAttribute("velocity", direction.multiplyScalar(-20));
          var scene = document.querySelector("#scene");
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
          bullet.setAttribute("visible", false);
          scene.appendChild(bullet);
    },
  });