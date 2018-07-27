
$(document).ready(()=>{
    window.setTimeout(()=>{
        $(".loading").hide();
        $("#main_body").show();
    },500)

    $(".header_button").on("click",(e)=>{
        e.preventDefault();
        $(".header_row").append('<div class="input-field col s6"><input style="color:grey;" placeholder="Key" id="key" type="text" class="keys ip validate"><label for="key">Headers</label></div><div class="input-field col s6"><input  style="color:grey;" placeholder="Value" id="value" type="text" class="values ip validate"><label for="value"></label></div></div>')});

    $("#input_body").hide();
    $('select').formSelect();
    // $('#textarea1').val('New Text');
    // M.textareaAutoResize($('#textarea1'));
    M.updateTextFields();

    $(".closecard").on("click",(e)=>{
        e.preventDefault();
        $(".mycard").html("");
        $("#input_body").show();
        $(".ip").val('');
    });

    $(".submit").on("click",(e)=>{
        e.preventDefault();
        let method = $("select option:selected").text();
        if(method==="Choose your option")
            method = "GET";
        let url = $("#url").val();
        let body = $("#data").val();

        let headers = {};

        let keys = $(".keys");
        let values = $(".values");

        for(let i=0;i<keys.length;i++)
            headers[keys.eq(i).val()] = values.eq(i).val();

        $.post("http://localhost:3000/",{method,url,body,headers:JSON.stringify(headers)},(response)=>{
            $("#response").val("\n\n" + response);
            M.textareaAutoResize($('#response'));
        });
    });
});