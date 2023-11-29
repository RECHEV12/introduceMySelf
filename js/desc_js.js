const e_emailIcon = document.querySelector(".img-box>img:nth-child(1)");
e_emailIcon.addEventListener("click", () => {
    let content = "hdw1202@naver.com";

    navigator.clipboard.writeText(content)
        .then(() => {
            alert("이메일이 클립보드에 복사되었습니다.")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
})
