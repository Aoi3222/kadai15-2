//読み込み完了後に実行する
$(function() {
    $('#btn').on('click', function(){

        let input_no = $("[name='no']").val();
        let input_score = $("[name='score']").val();
        $.ajax({
            type: 'POST',
            url: 'api.php',
            data:{
                no:input_no,
                score: input_score
            }
        }).done(function(data){
            let result = JSON.parse(data);
            let text = result.no +  '\n' + result.score;
            $("#ajax_return").text(text);
        }).fail(function(data){
            alert("通信に失敗しました");
        });
    });
});
