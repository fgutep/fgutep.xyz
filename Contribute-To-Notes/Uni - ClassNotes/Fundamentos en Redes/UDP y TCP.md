[[Fundamentos en Redes/Fundamentos en Redes]]
## *Multiplexación y demultiplexación no orientada a conexión (UDP)* #UDP
El cliente otorga a cada comunicación de aplicación de capa 4 un número de puerto conocido en el rango de 0 - 65535. El servidor siempre contesta a requests usando el mismo puerto (cómo detallados en los RFC de cada Transfer Protocol).

¿Qué pasaría si al servidor llegan dos requests diferentes con un mismo número de socket?

→ Pasaría a diferenciar qué paquete va para cada cliente por su dirección IP.

|Ventajas|Desventajas|
|---|---|
|Velocidad de transferencia|Pérdida de paquetes/información|
|Tiempo real (e.g. Streaming)|Perdida de Información en linea|
|||

UDP no toma mensajes de confirmación del cliente. No tiene (ni le importa) el tamaño de Frama,

### Check sum UDP:

**El servidor:**
1. Elige 3 palabras de 16 bits.
2. Las suma entre sí.
3. Transmite el complemento A1 al cliente.
4. Envía las palabras en el encabezado de cada paquete.

**El cliente:**
1. Almacena el complemento A1 transmitido por el servidor.
2. Suma cada palabra en los encabezados de los paquetes.
3. Suma el resultado de la sumatoria de las palabra con el complemento A1 almacenado previamente.
4. (if sumres + A1_Compliment) ≠ (1111111111111111): {todo_good = False}; else: {todo_good = True}. Si la suma con el complemento es diferente a sólo valores 1’s se jodio todo.

## TCP #TCP
Se autorregula basada en la demanda (trafico) de la red para enviar el contenido en paquetes más pequeños. ****************************************Desde el primer instante requiere confirmación del cliente, lo cual implica:****************************************

- Mayor uso de RAM en el lado del servidor (para contadores y replica de paquetes).
- RTT (Round Trip Time) mayor, para enviar un paquete: solicitud_cliente → envio_servidor→ confirmación_cliente → servidor: siguiente_paquete.
### TCP utiliza todos los elementos de la transmisión confiable: 
- Detección de error 
- Retransmisiones 
- ACKs acumulativos 
- Temporizadores -
- Números de secuencia para los paquetes de datos y para los ACK