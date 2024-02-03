[[Fundamentos en Redes/Fundamentos en Redes]]
## Definiciones técnicas dentro de protocolos del modelo OSI:

**Encabezado:**

La información útil para la distribución de paquetes entre capas. ****************El encabezado (agregado) por una capa pasa a ser un payload para el siguiente.****************

**Payload:**

La carga útil empaquetada. Es cumulativa, es decir es mayor en cuanto avanza entre las capas pues lo headers de estas se agregan al payload de la capa de aplicación.

**Protocol:**
La convención general/reglas para seguir en cuanto la comunicación entre cliente y servidor. Estos establecen una comunicación ordenada. Los protocolos son diferentes entre capas.

|Cliente|Servidor|
|---|---|
|Inicia la comunicación|Responde a la comunicación iniciada|
|(Request)|(Reply)|


## Modelo OSI, capas de internet:

5. Aplicaciones
    
4. Capa transporte TCP/IP
    
3. Capa de Red IP
    
2. Capa de enlace/Distribución (Ethernet/WiFi)
    
1. Capa física (Local).
    

## DNS

**Domain Name System**

El “directorio” que permite tener URLs (Human Readable) asociadas a las direcciones IP de los servidores correspondientes.

Jerarquia local (Cliente → Servidor Final)

→ Cliente local DNS (Dispositivios de capa 2)

→ Servidor DNS Root (Resolución de dominio .org, .edu, .com, etc)

→ Servidor TDL (Top level domain) en específico.

→ Servidor acreditado.

**********************User Datagram Protocol = UDP**********************
UDP53: Socket entre Capa 5 → Capa 4.

## RFC - Descripciones
**Request for comments**
La solicitud de comentarios (RFC, por sus siglas en inglés) es una especificación técnica que se publica de manera pública y abierta para describir todos los protocolos utilizados en Internet. Este proceso permite que expertos y la comunidad en general contribuyan y brinden sus opiniones, sugerencias y mejoras a las especificaciones existentes. Así, se fomenta la transparencia, la colaboración y el desarrollo continuo de los protocolos de Internet, asegurando un estándar de calidad y eficiencia en la comunicación y transferencia de datos en línea.

### En Wireshark la comunicación se ve cómo:
→ Standard Query
	→ Standard Query response

## Servicios Capa 4:
**La capa 4 si es de internet usará o bien TCP o UDP.**
Http usa TCP (Lento, pero se garantiza la entrega del paquete).
— Todo servidor HTTP contesta a requests en el puerto 80.
DNS usa UDP (Rápido, no garantizado).
— Puerto0 DNS es 53.

### Evaluación
→ Ver estructura de requests y replies (mensajes) para HTTP.
(Útil para entender requests GET HEX en WS)
→ (HEX) 47 45 44 → CRLF Carriage return (Cambio de linea)