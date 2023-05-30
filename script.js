// отрисовка html

function createElHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  const container = document.createElement('div');
  container.classList.add('container');
  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header__title');
  headerTitle.innerHTML = 'Game Puzzle';
  const headerWrap = document.createElement('div');
  headerWrap.classList.add('header__wrap');
  const btnShuffle = document.createElement('button');
  btnShuffle.classList.add('header__btn');
  btnShuffle.innerHTML = 'Shuffle and start';
  btnShuffle.addEventListener('click', startGame);
  const btnSave = document.createElement('button');
  btnSave.classList.add('header__btn');
  btnSave.innerHTML = 'Save';
  btnSave.addEventListener('click', saveGame);
  const btnContinueSavedGame = document.createElement('button');
  btnContinueSavedGame.classList.add('header__btn');
  btnContinueSavedGame.innerHTML = 'Continue Saved Game';
  btnContinueSavedGame.addEventListener('click', continueSavedGame);
  const btnResults = document.createElement('button');
  btnResults.classList.add('header__btn');
  btnResults.innerHTML = 'Results';
  btnResults.addEventListener('click', showResults);
  headerWrap.append(btnShuffle, btnSave, btnContinueSavedGame, btnResults);
  container.append(headerTitle, headerWrap);
  header.append(container);
  document.body.prepend(header);
}

function createElMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  const container = document.createElement('div');
  container.classList.add('container');
  const game = document.createElement('section');
  game.classList.add('game');
  const gameItem = document.createElement('div');
  gameItem.classList.add('game__item');
  const gameWrap1 = createElMoves();
  const gameWrap2 = createElTime();
  gameItem.append(gameWrap1);
  gameItem.append(gameWrap2);
  const gameItem2 = createElCanvas();
  const gameItem3 = createElStructure();
  const gameItem4 = createElStructure2();
  game.append(gameItem, gameItem2, gameItem3, gameItem4);
  container.append(game);
  main.append(container);
  document.body.append(main);
}

function createElMoves() {
  const gameWrap = document.createElement('div');
  gameWrap.classList.add('game__wrap');
  const gameTitle = document.createElement('span');
  gameTitle.classList.add('game__title');
  gameTitle.innerHTML = 'Moves:';
  const gameAmount = document.createElement('span');
  gameAmount.classList.add('game__amount');
  gameAmount.setAttribute('id', 'steps');
  gameAmount.innerHTML = '0';
  gameWrap.append(gameTitle, gameAmount);
  return gameWrap;
}

function createElTime() {
  const gameWrap = document.createElement('div');
  gameWrap.classList.add('game__wrap');
  const gameTitle = document.createElement('span');
  gameTitle.classList.add('game__title');
  gameTitle.innerHTML = 'Time:';
  const gameTime = createElGameTime();
  gameWrap.append(gameTitle, gameTime);
  return gameWrap;
}

function createElGameTime() {
  const gameTime = document.createElement('div');
  gameTime.classList.add('game__time');
  for (let i = 1; i <= 3; i++) {
    const span = document.createElement('span');
    span.classList.add('game__time-item');
    span.setAttribute('id', `time${i}`);
    span.textContent = '00';
    gameTime.append(span);
  }
  return gameTime;
}

function createElCanvas() {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game__item');
  const canvas = document.createElement('div');
  canvas.classList.add('canvas');
  canvas.setAttribute('id', 'canvas');
  gameItem.append(canvas);
  return gameItem;
}

function createElStructure() {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game__item');
  const gameStructure = document.createElement('div');
  gameStructure.classList.add('game__structure');
  const gameStructureTitle = document.createElement('span');
  gameStructureTitle.classList.add('game__structure-title');
  gameStructureTitle.innerHTML = 'Frame size:';
  const gameStructureAmount = document.createElement('div');
  gameStructureAmount.classList.add('game-structure-amount');
  gameStructureAmount.setAttribute('id', 'game-structure-amount');
  gameStructure.append(gameStructureTitle, gameStructureAmount);
  gameItem.append(gameStructure);
  return gameItem;
}

