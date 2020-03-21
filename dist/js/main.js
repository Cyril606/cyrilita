$(document).ready(function () {

  // положить вары
  var calc = $('.calculator');
  var calcDisplay = calc.find('.calculator__display');
  var calcKeys = calc.find('.calculator__key');
  var calcButton = calc.find('.calculator__button');
  var calcClear = calc.find('.calculator__clear');
  var calcEqual = calc.find('.calculator__key--equal');
  var calcPower = calc.find('.calculator__power');
  var calcSpace = calc.find('.calculator__backspace');

  // кал ключи
  calcKeys.each(function () {
      var current = $(this).attr('value');
      $(this).text(current);
  });

  // вывод цыфар
  calcButton.on('click', function () {
      calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
  });

  // чистить говно
  calcClear.on('click', function () {
      calcDisplay.val('');
  });

  // лук инто ма айз первертед витч
  calcEqual.on('click', function () {
      calcDisplay.val( eval( calcDisplay.val() ) );
  });

  // вкл/выкл
  calcPower.on('click', function () {
      calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
  });

  // удолить
  calcSpace.on('click', function () {
      calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
  });

});