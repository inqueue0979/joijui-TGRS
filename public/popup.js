document.getElementById('submitBtn').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const from_column = document.getElementById('from_column').value;
    const reason = document.getElementById('reason').value;
    const resultMessage = document.getElementById('resultMessage');

    const data = {
        link: link,
        from_column: "anonymous",
        reason: reason,
        frequency: 1
    };

    fetch('http://inqueue0979.iptime.org:25570/sites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            resultMessage.textContent = '데이터가 성공적으로 전송되었습니다.';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = '데이터 전송에 실패했습니다.';
            resultMessage.style.color = 'red';
        }
        resultMessage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        resultMessage.textContent = '서버와의 통신 중 오류가 발생했습니다.';
        resultMessage.style.color = 'red';
        resultMessage.style.display = 'block';
    });
});