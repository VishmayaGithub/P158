

  AFRAME.registerComponent("comics-posters", {
    init: function() {
      this.postersContainer = this.el;
      this.posters();
    },
  
    posters: function () {
      const postersRef = [
        {
          id: "tokyo-ghoul",
          title: "Tokyo Ghoul",
          url: "./assets/thumbnails/tokyo_ghoul.jpg",
        },
        {
          id: "blue-period",
          title: "Blue Period",
          url: "./assets/thumbnails/blue_period.jpg",
        },
    
        {
          id: "jujutsu-kaisen",
          title: "Jujutsu Kaisen",
          url: "./assets/thumbnails/jujutsu_kaisen.png",
        },
        {
          id: "aot",
          title: "Shingeki no Kiojin",
          url: "./assets/thumbnails/aot.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 27;
        const posY = -5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        
        // Poster Element
        const poster = this.createPoster(item,position); 

        borderEl.appendChild(poster);

        const textElement = this.createTitle(item,position)
        borderEl.appendChild(textElement)

        const element2 = document.createElement("a-entity")
      element2.setAttribute("text",{
        font : "dejavu",
        align : "center",
        color : "#0F184E",
        width : 50,
        value : item.title
      })
  
      var elPos = position
      elPos.y = -24
      element2.setAttribute("position",elPos)
      element2.setAttribute("visible",true)

      this.postersContainer.appendChild(element2)
  
        this.postersContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 32
      });
  
      entityEl.setAttribute("cursor-listener",{})
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "#fff" });
  
      return entityEl;
    },
    createPoster: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 30
      });
  
      entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },

    createTitle : function(item ,position){
      const element2 = document.createElement("a-entity")
      element2.setAttribute("text",{
        font : "dejavu",
        align : "center",
        color : "#0F184E",
        width : 90,
        value : item.title
      })
  
      var elPos = position
      elPos.y = -20
      element2.setAttribute("position",elPos)
      element2.setAttribute("visible",true)
  
      return element2
  
    }
  });