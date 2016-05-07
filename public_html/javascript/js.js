
function logout() {

    $.ajax({
        url: 'logout.php',
        success:function(data) {
        window.location.href = 'panel.php';
    }
    })

}


function exportsql(table) {

    $.ajax({
        url: 'exportsql.php?table='+table,
        success: function(data) {
            alert(data);
            //get url sql file

            //try to download the url sql file

            //do download

            //if success call deletesqlfile.php ajax
        }
    })

}

function truncate(table) {

    if(confirm('TRUNCATE TABLE '+table+"??")) {

        $.ajax({
            url: 'truncate.php?table='+table,
            success:function(data) {
            window.location.href = "panel.php";
        }
    })
}

}


function changeDatabase() {
    var d = document.getElementById("dbselect");
    $.ajax({
        url: 'changedb.php?database='+d.value,
        success:function(data) {
            window.location.href = "panel.php";
        }
    })
}

function importsqlpage() {
    window.location.href = "data/index.php";
}

function showtablecontent(table) {
    window.location.href = "tablecontent.php?table="+table;
}

function goback() {
    window.location.href = "panel.php";
}


function tableshow() {

    table.style.display = "table";

}

function importsql(file) {

    $.ajax({

        url: 'importsql.php?file='+file,
        success:function(data) {
        window.location.href = 'panel.php';
    }

})

}