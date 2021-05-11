

function check(arr,playerVal){
    let flag=0
    console.log(playerVal,typeof( playerVal));
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            let count=0;
            if(arr[i][j]===playerVal){
                ////// CHECK ROW ////////
                for(let k=0;k<3;k++){
                    if(arr[i][k]===playerVal){
                        count++;
                    }
                }
                if(count===3){
                    flag=1;
                    break;
                }
                /////// CHECK COLUMN ////////
                count=0;
                for(let k=0;k<3;k++){
                    if(arr[k][j]===playerVal){
                        count++;
                    }
                }
                if(count===3){
                    flag=1;
                    break;
                }
                ///// CHECK DIAGONAL ///////
                count=0;
                if(i+j === 2){
                    if(arr[0][2]===playerVal){
                        count++;
                    }
                    if(arr[1][1]===playerVal){
                        count++;
                    }
                    if(arr[2][0]===playerVal){
                        count++;
                    }
                    if(count===3){
                        flag=1;
                        break;
                    }
                }
                count=0;
                if(i===j){
                    for(let k=0;k<3;k++){
                        if(arr[k][k]===playerVal){
                            count++;
                        }
                    }
                    if(count===3){
                        flag=1;
                        break;
                    }
                }
            }
        }
        if(flag==1){
            break;
        }
    }
    return flag;

}
    
export default check;
 