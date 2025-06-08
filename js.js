
$(document).ready(function () {
  function startTyping(text, speed = 120) {
    const $output = $('#typedText');
    const $cursor = $('.cursor');
    $output.text(''); // очистка текста
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        $output.append(text[i]);
        i++;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  }

  // ▶ Запуск по клику
  $('.start-button').on('click', function () {
    $(this).addClass('hidden');
    startTyping("Best Web Dev who likes to code");
  });
});
