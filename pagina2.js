document.addEventListener('DOMContentLoaded', function () {
    // Aquí va el contenedor principal donde se agregarán todos los elementos - Explicación
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

    // Aquí va la sección izquierda, que contiene la información de la empresa - Explicación
    const izquierda = document.createElement('div');
    izquierda.classList.add('izquierda');
    container.appendChild(izquierda);

    // Aquí va el título "Información" - Explicación
    const h3 = document.createElement('h3');
    h3.textContent = 'Información';
    izquierda.appendChild(h3);

    // Aquí va el nombre de la empresa - Explicación
    const p1 = document.createElement('p');
    p1.textContent = 'Empresa Salchichón Sanjeda';
    izquierda.appendChild(p1);

    // Aquí va el número de teléfono - Explicación
    const p2 = document.createElement('p');
    p2.textContent = '312 229 4327';
    izquierda.appendChild(p2);

    // Aquí va el correo electrónico de la empresa - Explicación
    const p3 = document.createElement('p');
    p3.textContent = 'sanchichonsanjeda@email.com';
    izquierda.appendChild(p3);

    // Aquí va la sección derecha, donde se encuentra el formulario de inicio de sesión - Explicación
    const derecha = document.createElement('div');
    derecha.classList.add('derecha');
    container.appendChild(derecha);

    // Aquí va el logo de la empresa - Explicación
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    logoDiv.style.cssText = 'width: 50px; height: 50px; border-radius: 50%; overflow: hidden; border: 2px solid white; display: flex; justify-content: center; align-items: center; margin-bottom: 15px; margin-left: auto; margin-right: auto;';
    const imgLogo = document.createElement('img');
    imgLogo.src = '1S.png';  // Aquí va la ruta del logo - Explicación
    imgLogo.alt = 'Logo';  // Aquí va la descripción alternativa del logo - Explicación
    imgLogo.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    logoDiv.appendChild(imgLogo);
    derecha.appendChild(logoDiv);

    // Aquí va el título "Iniciar Sesión" - Explicación
    const h2 = document.createElement('h2');
    h2.textContent = 'Iniciar Sesión';
    derecha.appendChild(h2);

    // Aquí va el formulario para ingresar los datos del usuario - Explicación
    const form = document.createElement('form');
    form.action = '#';  // Aquí va la acción que ejecutará el formulario (vacío por ahora) - Explicación
    form.method = 'POST';  // Aquí va el método de envío de los datos del formulario - Explicación
    derecha.appendChild(form);

    // Aquí va el campo para ingresar el correo electrónico - Explicación
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Correo electrónico';
    inputEmail.required = true;  // Este campo es obligatorio - Explicación
    form.appendChild(inputEmail);

    // Aquí va el campo para ingresar la contraseña - Explicación
    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = 'Contraseña';
    inputPassword.required = true;  // Este campo es obligatorio - Explicación
    form.appendChild(inputPassword);

    // Aquí va el botón para enviar el formulario - Explicación
    const button = document.createElement('button');
    button.type = 'submit';  // El botón envía el formulario - Explicación
    button.textContent = 'Iniciar sesión';
    form.appendChild(button);

    // Aquí va el enlace para ir a la página de registro si no tiene cuenta - Explicación
    const link = document.createElement('a');
    link.href = 'index8nejec.html';  // Aquí va el enlace de la página de registro - Explicación
    link.textContent = '¿No tienes cuenta? Registrarse';
    derecha.appendChild(link);
});
