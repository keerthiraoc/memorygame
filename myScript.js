var match=0;
var flipped=0,flips=0;
var a=0,b=0,firstCard,secondCard;
function flipTile(tile,val)
{
    flips++;
    // ("#counter").text(flips);
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
            match++;
        }
        else if(a!==b && b!=0)
        {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            a=0;b=0;
        }
        setTimeout(flipTile,2000);
    }
}
