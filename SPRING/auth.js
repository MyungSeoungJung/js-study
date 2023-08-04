function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 인증 토큰이 없으면 로그인 페이지로 튕김
(() => {
const token = getCookie("token")
if(!token){
  // 페이지 이동시키는 window.locatin객체의 속성
window.location.href = "/login.html"
}

})();