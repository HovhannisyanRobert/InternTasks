// 23.// let N = +prompt("Enter Number" , "")
// while(N>0){
//     let digit = N % 10;
//     console.log(digit); 
//     N = Math.floor(N/10)
// };
// 24.
// let N = 12534;
// let N1 = 0;
// let M = 0;
// while (N > 0) {
//     let digit = N % 10;
//     if (digit < 5) {
//         digit = digit * 2;
//         N1 = N1 * 10 + digit
//     } else {
//         M = M * 10 + digit
//     }
//     N = Math.floor(N / 10)
//     console.log(digit);
// };
// console.log('N=' + reversedNum(N1));
// console.log('M=' + reversedNum(M));
// function reversedNum(N1) {
//     return (
//         parseFloat(
//             N1
//                 .toString()
//                 .split('')
//                 .reverse()
//                 .join('')
//         ) * Math.sign(N1)
//     )
// }
// // 72.1
// let y = 0;
// 
// for (let x = 1; x <= 8; x += 0.2) {
//     if (x < 5) {
//         y = 2 * x + 1
//     } else
//         y = (x * x) - 1
// }
// console.log(y);
// 2.
// let y = 0;
// let z;
// for (let x = 1; x <= 12; x += z) {
//     if (x < 3) {
//         y = 5 * x + 2
//     } else if (x <= 10 && x >= 3) {
//         y = (x * x) + x - 1
//     }
//     else {
//         y = 1
//     }
// }
// console.log(y);
3.
// let S = 0;
// let N = 9;
// for (let i = 1; i <= N; i++) {
//     S = S + Math.sin(i)/Math.cos(i);
// }
// console.log(S);
// 92.2
// let n = 1;
// let m = 5;
// let S = 0;
// for (let i = n; i <= m; i++) {
//     S+=i ** i
// }
// console.log(S);
// 3.
// let n = 5;
// let S = 0 ;
// let P = 1;
// for (let i = 1; i <= n; i++) {
//     for (let j=1; j <= i; j++) {
//         P = P*(i+1)*(i+j**2)
//     }
//     S=S+P
// }
// console.log(S);
// 4.
// let x = 5;
// let n = 8
// let S = 0;
function faktorial(num){
    let result = 1
    for (let j = num; j >=2; j--) {
      result = result *j
    }
    return result;
}
// for (let i = 1 ; i <=n; i++){
//    S = S+ ((i**i)*(x**i)/faktorial(i))
// }
// console.log(S);
// 5.
// let n = 2;
// let S = 0;
// let y = 1/faktorial(n);
// for (let k = 1; k <= n; k++) {
//     let z = faktorial(2*(k**2)+1)
//     S= y+((-1)**k)*z
// }
// console.log(S);