[[Fundamentos en Redes/Fundamentos en Redes]]
**Caudal = (Throughput) =**  La tasa efectiva de llegada de bits en el receptor.
**********RTT = (Round Trip time) =********** Retraso - Ancho de Banda
## Stop n’Wait (Cómo funciona TCP)
#TCP 
**No transmitir hasta recibir ACK, o dejar de transmitir en TimeOut.**
![[Stop and wait.png]]

No hay pérdida de datos, todos van asegurados pues no se envía el siguiente hasta que el anterior sea confirmado, sin embargo el throughput es pésimo.

[Stop and Wait ARQ - GeeksforGeeks](https://www.geeksforgeeks.org/stop-and-wait-arq/)

## Go Back to N (GBN)
**Pipelining, enviar múltiples paquetes en paralelo, antes de recibir confirmación. Si la confirmación de un paquete no llega, volver a enviar desde ese N (Número) de paquete).**
![[Go bac 2 N.png]]
En esta imagen: Los paquetes 0, 1 de la ventana se envían correctamente. Sin embargo, el paquete 2 se pierde (No hay respuesta), para el momento en el que se _********esperaba********_ la respuesta de ACK del paquete 2, _**********************************ya se han enviado otros 3 paquetes.**********************************_ ************************************************************************************************************************************************************************************************************************En este caso, los paquetes enviados después del dos son ignorados y regresa a enviar el dos y resume de ahí.************************************************************************************************************************************************************************************************************************

[Sliding Window Protocol | Set 2 (Receiver Side) - GeeksforGeeks](https://www.geeksforgeeks.org/sliding-window-protocol-set-2-receiver-side/)
## Selective Repeat (SR)
![[Sliding-Window-Protocol.jpg]]
Sólo se trtransmiten los paquetes o ventanas que se pierden, en lugar de retransmitir desde un punto (Go back to N) o tener que esperar respuesta del cliente para cada paquete (Stop n'wait)