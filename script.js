// 현재 월, 연도 초기화
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;

// 달력 만드는 함수

function createCalendar(year, month){
  const today = new Date();
  // 달력의 첫째날
  const firstDay = new Date(year, month - 1, 1);
  // 달력의 마지막날
  const lastDay = new Date(year, month, 0);
  // 달력 한줄씩 만들기
  let html = "<tr>";

  //달력 헤더에 현재 월과 연도 표시
  let CalendarHeader = document.getElementById('current');
  CalendarHeader.innerText = `${year}년 ${month}월`

  //첫주 빈칸 채우기
  for(let i = 0; i < firstDay.getDay(); i++){
    html += "<td></td>";
  }
  //날짜 채우기
  for(let day = 1; day <= lastDay.getDate(); day++){
    const currentDay = new Date(year, month -1, day).getDay();
    html += `<td data-day="${day}">${day}</td>`;
    if(currentDay === 6){
      html += "</tr><tr>";
    }
  }
  // 마지막 주 빈 칸 채우기
  const lastDayOfWeek = lastDay.getDay();
  for (let i = lastDayOfWeek + 1; i <= 6; i++) {
    html += "<td></td>";
  }
  html += "</tr>";
  document.getElementById("calendarBody").innerHTML = html;

  let selectedDate = document.querySelectorAll('td');

  selectedDate.forEach(function(selected){
    selected.addEventListener('click', function(){
      console.log(selected.getAttribute('data-day'));
      let clickedDate = document.getElementById('clickedDate');
      clickedDate.innerHTML = `${currentYear}년 ${currentMonth}월 ${selected.getAttribute('data-day')}일`;
      if(!selected.getAttribute('data-day')){
        clickedDate.innerHTML = '';
      }
  })
});
}

//이전달 다음달 함수
function changeMonth(offset){
  currentMonth += offset;
  if(currentMonth > 12){
    currentMonth = 1;
    currentYear++;
  }else if(currentMonth <1){
    currentMonth = 12;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
}

createCalendar(currentYear, currentMonth);
