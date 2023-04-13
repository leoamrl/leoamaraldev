<?php

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $company = $_POST['company'];
  $budget = $_POST['budget'];
  $message = $_POST['message'];

  $data = date('d-m-Y H:i:s');

  $subject = 'Novo pedido de orçamento - [LeoAmaral]';

  $body = 'Recebido em: '.$data.' - ';
  $body .= 'Nome: '.$name.' - ';
  $body .= 'E-mail: '.$email.' - ';
  $body .= 'Telefone: '.$phone.' - ';
  $body .= 'Empresa: '.$company.' - ';
  $body .= 'Orçamento: '.$budget.' - ';
  $body .= 'Mensagem: '.$message;

  $csv = $name.';'.$email.';'.$phone.';'.$message.';'.$company.';'.$budget.';'.$data.';BREAK'.PHP_EOL;

  $fp = fopen("listContact.csv", "a");
  $escreve = fwrite($fp, $csv);
  fclose($fp);

  $headers   = array();
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "Content-type: text/html; charset=UTF-8";
  $headers[] = 'From: Leo Amaral <contato@leoamaraldev.com.br>';
  $headers[] = 'Reply-To: '.$nome.'<'.$email.'>';
  $headers[] = "X-Mailer: PHP/".phpversion();

  mail('leoamaraldev@gmail.com', $subject, $body, $headers);
  exit;
}