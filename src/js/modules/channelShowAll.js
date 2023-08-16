function channelsShowAll() {
  let icon = document.querySelector('.channels__icon');
  let buttons = document.querySelectorAll('.channels__btn');
  let menuContents = document.querySelectorAll('.channels__wrap');

  // По умолчанию делаем активной первую кнопку и показываем соответствующий контент
  buttons[0].classList.add('active');
  menuContents[0].style.display = 'grid';

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      let targetId = this.getAttribute('data-target');
      let content = document.getElementById(targetId);

      // Скрываем все блоки, кроме выбранного
      menuContents.forEach((menu) => {
        if (menu.id === targetId) {
          menu.style.display = 'grid';
        } else {
          menu.style.display = 'none';
        }
      });

      // Убираем класс 'active' у всех кнопок и добавляем к текущей
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  icon.addEventListener('click', function () {
    icon.classList.toggle('active');

    if (icon.classList.contains('active')) {
      icon.textContent = 'Скрыть все';
      menuContents.forEach((menu) => {
        menu.style.display = 'grid';
      });
    } else {
      // Класс 'active' отсутствует у элемента
      icon.textContent = 'Показать все';
      menuContents.forEach((menu, index) => {
        if (!buttons[index].classList.contains('active')) {
          menu.style.display = 'none';
        }
      });
    }
  });
}

export { channelsShowAll };

// function channelsShowAll() {
//   let icon = document.querySelector('.channels__icon');
//   let buttons = document.querySelectorAll('.channels__btn');
//   let menuContents = document.getElementById('channels-container');

//   buttons.forEach((button) => {
//     button.addEventListener('click', function () {
//       let targetId = this.getAttribute('data-target');
//       let content = document.getElementById(targetId);

//       // Скрываем все блоки, кроме выбранного
//       menuContents.querySelectorAll('.channels__wrap').forEach((menu) => {
//         if (menu.id === targetId) {
//           menu.style.display = 'grid';
//         } else {
//           menu.style.display = 'none';
//         }
//       });

//       // Убираем класс 'active' у всех кнопок и добавляем к текущей
//       buttons.forEach((btn) => {
//         btn.classList.remove('active');
//       });
//       button.classList.add('active');
//     });
//   });

//   icon.addEventListener('click', function () {
//     icon.classList.toggle('active');

//     if (icon.classList.contains('active')) {
//       icon.textContent = 'Скрыть все';
//       menuContents.querySelectorAll('.channels__wrap').forEach((menu) => {
//         menu.style.display = 'grid';
//         menu.style.flexWrap = 'wrap'; // Добавляем flex-wrap: wrap;
//       });
//     } else {
//       // Класс 'active' отсутствует у элемента
//       icon.textContent = 'Показать все';
//       menuContents.querySelectorAll('.channels__wrap').forEach((menu) => {
//         if (!buttons[0].classList.contains('active') && menu.id !== buttons[0].getAttribute('data-target')) {
//           menu.style.display = 'none';
//         }
//         menu.style.flexWrap = ''; // Сбрасываем flex-wrap
//       });
//     }
//   });
// }

// export { channelsShowAll };
