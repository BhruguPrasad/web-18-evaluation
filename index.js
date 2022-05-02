// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",submitform)

var scheduleArr = JSON.parse(localStorage.getItem("schedule"))||[];
function submitform(){
    event.preventDefault()
    var scheduleobj = {
        number:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    }
    scheduleArr.push(scheduleobj);
    console.log(scheduleArr)
    localStorage.setItem("schedule",JSON.stringify(scheduleArr))
    window.location.href = "matches.html"
}