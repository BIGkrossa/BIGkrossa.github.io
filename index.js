function send_dataa(text){
    const message = 'Привет из JavaScript!';
    text = JSON.stringify(text)

    const url = `https://api.telegram.org/bot7401647929:AAFjoJh_BxvDGK0McXTWUu7obokBXXvYc4g/sendMessage`;

    const data = {
        chat_id: -1002498158929,
        text: 'webapp'+text
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
    send_dataa({sigma: 1, porosenok: 2})
});