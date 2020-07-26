$("#loginBody").ready(function() {
    $('#loginBody').hide(0);
});

$("#loginButton").click(function() {
    $('#loginBody').fadeIn(200);
    $('#createNewTask').hide(0);
    $("#bodyContent").hide(0);
});

$("#signOutButton").ready(function() {
    $("#signOutButton").hide(0);
});

$("#backToMain").click(function() {
    $('#loginBody').fadeOut(100);
    $("#bodyContent").fadeIn(100);
});

$("#bodyContent").ready(function() {
    var result = getTasks();

    console.log(result);
    $('.loadingPage').delay(2000).fadeOut(0);
});

function setIntoTaskCard(id) {
    var title = datalist[id].title;
    var status = datalist[id].status;
    var priority = datalist[id].priority;
    var completedDate = datalist[id].completedDate;
    var estimatedTime = datalist[id].estimatedTime;
    var difficulty = datalist[id].difficulty;
    var des = datalist[id].des;
    var creator = datalist[id].creator;
    var category = datalist[id].category;
    var assignee = datalist[id].assignee;
    var logWorkTotalTime = datalist[id].logWorkTotalTime;
    var workDone = datalist[id].workDone;
    var creationDate = datalist[id].creationDate;

    console.log(title, status, priority, estimatedTime, difficulty, des, creator, category, assignee, creationDate, id);

    loadFrame(id, title, status, priority,completedDate, estimatedTime, difficulty, des, creator, category, assignee, logWorkTotalTime, workDone, creationDate);

    return "ok";
}

var showingDetailsFor = "";
var selectedId = "";

function showDetails(id) {
    selectedId = id;
    id += "Details";

    if (showingDetailsFor == "") {
        showingDetailsFor = id;
        $("#" + id).slideDown();
    } else if (showingDetailsFor == id) {
        showingDetailsFor = "";
        $("#" + id).slideUp();
    } else {
        $("#" + showingDetailsFor).slideUp();
        showingDetailsFor = id;
        $("#" + id).slideDown();
    }
}

$("#createNewTask").ready(function() {
    $("#createNewTask").hide(0);
    var date = new Date();
    document.getElementById("creationDateCreateNewTask").innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
});

$("#allTaskPage").ready(function() {
    $("#allTaskPage").hide(0);
});

$("#createNewTaskButton").click(function() {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#createNewTask").fadeIn(100);
    $("#errorMessage").hide();

});

$("#backToMainFromCreateNewTask").click(function() {
    $('#createNewTask').fadeOut(100);
    $("#bodyContent").fadeIn(100);
});

$("#logWork").ready(function() {
    $("#logWork").hide(0);
});

$("#editWork").ready(function() {
    $("#editWork").hide(0);
    $("#errorMessageEdit").hide();
});

function openLogWork() {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#head").hide(0);
    $("#logWork").fadeIn(100);

    fillLogWork(selectedId);
}



function fillLogWork(id)
{
    var today = new Date();
    var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var commentDateTime = date + "|" + time +  "|" ;


    document.getElementById("logWorkId").innerHTML = id;
    document.getElementById("logWorkTitle").innerHTML = datalist[id].title;
    document.getElementById("logWorkET").innerHTML = datalist[id].estimatedTime;
    document.getElementById("logWorkTotalTime").innerHTML = datalist[id].logWorkTotalTime;
    document.getElementById("logWorkStatus").value = datalist[id].status;
    document.getElementById("logWorkDone").value = datalist[id].workDone;
    document.getElementById("logWorkRT").innerHTML = datalist[id].estimatedTime - datalist[id].logWorkTotalTime;
    document.getElementById("logWorkComment").value = commentDateTime + datalist[id].assignee + " : ";
}

function openEditWork() {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#head").hide(0);
    $("#editWork").fadeIn(100);

    fillEditWork(selectedId);
}

function fillEditWork(id) {
    document.getElementById("editWorkId").innerHTML = id;
    document.getElementById("editWorkTitle").value = datalist[id].title;
    document.getElementById("editWorkDes").value = datalist[id].des;
    document.getElementById("editWorkPriority").value = datalist[id].priority;
    document.getElementById("editWorkDifficulty").value = datalist[id].difficulty;
    document.getElementById("editWorkCreator").innerHTML = datalist[id].creator;
    document.getElementById("editWorkAssignee").value = datalist[id].assignee;
    document.getElementById("editWorkEstimatedTime").value = datalist[id].estimatedTime;
    document.getElementById("editWorkStatus").value = datalist[id].status;
    document.getElementById("editWorkCategory").value = datalist[id].category;
}
$("#backToMainFromLogWork").click(function() {
    $("#logWork").hide(0);
    $("#head").show(200);
    $("#bodyContent").show(200);
});

$("#backToMainFromEditWork").click(function() {
    $("#editWork").hide(0);
    $("#head").show(200);
    $("#bodyContent").show(200);
});

$("#editTaskSubmit").click(function() {
    var id = document.getElementById("editWorkId").innerHTML;
    var title = document.getElementById("editWorkTitle").value;
    var des = document.getElementById("editWorkDes").value;
    var priority = document.getElementById("editWorkPriority").value;
    var difficulty = document.getElementById("editWorkDifficulty").value;
    var creator = document.getElementById("editWorkCreator").innerHTML;
    var assignee = document.getElementById("editWorkAssignee").value;
    var estimatedTime = document.getElementById("editWorkEstimatedTime").value;
    var status = document.getElementById("editWorkStatus").value;
    var category = document.getElementById("editWorkCategory").value;

    if (checkValidation(priority, difficulty, status, category, estimatedTime)) {
        console.log("working");
        editData(id,title,status,priority,estimatedTime,difficulty,des,creator,category,assignee);
    } else {
        console.log("wrong values");
        $("#errorMessageEdit").show();
    }
    //editData(id,title,status,priority,estimatedTime,difficulty,des,creator,category,assignee);
});

