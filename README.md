## Installation

Enable RESTful example and RESTful token auth.

``drush en -y restful_example restful_token_auth``

In ``settings.php``
```php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Headers: Authorization, X-Restful-Minor-Version, X-Csrf-Token, X-Access-Token, accept, content-type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
```
