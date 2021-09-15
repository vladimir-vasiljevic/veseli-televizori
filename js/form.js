function resetujPolja() {
    document.forms[0].ime.style.border = "1px solid grey";
    document.forms[0].telefon.style.border = "1px solid grey";
    document.forms[0].mail.style.border = "1px solid grey";
    document.forms[0].model.style.border = "1px solid grey";
    prozorcic();

}

function prozorcic() {
    alert("Forma je resetovana!");
}

function validacija() {
    var greska = false;
    if (document.forms[0].ime.value == '' || document.forms[0].ime.value.length < 2) {
        document.forms[0].ime.style.border = "1px solid red";
        document.forms[0].ime.focus();
        greska = true;
    }
    if (document.forms[0].telefon.value == '' || document.forms[0].telefon.value.length < 9 || document.forms[0].telefon.value.length > 10) {
        document.forms[0].telefon.style.border = "1px solid red";
        document.forms[0].telefon.focus();
        greska = true;
    }
    if (document.forms[0].mail.value == '') {
        document.forms[0].mail.style.border = "1px solid red";
        document.forms[0].mail.focus();
        greska = true;
    }

    if (document.forms[0].model.value == '') {
        document.forms[0].model.style.border = "1px solid red";
        document.forms[0].model.focus();
        greska = true;
    }

    if (greska == true) {
        alert("Molimo Vas, popunite formu ispravno.");
        return false;
    } else {
        alert("Vaš upit je zabeležen.");
        resetujPolja();
        return true;
    }
}
