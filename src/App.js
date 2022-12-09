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
  }
}

module.exports = App;
