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

    function playGame() {
      strike = 0;
      ball = 0;
      nothing = 0;
      for (let ind = 0; ind < 3; ind++) {
        if (userNumber[ind] == computer[ind]) {
          strike += 1;
        } else if (userNumber.includes(computer[ind])) {
          ball += 1;
        } else {
          nothing += 1;
        }
      }
      return checkScoresResult();
    }

    function checkScoresResult() {
      if (strike == 3) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return askRestart();
      } else if (nothing == 3) {
        MissionUtils.Console.print("낫싱");
      } else if (ball > 0 && strike > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (strike === 0 && ball > 0) {
        MissionUtils.Console.print(`${ball}볼`);
      } else if (strike > 0 && ball === 0) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
      return createInputUserNumber();
    }

    function askRestart() {
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (num) => {
        if (num == 1) {
          return createComputerNumber();
        } else if (num == 2) {
          MissionUtils.Console.print("게임 종료");
          return MissionUtils.Console.close();
        } else {
          return askRestart();
        }
      });
    }

    createComputerNumber();
  }
}

module.exports = App;
