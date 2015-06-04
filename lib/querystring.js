module.exports = function (input) {


  var newstr = input.replace('?','' ).split('&');

  var newobj = {};
    for (var i = 0; i < newstr.length; i++) {
      var data = newstr[i].split('=');
      newobj[data[0]]= data[1];
    };
      console.log(newobj);
  return newobj;
  };