$("#submitNewTask").click(function() {
    var title = $("#titleCreateNewTask").val();
    var des = $("#desCreateNewTask").val();
    var priority = $("#priorityCreateNewTask").val();
    var difficulty = $("#difficultyCreateNewTask").val();
    var creator = $("#creatorCreateNewTask").val();
    var assignee = $("#assigneeCreateNewTask").val();
    var estimatedTime = $("#estimatedTimeCreateNewTask").val();
    var status = $("#statusCreateNewTask").val();
    var category = $("#categoryCreateNewTask").val();
    var creationDate = document.getElementById("creationDateCreateNewTask").innerHTML;


    console.log(title);
    console.log(des);
    console.log(priority);
    console.log(difficulty);
    console.log(creator);
    console.log(assignee);
    console.log(estimatedTime);
    console.log(status);
    console.log(category);
    console.log(creationDate);

    //createNewTask(title,des,priority,difficulty,creator,assignee,estimatedTime,status,category,creationDate);

    if (checkValidation(priority, difficulty, status, category, estimatedTime)) {
        console.log("working");
        createNewTask(title, des, priority, difficulty, creator, assignee, estimatedTime, status, category, creationDate);
    } else {
        console.log("wrong values");
        $("#errorMessage").show();
    }
});

function checkValidation(priority, difficulty, status, category, estimatedTime) {
    var errorflag = 0;
    $("#priorityCreateNewTask").css("color", "black");
    $("#difficultyCreateNewTask").css("color", "black");
    $("#estimatedTimeCreateNewTask").css("color", "black");
    $("#statusCreateNewTask").css("color", "black");
    $("#categoryCreateNewTask").css("color", "black");

    $("#editWorkPriority").css("color", "black");
    $("#editWorkDifficulty").css("color", "black");
    $("#editWorkEstimatedTime").css("color", "black");
    $("#editWorkStatus").css("color", "black");
    $("#editWorkCategory").css("color", "black");

    if ((priority != "High" && priority != "Medium" && priority != "Low") || priority == "") {
        $("#priorityCreateNewTask").css("color", "red");
        $("#editWorkPriority").css("color", "red");
        errorflag = 1;
    }
    if ((difficulty != "High" && difficulty != "Medium" && difficulty != "Low") || difficulty == "") {
        $("#difficultyCreateNewTask").css("color", "red");
        $("#editWorkDifficulty").css("color", "red");
        errorflag = 1;
    }
    if ((status != "Icebox" && status != "Ready to start" && status != "Under Progress" && status != "Blocked" && status != "Completed") || status == "") {
        $("#statusCreateNewTask").css("color", "red");
        $("#editWorkStatus").css("color", "red");
        errorflag = 1;
    }
    if ((category != "Business" && category != "Development" && category != "Marketing") || category == "") {
        $("#categoryCreateNewTask").css("color", "red");
        $("#editWorkCategory").css("color", "red");
        errorflag = 1;
    }
    if ((estimatedTime < 0) || (estimatedTime == "")) {
        $("#estimatedTimeCreateNewTask").css("color", "red");
        $("#editWorkEstimatedTime").css("color", "red");
        errorflag = 1;
    }
    if (errorflag)
        return false;
    else
        return true;

}

$("#successful").ready(function() {
    $("#successful").hide(0);
});

// Keep listening the changes

var listnerTaskId = firebase.database().ref('Tasks/');
listnerTaskId.on('child_changed', function(data) {
    console.log(data.key);

    $("#logWork").hide(0);
    $("#editWork").hide(0);
    $("#head").show(200);
    $("#successful").show(0);
    $("#bodyContent").fadeIn(500);
    $("#successful").fadeOut(2000);
    getTasks();

});
listnerTaskId.on('child_removed', function(data) {
    console.log(data.key);
    removeDiv(data.key);
});

// Insert slogan
// firebase.database().ref('Slogan/' + 3).set({
//     Content: "Feedback is the breakfast of champions."
// });

//fetch slogan

var sloganId = Math.floor(Math.random() * 4);
var sloganContent = database.ref('Slogan/' + sloganId);
sloganContent.on('child_added', function(snapshot) {
    setSlogan(snapshot.val());
});

function setSlogan(data) {
    document.getElementById("sloganContent").innerHTML = data;
}

function removeDiv(id) {
    datalist.slice(id, 1);
    $("#" + id).remove();

    console.log(datalist);
}

$("#logWorkSubmit").click(function() {
    var id = document.getElementById("logWorkId").innerHTML;
    var logWorkTotalTime = document.getElementById("logWorkTotalTime").innerHTML;
    var logWorkTime = document.getElementById("logWorkTime").value;
    var status = document.getElementById("logWorkStatus").value;
    var workDone = document.getElementById("logWorkDone").value;
    var comment = document.getElementById("logWorkComment").value;

    logWorkTotalTime = parseInt(logWorkTotalTime) + parseInt(logWorkTime);
    if (status == "Completed") {
    var today = new Date();
    var completedDate =today.getDate() +"/" +(today.getMonth() + 1) +"/" +today.getFullYear();
  }
    var result = updateFromLogWorkData(id, logWorkTotalTime, status, workDone, comment,completedDate);

    console.log(result);

});

$("#allTaskButton").click(function() {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#createNewTask").hide(0);
    $("#allTaskPage").fadeIn(100);
});