function createElStructure2() {
  const gameItem = document.createElement('div');
  gameItem.classList.add('game__item');
  const gameStructure = document.createElement('div');
  gameStructure.classList.add('game__structure');
  const gameStructureTitle = document.createElement('span');
  gameStructureTitle.classList.add('game__structure-title');
  gameStructureTitle.innerHTML = 'Other sizes:';
  const gameWrapBtn = document.createElement('div');
  gameWrapBtn.classList.add('game__wrap-btn');
  gameWrapBtn.setAttribute('id', 'game-wrap-btn');
  gameStructure.append(gameStructureTitle, gameWrapBtn);
  gameItem.append(gameStructure);
  return gameItem;
}

function createElFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const container = document.createElement('div');
  container.classList.add('container');
  const footerCopyright = document.createElement('div');
  footerCopyright.classList.add('footer__copyright');
  const footerContent = document.createElement('span');
  footerContent.classList.add('footer__content');
  footerContent.innerHTML = '\u00A9 2022 ';
  const footerLink1 = document.createElement('a');
  footerLink1.classList.add('footer__link');
  footerLink1.setAttribute('href', 'https://github.com/oolenkazolot?tab=repositories');
  footerLink1.setAttribute('target', '_blank');
  footerLink1.innerHTML = 'olenkazolot';
  const footerLink2 = document.createElement('a');
  footerLink2.classList.add('footer__link');
  footerLink2.setAttribute('href', 'https://github.com/oolenkazolot?tab=repositories');
  footerLink2.setAttribute('target', '_blank');
  const footerImg = document.createElement('img');
  footerImg.classList.add('footer__img');
  footerImg.setAttribute('src', 'assets/svg/git-icon.svg');
  footerImg.setAttribute('alt', 'github-img');
  footerLink2.append(footerImg);
  footerContent.append(footerLink1, footerLink2);
  footerCopyright.append(footerContent);
  container.append(footerCopyright);
  footer.append(container);
  document.body.append(footer);
}

function createElModalWinner() {
  const modalWinner = document.createElement('div');
  modalWinner.classList.add('modal-winner');
  modalWinner.setAttribute('id', 'modal-winner');
  const modalWinnerBackdrop = document.createElement('div');
  modalWinnerBackdrop.classList.add('modal-winner__backdrop');
  modalWinnerBackdrop.setAttribute('id', 'modal-winner-backdrop');
  modalWinnerBackdrop.addEventListener('click', closeModalWinner);
  const modalWinnerInner = createElModalWinnerInner(modalWinner);
  modalWinner.append(modalWinnerBackdrop, modalWinnerInner);
  document.body.append(modalWinner);
}

function createElModalWinnerInner(modalWinner) {
  const modalWinnerInner = document.createElement('div');
  modalWinnerInner.classList.add('modal-winner__inner');
  const modalWinnerBtn = document.createElement('div');
  modalWinnerBtn.classList.add('modal-winner__btn');
  const modalWinnerIcon = document.createElement('i');
  modalWinnerIcon.classList.add('modal-winner__icon-close');
  modalWinnerIcon.classList.add('icon-close');
  modalWinnerBtn.append(modalWinnerIcon);
  modalWinnerBtn.addEventListener('click', () => {
    modalWinner.classList.remove('active');
  });
  const modalWinnerContent = createElModalWinnerContent();
  const modalWinnerInfo = createElModalWinnerInfo();
  modalWinnerInner.append(modalWinnerBtn, modalWinnerContent, modalWinnerInfo);
  return modalWinnerInner;
}

function createElModalWinnerContent() {
  const modalWinnerContent = document.createElement('div');
  modalWinnerContent.classList.add('modal-winner__content');
  const modalContentItem = document.createElement('div');
  modalContentItem.classList.add('modal-winner__content-item');
  modalContentItem.innerHTML = 'Hooray!';
  const modalContentItem2 = document.createElement('div');
  modalContentItem2.classList.add('modal-winner__content-item');
  modalContentItem2.innerHTML = 'You solved the puzzle!';
  modalWinnerContent.append(modalContentItem, modalContentItem2);
  return modalWinnerContent;
}

function createElModalWinnerInfo() {
  const modalWinnerInfo = document.createElement('div');
  modalWinnerInfo.classList.add('modal-winner__info');
  const modalInfoItem = document.createElement('div');
  modalInfoItem.classList.add('modal-winner__info-item');
  modalInfoItem.setAttribute('id', 'time');
  const modalInfoItem2 = document.createElement('div');
  modalInfoItem2.classList.add('modal-winner__info-item');
  modalInfoItem2.setAttribute('id', 'moves');
  modalWinnerInfo.append(modalInfoItem, modalInfoItem2);
  return modalWinnerInfo;
}

