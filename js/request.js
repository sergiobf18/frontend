//const url = 'http://localhost:5000/api'
const baseUrl = 'https://backend142-o98d.onrender.com/api/';

async function sendRequest(endPoint, method, data) {
    // Eliminar cualquier barra inicial del endpoint para evitar duplicados
    const finalUrl = baseUrl + endPoint.replace(/^\/+/, '');
    
    try {
        const response = await fetch(finalUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : null
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
}
