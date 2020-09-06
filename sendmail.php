<?php
/*
This call sends a message to one recipient.
*/
require 'vendor/autoload.php';
require 'includeenv.php';

use \Mailjet\Resources;

$email = $_POST["email"] ?? null;
$name = $_POST["name"] ?? null;
$content= $_POST["content"] ?? null;

if(is_null($email) || is_null($content) || is_null($name)) return;

sendMail($email, $name, $content);

function sendMail(string $email, string $name, string $content)
{
    $mj = new \Mailjet\Client(getenv("APIKEY"), getenv("APISECRET"),true,['version' => 'v3.1']);

    $body = [
        'Messages' => [
            [
                'From' => [
                    'Email' => "hello@mohamedelyousfi.me",
                    'Name' => "Mohamed El Yousfi"
                ],
                'To' => [
                    [
                        'Email' => "mohamedelyousfi87@gmail.com",
                        'Name' => "Mohamed El Yousfi"
                    ],
                    [
                        'Email' => $email,
                        'Name' => $name
                    ]
                ],
                'Subject' => "Contact Mohamed El Yousfi",
                'TextPart' => $content,
                'HTMLPart' => $content
            ]
        ]
    ];
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    $response->success() && var_dump($response->getData());
    header("location:index.html");
}

?>
