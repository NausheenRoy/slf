AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function() {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function() {
    //  Click Events
    this.el.addEventListener("click", evt => {
      const ridesContainer = document.querySelector("#rides-container");

      const { state } = ridesContainer.getAttribute("ride");

      if (state === "rides-list") {

        const id = this.el.getAttribute("id");

        const ridesId = [
          "nitro",
          "drop",
          "scream",
          "rush"
        ];

        if (ridesId.includes(id)) {
          ridesContainer.setAttribute("ride", {
            state: "view",
            selectedCard: id
          });
        }
      }

      if (state === "view") {
        this.handleViewState();
      }
      if (state === "change-view") {
        this.handleViewState();
      }
    });
  },
  handleViewState: function() {
    const el = this.el;

    const id = el.getAttribute("id");

    const ridesContainer = document.querySelector("#rides-container");

    const { selectedItemId } = ridesContainer.getAttribute("cursor-listener");

    //Keeping all the images as id of the images with .jpg extension
    const sideViewridesId = ["place-1", "place-2", "place-3", "place-4"];

    if (sideViewridesId.includes(id)) {
      
      ridesContainer.setAttribute("ride", {
        state: "change-view"
      });

      const skyEl = document.querySelector("#main-container");
      
      //Set the 360 degree image to the sky element.
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${selectedItemId}/${id}.jpg`,
        color: "#fff"
      });
     
    }
  },
  handleMouseEnterEvents: function() {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      const placeContainer = document.querySelector("#rides-container");
      const { state } = placeContainer.getAttribute("ride");
      if (state === "rides-list") {
        this.handleridesListState();
      }
    });
  },
  handleridesListState: function() {
    const id = this.el.getAttribute("id");
    const ridesId = ["nitro","drop","scream","rush"];
    if (ridesId.includes(id)) {
      const placeContainer = document.querySelector("#rides-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {
        color:"#D76B30",
        opacity: 1
      });
    }
  },
  handleMouseLeaveEvents: function() {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const ridesContainer = document.querySelector("#rides-container");
      const { state } = ridesContainer.getAttribute("ride");
      if (state === "rides-list") {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1
            });
          }
        }
      }
    });
  },
  
});
