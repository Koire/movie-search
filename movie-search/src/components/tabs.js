export const init = () => {
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(_tab => {
                if (_tab.id !== tab.id) {
                    _tab.classList.remove("active")
                } else {
                    _tab.classList.add("active")
                }
            })
            
            const tabNumber = tab.getAttribute("data-tab")
            const content = document.getElementById(`tab-content-${tabNumber}`)
            content.classList.add("show")
            content.classList.remove("hide")
            const otherTabs = document.querySelectorAll(".tabContent")
            otherTabs.forEach(otherTab => {
                if(otherTab.id !==`tab-content-${tabNumber}`) {
                    otherTab.classList.remove("show")
                    otherTab.classList.add("hide")
                }
            })
        })
    })
}