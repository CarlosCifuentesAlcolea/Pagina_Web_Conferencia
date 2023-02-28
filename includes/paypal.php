<?php

    require 'paypal/autoload.php';

    define('URL_SITIO', 'http://localhost/Prueba');

    $apiContext = new \PayPal\Rest\ApiContext(
        new \PayPal\Auth\OAuthTokenCredential(
            'AS_WT7M-SFiAXOzKjJbBxbT-xynJlYcbpZlkN3RAV_ce4U00PByW4cXy2ddiMFAun8Su1H3UbDi-BDwz',  // ClienteID
            'EJoqgZkia1XV50Rh8l1gmdsyyCM7PpjgXXEaNPrUhn2w0SXQScmUpCrlXWBARtRdZ78W1l0eUPiwNLyl'  // Secret
        )
    );