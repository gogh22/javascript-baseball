const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computer = [];
    let userNumber = '';
    let strike = 0;
    let ball = 0;
    let nothing = 0;

    function createComputerNumber() {
      computer = [];
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      return createInputUserNumber();
    }

    function createInputUserNumber() {
      MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userNum) => {
        if (checkUserNumber(userNum)) {
          userNumber = userNum;
          return playGame();
        } else {
          throw "다시 입력해주세요.";
        }
      });
    }

    function checkUserNumber(user) {
      if (user.length > 3) {
        return false;
      }
      if (new Set(user).size !== 3) {
        return false;
      }
      if (user.includes(0)) {
        return false;
      }
      if (Number.isNaN(Number(user))) {
        return false;
      }
      return true;
    }
  }
}

module.exports = App;
