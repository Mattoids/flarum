<?php

/*
 * This file is part of kiddo/remove-newest.
 *
 * Copyright (c) 2023 kiddo.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Kiddo\RemoveNewest;



use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\ServiceProvider())->register(RemoveServiceProvider::class),
];
