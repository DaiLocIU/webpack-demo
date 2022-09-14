<?php
    require('./backend/includes/force-https.php');
    require('./backend/includes/helper.php');
    require('./backend/data/config.php');

    $DOMAIN = $_SERVER['HTTP_HOST'];

    $SITE_URL = '/';
    $ASSETS = '../dist';

    $ROOT_URL = '';


    require('./dist/index.html');
