import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import User from 'flarum/common/models/User';
import ItemList from 'flarum/common/utils/ItemList';
import RankBadge from './components/RankBadge';
import Badge from 'flarum/components/Badge';

app.initializers.add('kiddo/flarum-traditional-rank-icons', () => {
  extend(User.prototype, 'badges', function (badges) {
    const items = new ItemList();
    const groups = this.groups();

    if (groups == false) {
        return ;
    }
    
    
   
    badges.toArray().forEach((badge) => {
      // clear all original badge
      badges.remove(badge);
    });

    groups.forEach((group) => {
      items.add(`group${group?.id()}`, <RankBadge group={group} />);
    });

    // For flarum/suspend
    if (app.initializers.has('flarum-suspend')) {
      const until = this.suspendedUntil();

      if (new Date() < until) {
        items.add(
          'suspended',
          <Badge icon="fas fa-ban" type="suspended" label={app.translator.trans('flarum-suspend.forum.user_badge.suspended_tooltip')} />
        );
      }
    }

    return items;
  });
});
