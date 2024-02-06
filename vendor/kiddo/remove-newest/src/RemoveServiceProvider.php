<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Kiddo\RemoveNewest;

use Flarum\Foundation\AbstractServiceProvider;


class RemoveServiceProvider extends AbstractServiceProvider
{
    /**
     * {@inheritdoc}
     */
    public function register(){
        $this->container->singleton('flarum.forum.discussions.sortmap', function () {
            return [  
                'latest' => '-lastPostedAt',
                'top' => '-commentCount',
           //     'newest' => '-createdAt',
                'oldest' => 'createdAt'
            ];
        });
    }



}
