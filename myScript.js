var flipped=0,flip=0;
var x,y;
var a,b,c,d;
function flipTile(tile,val)
{
    // "tile+1".style.display="none";
    // "tile+2".style.display="block";
    if(flipped<2)
    {
        if(flipped==0)
        {
        a=val;
        c=tile;
        flipped++;
        }
        else if(flipped==1)
        {
        b=val;
        d=tile;
        flipped=0;
        }
        if(a==b)
        {
            c.style.display="none";
            d.style.display="none";
        }
        else if(a!=b)
        {
        }
    }
}