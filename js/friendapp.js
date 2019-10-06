// This is a JavaScript file

function friend_app(){

  var Friend = ncmb.DataStore("friend");

  Friend.equalTo('user_id','値').equalTo('friend_user_id','値').fetchAll().then(function(results){
    if(results.length == 0){
      var friend = new Friend();
      
      friend.set("user_id", '値')
      .set("friend_user_id", '値')
      .set("flg", 0)
      .save()
      .then(function(Friend){
        alert("登録成功");
      })
      .catch(function(err){
        // エラー処理
        alert("登録失敗");
      });

    }else{
      alert("すでに申請済みです");
    }
  })
  .catch(function(err){
    console.log(err);
  });

}