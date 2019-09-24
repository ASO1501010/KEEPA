function friend_search(){

  var Users = ncmb.DataStore("users");
  
  var cnt = 1;

  Users.fetchAll().then(function(results){
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      if(object.get("mailaddress") == document.getElementById('mailaddress').value){
        var div = document.createElement('div');
        div.className = "user" + cnt;
        document.getElementById('a').appendChild(div);
        document.getElementsByClassName('user' + cnt)[0].innerHTML = object.get("objectId");
        cnt++;
      }
    }
  })
  .catch(function(err){
    console.log(err);
  });
}