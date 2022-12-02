var myArr = ["lol","i see","shit","In","Array","app","kill me","class"];
        
function search()
{
    var txt = document.getElementById('txt').value;
    var found = txt;
    
    for(let i=0; i<myArr.length;i++)
    if(found == myArr[i])
    {
        alert(found);
    }
    
}
  