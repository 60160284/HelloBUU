$(function(){
    $("#box").dialog({
        title: '',
        width: 500,
        height: 200,
        modal: true,
        resizable: false,
        draggable: false,
        buttons: [{
            text: 'Submit',
            click: function(){
                $(this).dialog('close');
            }
        }
        ]
    });
});
