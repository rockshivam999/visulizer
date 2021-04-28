const board=document.getElementById("board");
const ctx=board.getContext("2d");
board.width=1000;
board.height=1000;

ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

var arr=[10,15,20,18,44,20,45,99,34,44,324,65,24,65,23];

function draw(arr){
    ctx.clearRect(0,0,1000,1000);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.stroke();
    var y=500;
    var move=40;
    var x=50;
    // ctx.fillStyle = "red";
    arr.forEach(num => {
        ctx.moveTo(x,y);
        ctx.rect(x,y,move,-num);
        x+=move
        ctx.stroke()
    });
    // console.log("hello")
    // requestAnimationFrame(draw));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function delaycallback(delaytime,arrt){
    sleep(delaytime)
    .then(() => { draw(arrt)});
  }

function bubblesort(arr){
    var k=2;
    for(var i=0;i<arr.length;i++){
        for(var j=1;j<arr.length-i;j++){
                if(arr[j-1]>arr[j]){
                    var t=arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=t;
                    
                }
                k++
                var arrt=arr.slice(0); 
                delaycallback(k*100,arrt);
               
                
        }
    }
}

bubblesort(arr);
var k=1;
function quicksort(arr,l,r){
    console.log(k+" "+l+" "+r);
    if(r<=l){
        return;
    }else{
        var p=l+Math.floor(Math.random() * 100)%(r-l+1);
        var curr=l;
        var t=arr[p];
        arr[p]=arr[r];
        arr[r]=t;

        for(var i=l;i<r;i++){
            if(arr[i]<=t){
                var x=arr[i];
                arr[i]=arr[curr];
                arr[curr]=x;
                cur++;
            }
            k++;
            var arrt=arr.slice(0); 
            delaycallback(k*100,arrt);
        }
        t=arr[curr];
        arr[curr]=arr[r];
        arr[r]=t;
        quicksort(arr,l,curr-1);
        quicksort(arr,curr+1,r);
    }
    
}
// quicksort(arr,0, arr.length -1);