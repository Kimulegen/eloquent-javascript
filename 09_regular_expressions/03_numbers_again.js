/*
   * Write and expression that matches only JavaScripot=style numbers, It must
   * support an optional minus *or* plus sign in front of the number, the decimal
   * dot, and exponent notation--`5e-3`or `1E10`--again with an optional sign in front
   * of the exponent. Also note that it is not necessary for there to be digits in
   * front of or after the dot, but the number cannot be a dot alone. Tha is, `.5` and
   * `5.` are vbalid JavaScript numbers, but a lone dot *isn't*
*/

const re = /^[+\-](\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/
