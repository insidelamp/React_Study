const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`); // [aa=xx ; user_id =aaa; abbb=ssss;]  이 상태라면 [aa=xx] 와 [user_id =aaa] 2개로 짤라짐
  // 위 상태는 [aa=xx ; user_id =aaa; abbb=ssss;] 여기에서 세미클론뒤에 붙은 use_id 를 가져오는 줄이며
  //값은 [aaa; abbb=ssss;]  이다
  // 만약 let b = part.pop() 일경우 b의 값은 [aaa; abbb=ssss;] 이다
  if (parts.length === 2) {
    return parts.pop().split(";").shift();

    // pop 은 배열의 마지막 요소를 떼어오는것으로 현재 상태는 aaa; abbb=ssss;
    // split을 사용해서 ; 을 사용해준다면 aaa 와 abbb=ssss로 나뉨
    //shift 는 맨 첫번째 것을 떼어오는것으로 aaa의 값을 가져올수있음
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date(); //날짜 만드는곳
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000); //만료일날짜 만드는 라인 (저장)* 24(시간)*60(분)*60(초)*1000(밀리초)
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`; //이름, 입력값 , 만료일
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