function openModalWinner(steps) {
  const modal = document.getElementById('modal-winner');
  modal.classList.add('active');
  const timeEl = document.getElementById('time');
  const movesEl = document.getElementById('moves');
  movesEl.innerHTML = `Moves: ${steps}`;
  timeEl.innerHTML = 'Time:' + timer.winTimer();
}

function closeModalWinner() {
  const modal = document.getElementById('modal-winner');
  modal.classList.remove('active');
  game.imgWin.classList.remove('active');
}

createElHeader();
createElMain();
createElFooter();
createElModalWinner();

// инициализация
const gameHours = document.getElementById('time1');
const gameMinutes = document.getElementById('time2');
const gameSeconds = document.getElementById('time3');
const gameAmountSteps = document.getElementById('steps');

//results modal
const resModalSetting = {
  class: 'result-modal',
  title: 'Results',
  table: [
    {
      title: 'N',
      class: 'num',
    },
    {
      title: 'Moves',
      class: 'moves',
    },
    {
      title: 'Time',
      class: 'time',
    },
    {
      title: 'Board size',
      class: 'size',
    },
    {
      title: 'Time/Moves',
      class: 'score',
    },
  ],
};

const resultsModal = document.createElement('div');
resultsModal.classList.add(resModalSetting.class);
const resultsModalBack = document.createElement('div');
resultsModalBack.classList.add(`${resModalSetting.class}__back`);
resultsModalBack.addEventListener('click', closeResModal);
resultsModal.append(resultsModalBack);
const resultsModalContent = document.createElement('div');
resultsModalContent.classList.add(`${resModalSetting.class}__content`);
const resultsModalClose = document.createElement('i');
resultsModalClose.classList.add('icon-close');
resultsModalClose.classList.add(`${resModalSetting.class}__close`);
resultsModalClose.addEventListener('click', closeResModal);
resultsModalContent.append(resultsModalClose);
const resultsModalHeader = document.createElement('div');
resultsModalHeader.classList.add(`${resModalSetting.class}__title`);
resultsModalHeader.textContent = resModalSetting.title;
resultsModalContent.append(resultsModalHeader);
const resultsModalTableHeader = document.createElement('div');
resultsModalTableHeader.classList.add(`${resModalSetting.class}__header`);
resModalSetting.table.forEach((item) => {
  const col = document.createElement('div');
  col.classList.add(`${resModalSetting.class}__col`);
  col.classList.add(`${resModalSetting.class}__col--${item.class}`);
  col.textContent = item.title;
  resultsModalTableHeader.append(col);
});
resultsModalContent.append(resultsModalTableHeader);
const resultsModalList = document.createElement('div');
resultsModalList.classList.add(`${resModalSetting.class}__list`);
resultsModalContent.append(resultsModalList);
resultsModal.append(resultsModalContent);
document.body.append(resultsModal);
function openResModal() {
  resultsModal.classList.add('active');
  let resultsSaved = localStorage.getItem('results');
  let results = resultsSaved ? JSON.parse(resultsSaved) : [];
  resultsModalList.innerHTML = '';
  results.forEach((rowRes, rowNum) => {
    const row = document.createElement('div');
    row.classList.add(`${resModalSetting.class}__row`);
    resModalSetting.table.forEach((item, index) => {
      const value = index === 0 ? rowNum + 1 : getResultValue(index, rowRes);
      const col = document.createElement('div');
      col.classList.add(`${resModalSetting.class}__col`);
      col.classList.add(`${resModalSetting.class}__col--${item.class}`);
      col.textContent = value;
      row.append(col);
    });
    resultsModalList.append(row);
  });
}
function closeResModal() {
  resultsModal.classList.remove('active');
}

function getResultValue(index, row) {
  if (index == 1) {
    return row.moves;
  }

  if (index == 2) {
    return row.time;
  }

  return index == 3 ? `${row.size}x${row.size}` : row.score.toFixed(3);
}
//end res modal

class Timer {
  // инициализация класса
  constructor(gameHours, gameMinutes, gameSeconds) {
    this.timer = null;
    this.savedTime = null;
    this.time = 0;
    this.startTime = null;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.gameHours = gameHours;
    this.gameMinutes = gameMinutes;
    this.gameSeconds = gameSeconds;
  }

