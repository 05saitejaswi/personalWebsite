function loadFrame(id, title, status, priority,completedDate, estimatedTime, difficulty, des, creator, category, assignee, logWorkTotalTime, workDone,creationDate)
{

var tickets = document.getElementById("jobTickets").innerHTML;
var completedTickets = document.getElementById("taskTickets").innerHTML;

var frame = "<div class=\"row jobTicket\">";
frame += "<div class=\"col-md-4 jobTicketCard\" id=\"";
frame += id;
frame += "\" onclick=\"showDetails(\'";
frame += id;
frame += "\')\">";
frame += "<div class=\"row\">";
frame += "<div class=\"col-md-12\">";
frame += "<div class=\"row frameHead\">";
frame += "<div class=\"col-md-3 menuTicket\">Id:</div>";
frame += "<div class=\"col detail\">"+id+"</div>";
frame += "</div>";
frame += "<div class=\"row\">";
frame += "<div class=\"col-md-3 menuTicket\">Title: </div>";
frame += "<div class=\"col detail\">"+title+"</div>";
frame += "</div>";
frame += "<div class=\"row\">";
frame += "<div class=\"col-md-3 menuTicket\">Priority:</div>";
frame += "<div class=\"col detail\">"+priority+"</div>";
frame += "</div>";
frame += "<div class=\"row\">";
frame += "<div class=\"col-md-3 menuTicket\">Assignee:</div>";
frame += "<div class=\"col detail\">"+assignee+"</div>";
frame += "</div>";
frame += "<div class=\"row\">";
frame += "<div class=\"col-md-3 menuTicket\">Creator:</div>";
frame += "<div class=\"col detail\">"+creator+"</div>";
frame += "</div>";
frame += "</div>";
frame += "</div>";
frame += "</div>";


var idDetails = id+"Details";

var frameDetails = "<div class=\"col-md-8\">";
frameDetails += "<div class=\"row detailsRow\" id=\"";
frameDetails += idDetails;
frameDetails += "\">";
frameDetails += "<div class=\"col\">";
frameDetails += "<div class=\"row part\">";
frameDetails += "<div class=\"col-md-2 logWorkBtn\" id=\"logWorkButton\">";
frameDetails += "<button id=\"logWorkButton\" onclick=\"openLogWork()\">Log Work</button>";
frameDetails += "</div>";
frameDetails += "<div class=\"col-md-2 editButton\" id=\"editWorkButton\">";
frameDetails += "<button id=\"editWorkButton\" onclick=\"openEditWork()\">Edit</button>";
frameDetails += "</div>";
frameDetails += "<div class=\"col-md-3\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col-md-3 menu\">Id:</div>";
frameDetails += "<div class=\"col menuData\">"+id+"</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col detailsTitle\">"+title+"</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"row part\">";
frameDetails += "<div class=\"col-md-2 menu\">Description: </div>";
frameDetails += "<div class=\"col\">";
frameDetails += "<div class=\"row desBox\">";
frameDetails += "<div class=\"col\">"+des+"</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col-md-1\">";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"row part\">";
frameDetails += "<div class=\"col\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Priority:</div>";
frameDetails += "<div class=\"col menuData\">"+priority+"</div>";
frameDetails += "</div>";
frameDetails += "<br>";
frameDetails += '<div class="row">';
frameDetails += '<div class="col menu">Date Of Completion:</div>';
frameDetails += '<div class="col menuData">' + completedDate + "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col\"></div>";
frameDetails += "<div class=\"col\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Difficulty:</div>";
frameDetails += "<div class=\"col menuData\">"+difficulty+"</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col\"></div>";
frameDetails += "<div class=\"col\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Assignee:</div>";
frameDetails += "<div class=\"col menuData\">"+assignee+"</div>";
frameDetails += "</div>";
frameDetails += "<br>";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Creator:</div>";
frameDetails += "<div class=\"col menuData\">"+creator+"</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"row part\">";
frameDetails += "<div class=\"col-md-3\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Estimated Time:</div>";
frameDetails += "<div class=\"col menuData\">"+estimatedTime+"h</div>";
frameDetails += "</div>";
frameDetails += "<br>";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Logged Time:</div>";
frameDetails += "<div class=\"col menuData\">"+logWorkTotalTime+"h</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col\"></div>";
frameDetails += "<div class=\"col-md-5\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">% of Work Code (Out of 100%):</div>";
frameDetails += "<div class=\"col menuData\">"+workDone+"%</div>";
frameDetails += "</div>";
frameDetails += "<br>";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Creation Date:</div>";
frameDetails += "<div class=\"col menuData\">"+creationDate+"</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "<div class=\"col\"></div>";
frameDetails += "<div class=\"col-md-3\">";
frameDetails += "<div class=\"row\">";
frameDetails += "<div class=\"col menu\">Status:</div>";
frameDetails += "<div class=\"col menuData\">"+status+"</div>";
frameDetails += "</div>";
frameDetails += "<br>";
frameDetails += '<div class="row">';
frameDetails += '<div class="col menu">category:</div>';
frameDetails += '<div class="col menuData">' + category + "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";
frameDetails += "</div>";

frame += frameDetails;

if(status == "Completed")
{
    if (completedTickets == "")
        completedTickets = frame;
    else
        completedTickets += frame;
}
else
{
    if (tickets == "")
        tickets = frame;
    else
        tickets += frame;
}

document.getElementById("jobTickets").innerHTML = tickets;
document.getElementById("taskTickets").innerHTML = completedTickets;

}
