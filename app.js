let player = document.querySelector(".player")
let opposite = document.querySelector(".opposite")
let youeScore = document.querySelector(".score")
let instructions = document.querySelector(".instrucions")
let gameOver = document.querySelector(".game-over")
let animation = document.querySelector(".oppositeMove")
let playAgain = document.querySelector(".again")
let playGameSound = document.querySelector("#plauSound")
let gamwOverSound = document.querySelector("#gameOverSound")
let gameSpeed = document.querySelector(".speed")


score = 0
cross = true



function mainLogics() {

    playGameSound.play()

    youeScore.style.visibility = "visible"



    opposite.classList.add("oppositeMove")
    instructions.style.visibility = "hidden"

    document.onkeydown = function (e) {

        console.log('key code is', e.keyCode)

        if (e.keyCode == 38) {
            player.classList.add("jump")

            setTimeout(() => {
                player.classList.remove("jump")
            }, 500);
        } else if (e.keyCode == 40) {

            playerMoveRight = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'))

            player.style.left = playerMoveRight + 115 + "px"

        } else if (e.keyCode == 37) {

            playerMoveLeft = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'))

            player.style.left = (playerMoveLeft - 115) + "px"

        }



    }





    setInterval(() => {

        px = parseInt(window.getComputedStyle(player, null).getPropertyValue("left"))
        py = parseInt(window.getComputedStyle(player, null).getPropertyValue("top"))


        ox = parseInt(window.getComputedStyle(opposite, null).getPropertyValue("left"))
        oy = parseInt(window.getComputedStyle(opposite, null).getPropertyValue("top"))


        offsetX = Math.abs(px - ox)
        offsetY = Math.abs(py - oy)

        // console.log(offsetX, offsetY)


        if (offsetX < 150 && offsetY < 60) {

            playGameSound.pause()
            gamwOverSound.play()
            gameOver.style.visibility = "visible"
            opposite.classList.remove("oppositeMove")
            playAgain.style.visibility = "visible"



        }
        else if (cross && offsetX < 210) {

            score += 10
            updateScore(score)

            cross = false

            setTimeout(() => {

                cross = true

            }, 1000);


            setTimeout(() => {

               

                animatinIteration = parseFloat(window.getComputedStyle(opposite, null).getPropertyValue("animation-duration"));
                updateAnimation = animatinIteration - 0.2

                let Totalanimation = opposite.style.animationDuration = updateAnimation + "s"
                gameSpeed.innerHTML = "duration speed : " + Totalanimation + "ec"

                console.log(updateAnimation)



          

            }, 500);

            // setTimeout(() => {




            // }, 500);






        }


    }, 400);




    function updateScore(score) {
        youeScore.innerHTML = "Your Score " + score

    }





}





function playAgainGame() {

    playGameSound.currentTime = 0
    playGameSound.play()
    score = 0
    opposite.style.animationDuration = "6s"
    youeScore.innerHTML = 'Your Score ' + score



    player.style.left = "30px"
    gameOver.style.visibility = "hidden"
    playAgain.style.visibility = "hidden"
    gameOver.style.colo = "red"
    gameSpeed.style.visibility = "visible"
    mainLogics()


}







