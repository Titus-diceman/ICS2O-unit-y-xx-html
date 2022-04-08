//
// Created by: Titus Diceman
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function converts temperture.
 */
function calculate () {
  // input
  const Fahrenheit = parseFloat(document.getElementById('Fahrenheit').value)

  // process
  
  const volume = (Fahrenheit - 32) * 5/9

  // output
  document.getElementById('volume').innerHTML = 'Celsius is: ' + volume.toFixed(0) + '℃'
}
