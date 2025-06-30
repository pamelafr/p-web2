const user = document.getElementById('user')
const password = document.getElementById('pwd')
const button = document.getElementById('login')

const formData = new FormData()

async function login(event){
    event.preventDefault()
    const userValue = user.value
    const passwordValue = password.value
    formData.append("username",userValue )
    formData.append("password",passwordValue )

    const response = await fetch('https://mauricio.inf.br/p6/api/auth/', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    const token = data.access_token 
    const expires = data.expires_at
    console.log("Este é o token:" + token);
    console.log("Este é o tempo para expirar:" + expires)

    console.log(data) 

}


button.addEventListener('click', login)