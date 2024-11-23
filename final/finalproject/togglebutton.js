const togglebutton = document.querySelector(".togglebutton")
        const togglebuttonicon = document.querySelector(".togglebutton i")
        const dropdown = document.querySelector(".dropdown")

        togglebutton.onclick  = function()
        {
            dropdown.classList.toggle('open')
            const isOpen = dropdown.classList.contains('open')

            togglebuttonicon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }