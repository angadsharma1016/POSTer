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
});