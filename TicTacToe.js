let boxes = document.querySelectorAll(".box");
let player = true;  // player
let msgId = document.querySelector("#msg")
let message = document.querySelector(".msg-div")
let reset = document.querySelector("#rst");
let newbtn = document.querySelector("#new-btn");

// Creating a 2D array to store all the WINNING patterns 

let winArray = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
];



// RESET BUTTON LOGIC
const resetbtn = ()=>{
    player = true;                             // original condition
    enableBoxes();
    message.classList.add("hide");            // adding the hide class again to display the message after winning 

}

reset.addEventListener("click",resetbtn);        // when we click reset game will start over 


// ACCESSING EACH BOX 
boxes.forEach((box)=>{                            

    box.addEventListener("click",()=>{       // event listner on all the individual boxes
        
        if(player){                        // If its a turn of player1 then print X
            box.innerText = "X";
            player=false;                  // make condition false for next player
        }else{
            box.innerText="O";            // print O for second player
            player = true;               // change the condition again 
        }

        box.disabled = true;      // Once a player click a box that value will be stored and wont get changed agin 

        checkWinner();     // callback to checkWinnner fucntion
    })
});


// DISABLING all the boxes after a player won the game 
let disableBoxes = ()=>{                  
    
    for( let box of boxes){       // accessing every box

        box.disabled = true;       // turn disable mode on 

    }
}

// Starting a new game enabling all the boxes again 
let enableBoxes = ()=>{              
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";                 // To remove previous stored values
    }
    
 };


 // DISPLAYING WINNING MESSAGE AFTER GAME OVER
const showWinner =() => {

    msgId.innerText = 'Congratulations You Won';
    message.classList.remove("hide");
    disableBoxes();

};


// MAIN GAME LOGIC
const checkWinner = ()=>{
    for(let pattern of winArray){                          // Traversing to all the winning patterns 
        
        // ACCESSING POSITIONS OF BOXES

        let pos1 = boxes[pattern[0]].innerText;        
        let pos2 = boxes[pattern[1]].innerText; 
        let pos3 = boxes[pattern[2]].innerText; 

        if (pos1 != "" && pos2 != "" && pos3 != "" ){    // checking positions shouldnt be left blanked
            
            if(pos1 ===  pos2 && pos2 === pos3){  // if all three positions are equal then print winner

               
               showWinner(pos1);
               count();


            }
        }
    }
};






