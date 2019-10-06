function friend_per(){

  var Friend = ncmb.DataStore("friend");

  Friend.equalTo('user_id','値').equalTo('friend_user_id','値').fetchAll().then(function(results){
    if(results.length != 0){

      var friend = results[i];
      friend.set("user_id",null)
      .set("friend_user_id", null)
      .set("flg", null)
      .update()
      .then(function(Friend){
        alert("削除成功");
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