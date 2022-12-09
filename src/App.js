const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = [];
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
  }
}

module.exports = App;
