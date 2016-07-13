function getE(a) {
    return document.querySelector(a);
}

getE('.text_style_wrap').style.display = "none";
var df = document.forms;

document.getElementById('btn_edit').onclick = function() {
    df.text_redactor.redactor.value = document.querySelector('.window').innerHTML;
    getE('.btn_done').style.display = "block";
    getE('.text_redactor_wrap').style.display = "block";
    getE('.text_style_wrap').style.display = "none";
}
document.getElementById('btn_style').onclick = function() {
    getE('.text_redactor_wrap').style.display = "none";
    getE('.btn_done').style.display = "none";
    getE('.text_style_wrap').style.display = "block";

}
for (var i = 0; i < df.text_font_size.elements.length; i++) {
    df.text_font_size[i].onclick = function() {
        getE('.window').style.fontSize = this.value;
    }
}
for (var i = 0; i < df.text_style_font.elements.length; i++) {
    df.text_style_font[i].onclick = function() {
        getE('.window').style.fontFamily = this.value;
    }
}

var square_ivan = document.querySelectorAll('.square');

getE('.color_text').onclick = function() {
    getE('.square_wrap').style.display = "block";

    for (var i = 0; i < square_ivan.length; i++) {
        square_ivan[i].onclick = function() {
            getE('.window_first').style.color = this.style.color;
        }
    }
}

getE('.color_bgc').onclick = function() {
    getE('.square_wrap').style.display = "block";;
    for (var i = 0; i < square_ivan.length; i++) {
        square_ivan[i].onclick = function() {
            getE('.window_first').style.backgroundColor = this.style.backgroundColor;
        }
    }
}

var windows = document.querySelector('.window');
for (var i = 0; i < df.form_style.elements.length; i++) {
    df.form_style[i].onclick = function() {
        if (this.checked) {
            windows.style.fontStyle = this.value;
            windows.style.fontWeight = this.value;
        }
        else {
            windows.style.fontStyle = 'normal';
            windows.style.fontWeight = 'normal';
        }
    }
}

getE('.btn_save').onclick = function() {
    getE('.btn_done').style.display = "none";
    getE('.window_first').innerHTML = df.text_redactor.redactor.value;
    df.text_redactor.redactor.value = " ";

}

getE('.btn_add').onclick = function() {
    getE('.container').style.display = "none";
    getE('.add_table').style.display = "block";

}

getE('.btn_close').onclick = function() {
    getE('.container').style.display = "block";
    getE('.add_table').style.display = "none";
}

df.table_add.table.onclick = function() {
    getE('.list_content').style.display = "none";
    getE('.table_content').style.display = "block";
    getE('.btn_save_add').style.display = "block";

}

df.table_add.list.onclick = function() {
    getE('.list_content').style.display = "block";
    getE('.table_content').style.display = "none";
    getE('.btn_save_add').style.display = "none";
    // getE('.btn_close').style.display = "none";
}

getE('.btn_save_add').onclick = function() {
    var tabletr = parseInt(df.form_table_content.tr.value);
    var tabletd = parseInt(df.form_table_content.td.value);
    var cellWidth = parseInt(df.form_table_content.tw.value);
    var cellHeight = parseInt(df.form_table_content.th.value);
    var border = parseInt(df.form_table_content.border.value);
    var borderColor = df.form_table_content.color.value;
    var borderType = df.form_table_content.type.value;
    var tableTemp = '<table style="border: ' + border + 'px ' + borderType + ' ' + borderColor + ';">';
    for (var i = 0; i < tabletr; i++) {
        tableTemp += "<tr >";
        for (var j = 0; j < tabletd; j++) {
            tableTemp += '<td style="width:' + cellWidth + 'px ; height: ' + cellHeight + 'px; border: ' + border + 'px ' + borderType + ' ' + borderColor + '; "></td>';
        }
        tableTemp += "</tr>"
    }
    tableTemp += "</table>";

    var res = document.querySelector('.window').innerHTML;
    df.text_redactor.redactor.value = res + tableTemp;
    getE('.container').style.display = "block";
    getE('.add_table').style.display = "none";
    getE('.text_redactor_wrap').style.display = "block";
    getE('.btn_done').style.display = "block";
}

getE('.btn_save_list').onclick = function(e) {
    e.preventDefault();
    var numberli = parseInt(df.list_content_content.numli.value);
    var type_list = df.list_content_content.type_list.value;
    var tablelist = '<ul type=' + type_list + '>'; // '<ul>'
    for (var i = 1; i <= numberli; i++) {
        tablelist += '<li>' + "list item  " + i.toString() + '</li>';
    }
    tablelist += "<ul>";
    var this_value = getE('.window').innerHTML;
    df.text_redactor.redactor.value = this_value + tablelist;

    getE('.container').style.display = "block";
    getE('.add_table').style.display = "none";
    getE('.text_redactor_wrap').style.display = "block";
    getE('.text_redactor').style.display = "block";
    getE('.window').style.display = "block";
    getE('.btn_done').style.display = "block";
}

document.body.onclick = function(e) {
    e = e;
    target = e.target;
    if (target.id == "color_bgc1") {
        getE('.square_wrap').style.display = "table";
    }
    else {
        getE('.square_wrap').style.display = "none";
    }

    if (target.id == "color_text") {
        getE('.square_wrap').style.display = "table";
    }
    // else {
    //     //  getE('.square_wrap').style.display = "none";
    // }
}