//const url = 'http://localhost:5000/api'
const url = 'https://backend142-o98d.onrender.com/api/';

async function sendRequest(endPoint, method, data) {
    try {
        const response = await fetch(url + endPoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : null
        });

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }

        // Retornar la respuesta en formato JSON
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
}