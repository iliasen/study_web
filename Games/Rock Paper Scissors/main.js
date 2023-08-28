let userData
let computerData
let globalCount= 0
let userCount = 0
let computerCount = 0
let roundCount = document.getElementById('roundCount')
let score = document.getElementById("score")
let status = document.getElementById("status")

function letPlay(){
    if(globalCount<5){
        userData = Number(document.getElementById("selectID").value)
        computerData = Math.floor(Math.random() *3) + 1
        console.log("Userdata: " + userData ,"ComputerData: " + computerData)

        switch (userData){
            case 1:
                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 2){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
            case 2:
                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 1){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
            case 3:
                if(userData === computerData){
                    console.log("Ничья")
                    status.innerHTML = "Ничья"
                }
                else if (computerData === 1){
                    console.log("Вы проиграли")
                    computerCount++
                    status.innerHTML = "Вы проиграли раунд"
                }
                else {console.log("Победа")
                    userCount++
                    status.innerHTML = "Вы выиграли раунд"
                }
                break
        }
        globalCount++
        roundCount.innerHTML ="Раунд: " + globalCount
        score.innerText = userCount + ":" + computerCount
        if(globalCount === 5){
            roundCount.innerHTML ="Раунд: " + globalCount + ". Время подводить итоги"
            {if(userCount > computerCount) alert('Вы выиграли !')
            else alert('Вы проиграли 😐')
            }
        }
    }
}
