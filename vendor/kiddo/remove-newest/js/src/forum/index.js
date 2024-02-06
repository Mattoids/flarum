import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage'



app.initializers.add('kiddo/remove-newest', () => {
  extend(IndexPage.prototype, ['oncreate', 'onupdate'], function () {
      var ul = this.$(".item-sort").children("div").children("ul").children("li");
      
      for (var index = 0; index < ul.length; index++) {
        if (ul[index].innerHTML.indexOf("Newest") != -1 || ul[index].innerHTML.indexOf("新鲜出炉") != -1){
          ul[index].remove();
        }
      }
    })
});
