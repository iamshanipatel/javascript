document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-btn")
    const usernameInput = document.getElementById("user-Input")
    const statsContainer = document.querySelector(".stats-container")
    const easyProgressCircle = document.querySelector(".easy-progress")
    const mediumProgressCircle = document.querySelector(".medium-progress")
    const hardProgressCircle = document.querySelector(".hard-progress")
    const easylable = document.getElementById("easy-lable")
    const mediumlable = document.getElementById("medium-lable")
    const hardlable = document.getElementById("hard-lable")
    const cardStatsContainer = document.querySelector(".stats-cards")

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("login username:", username)
    })
})