  getTimeString() {
    const sec = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    const min = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    const hours = this.hours < 10 ? '0' + this.hours : this.hours;
    return `${hours}:${min}:${sec}`;
  }

  getTime() {
    const sec = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    const min = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    const hours = this.hours < 10 ? '0' + this.hours : this.hours;
    return sec + min * 60 + hours * 60 * 60;
  }

  getTimerData() {
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    };
  }
  //очищение таймера
  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.addTextContent();
  }

  winTimer() {
    const sec = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    const min = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    const hours = this.hours < 10 ? '0' + this.hours : this.hours;

    clearInterval(this.timer);
    return `${hours}:${min}:${sec}`;
  }

  // включает таймер
  startTimer() {
    // очищает таймер при новой игре
    if (gameStarted) {
      this.clearTimer();
    }

    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
      }

      if (this.minutes == 60) {
        this.minutes = 0;
        this.hours++;
      }
      this.addTextContent();
    }, 1000);
  }

  continueTimer(hours, minutes, seconds) {
    this.clearTimer();
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;

    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
      }

      if (this.minutes == 60) {
        this.minutes = 0;
        this.hours++;
      }
      this.addTextContent();
    }, 1000);
  }

  //добавляет в html таймер значения
  addTextContent() {
    this.gameSeconds.textContent = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.gameMinutes.textContent = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.gameHours.textContent = this.hours < 10 ? '0' + this.hours : this.hours;
  }
}

const timer = new Timer(gameHours, gameMinutes, gameSeconds);

class Game {
  // инициализация класса
  constructor(gameAmountSteps, openModalWinner, closeModalWinner) {
    this.clickTime = 0;
    this.canvas = document.createElement('canvas');
    this.canvas.addEventListener('click', (e) => {
      if (e.timeStamp - this.clickTime < 150) {
        this.updateGame(e.offsetX, e.offsetY);
      }
    });
    this.isMove = null;
    this.canvas.addEventListener('mousedown', (e) => {
      this.clickTime = e.timeStamp;
      this.setMoveEl(e.offsetX, e.offsetY);
    });
    this.canvas.addEventListener('mouseup', (e) => {
      this.mouseUp(e.offsetX, e.offsetY);
    });
    this.canvas.addEventListener('mousemove', (e) => {
      this.moveMouse(e.offsetX, e.offsetY);
    });
    this.mouseX = 0;
    this.mouseY = 0;
    this.context = this.canvas.getContext('2d');
    this.canvasContainer = document.getElementById('canvas');
    this.arrComponentsInfo = [];
    this.steps = 0;
    this.ElAmountSteps = gameAmountSteps;
    this.imgWin = document.createElement('img');
    this.imgWin.classList.add('win-image');
    this.imgWin.addEventListener('click', closeModalWinner);
    this.imgWin.setAttribute('src', 'assets/images/confetti.gif');
    this.canvasContainer.append(this.imgWin);
    this.openModal = openModalWinner;
    this.player = new Audio('assets/sound/step.mp3');

    this.volume = document.createElement('div');
    this.volume.classList.add('sound');

    this.volumeImg = document.createElement('img');
    this.volumeImg.src = 'assets/images/volume.svg';
    this.volumeImg.classList.add('sound__img');
    this.volume.append(this.volumeImg);
    this.volume.addEventListener('click', () => {
      if (this.player.muted) {
        this.player.muted = false;
        this.volume.classList.remove('sound--muted');
      } else {
        this.player.muted = true;
        this.volume.classList.add('sound--muted');
      }
    });

    document.querySelector('.game__item').append(this.volume);
  }

