/**
 * Created by Origin on 2016/12/23.
 */
// let dpr;
// switch (devicePixelRatio) {
//   case 3:
//     dpr = 3;
//     break;
//   case 1:
//     dpr = 1;
//     break;
//   default:
//     dpr = 2
// }
// const scale = 1 / dpr;
// document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
// document.documentElement.setAttribute("data-dpr", dpr);
