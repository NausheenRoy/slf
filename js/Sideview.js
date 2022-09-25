AFRAME.registerComponent("ride-side-view", {
    init: function() {
      this.createrides();
    },
    tick: function() {
      const ridesContainer = document.querySelector("#rides-container");
  
      const { state } = ridesContainer.getAttribute("ride");
  
      if (state === "view" || state === "change-view") {
  
        this.el.setAttribute("visible", true);
      } else {
        this.el.setAttribute("visible", false);
      }
    },
    createrides: function() {
      const sideViewContainer = document.querySelector(
        "#side-view-container"
      );
  
      let prevoiusXPosition = -150;
      let prevoiusYPosition = 30;
  
      for (var i = 1; i <= 4; i++) {
        const position = {
          x: (prevoiusXPosition += 50),
          y: (prevoiusYPosition += 2),
          z: -40
        };
        const entityEl = this.createrideThumbNail(position, i);
        sideViewContainer.appendChild(entityEl);
      }
    },
    createrideThumbNail: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      
      entityEl.setAttribute("id", `ride-${id}`);
  
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 2.5
      });
  
      
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("cursor-listener", {});
  
      return entityEl;
    }
  });