  mouseUp(x, y) {
    setTimeout(() => {
      this.clickTime = 0;
    }, 0);
    if (!this.isMove) {
      return;
    }
    const emptyEl = this.arrComponentsInfo.find((item) => item.value == '');

    if (
      (this.isMove.x + this.isMove.width >= emptyEl.x &&
        this.isMove.x <= emptyEl.x &&
        ((this.isMove.y <= emptyEl.y && this.isMove.y >= emptyEl.y - this.isMove.width) || (this.isMove.y >= emptyEl.y && this.isMove.y <= emptyEl.y + this.isMove.width))) ||
      (this.isMove.x >= emptyEl.x &&
        this.isMove.x - this.isMove.width <= emptyEl.x &&
        ((this.isMove.y <= emptyEl.y - this.isMove.width && this.isMove.y + this.isMove.width >= emptyEl.y) || (this.isMove.y >= emptyEl.y && this.isMove.y <= emptyEl.y + this.isMove.width))) ||
      (this.isMove.y + this.isMove.width >= emptyEl.y &&
        this.isMove.y <= emptyEl.y &&
        ((this.isMove.x <= emptyEl.x - this.isMove.width && this.isMove.x + this.isMove.width >= emptyEl.x) || (this.isMove.x >= emptyEl.x && this.isMove.x <= emptyEl.x + this.isMove.width))) ||
      (this.isMove.y >= emptyEl.y &&
        this.isMove.y - this.isMove.width <= emptyEl.y &&
        ((this.isMove.x <= emptyEl.x - this.isMove.width && this.isMove.x + this.isMove.width >= emptyEl.x) || (this.isMove.x >= emptyEl.x && this.isMove.x <= emptyEl.x + this.isMove.width)))
    ) {
      const x = emptyEl.x;
      const y = emptyEl.y;
      emptyEl.x = this.isMove['oldX'];
      emptyEl.y = this.isMove['oldY'];
      const animationStepX = (this.isMove.x - x) / 5;
      const animationStepY = (this.isMove.y - y) / 5;
      const el = this.isMove;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          if (i == 4) {
            el.x = x;
            el.y = y;
            this.renderStepsGame();
          } else {
            el.x -= animationStepX;
            el.y -= animationStepY;
            this.renderStepsGame(false);
          }
        }, 50 * i);
      }
      // this.isMove.x = x;
      // this.isMove.y = y;
      this.isMove = null;
      //this.renderStepsGame();
      this.steps += 1;
      this.renderAmountSteps();

      return;
    }

    this.isMove.x = this.isMove['oldX'];
    this.isMove.y = this.isMove['oldY'];
    this.isMove = null;
    this.renderStepsGame();
  }

  moveMouse(x, y) {
    if (!this.isMove || !this.arrComponentsInfo.length || x - this.mouseX == 0 || y - this.mouseY == 0) {
      return;
    }

    if (x > this.canvas.width || x < 0 || y < 0 || y > this.canvas.height) {
      return;
    }

    const moveX = x - this.mouseX;
    const moveY = y - this.mouseY;

    if (this.isMove.x + moveX > 0 && this.isMove.x + this.isMove.width + moveX < this.canvas.width) {
      this.isMove.x += moveX;
    }
    if (this.isMove.y + moveY > 0 && this.isMove.y + this.isMove.height + moveY < this.canvas.height) {
      this.isMove.y += moveY;
    }

    this.renderStepsGame(false);

    this.mouseX = x;
    this.mouseY = y;
  }

  setMoveEl(x, y) {
    if (!this.arrComponentsInfo.length) {
      return;
    }

    this.mouseX = x;
    this.mouseY = y;
    const emptyEl = this.arrComponentsInfo.find((item) => item.value == '');

    for (let i = 0; i < this.arrComponentsInfo.length; i++) {
      if (
        this.arrComponentsInfo[i].value &&
        this.arrComponentsInfo[i].x <= x &&
        this.arrComponentsInfo[i].x + this.arrComponentsInfo[i].width >= x &&
        this.arrComponentsInfo[i].y + this.arrComponentsInfo[i].height >= y &&
        this.arrComponentsInfo[i].y <= y &&
        ((this.arrComponentsInfo[i].x + this.arrComponentsInfo[i].width == emptyEl.x && this.arrComponentsInfo[i].y == emptyEl.y) ||
          (this.arrComponentsInfo[i].x - this.arrComponentsInfo[i].width == emptyEl.x && this.arrComponentsInfo[i].y == emptyEl.y) ||
          (this.arrComponentsInfo[i].y + this.arrComponentsInfo[i].height == emptyEl.y && this.arrComponentsInfo[i].x == emptyEl.x) ||
          (this.arrComponentsInfo[i].y - this.arrComponentsInfo[i].height == emptyEl.y && this.arrComponentsInfo[i].x == emptyEl.x))
      ) {
        const el = this.arrComponentsInfo[i];
        const arr = this.arrComponentsInfo.filter((item) => {
          if (item.x == el.x && item.y == el.y) {
            return false;
          }

          return true;
        });
        arr.push(el);
        this.arrComponentsInfo = [...arr];
        this.isMove = el;
        this.isMove['oldX'] = this.isMove.x;
        this.isMove['oldY'] = this.isMove.y;
      }
    }
  }

  saveGame() {
    if (!this.arrComponentsInfo.length) {
      return;
    }

    const data = {
      arrComponentsInfo: this.arrComponentsInfo,
      steps: this.steps,
      timerData: timer.getTimerData(),
      board: defaultValueStructure,
      size: defaultValueStructure,
    };
    localStorage.setItem('game', JSON.stringify(data));
  }

  continueGame() {
    let game = localStorage.getItem('game');

    if (!game) {
      return;
    }

    const { arrComponentsInfo, steps, timerData, size } = JSON.parse(game);

    defaultValueStructure = size;
    //changeStructure(element, i);
    createBtnOtherStructure();
    this.steps = steps;
    this.renderAmountSteps();
    this.arrComponentsInfo = arrComponentsInfo;
    this.renderStepsGame();
    timer.continueTimer(timerData.hours, timerData.minutes, timerData.seconds);
  }

  saveResult() {
    let resultsSaved = localStorage.getItem('results');
    let results = resultsSaved ? JSON.parse(resultsSaved) : [];
    const newResult = {
      time: timer.getTimeString(),
      moves: this.steps,
      size: defaultValueStructure,
      score: timer.getTime() / this.steps,
    };
    results.push(newResult);
    results.sort((a, b) => {
      return a.score - b.score;
    });
    const newRes = results.slice(0, 9);
    localStorage.setItem('results', JSON.stringify(newRes));
  }

  // создание холста
  init(defaultValueStructure) {
    this.canvas.width = defaultValueStructure === 7 ? 280 : 300;
    this.canvas.height = defaultValueStructure === 7 ? 280 : 300;
    this.canvasContainer.append(this.canvas);
    this.renderGame(defaultValueStructure);
  }
  // очищщение игровой зоны
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // создание карточек для игры
  renderGame(defaultValueStructure) {
    this.imgWin.classList.remove('active');
    this.arrComponentsInfo = [];
    this.canvas.width = defaultValueStructure === 7 ? 280 : 300;
    this.canvas.height = defaultValueStructure === 7 ? 280 : 300;
    this.steps = 0;
    this.renderAmountSteps();
    this.clear();
    const count = defaultValueStructure * defaultValueStructure;
    let width = this.canvas.width / defaultValueStructure;
    let height = this.canvas.width / defaultValueStructure;
    let x = 0;
    let y = 0;

    for (let i = 1; i <= count; i++) {
      this.createComponent(width, height, '#fff', x, y);
      x += width;
      if (i % defaultValueStructure === 0) {
        y += height;
        x = 0;
      }
    }
  }
  // создание карточек без номеров
  createComponent(width, height, borderColor, x, y) {
    const gradient = this.context.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, '#f60e50');
    gradient.addColorStop(1, '#db5ba1');
    this.context.fillStyle = gradient;
    this.context.fillRect(x, y, width, height);
    this.context.strokeStyle = borderColor;
    this.context.strokeRect(x, y, width, height);
  }
  //отрисовка количества ходов
  renderAmountSteps() {
    this.ElAmountSteps.innerHTML = `${this.steps}`;
  }

  // создание карточек для игры с номерами
  renderGameNumbers(defaultValueStructure) {
    this.imgWin.classList.remove('active');
    this.arrComponentsInfo = [];
    this.steps = 0;
    this.renderAmountSteps();
    this.clear();
    const count = defaultValueStructure * defaultValueStructure - 1;
    let width = this.canvas.width / defaultValueStructure;
    let height = this.canvas.width / defaultValueStructure;
    let x = 0;
    let y = 0;

    const arr = this.getArr(count);
    const shuffleArr = this.shuffle(arr, defaultValueStructure);

    for (let i = 0; i <= shuffleArr.length - 1; i++) {
      if (shuffleArr[i]) {
        this.createComponentWithNum(width, height, x, y, `${shuffleArr[i]}`);
        this.arrComponentsInfo.push({ x: x, y: y, width: width, height: height, value: shuffleArr[i] });
      } else {
        this.arrComponentsInfo.push({ x: x, y: y, width: width, height: height, value: '' });
      }

      x += width;
      if ((i + 1) % defaultValueStructure === 0) {
        y += height;
        x = 0;
      }
    }
  }

  // создание карточек c номерами
  createComponentWithNum(width, height, x, y, number) {
    const gradient = this.context.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, '#f60e50');
    gradient.addColorStop(1, '#db5ba1');
    this.context.fillStyle = gradient;
    this.context.fillRect(x, y, width, height);
    this.context.strokeStyle = '#fff';
    this.context.strokeRect(x, y, width, height);
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#fff';
    this.context.font = '25px Montserrat';
    this.context.fillText(number, x + width / 2, y + width / 2);
  }

  // перетаскивание кубиков, если клик сделан на соседнюю кнопку от пустого кубика (функция принмает параметры элемента по которому сделан клик)
  updateGame(x, y) {
    if (!this.arrComponentsInfo.length) {
      return;
    }
    let clickEl;
    let emptyEl;

    for (let i = 0; i < this.arrComponentsInfo.length; i++) {
      if (
        this.arrComponentsInfo[i].x <= x &&
        this.arrComponentsInfo[i].x + this.arrComponentsInfo[i].width >= x &&
        this.arrComponentsInfo[i].y + this.arrComponentsInfo[i].height >= y &&
        this.arrComponentsInfo[i].y <= y &&
        this.arrComponentsInfo[i].value
      ) {
        clickEl = this.arrComponentsInfo[i];
      }
      if (this.arrComponentsInfo[i].value === '') {
        emptyEl = this.arrComponentsInfo[i];
      }
    }

    if (!clickEl) {
      return;
    }

    //влево
    if (clickEl.x - emptyEl.width === emptyEl.x && clickEl.y === emptyEl.y) {
      this.steps += 1;
      this.renderAmountSteps();
      const x = emptyEl.x;
      emptyEl.x = clickEl.x;
      const animationStep = clickEl.width / 5;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          clickEl.x -= animationStep;
          this.renderStepsGame();
        }, 50 * i);
      }
      return;
    }

    //вправо
    if (clickEl.x + emptyEl.width === emptyEl.x && clickEl.y === emptyEl.y) {
      this.steps += 1;
      this.renderAmountSteps();
      const x = emptyEl.x;
      emptyEl.x = clickEl.x;
      const animationStep = clickEl.width / 5;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          clickEl.x += animationStep;
          this.renderStepsGame();
        }, 50 * i);
      }
      return;
    }

    //внизу
    if (clickEl.x === emptyEl.x && clickEl.y - emptyEl.y === emptyEl.height) {
      this.steps += 1;
      this.renderAmountSteps();
      const y = emptyEl.y;
      emptyEl.y = clickEl.y;
      const animationStep = clickEl.width / 5;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          clickEl.y -= animationStep;
          this.renderStepsGame();
        }, 50 * i);
      }
      return;
    }

    //вверху

    if (clickEl.x === emptyEl.x && clickEl.y + emptyEl.height === emptyEl.y) {
      this.steps += 1;
      this.renderAmountSteps();
      const y = emptyEl.y;
      emptyEl.y = clickEl.y;
      const animationStep = clickEl.width / 5;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          clickEl.y += animationStep;
          this.renderStepsGame(i == 4);
        }, 50 * i);
      }
      return;
    }
  }

  //перерисовка холста при степах
  renderStepsGame(play = true) {
    if (play) {
      this.player.pause();
      this.player.currentTime = 0;
      this.player.play();
    }

    this.clear();
    this.arrComponentsInfo.forEach((element) => {
      if (element.value) {
        this.createComponentWithNum(element.width, element.height, element.x, element.y, element.value);
      }
    });
    if (play) {
      this.winHandler();
    }
  }

  winHandler() {
    const isWin = this.checkWin();

    if (isWin) {
      this.saveResult();
      this.arrComponentsInfo = [];
      this.imgWin.classList.add('active');
      this.openModal(this.steps); //modal Winner
    }
  }

  checkWin() {
    const valueStructure = Math.sqrt(this.arrComponentsInfo.length);
    for (let i = 0; i < this.arrComponentsInfo.length; i++) {
      const item = this.arrComponentsInfo[i];
      if (!item.value) {
        continue;
      }
      const row = Math.floor((item.value - 1) / valueStructure);
      const y = row * item.height;
      const col = item.value - 1 - row * valueStructure;
      const x = col * item.width;
      if (item.x != x || item.y != y) {
        return false;
      }
    }

    return true;
  }

  getArr(count) {
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }

    return arr;
  }

  shuffle(arr, defaultValue) {
    const newArr = [...arr];
    newArr.push(0);
    for (let i = 0; i < 2000; i++) {
      let rand = Math.ceil(Math.random() * 4);
      const idx = newArr.indexOf(0);
      //сюда сохраняется число перед заменой на ноль
      let bufferR = newArr[idx + 1];
      let bufferL = newArr[idx - 1];
      let bufferD = newArr[idx + defaultValue];
      let bufferU = newArr[idx - defaultValue];

      switch (rand) {
        case 1:
          if (idx % defaultValue === 0) {
            newArr[idx] = bufferR;
            newArr[idx + 1] = 0;
          } else {
            newArr[idx - 1] = 0;
            newArr[idx] = bufferL;
          }
          break;
        case 2:
          if (idx < defaultValue) {
            newArr[idx] = bufferD;
            newArr[idx + defaultValue] = 0;
          } else {
            newArr[idx] = bufferU;
            newArr[idx - defaultValue] = 0;
          }
          break;
        case 3:
          if ((idx + 1) % defaultValue === 0) {
            newArr[idx - 1] = 0;
            newArr[idx] = bufferL;
          } else {
            newArr[idx] = bufferR;
            newArr[idx + 1] = 0;
          }
          break;
        case 4:
          if (idx >= defaultValue * defaultValue - defaultValue) {
            newArr[idx] = bufferU;
            newArr[idx - defaultValue] = 0;
          } else {
            newArr[idx] = bufferD;
            newArr[idx + defaultValue] = 0;
          }
          break;
      }
    }
    //удаляем ноль из массива и заменяем его пустой строкой
    newArr[newArr.indexOf(0)] = '';
    return newArr;
  }
}

