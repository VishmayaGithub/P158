AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { type: "string", default: "" }
    },
    init: function () {
        this.handleEventListener()
        this.handleMouseLeaves()
    },

    handleEventListener: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handleBorderColor()
        })
    },
    handleBorderColor: function () {
        const id = this.el.getAttribute("id")
        const places = ["aot", "tokyo-ghoul", "blue-period", "jujutsu-kaisen"]
        if (places.includes(id)) {
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener", {
                selectedItemId: id

            })
            this.el.setAttribute("material", { color: "orange", opacity: 1 })

        }
    },

    handleMouseLeaves: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data
            if (selectedItemId) {
                const placesContainer = document.querySelector(`#${selectedItemId}`)

                const id = placesContainer.getAttribute("id")
                if (id == selectedItemId) {
                    placesContainer.setAttribute("material", { color: "white", opacity: 1 })
                }



            }
        })
    }
})