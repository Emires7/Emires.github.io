const computer = document.querySelector('.computer img');
const player = document.querySelector('.player img');
const computerPoint = document.querySelector('.computerPoint');
const playerPoint = document.querySelector('.playerPoint');
const options = document.querySelectorAll('.options button');


options.forEach((option) =>{
    option.addEventListener('click', () => {
        computer.classList.add('shakercomputer');
        player.classList.add('shakerplayer');

        setTimeout(()=>{
            computer.classList.remove('shakercomputer');
            player.classList.remove('shakerplayer');

            player.src = './'+ option.innerHTML+"player.png.png";

            const choice = ['ROCK','PAPER','SCISSORS'];
            let arrayNo = Math.floor (Math.random()* 3)
            let computerchoice = choice[arrayNo];
            computer.src = './'+ computerchoice+"computer.png.png";

            let cPoints = parseInt(computerPoint.innerHTML);
            let pPoints = parseInt(playerPoint.innerHTML);


            if (option.innerHTML === "ROCK"){
                if(computerchoice ==="PAPER"){
                    cPoints ++;
                } else if(computerchoice=== "SCISSORS"){
                    pPoints ++;
                }
            }
            if(option.innerHTML === "PAPER"){
                if (computerchoice ==="SCISSORS"){
                    cPoints ++;
                }
                else if(computerchoice === "ROCK"){
                    pPoints ++;
                }
            }
            if (option.innerHTML === "SCISSORS"){
                if(computerchoice === "ROCK"){
                    cPoints ++;
                }
                else if (computerchoice === "PAPER"){
                    pPoints ++;
                }
            }
            computerPoint.innerHTML = cPoints;
            playerPoint.innerHTML = pPoints;
        }, 900)
    });
});