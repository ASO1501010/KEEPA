// This is a JavaScript file

function friend_list(){

  var Friend = ncmb.DataStore("friend");

  Friend.equalTo('user_id','値').fetchAll().then(function(results){
    if(results.length == 0){
      var object = results[i];

    }else{
      alert("");
    }
  })
  .catch(function(err){
    console.log(err);
  });

}