<?php
    define('DS', DIRECTORY_SEPARATOR);

    function startsWith($haystack, $needle ) {
        $length = strlen( $needle );
        return substr( $haystack, 0, $length ) === $needle;
    }

    function endsWith($haystack, $needle ) {
        $length = strlen( $needle );
        if( !$length ) {
            return true;
        }
        return substr( $haystack, -$length ) === $needle;
    }

    function parseJson($fname) {
        if (!endsWith($fname, '.json')) return;
        $path = __DIR__ . DS . '..' . DS . 'data' . DS . $fname;
        if (file_exists($path)) {
            return json_encode(json_decode(file_get_contents($path), true));
        }
    }

    function parseHTML($fname) {
        if (!endsWith($fname, '.html')) return;
        $path = __DIR__ . DS . '..' . DS . 'data' . DS . $fname;
        if (file_exists($path)) {
            return file_get_contents($path);
        }
    }
    function __($name) {
        global $data;

        if (endsWith($name, '.html')) {
            return load($name);
        }
        if ($name === 'settings') {
            return json_encode($data);
        }
        if (isset($data[$name])) {
            return $data[$name];
        }

        return $GLOBALS[$name];
    }
    function load($name) {
        if (!endsWith($name, '.html')) return;
        $path = __DIR__ . DS . '..' . DS . '..'. DS . $name;
        if (file_exists($path)) {
            @require_once($path);
        }
    }
