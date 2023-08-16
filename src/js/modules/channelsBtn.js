function channelsBtn() {
  let btns = document.getElementsByClassName('channels__btn');
  let activeBtn = btns[0]; // Первый элемент по умолчанию активен
  activeBtn.classList.add('channels__btn_active');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      // Проверяем, не кликаем ли на уже активный элемент
      if (activeBtn !== this) {
        activeBtn.classList.remove('channels__btn_active'); // Удаляем active у предыдущего активного элемента
        this.classList.add('channels__btn_active'); // Добавляем active к текущему элементу
        activeBtn = this; // Обновляем текущий активный элемент
      }
    });
  }
}

export { channelsBtn };
