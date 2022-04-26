function validate() {

    var Fname = document.getElementById("fname").value
    var Lname = document.getElementById("lname").value
    var Email = document.getElementById("email").value
    var Id = document.getElementById("id").value
    var Pass = document.getElementById("pass").value
    var Cpass = document.getElementById("cpass").value


    if (Fname == null || Fname == "") {
        //    alert("blank username");
        fname.style.border = "solid 2px red";
        document.getElementById("label1").style.visibility = "visible";
        return true;
    }

    if (Lname == null || Lname == "") {

        lname.style.border = "solid 2px red";
        document.getElementById("label2").style.visibility = "visible";
    }
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (Email == null || Email == "") {

        email.style.border = "solid 2px red";
        document.getElementById("label7").style.visibility = "visible";
    } else if (!Email.match(mailformat)) {
        email.style.border = "solid 2px red";
        document.getElementById("label3").style.visibility = "visible";
    }
    if (Id == null || Id == "") {

        id.style.border = "solid 2px red";
        document.getElementById("label4").style.visibility = "visible";
    }
    if (Pass == null || Pass == "") {

        pass.style.border = "solid 2px red";
        document.getElementById("label5").style.visibility = "visible";
    }
    if (Cpass == null || Cpass == "") {

        cpass.style.border = "solid 2px red";
        document.getElementById("label6").style.visibility = "visible";
    }
    if (Pass !== Cpass) {
        alert("Password must be same")
    }


}