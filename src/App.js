const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
    let userNumber = '';
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    let userNum = '';

    function createComputerNumber() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
    }

    function createInputUserNumber() {
      MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userNum) => {
        checkUserNumber(userNum);
        userNumber = userNum;
      });
    }

    function checkUserNumber(user) {
      if (user.length > 3) {
        throw "다시 입력해주세요.";
      }
      if (new Set(user).size !== 3) {
        throw "다시 입력해주세요";
      }
      if (user.includes(0)) {
        throw "다시 입력해주세요";
      }
      if (Number.isNaN(Number(user))) {
        throw "다시 입력해주세요";
      }
    }

    function playGame() {
      for (let ind = 0; ind < computer.length;ind++) {
        if (userNumber[ind] == computer[ind]) {
          strike += 1;
        } else if (computer.includes(userNumber[ind])) {
          ball += 1;
        } else {
          nothing += 1;
        }
      }
    }
  }
}

module.exports = App;
