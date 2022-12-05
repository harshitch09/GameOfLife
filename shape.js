let grid;
let cols;
let rows;
let w = 10;
let width = window.innerWidth;
let height = window.innerHeight;
let next;
let sum=0;

function make2DArray(col, row)
{
    let arr= new Array(col);
    for(let i=0; i<arr.length; i++)
    {
        arr[i]= new Array(row);
    }
    return arr;
}

function setup()
{
    createCanvas(width ,height);
    cols = width / w;
    rows = height / w;
    grid= make2DArray(cols, rows);
    for(let i=0; i<width/w; i++)
    {
        for(let j=0; j<height/w; j++)
        {
            grid[i][j]= floor(random(2));
        }
    }

    //Glider

  /*  for(let i=0; i<width/w; i++)
    {
        for(let j=0; j<height/w; j++)
        {
            grid[i][j]=0;
        }
    }
    m=37; n=20;*/
    //DIEHARD
   /* grid[m-3][n]=1;
    grid[m-2][n]=1;
    grid[m-2][n+1]=1;
    grid[m+2][n+1]=1;
    grid[m+3][n+1]=1;
    grid[m+4][n+1]=1;
    grid[m+3][n-1]=1;*/

    //R PENTOMINO
   /* grid[m][n]=1;
    grid[m+1][n]=1;
    grid[m][n+1]=1;
    grid[m][n+2]=1;
    grid[m-1][n+1]=1;*/

   /* grid[m][n]=1;
    grid[m+2][n-1]=1;
    grid[m+2][n]=1;
    grid[m+4][n-2]=1;
    grid[m+4][n-3]=1;
    grid[m+4][n-4]=1;
    grid[m+6][n-3]=1;
    grid[m+6][n-4]=1;
    grid[m+6][n-5]=1;
    grid[m+7][n-4]=1;*/
}

function draw()
{
    
    background(255, 0, 0);
    for(let i=0; i<width/w; i++)
    {
        for(let j=0; j<height/w; j++)
        {
            rect(i*w, j*w, w, w);
            
            if(grid[i][j]==0)
            {
                fill(15,15,15);
                stroke(0);
            }
            else
            {
                fill(255);
                stroke(255);
            }
        }
    } 


    next = make2DArray(cols, rows);
    for(let i=0; i<width/w; i++)
    {
        for(let j=0; j<height/w; j++)
        {
            sum=0;
            sum = doSum(grid, i, j);
            if(grid[i][j]==1 && (sum<2 || sum>3))
            {
                next[i][j]=0;
            }
            else if(grid[i][j]==0 && sum==3)
            {
                next[i][j]=1;
            }
            else if(grid[i][j]==1 && (sum==2 || sum==3))
            {
                next[i][j]=1;
            }
            else 
            {
                next[i][j] = grid[i][j];
            }
        }
    }
    grid=next;
}


function doSum(grid, x, y)
{
    for(let i=-1; i<2; i++)
    {
        for(let j=-1; j<2; j++)
        {
            sum+= grid[(x+i+cols)%cols][(y+j+rows)%rows];
        }
    }
    sum-= grid[x][y];
    return sum;
}