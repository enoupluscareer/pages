function g(e)
{
    document.cookie="S="+e.id;
    location.href="https://epcareerjobs.blogspot.com/search/label/"+document.getElementById(e.id).innerHTML+" Jobs";
}
function focusState()
{
    var state=getCookie("S");
    var element=document.getElementById(state);
    element.style.backgroundColor="blue";
    element.style.color="#FFF";
    location.href=document.URL+"#"+state;
}


function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
