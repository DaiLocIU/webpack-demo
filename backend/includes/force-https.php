<?php

    require_once( __DIR__ . '/../data/config.php');

    $DOMAIN = $_SERVER['HTTP_HOST'];
    $is_production = false;

    foreach ($DOMAIN_KEYWORDS as $kw) {
        if (strpos($DOMAIN, $kw) !== false) { 
            $is_production = true;
        }
    }

    if ($is_production) {
        if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
            $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            header('HTTP/1.1 301 Moved Permanently');
            header('Location: ' . $location);
            exit;
        }
    }
