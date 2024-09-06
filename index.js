function send_dataa(){
    const message = 'Привет из JavaScript!';

    const url = `https://api.telegram.org/bot7401647929:AAFjoJh_BxvDGK0McXTWUu7obokBXXvYc4g/sendMessage`;

    const data = {
        chat_id: -4561216144,
        text: 'сигма скуф'
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Успех:', result);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}

btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    send_dataa()
});