$(document).ready(()=>{
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
        
        $.post("http://localhost:3000/",{method,url,body},(response)=>{
            $("#response").val("\n\n" + response);
            M.textareaAutoResize($('#response'));
        });
    });
});