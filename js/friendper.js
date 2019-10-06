// This is a JavaScript file

function friend_per(){

  var Friend = ncmb.DataStore("friend");

  Friend.equalTo('user_id','値').equalTo('friend_user_id','値').fetchAll().then(function(results){
    if(results.length != 0){

      var friend = results[i];
      friend.set("flg", 1)
      .update()
      .then(function(Friend){
        alert("更新成功");
      })
      .catch(function(err){
        // エラー処理
        alert("");
      });

    }else{
      alert("");
    }
  })
  .catch(function(err){
    console.log(err);
  });

}