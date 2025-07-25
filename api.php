<?php

// 日本のタイムゾーンに設定（作成１）
$msg_no = "学籍番号: ".$_POST['no'];
$msg_score = "点数: ".$_POST['score'];

// 返却するデータを作成（PHPの連想配列）
$data = [
    'no' => $msg_no,
    'score' => $msg_score  //現在時刻を(〇時〇分〇秒)の形式で取得（作成２）し、連結
];

// 連想配列をJSON形式の文字列に変換して出力（作成３）
echo json_encode($data);
exit;