const game = new Game(gameAmountSteps, openModalWinner, closeModalWinner);
let defaultValueStructure = 4;
game.init(defaultValueStructure);

// флаг начала игры
let gameStarted = false;
// перемешивание карт и начало игры
function startGame() {
  timer.startTimer();
  game.renderGameNumbers(defaultValueStructure);
  gameStarted = true;
}

function saveGame() {
  game.saveGame();
}

function continueSavedGame() {
  gameStarted = true;
  game.continueGame();
}

function showResults() {
  openResModal();
}

const gameWrapBtn = document.getElementById('game-wrap-btn');
// создание кнопок для изменения структуры
function createBtnOtherStructure() {
  gameWrapBtn.innerHTML = '';
  for (let i = 3; i <= 8; i++) {
    const btnOtherStructure = document.createElement('button');
    btnOtherStructure.classList.add('game__other-structure');
    if (i === defaultValueStructure) {
      btnOtherStructure.classList.add('game__other-structure--active');
    }
    const content = `<span class="game__other-structure-item">${i}</span>
    <span class="game__other-structure-item">x</span>
    <span class="game__other-structure-item">${i}</span>`;
    btnOtherStructure.innerHTML = content;
    btnOtherStructure.addEventListener('click', function (e) {
      changeStructure(e.currentTarget, i);
    });

    gameWrapBtn.append(btnOtherStructure);
  }
}

const gameStructureAmount = document.getElementById('game-structure-amount');
//создание надписи выбранной структуры
function createStructureItem() {
  const content = `<span class="game__structure-item">${defaultValueStructure}</span>
<span class="game__structure-item">x</span>
<span class="game__structure-item">${defaultValueStructure}</span>`;
  gameStructureAmount.innerHTML = content;
  return gameStructureAmount;
}

function changeStructure(element, i) {
  timer.clearTimer();
  if (defaultValueStructure === i) {
    return;
  }
  defaultValueStructure = i;
  createStructureItem();
  const btnStructureActive = gameWrapBtn.querySelector('.game__other-structure.game__other-structure--active');
  if (btnStructureActive) {
    btnStructureActive.classList.remove('game__other-structure--active');
  }
  element.classList.add('game__other-structure--active');

  game.renderGame(defaultValueStructure);
}
createStructureItem();
createBtnOtherStructure();
