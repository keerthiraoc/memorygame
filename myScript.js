var flipped=0,flip=0;
var x,y;
var a=0,b=0,firstCard,secondCard;
function flipTile(tile,val)
{
    tile.classList.add('flip');
    if(flipped<2)
    {
        if(flipped==0)
        {
        a=val;
        firstCard=tile;
        flipped++;
        }
        else if(flipped==1)
        {
        b=val;
        secondCard=tile;
        flipped=0;
        }
        if(a===b)
        {
            secondCard.onclick=null;
            firstCard.onclick = null;
            a=0;b=0;
        }
        else if(a!==b && b!=0)
        {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            a=0;b=0;
        }
    }
}