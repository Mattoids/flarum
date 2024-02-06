<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Access;

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class DiscussionPolicy extends AbstractPolicy
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param User $actor
     * @param string $ability
     * @param Discussion $discussion
     * @return string|void
     */
    public function can(User $actor, $ability, Discussion $discussion)
    {
        // Wrap all discussion permission checks with some logic pertaining to
        // the discussion's tags. If the discussion has a tag that has been
        // restricted, the user must have the permission for that tag.
        $tags = $discussion->tags;

if ($actor->id == $discussion->user_id && $ability == 'rename' ) {
    $allow_renaming = $this->settings->get('allow_renaming') ;
    switch ($allow_renaming) {
        case 'reply':
            // 检查是否被回复的代码
            break;

        case '-1':
            return $this->allow();
            break;

        default:
            if (!is_numeric($allow_renaming) || ! $allow_renaming > 0) {
                break;
            }
            // 检查创建时间
    }
}

        if (count($tags)) {
            $restrictedButHasAccess = false;

            foreach ($tags as $tag) {
                if ($tag->is_restricted) {
                    if (! $actor->hasPermission('tag'.$tag->id.'.discussion.'.$ability)) {
                        return $this->deny();
                    }

                    $restrictedButHasAccess = true;
                }
            }

            if ($restrictedButHasAccess) {
                return $this->allow();
            }
        }
    }

    /**
     * This method checks, if the user is still allowed to edit the tags
     * based on the configuration item.
     *
     * @param User $actor
     * @param Discussion $discussion
     * @return string|void
     */
    public function tag(User $actor, Discussion $discussion)
    {
        if ($discussion->user_id == $actor->id && $actor->can('reply', $discussion)) {
            $allowEditTags = $this->settings->get('allow_tag_change');

            if (
                $allowEditTags === '-1'
                || ($allowEditTags === 'reply' && $discussion->participant_count <= 1)
                || (is_numeric($allowEditTags) && $discussion->created_at->diffInMinutes(new Carbon) < $allowEditTags)
            ) {
                return $this->allow();
            }
        }
    }
}