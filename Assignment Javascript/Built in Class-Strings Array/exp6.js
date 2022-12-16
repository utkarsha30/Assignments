let text = ' With great power comes great responsibility. ';
const str = text.split(' ');
str[6] = 'electricity bill';
console.log(str);
console.log(str.indexOf('great'));
console.log(text.substring(0,10));
console.log(text.trim());
console.log(text.toUpperCase());